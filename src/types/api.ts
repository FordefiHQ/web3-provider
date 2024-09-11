import { Hex } from 'viem';
import {
  CreateEvmMessageRequest,
  CreateEvmRawTransactionRequestTypeEnum,
  CreateEvmTransactionRequest,
  EvmMessage,
  EvmTransaction,
  EvmVault as _EvmVault,
} from '../openapi';

export type AnyEvmTx = EvmTransaction | EvmMessage;

export type CreateEvmRawTxRequest = CreateEvmTransactionRequest & {
  details: {
    type: CreateEvmRawTransactionRequestTypeEnum;
  };
};
export type AnyCreateEvmRequest = CreateEvmMessageRequest | CreateEvmRawTxRequest;

export type EvmVault = _EvmVault & { address: Hex };
