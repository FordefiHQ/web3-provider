import { Hex, numberToHex } from 'viem';
import { FordefiProviderConfig, FordefiWeb3Provider } from '../src';
import { EvmChainId, EvmChainUniqueId } from '../src/types';
import { env } from './env';

const sepoliaChainFixture = {
  chainId: 11155111 as const satisfies EvmChainId,
  uniqueId: 'evm_ethereum_sepolia' as const satisfies EvmChainUniqueId,
};

// "Gil Staging" organization, organizationId="20e0a222-2600-4cb7-8cad-f20650bf78aa"
const fromAddress = '0xEb6852f573ad3c9562ad5BEe131A2251fd822131' as const satisfies Hex; // evm-1
const toAddress = '0x46880C6712A2933769c50309298482ac061680c4' as const satisfies Hex; // evm-2

export const TEST_PROVIDER_CONFIG: FordefiProviderConfig = {
  chainId: sepoliaChainFixture.chainId,
  address: fromAddress,
  apiUserToken: env.API_USER_TOKEN,
  // pem generated with `openssl ecparam -genkey -name prime256v1 -noout -out private.pem` as described in the docs: https://docs.fordefi.com/reference/pair-an-api-client-with-the-api-signer
  apiPayloadSignKey: env.API_PAYLOAD_SIGNING_KEY,
  apiBaseUrl: 'https://api-staging.stg.arnac.io',
  rpcUrl: `https://sepolia.infura.io/v3/${env.INFURA_API_KEY}`,
};

const GWEI = BigInt(10 ** 9);

export const testFixtures = {
  toAddress,
  chainIdSepoliaHex: numberToHex(sepoliaChainFixture.chainId),
  value: 5n * GWEI,
};

export const minedTransactionFixture = {
  hash: '0xbcb8f86b04e4d8995bb051f97db4b8cdb611e12e717db077516ff4e5637036c6' as const satisfies Hex,
  value: '0x16345785d8a0000' as const satisfies Hex,
};

export const createTestProvider = (providerConfig = TEST_PROVIDER_CONFIG) => new FordefiWeb3Provider(providerConfig);
