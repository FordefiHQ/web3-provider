import { ProviderDisconnectedError } from 'viem';
import { FordefiWeb3Provider } from '../src';
import { CHAINS_PAGE_SIZE } from '../src/constants';
import {
  BlockchainsApi,
  ChainType,
  EnrichedEvmChain,
  ListBlockchainsResponse,
  ListVaultsResponse,
  VaultsApi,
  VaultType,
} from '../src/openapi';
import { TEST_PROVIDER_CONFIG } from './provider.test.utils';

const CHAIN = {
  chainType: ChainType.evm,
  chainId: TEST_PROVIDER_CONFIG.chainId,
  uniqueId: 'evm_ethereum_sepolia',
  name: 'Ethereum Sepolia',
  nativeCurrencySymbol: 'ETH',
  nativeCurrencyName: 'Ether',
  logoUrl: 'https://example.com/logo.png',
  isTestnet: true,
  isEnabled: true,
  gasType: 'dynamic',
  source: 'default',
} as EnrichedEvmChain;

const CHAIN_RESPONSE = {
  total: 1,
  page: 1,
  size: 100,
  chains: [CHAIN],
} satisfies ListBlockchainsResponse;

const FULL_CHAIN_RESPONSE = {
  total: Number.POSITIVE_INFINITY,
  page: 1,
  size: CHAINS_PAGE_SIZE,
  chains: Array.from({ length: CHAINS_PAGE_SIZE }, (_, index) => ({
    ...CHAIN,
    chainId: index + 1,
    uniqueId: `evm_chain_${index + 1}`,
  })),
} satisfies ListBlockchainsResponse;

const VAULT_RESPONSE = {
  total: 1,
  page: 1,
  size: 1,
  vaults: [{ address: TEST_PROVIDER_CONFIG.address, type: VaultType.evm }],
} as unknown as ListVaultsResponse;

const deferred = <T>() => {
  let resolve!: (value: T) => void;
  let reject!: (reason: unknown) => void;
  const promise = new Promise<T>((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  return { promise, reject, resolve };
};

const flushPromises = async () => {
  await Promise.resolve();
  await Promise.resolve();
};

describe('Provider connection lifecycle', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('concurrent connect callers receive the API error and failed connection state is cleared', async () => {
    const vaultResponse = deferred<ListVaultsResponse>();
    const vaultsSpy = jest
      .spyOn(VaultsApi.prototype, 'listVaultsApiV1VaultsGet')
      .mockImplementationOnce(() => vaultResponse.promise)
      .mockResolvedValue(VAULT_RESPONSE);
    const blockchainsSpy = jest
      .spyOn(BlockchainsApi.prototype, 'listChainsApiV1BlockchainsGet')
      .mockResolvedValue(CHAIN_RESPONSE);

    const provider = new FordefiWeb3Provider(TEST_PROVIDER_CONFIG);
    const onDisconnect = jest.fn();
    provider.on('disconnect', onDisconnect);

    const firstCaller = provider.connect();
    const secondCaller = provider.connect();
    const apiError = new Error('Vault lookup failed');
    vaultResponse.reject(apiError);

    await expect(firstCaller).rejects.toBe(apiError);
    await expect(secondCaller).rejects.toBe(apiError);
    expect(provider.getStatus()).toBe('disconnected');
    expect(onDisconnect).toHaveBeenCalledTimes(1);

    await provider.request({ method: 'eth_chainId' });
    expect(blockchainsSpy).toHaveBeenCalledTimes(2);
    expect(vaultsSpy).toHaveBeenCalledTimes(1);
  });

  test('a failed connection clears a vault populated before the chain lookup fails', async () => {
    const chainResponse = deferred<ListBlockchainsResponse>();
    const vaultsSpy = jest.spyOn(VaultsApi.prototype, 'listVaultsApiV1VaultsGet').mockResolvedValue(VAULT_RESPONSE);
    jest
      .spyOn(BlockchainsApi.prototype, 'listChainsApiV1BlockchainsGet')
      .mockImplementationOnce(() => chainResponse.promise);

    const provider = new FordefiWeb3Provider(TEST_PROVIDER_CONFIG);
    const onDisconnect = jest.fn();
    provider.on('disconnect', onDisconnect);
    const connect = provider.connect();
    await flushPromises();

    const apiError = new Error('Chain lookup failed');
    chainResponse.reject(apiError);
    await expect(connect).rejects.toBe(apiError);

    expect(provider.getStatus()).toBe('disconnected');
    expect(onDisconnect).toHaveBeenCalledTimes(1);
    await provider.request({ method: 'eth_accounts' });
    expect(vaultsSpy).toHaveBeenCalledTimes(2);
  });

  test("sequential 'eth_chainId' calls reuse a successful lookup while disconnected", async () => {
    const blockchainsSpy = jest
      .spyOn(BlockchainsApi.prototype, 'listChainsApiV1BlockchainsGet')
      .mockResolvedValue(CHAIN_RESPONSE);
    jest.spyOn(VaultsApi.prototype, 'listVaultsApiV1VaultsGet').mockResolvedValue(VAULT_RESPONSE);

    const provider = new FordefiWeb3Provider(TEST_PROVIDER_CONFIG);
    await provider.connect();
    provider.disconnect();

    await provider.request({ method: 'eth_chainId' });
    await provider.request({ method: 'eth_chainId' });
    await provider.request({ method: 'eth_chainId' });
    expect(blockchainsSpy).toHaveBeenCalledTimes(2);

    await provider.connect();
    expect(provider.getStatus()).toBe('connected');
    expect(blockchainsSpy).toHaveBeenCalledTimes(2);
  });

  test('a failed connection stops its abandoned pagination sweep', async () => {
    const chainResponse = deferred<ListBlockchainsResponse>();
    const vaultResponse = deferred<ListVaultsResponse>();
    const blockchainsSpy = jest
      .spyOn(BlockchainsApi.prototype, 'listChainsApiV1BlockchainsGet')
      .mockImplementationOnce(() => chainResponse.promise)
      .mockRejectedValue(new Error('Unexpected additional page'));
    jest.spyOn(VaultsApi.prototype, 'listVaultsApiV1VaultsGet').mockImplementationOnce(() => vaultResponse.promise);

    const provider = new FordefiWeb3Provider(TEST_PROVIDER_CONFIG);
    const connect = provider.connect();
    const apiError = new Error('Vault lookup failed');
    vaultResponse.reject(apiError);
    await expect(connect).rejects.toBe(apiError);

    chainResponse.resolve(FULL_CHAIN_RESPONSE);
    await flushPromises();
    expect(blockchainsSpy).toHaveBeenCalledTimes(1);
  });

  test("an abandoned successful connect rejects when no 'connect' event was emitted", async () => {
    const vaultResponse = deferred<ListVaultsResponse>();
    jest.spyOn(BlockchainsApi.prototype, 'listChainsApiV1BlockchainsGet').mockResolvedValue(CHAIN_RESPONSE);
    jest.spyOn(VaultsApi.prototype, 'listVaultsApiV1VaultsGet').mockImplementationOnce(() => vaultResponse.promise);

    const provider = new FordefiWeb3Provider(TEST_PROVIDER_CONFIG);
    const connect = provider.connect();
    const onConnect = jest.fn();
    provider.on('connect', onConnect);
    await flushPromises();

    provider.disconnect();
    vaultResponse.resolve(VAULT_RESPONSE);
    await expect(connect).rejects.toMatchObject({ code: ProviderDisconnectedError.code });
    expect(provider.getStatus()).toBe('disconnected');
    expect(onConnect).not.toHaveBeenCalled();
  });

  test('a stale failed attempt cannot disconnect a fresh attempt', async () => {
    const staleChainResponse = deferred<ListBlockchainsResponse>();
    const freshChainResponse = deferred<ListBlockchainsResponse>();
    const freshVaultResponse = deferred<ListVaultsResponse>();
    const blockchainsSpy = jest
      .spyOn(BlockchainsApi.prototype, 'listChainsApiV1BlockchainsGet')
      .mockImplementationOnce(() => staleChainResponse.promise)
      .mockImplementationOnce(() => freshChainResponse.promise);
    jest
      .spyOn(VaultsApi.prototype, 'listVaultsApiV1VaultsGet')
      .mockResolvedValueOnce(VAULT_RESPONSE)
      .mockImplementationOnce(() => freshVaultResponse.promise);

    const provider = new FordefiWeb3Provider(TEST_PROVIDER_CONFIG);
    const staleConnect = provider.connect();
    await flushPromises();
    provider.disconnect();

    const onConnect = jest.fn();
    provider.on('connect', onConnect);
    const freshConnect = provider.connect();
    await flushPromises();

    const staleError = new Error('Stale chain lookup failed');
    staleChainResponse.reject(staleError);
    await expect(staleConnect).rejects.toBe(staleError);
    expect(provider.getStatus()).toBe('connecting');
    expect(onConnect).not.toHaveBeenCalled();

    const concurrentChainRequest = provider.request({ method: 'eth_chainId' });
    expect(blockchainsSpy).toHaveBeenCalledTimes(2);
    freshChainResponse.resolve(CHAIN_RESPONSE);
    freshVaultResponse.resolve(VAULT_RESPONSE);
    await concurrentChainRequest;
    await freshConnect;
    expect(provider.getStatus()).toBe('connected');
    expect(onConnect).toHaveBeenCalledTimes(1);
  });

  test('a stale successful attempt cannot connect a fresh in-flight attempt', async () => {
    const staleChainResponse = deferred<ListBlockchainsResponse>();
    const freshVaultResponse = deferred<ListVaultsResponse>();
    jest
      .spyOn(BlockchainsApi.prototype, 'listChainsApiV1BlockchainsGet')
      .mockImplementationOnce(() => staleChainResponse.promise)
      .mockResolvedValue(CHAIN_RESPONSE);
    jest
      .spyOn(VaultsApi.prototype, 'listVaultsApiV1VaultsGet')
      .mockResolvedValueOnce(VAULT_RESPONSE)
      .mockImplementationOnce(() => freshVaultResponse.promise);

    const provider = new FordefiWeb3Provider(TEST_PROVIDER_CONFIG);
    const staleConnect = provider.connect();
    await flushPromises();
    provider.disconnect();

    const onConnect = jest.fn();
    provider.on('connect', onConnect);
    const freshConnect = provider.connect();
    await flushPromises();

    staleChainResponse.resolve(CHAIN_RESPONSE);
    await expect(staleConnect).rejects.toMatchObject({ code: ProviderDisconnectedError.code });
    expect(provider.getStatus()).toBe('connecting');
    expect(onConnect).not.toHaveBeenCalled();

    freshVaultResponse.resolve(VAULT_RESPONSE);
    await freshConnect;
    expect(provider.getStatus()).toBe('connected');
    expect(onConnect).toHaveBeenCalledTimes(1);
  });

  test("an abandoned chain lookup cannot emit 'chainChanged' after disconnect", async () => {
    const staleChainResponse = deferred<ListBlockchainsResponse>();
    const blockchainsSpy = jest
      .spyOn(BlockchainsApi.prototype, 'listChainsApiV1BlockchainsGet')
      .mockImplementationOnce(() => staleChainResponse.promise)
      .mockResolvedValue(CHAIN_RESPONSE);
    jest.spyOn(VaultsApi.prototype, 'listVaultsApiV1VaultsGet').mockResolvedValue(VAULT_RESPONSE);

    const provider = new FordefiWeb3Provider(TEST_PROVIDER_CONFIG);
    const staleConnect = provider.connect();
    await flushPromises();

    const onChainChanged = jest.fn();
    provider.on('chainChanged', onChainChanged);
    provider.disconnect();
    staleChainResponse.resolve(CHAIN_RESPONSE);
    await expect(staleConnect).rejects.toMatchObject({ code: ProviderDisconnectedError.code });

    expect(provider.getStatus()).toBe('disconnected');
    expect(onChainChanged).not.toHaveBeenCalled();

    await provider.request({ method: 'eth_chainId' });
    expect(blockchainsSpy).toHaveBeenCalledTimes(2);
  });
});
