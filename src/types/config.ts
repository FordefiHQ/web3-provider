import { Address } from 'viem';
import { EvmChainId, EvmChainUniqueId } from '../openapi';

export interface FordefiProviderConfig {
  /** Chain ID as a number or a named chain. For example for sepolia use `11155111` or `EvmChainId.NUMBER_11155111` or `EvmChainUniqueId.ethereumSepolia` */
  chainId: EvmChainId | EvmChainUniqueId;
  /** EVM address. For example `'0x1234567890123456789012345678901234567890'` */
  address: Address;
  /** Fordefi API user token (base64 encoded) issued via the Fordefi Web Console */
  apiUserToken: string;
  /** Private key in PEM format used to sign the body of requests sent to the Fordefi API - the content of the private key `.pem`, see {@link https://docs.fordefi.com/reference/pair-an-api-client-with-the-api-signer).} */
  apiPayloadSignKey: string;
  /** Fordefi API base url (used for development), defaults to production url. For example 'https://api.fordefi.com' */
  apiBaseUrl?: string;
  /** Fallback JSON-RPC HTTP node url. Methods not implemented by this provider will pass through to this node. For example 'https://rpc.sepolia.org' */
  rpcUrl?: string;
}
