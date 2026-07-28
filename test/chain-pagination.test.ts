import { InternalRpcError, InvalidParamsRpcError, numberToHex } from 'viem';
import { FordefiProviderConfig, FordefiWeb3Provider } from '../src';
import { CHAINS_MAX_PAGES, CHAINS_PAGE_SIZE } from '../src/constants';
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

const makeChain = (chainId: number, uniqueId = `evm_chain_${chainId}`) =>
  ({
    chainType: ChainType.evm,
    chainId,
    uniqueId,
    name: `Chain ${chainId}`,
    nativeCurrencySymbol: 'ETH',
    nativeCurrencyName: 'Ether',
    logoUrl: 'https://example.com/logo.png',
    isTestnet: false,
    isEnabled: true,
    // `GasType` and `ChainSource` are not re-exported by the generated openapi index, the literals are validated
    // against them by the `satisfies` below
    gasType: 'dynamic',
    source: 'default',
  }) satisfies EnrichedEvmChain;

// The chain we want to connect to. It lives past the first page, i.e. it is only reachable by paginating.
const TARGET_CHAIN = makeChain(137, 'evm_ethereum_polygon');

// A full page of chains that do not match the target, followed by the target itself.
const ORG_CHAINS: EnrichedEvmChain[] = [
  ...Array.from({ length: CHAINS_PAGE_SIZE }, (_, index) => makeChain(index + 1)),
  TARGET_CHAIN,
];

const createProvider = (chainId: FordefiProviderConfig['chainId']) =>
  new FordefiWeb3Provider({ ...TEST_PROVIDER_CONFIG, chainId });

describe('Chain Resolution Pagination', () => {
  let blockchainsSpy: jest.SpyInstance<Promise<ListBlockchainsResponse>>;

  /**
   * Mocks the blockchains endpoint over the given chains, slicing them by the `page` and `size` of the request the way
   * the API does, so pagination is only reached when the provider actually asks for a page it hasn't seen.
   *
   * @param total the `total` reported by the server, which may disagree with the number of chains it returns
   */
  const mockBlockchains = (chains: EnrichedEvmChain[], total = chains.length) =>
    jest
      .spyOn(BlockchainsApi.prototype, 'listChainsApiV1BlockchainsGet')
      .mockImplementation(async ({ page = 1, size = CHAINS_PAGE_SIZE } = {}) => {
        const firstIndex = (page - 1) * size;
        return {
          total,
          page,
          size,
          chains: chains.slice(firstIndex, firstIndex + size),
        } satisfies ListBlockchainsResponse;
      });

  beforeEach(() => {
    // resolves the `eth_accounts` lookup of the connection without touching the network. Only `address` and `type` are
    // read by the provider, hence the cast instead of a full `EvmVault` fixture.
    jest.spyOn(VaultsApi.prototype, 'listVaultsApiV1VaultsGet').mockResolvedValue({
      total: 1,
      page: 1,
      size: 1,
      vaults: [{ address: TEST_PROVIDER_CONFIG.address, type: VaultType.evm }],
    } as unknown as ListVaultsResponse);

    blockchainsSpy = mockBlockchains(ORG_CHAINS);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const matchTestCases = [
    { matchedBy: 'a numeric chainId', chainId: TARGET_CHAIN.chainId },
    { matchedBy: 'a uniqueId', chainId: TARGET_CHAIN.uniqueId },
  ] as const;

  test.each(matchTestCases)(
    "'eth_chainId' should resolve a chain beyond the first page matched by $matchedBy",
    async ({ chainId }) => {
      const provider = createProvider(chainId);
      await provider.waitForEmittedEvent('connect');

      const response = await provider.request({ method: 'eth_chainId' });

      expect(response).toBe(numberToHex(TARGET_CHAIN.chainId));
      expect(blockchainsSpy).toHaveBeenCalledWith(expect.objectContaining({ page: 1, size: CHAINS_PAGE_SIZE }));
      expect(blockchainsSpy).toHaveBeenCalledWith(expect.objectContaining({ page: 2, size: CHAINS_PAGE_SIZE }));
      // the resolved chain is cached, so the request above does not paginate again
      expect(blockchainsSpy).toHaveBeenCalledTimes(2);
    },
  );

  // `total` is not used to decide when to stop paginating, since a server that under-reports it (or returns overlapping
  // pages) would otherwise end the sweep before the target chain is reached
  test.each([0, 1, Number.POSITIVE_INFINITY])(
    "'eth_chainId' should resolve a chain beyond the first page when the server reports total=%p",
    async (total) => {
      blockchainsSpy = mockBlockchains(ORG_CHAINS, total);

      const provider = createProvider(TARGET_CHAIN.chainId);
      await provider.waitForEmittedEvent('connect');

      expect(await provider.request({ method: 'eth_chainId' })).toBe(numberToHex(TARGET_CHAIN.chainId));
      expect(blockchainsSpy).toHaveBeenCalledTimes(2);
    },
  );

  test("'eth_chainId' should stop paginating on a partial page and throw for an unsupported chain", async () => {
    // a `total` that never gets exhausted would keep the loop going if pagination relied on it
    blockchainsSpy = mockBlockchains(ORG_CHAINS, Number.POSITIVE_INFINITY);

    const unsupportedChainId = 999999;
    const provider = createProvider(unsupportedChainId);

    // joins the in-flight lookup of the connection initiated by the constructor rather than starting a second one
    await expect(provider.request({ method: 'eth_chainId' })).rejects.toMatchObject({
      code: InvalidParamsRpcError.code,
      details: `Unsupported chain id ${unsupportedChainId}`,
    });
    // page 1 is full so page 2 is requested, and it holds a single chain - fewer than the requested size
    expect(blockchainsSpy).toHaveBeenCalledTimes(2);
    expect(provider.getStatus()).toBe('disconnected');
  });

  test("'eth_chainId' should give up after the maximum number of pages when the server never returns a partial page", async () => {
    // a server that keeps handing out full pages of new chains, so only the client's own bound can end the sweep
    blockchainsSpy = jest
      .spyOn(BlockchainsApi.prototype, 'listChainsApiV1BlockchainsGet')
      .mockImplementation(async ({ page = 1, size = CHAINS_PAGE_SIZE } = {}) => ({
        total: Number.POSITIVE_INFINITY,
        page,
        size,
        chains: Array.from({ length: size }, (_, index) => makeChain(page * size + index)),
      }));

    const provider = createProvider('evm_chain_that_never_arrives');

    await expect(provider.request({ method: 'eth_chainId' })).rejects.toMatchObject({
      code: InternalRpcError.code,
      details: `Chain lookup exceeded the maximum of ${CHAINS_MAX_PAGES} pages for chain id evm_chain_that_never_arrives`,
    });
    expect(blockchainsSpy).toHaveBeenCalledTimes(CHAINS_MAX_PAGES);
  });

  test("'eth_chainId' should treat an echoed page size of zero as a partial page", async () => {
    blockchainsSpy = jest
      .spyOn(BlockchainsApi.prototype, 'listChainsApiV1BlockchainsGet')
      .mockResolvedValue({ total: 0, page: 1, size: 0, chains: [] });

    const unsupportedChainId = 999999;
    const provider = createProvider(unsupportedChainId);

    await expect(provider.request({ method: 'eth_chainId' })).rejects.toMatchObject({
      code: InvalidParamsRpcError.code,
      details: `Unsupported chain id ${unsupportedChainId}`,
    });
    expect(blockchainsSpy).toHaveBeenCalledTimes(1);
  });
});
