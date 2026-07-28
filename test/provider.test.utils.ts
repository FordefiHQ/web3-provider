import { Hex, numberToHex } from 'viem';
import { FordefiProviderConfig, FordefiWeb3Provider } from '../src';
import { EvmChainId, EvmChainUniqueId } from '../src/types';
import { env } from './env';

const sepoliaChainFixture = {
  chainId: 11155111 as const satisfies EvmChainId,
  uniqueId: 'evm_ethereum_sepolia' as const satisfies EvmChainUniqueId,
};

// "Dan STG" organization, organizationId="0a7d414a-2a37-4caa-b91d-41ce5431509e"
const fromAddress = '0x72Db30BE45CC7DE42037B64a796AD5b597e08A6D' as const satisfies Hex; // evm-1
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
