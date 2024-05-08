import { Hex } from 'viem';
import {
  CreateEvmMessageRequest,
  CreateEvmTransactionRequest,
  EvmMessage,
  EvmTransaction,
  EvmVault as _EvmVault,
} from '../openapi';

type AnyEvmTx = EvmTransaction | EvmMessage;
export type AnyEvmTransaction<TxType extends AnyEvmTx['type'] = AnyEvmTx['type']> = AnyEvmTx & { type: TxType };

type AnyCreateEvmReq = CreateEvmMessageRequest | CreateEvmTransactionRequest;
export type AnyCreateEvmTransactionRequest<TxType extends AnyEvmTx['type'] = AnyEvmTx['type']> = AnyCreateEvmReq & {
  type: TxType;
};

export type EvmVault = _EvmVault & { address: Hex };
