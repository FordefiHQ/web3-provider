import { CreateEvmMessageRequest, CreateEvmTransactionRequest, EvmMessage, EvmTransaction } from '../openapi';

type AnyEvmTx = EvmTransaction | EvmMessage;
export type AnyEvmTransaction<TxType extends AnyEvmTx['type'] = AnyEvmTx['type']> = AnyEvmTx & { type: TxType };

type AnyCreateEvmReq = CreateEvmMessageRequest | CreateEvmTransactionRequest;
export type AnyCreateEvmTransactionRequest<TxType extends AnyEvmTx['type'] = AnyEvmTx['type']> = AnyCreateEvmReq & {
  type: TxType;
};
