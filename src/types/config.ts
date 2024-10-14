import { Address } from 'viem';
import { EvmChainId, EvmChainUniqueId } from '../openapi';

/**
 * Configuration for constructing a provider instance.
 *
 * Each instance manages a single address in a single chain.
 */
export interface FordefiProviderConfig {
  /**
   * Chain ID as a number or a named chain.
   *
   * For example, assuming Ethereum Sepolia chain:
   * - Numeric value: `EvmChainId.NUMBER_11155111` or `11155111`
   * - Named chain: `EvmChainUniqueId.ethereumSepolia` or 'evm_ethereum_sepolia'.
   */
  chainId: EvmChainId | EvmChainUniqueId;

  /**
   * EVM address of a Fordefi vault.
   *
   * For example: '0x1234567890123456789012345678901234567890'.
   */
  address: Address;

  /**
   * Fordefi API user token (base64 encoded) issued via the [Fordefi Web Console](https://app.fordefi.com/user-management).
   *
   * For example: 'eyJWthEAdEr.eyJwTPaYLoad.SiGNAtUrEBase64=='
   */
  apiUserToken: string;

  /**
   * Private key in PEM format used to sign the body of requests sent to the Fordefi API.
   * This is the content of the private `.pem` file. See [Create a public/private signature key pair for the API client](https://docs.fordefi.com/reference/pair-an-api-client-with-the-api-signer).
   *
   * Example of a private ECDSA `.pem` file:
   * ```
   * -----BEGIN EC PRIVATE KEY-----
   * PrivateKeyBase64==
   * -----END EC PRIVATE KEY-----
   * ```
   */
  apiPayloadSignKey: string;

  /**
   * Fallback JSON-RPC HTTP node URL.
   * Methods not implemented by this provider will pass through and be handled by this node.
   *
   * For example: 'https://rpc.sepolia.org'.
   */
  rpcUrl?: string;

  /**
   * Fordefi API base URL (used for development). Defaults to production API URL.
   *
   * For example: 'https://api.fordefi.com'.
   */
  apiBaseUrl?: string;
  /**
   * Whether to skip running a simulation before creating a new transaction, it blocks transaction creation if it fails. Defaults to true.
   */
  skipPrediction?: boolean;
}
