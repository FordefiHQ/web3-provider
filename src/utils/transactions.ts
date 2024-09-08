import {
  Hex,
  hexToBigInt,
  InternalRpcError,
  InvalidParamsRpcError,
  isAddress,
  isAddressEqual,
  isHex,
  TransactionRequest,
} from 'viem';
import { ApiClient } from '../api';
import {
  CreateEvmMessageRequest,
  CreateEvmMessageRequestDetails,
  CreateEvmMessageRequestTypeEnum,
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
import { FordefiRpcSchema, RequestArgs } from '../provider/provider.types';
import { AnyEvmTransaction, EvmVault } from '../types';
import { waitFor } from './wait-for';

/**
 * Transforms a value to a Fordefi API valid amount, or throws if it's invalid.
 * Any value (of any type) that can be transformed to a valid non-negative-integer number (without indirect casting) is supported:
 * - String (decimal, hex)
 * - Number
 * - BigInt
 * - undefined - translated to '0' per Fordefi API interface
 */
const toFordefiTransactionNumericValue = (value?: unknown): string => {
  // The spec defines it as optional, but it's required in our API
  if (value === undefined) {
    return '0';
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

const parseTransactionRequestNumericField = (fieldName: string, value: unknown) => {
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
}: Partial<TransactionRequest>): CreateEvmRawTransactionRequestGas => {
  const gasLimit = parseTransactionRequestNumericField('gas', gas);

  if (maxPriorityFeePerGas !== undefined && maxFeePerGas !== undefined) {
    return {
      type: CustomGasRequestTypeEnum.custom,
      gasLimit,
      details: {
        type: DynamicGasRequestTypeEnum.dynamic,
        maxPriorityFeePerGas: parseTransactionRequestNumericField('maxPriorityFeePerGas', maxPriorityFeePerGas),
        maxFeePerGas: parseTransactionRequestNumericField('maxFeePerGas', maxFeePerGas),
      },
    };
  }

  if (gasPrice !== undefined) {
    return {
      type: CustomGasRequestTypeEnum.custom,
      gasLimit,
      details: {
        type: LegacyGasTypeEnum.legacy,
        price: parseTransactionRequestNumericField('gasPrice', gasPrice),
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
  transaction: Partial<TransactionRequest>,
  chain: EvmChain,
  vault: EvmVault,
  pushMode: PushMode,
): CreateEvmTransactionRequest => {
  const { value, from, to, data } = transaction;

  if (from && !isAddressEqual(from, vault.address)) {
    throw new InvalidParamsRpcError(
      new Error('Transaction "from" does not match the address managed by this provider'),
    );
  }

  if (!to || !isAddress(to)) {
    throw new InvalidParamsRpcError(new Error('Transaction "to" is either missing or invalid'));
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
      value: parseTransactionRequestNumericField('value', value),
      to,
      data: data
        ? {
            type: EvmDataRequestHexTypeEnum.hex,
            hexData: data,
          }
        : undefined,
    },
  };
};

export const waitForTransactionState = async <T extends AnyEvmTransaction>(
  { id: transactionId }: T,
  desiredState: EvmTransactionState,
  apiClient: ApiClient,
): Promise<T> => {
  let remainingAttempts = 20;

  while (remainingAttempts > 0) {
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

    remainingAttempts -= 1;
    console.debug(`transaction state is '${transaction.state}', waiting for '${desiredState}'...`);

    await waitFor(1_000);
  }

  throw new InternalRpcError(new Error(`Timeout waiting for transaction status to change to '${desiredState}'`));
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
