import { Hex, numberToHex } from 'viem';
import { ChainUniqueId, EvmChainId, FordefiProviderConfig, FordefiWeb3Provider } from '../src';
import { env } from './env';

const sepoliaChainFixture = {
  chainId: 11155111 as const satisfies EvmChainId,
  uniqueId: ChainUniqueId.evmEthereumSepolia,
};

export const TEST_PROVIDER_CONFIG: FordefiProviderConfig = {
  chainId: sepoliaChainFixture.chainId,
  address: '0xEb6852f573ad3c9562ad5BEe131A2251fd822131',
  apiUserToken: env.API_USER_TOKEN,
  // pem generated with `openssl ecparam -genkey -name prime256v1 -noout -out private.pem` as described in the docs: https://docs.fordefi.com/reference/pair-an-api-client-with-the-api-signer
  apiPayloadSignKey: env.API_PAYLOAD_SIGNING_KEY,
  apiBaseUrl: 'https://api-staging.stg.arnac.io',
  rpcUrl: `https://sepolia.infura.io/v3/${env.INFURA_API_KEY}`,
};

export const GWEI = 10 ** 9;

export const testFixtures = {
  toAddress: '0x46880C6712A2933769c50309298482ac061680c4' as const satisfies Hex,
  chainIdSepoliaHex: numberToHex(sepoliaChainFixture.chainId),
  value: numberToHex(5 * GWEI),
};

export const minedTransactionFixture = {
  hash: '0xbcb8f86b04e4d8995bb051f97db4b8cdb611e12e717db077516ff4e5637036c6' as const satisfies Hex,
  value: '0x16345785d8a0000' as const satisfies Hex,
};

export const createTestProvider = (providerConfig = TEST_PROVIDER_CONFIG) => new FordefiWeb3Provider(providerConfig);
