import { Hex, hexToBigInt, InternalRpcError, InvalidParamsRpcError, isAddress, isAddressEqual, isHex } from 'viem';
import { ApiClient } from '../api';
import {
  CreateEvmMessageRequest,
  CreateEvmMessageRequestDetails,
  CreateEvmMessageRequestTypeEnum,
  CreateEvmRawTransactionRequest,
  CreateEvmRawTransactionRequestGas,
  CreateEvmRawTransactionRequestTypeEnum,
  CreateEvmTransactionRequest,
  CreateEvmTransactionRequestTypeEnum,
  CustomGasRequestTypeEnum,
  DynamicGasRequestTypeEnum,
  EvmChain,
  EvmDataRequestHexTypeEnum,
  EvmTransactionState,
  GasPriorityLevelRequest,
  GasPriorityRequestTypeEnum,
  LegacyGasTypeEnum,
  PushMode,
  SignerType,
} from '../openapi';
import { FordefiRpcSchema, FordefiWeb3TransactionRequest, RequestArgs } from '../provider/provider.types';
import { AnyEvmTx, CreateEvmRawTxRequest, EvmVault } from '../types';
import { Defined } from '../types/type-utils';
import { renderTimeDuration } from './time';
import { waitFor } from './wait-for';

/**
 * Transforms a value to a Fordefi API valid amount, or throws if it's invalid.
 * Any value (of any type) that can be transformed to a valid non-negative-integer number (without indirect casting) is supported:
 * - String (decimal, hex)
 * - Number
 * - BigInt
 */
const toFordefiTransactionNumericValue = <T>(value: Defined<T>): string => {
  if (value === undefined) {
    throw new Error('value cannot be undefined');
  }

  if (typeof value === 'string') {
    if (value.trim() === '') {
      throw new Error('value cannot be an empty string');
    }

    if (value.startsWith('-')) {
      throw new Error('value provided as a string cannot be negative');
    }

    if (isHex(value, { strict: true })) {
      return hexToBigInt(value).toString();
    }

    if (value.match(/^\d+$/)) {
      return value;
    }

    throw new Error('value provided as a string must be a valid decimal or hex string');
  }

  if (typeof value === 'number') {
    if (isNaN(value)) {
      throw new Error('value is NaN');
    }

    if (!Number.isSafeInteger(value)) {
      throw new Error('value of type number is not a safe integer, use a bigint instead');
    }

    if (value < 0) {
      throw new Error('value must be a non-negative number');
    }

    return BigInt(value).toString();
  }

  if (typeof value === 'bigint') {
    if (value < 0) {
      throw new Error('value must be a non-negative number');
    }

    return value.toString();
  }

  throw new Error('value must be a valid number');
};

const parseTransactionRequestValueField = (value: unknown) => {
  // The spec defines it as optional, but it's required in our API
  if (value === undefined) {
    return '0';
  }

  try {
    return toFordefiTransactionNumericValue(value);
  } catch (parseError: any) {
    throw new InvalidParamsRpcError(new Error(`invalid "value": ${parseError.message}`));
  }
};

const parseTransactionRequestGasField = <T>(fieldName: string, value: Defined<T>) => {
  try {
    return toFordefiTransactionNumericValue(value);
  } catch (parseError: any) {
    throw new InvalidParamsRpcError(new Error(`invalid ${fieldName}: ${parseError.message}`));
  }
};

export const buildSignTransactionRequest = (
  vaultId: string,
  chainId: number,
  messageType: CreateEvmMessageRequestDetails['type'],
  rawData: string,
): CreateEvmMessageRequest => ({
  type: CreateEvmMessageRequestTypeEnum.evmMessage,
  signerType: SignerType.apiSigner,
  vaultId,
  details: {
    type: messageType,
    chain: chainId,
    rawData,
  },
});

const toFordefiEvmGas = ({
  maxPriorityFeePerGas,
  maxFeePerGas,
  gasPrice,
  gas,
}: Partial<FordefiWeb3TransactionRequest>): CreateEvmRawTransactionRequestGas => {
  const gasLimit = gas !== undefined && gas !== null ? parseTransactionRequestGasField('gas', gas) : undefined;

  if (maxPriorityFeePerGas !== undefined && maxFeePerGas !== undefined) {
    return {
      type: CustomGasRequestTypeEnum.custom,
      gasLimit,
      details: {
        type: DynamicGasRequestTypeEnum.dynamic,
        maxPriorityFeePerGas: parseTransactionRequestGasField('maxPriorityFeePerGas', maxPriorityFeePerGas),
        maxFeePerGas: parseTransactionRequestGasField('maxFeePerGas', maxFeePerGas),
      },
    };
  }

  if (gasPrice !== undefined) {
    return {
      type: CustomGasRequestTypeEnum.custom,
      gasLimit,
      details: {
        type: LegacyGasTypeEnum.legacy,
        price: parseTransactionRequestGasField('gasPrice', gasPrice),
      },
    };
  }

  return {
    type: GasPriorityRequestTypeEnum.priority,
    gasLimit,
    priorityLevel: GasPriorityLevelRequest.medium,
  };
};

export const buildEvmRawTransactionRequest = (
  transaction: Partial<FordefiWeb3TransactionRequest>,
  chain: EvmChain,
  vault: EvmVault,
  pushMode: PushMode,
): CreateEvmRawTxRequest => {
  const { value, from, to, data } = transaction;

  if (from && !isAddressEqual(from, vault.address)) {
    throw new InvalidParamsRpcError(
      new Error('Transaction "from" does not match the address managed by this provider'),
    );
  }

  if (to && !isAddress(to)) {
    throw new InvalidParamsRpcError(new Error('Transaction "to" is not a valid address'));
  }

  return {
    type: CreateEvmTransactionRequestTypeEnum.evmTransaction,
    vaultId: vault.id,
    signerType: SignerType.apiSigner,
    details: {
      type: CreateEvmRawTransactionRequestTypeEnum.evmRawTransaction,
      gas: toFordefiEvmGas(transaction),
      skipPrediction: true,
      pushMode,
      chain: chain.chainId,
      value: parseTransactionRequestValueField(value),
      to: to ?? undefined,
      data: data
        ? {
            type: EvmDataRequestHexTypeEnum.hex,
            hexData: data,
          }
        : undefined,
    },
  };
};

interface WaitForTransactionStateParams<T extends AnyEvmTx> {
  transaction: T;
  desiredState: EvmTransactionState;
  apiClient: ApiClient;
  timeoutDurationMs: number;
  pollingIntervalMs: number;
}

export const waitForTransactionState = async <T extends AnyEvmTx>({
  transaction,
  desiredState,
  apiClient,
  timeoutDurationMs,
  pollingIntervalMs,
}: WaitForTransactionStateParams<T>): Promise<T> => {
  console.debug(
    `waiting for transaction state change to '${desiredState}' with timeout of ${renderTimeDuration(timeoutDurationMs)}`,
  );

  let attemptStartTimeMs = Date.now();
  const timeoutTimeMs = attemptStartTimeMs + timeoutDurationMs;
  const { id: transactionId } = transaction;

  while ((attemptStartTimeMs = Date.now()) < timeoutTimeMs) {
    const transaction = (await apiClient.transactions.getTransactionApiV1TransactionsIdGet({
      id: transactionId,
    })) as T;

    if (isErrorState(transaction.state)) {
      throw new InternalRpcError(new Error(`Transaction failed with state '${transaction.state}'`));
    }

    if (didStateAlreadyOccur(transaction.state, desiredState)) {
      console.debug(
        `transaction reached desired state '${desiredState}'${desiredState !== transaction.state ? ` and is now '${transaction.state}'` : ''}`,
      );
      return transaction as T;
    }

    console.debug(
      `[${new Date().toISOString()}] transaction state is '${transaction.state}', waiting for '${desiredState}'...`,
    );

    // take into account the api call latency
    const timeSinceAttemptStartMs = Date.now() - attemptStartTimeMs;
    const remainingWaitTimeMs = pollingIntervalMs - timeSinceAttemptStartMs;

    if (remainingWaitTimeMs > 0) {
      await waitFor(remainingWaitTimeMs);
    }
  }

  throw new InternalRpcError(new Error(`Timeout while waiting for transaction status to change to '${desiredState}'`));
};

/**
 * Some legacy implementations pass params in reverse order, this returns them consistently.
 */
export const parseTypedDataParams = (
  params: RequestArgs<
    FordefiRpcSchema,
    'eth_signTypedData' | 'eth_signTypedData_v3' | 'eth_signTypedData_v4'
  >['params'],
): { typedData: string; fromAddress: Hex } => {
  const [_maybeFromAddress, _maybeTypedData] = params;

  const [fromAddress, _typedData] = isAddress(_maybeFromAddress)
    ? ([_maybeFromAddress, _maybeTypedData] satisfies typeof params)
    : ([_maybeTypedData, _maybeFromAddress] as unknown as typeof params);
  const typedData = typeof _typedData === 'string' ? _typedData : JSON.stringify(_typedData);

  return { typedData, fromAddress };
};

const orderedTransactionStates: EvmTransactionState[] = [
  EvmTransactionState.waitingForApproval,
  EvmTransactionState.approved,
  EvmTransactionState.signed,
  EvmTransactionState.queued,
  EvmTransactionState.pushedToBlockchain,
  EvmTransactionState.stuck,
  EvmTransactionState.mined,
  EvmTransactionState.completed,
];
const errorTransactionStates: EvmTransactionState[] = [
  EvmTransactionState.errorSigning,
  EvmTransactionState.errorPushingToBlockchain,
  EvmTransactionState.aborted,
  EvmTransactionState.stuck,
  EvmTransactionState.cancelled,
];

const didStateAlreadyOccur = (currentState: EvmTransactionState, desiredState: EvmTransactionState): boolean =>
  orderedTransactionStates.indexOf(currentState) >= orderedTransactionStates.indexOf(desiredState);

const isErrorState = (state: EvmTransactionState) => errorTransactionStates.includes(state);
