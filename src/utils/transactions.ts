import {
  Address,
  Hex,
  InternalRpcError,
  InvalidParamsRpcError,
  isAddress,
  isAddressEqual,
  TransactionRequest,
  TypedDataDefinition,
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
import { AnyEvmTransaction, EvmVault } from '../types';
import { FordefiRpcSchema, RequestArgs } from '../provider/provider.types';
import { waitFor } from './wait-for';

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
  const gasLimit = gas === undefined ? undefined : gas.toString();

  if (maxPriorityFeePerGas !== undefined && maxFeePerGas !== undefined) {
    return {
      type: CustomGasRequestTypeEnum.custom,
      gasLimit,
      details: {
        type: DynamicGasRequestTypeEnum.dynamic,
        maxPriorityFeePerGas: maxPriorityFeePerGas.toString(),
        maxFeePerGas: maxFeePerGas.toString(),
      },
    };
  }

  if (gasPrice !== undefined) {
    return {
      type: CustomGasRequestTypeEnum.custom,
      gasLimit,
      details: {
        type: LegacyGasTypeEnum.legacy,
        price: gasPrice.toString(),
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

  const valueStr = value?.toString();
  if (valueStr !== undefined && !valueStr.match(/^\d+$/)) {
    throw new InvalidParamsRpcError(new Error('Transaction "value" must be a valid number'));
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
      value: valueStr ?? '0', // The spec defines it as optional, but it's required in our API
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
