import { EventEmitter } from 'events';
import {
  Address,
  EIP1193EventMap,
  EIP1193Events,
  Hex,
  http,
  InternalRpcError,
  InvalidInputRpcError,
  InvalidParamsRpcError,
  isHex,
  numberToHex,
  ProviderConnectInfo,
  ProviderDisconnectedError,
  ProviderRpcErrorCode,
  RpcErrorCode,
  UnsupportedProviderMethodError,
} from 'viem';
import { AnyCreateEvmTransactionRequest, AnyEvmTransaction, FordefiProviderConfig } from '../types';
import {
  ChainType,
  CreateEvmPersonalMessageRequestTypeEnum,
  CreateEvmTypedMessageRequestTypeEnum,
  EnrichedEvmChain,
  EvmChain,
  EvmTransactionState,
  EvmVault,
  PushMode,
  SignerType,
  UserType,
  VaultType,
} from '../openapi';
import { ApiClient, middlewareAddRequestSigningHeaders } from '../api';
import {
  buildEvmRawTransactionRequest,
  buildSignTransactionRequest,
  parseTypedDataParams,
  waitForTransactionState,
} from '../utils/transactions';
import { base64SignatureToHex, waitForEmittedEvent } from '../utils';
import { extractUserIdFromJwt } from '../utils/user-info';
import {
  FordefiEIP1193Provider,
  Method,
  MethodParams,
  MethodReturnType,
  RequestArgs,
  UserInfo,
} from './provider.types';

type EventsListenersMap = Record<keyof EIP1193EventMap, Parameters<EIP1193EventMap[keyof EIP1193EventMap]>>;

/**
 * Web3 provider that implements EIP-1193.
 *
 * Auto connects after construction and emits a 'connect' event.
 * To wait until connected either pass a callback to `provider.on('connect', cb)` or use the helper `await provider.waitForEmittedEvent('connect')`.
 * Notice: register any event listeners immediately after creating a new instance, and before any asynchronous operations
 * or event loop tasks are scheduled.
 */
export class FordefiWeb3Provider implements FordefiEIP1193Provider {
  public readonly on: EIP1193Events['on'];
  public readonly removeListener: EIP1193Events['removeListener'];
  public readonly waitForEmittedEvent: ReturnType<typeof waitForEmittedEvent>;

  private readonly eventEmitter: EventEmitter<EventsListenersMap>;
  private readonly apiClient: ApiClient;
  private readonly config: FordefiProviderConfig;
  private chain: EvmChain | undefined;
  private vault: EvmVault | undefined;
  private status: 'connected' | 'connecting' | 'disconnected';

  constructor(config: FordefiProviderConfig) {
    this.config = config;
    this.apiClient = new ApiClient(config);

    const eventEmitter = new EventEmitter<EventsListenersMap>();
    this.on = eventEmitter.on.bind(eventEmitter)<EventsListenersMap>;
    this.removeListener = eventEmitter.removeListener.bind(eventEmitter)<EventsListenersMap>;
    this.eventEmitter = eventEmitter;
    this.waitForEmittedEvent = waitForEmittedEvent(eventEmitter);

    this.status = 'disconnected';
    this.connect().catch();
  }

  /**
   * Handles a JSON RPC request
   *
   * @param args json rpc request payload
   * @returns a promise with a response
   *
   * @throws RpcError with error codes defined in {@link RpcErrorCode} and {@link ProviderRpcErrorCode}
   */
  async request<M extends Method>(args: RequestArgs<M>): Promise<MethodReturnType<M>> {
    let res;

    switch (args.method) {
      // EIP-1474
      case 'eth_sendTransaction':
        res = this.ethSendTransaction(args.params);
        break;
      case 'eth_signTransaction':
        res = this.ethSignTransaction(args.params);
        break;
      case 'eth_accounts':
        res = this.ethAccounts();
        break;
      // EIP-1102
      case 'eth_requestAccounts':
        res = this.ethAccounts();
        break;
      // EIP-695
      case 'eth_chainId':
        res = this.ethChainId();
        break;
      // EIP-191
      case 'personal_sign':
        res = this.personalSign(args.params);
        break;
      // EIP-712
      case 'eth_signTypedData':
      case 'eth_signTypedData_v3':
      case 'eth_signTypedData_v4':
        res = this.ethSignTypedData(args.params);
        break;
      default:
        res = this.jsonRpcHttpRequestFn(args);
    }

    return res as Promise<MethodReturnType<M>>;
  }

  private jsonRpcHttpRequestFn<M extends Method>(args: RequestArgs<M>) {
    if (!this.config.rpcUrl) {
      throw new UnsupportedProviderMethodError(
        new Error(
          'RPC method not supported by Fordefi provider. Construct the provider with `rpcUrl` to fallback to an external JSON RPC provider.',
        ),
      );
    }

    return http(this.config.rpcUrl)({}).request(args);
  }

  private async ethChainId() {
    if (this.chain) {
      return numberToHex(this.chain.chainId);
    }

    const { chains } = await this.apiClient.blockchains.listChainsApiV1BlockchainsGet({ chainTypes: [ChainType.evm] });
    const chain = (chains as EnrichedEvmChain[]).find((chain) => {
      // if chainId is a string (i.e. EvmChainUnique.evm_ethereum_sepolia === 'evm_ethereum_sepolia') match by `uniqueId` property
      // otherwise match by the numeric `chainId` property (i.e. EvmChainId.NUMBER_11155111 === 11155111)
      const matchedProperty: keyof EvmChain = typeof this.config.chainId === 'string' ? 'uniqueId' : 'chainId';
      return chain[matchedProperty] === this.config.chainId;
    });

    if (!chain) {
      throw new InvalidParamsRpcError(new Error(`Unsupported chain id ${this.config.chainId}`));
    }
    this.chain = chain;

    const chainId = numberToHex(chain.chainId);
    this.eventEmitter.emit('chainChanged', chainId);
    return chainId;
  }

  private async ethAccounts() {
    if (this.vault) {
      return [this.vault.address];
    }

    const response = await this.apiClient.vaults.listVaultsApiV1VaultsGet({
      search: this.config.address,
      vaultTypes: [VaultType.evm],
    });
    const { vaults } = response;

    const vault = vaults[0] as EvmVault | undefined;
    if (!vault) {
      throw new InvalidInputRpcError(new Error(`Vault with address ${this.config.address} not found`));
    }
    this.vault = vault;

    const accounts = [vault.address] as Address[];
    this.eventEmitter.emit('accountsChanged', accounts);
    return accounts;
  }

  private async ethSendTransaction(params: MethodParams<'eth_sendTransaction'>) {
    const [transaction] = params;
    const { vault, chain } = this._getFordefiChainVault();

    const { hash } = await this._invokeCreateTransaction(
      buildEvmRawTransactionRequest(transaction, chain, vault, PushMode.auto),
    );

    if (!hash || !isHex(hash)) {
      throw new InternalRpcError(new Error('Missing transaction hash in create transaction response'));
    }

    return hash;
  }

  private async ethSignTransaction(params: MethodParams<'eth_signTransaction'>) {
    const [transaction] = params;
    const { vault, chain } = this._getFordefiChainVault();

    const { rawTransaction } = await this._invokeCreateTransaction(
      buildEvmRawTransactionRequest(transaction, chain, vault, PushMode.manual),
    );

    if (!rawTransaction) {
      throw new InternalRpcError(new Error('Missing raw transaction in create transaction response'));
    }

    return rawTransaction;
  }

  private async personalSign(params: MethodParams<'personal_sign'>) {
    const [rawData, signingAddress] = params;
    const { chain, vault } = this._getFordefiChainVault();

    if (signingAddress !== vault.address) {
      throw new InvalidParamsRpcError(
        new Error(`Address ${signingAddress} does not match this provider's managed address ${vault.address}.`),
      );
    }

    return this._createEvmMessageTransaction(
      buildSignTransactionRequest(
        vault.id,
        chain.chainId,
        CreateEvmPersonalMessageRequestTypeEnum.personalMessageType,
        rawData,
      ),
    );
  }

  private async ethSignTypedData(
    params: MethodParams<'eth_signTypedData' | 'eth_signTypedData_v3' | 'eth_signTypedData_v4'>,
  ) {
    const { typedData, fromAddress } = parseTypedDataParams(params);
    const { chain, vault } = this._getFordefiChainVault();

    if (fromAddress !== vault.address) {
      throw new InvalidParamsRpcError(
        new Error(`Address ${fromAddress} does not match given provider's address ${vault.address}`),
      );
    }

    return this._createEvmMessageTransaction(
      buildSignTransactionRequest(
        vault.id,
        chain.chainId,
        CreateEvmTypedMessageRequestTypeEnum.typedMessageType,
        typedData,
      ),
    );
  }

  private async _createEvmMessageTransaction<CreateTx extends AnyCreateEvmTransactionRequest>(
    createTransactionRequest: CreateTx,
  ): Promise<Hex> {
    const { signatures } = await this._invokeCreateTransaction(createTransactionRequest);

    if (signatures.length === 0) {
      throw new InternalRpcError(new Error('No signatures found in create transaction response'));
    }

    return base64SignatureToHex(signatures[0].data);
  }

  private async _invokeCreateTransaction<CreateTxType extends AnyCreateEvmTransactionRequest['type']>(
    createTransactionRequest: AnyCreateEvmTransactionRequest & { type: CreateTxType },
  ): Promise<AnyEvmTransaction<CreateTxType>> {
    const transaction = await this.apiClient.transactions.createTransactionApiV1TransactionsPost(
      { createTransactionRequest },
      middlewareAddRequestSigningHeaders(this.config.apiPayloadSignKey),
    );

    return waitForTransactionState(
      transaction as AnyEvmTransaction<CreateTxType>,
      EvmTransactionState.signed,
      this.apiClient,
    );
  }

  private _getFordefiChainVault() {
    this._throwIfNotConnected();

    if (!this.chain || !this.vault) {
      throw new InternalRpcError(new Error('Unexpected state: provider is connected but chain or vault is missing'));
    }

    return { chain: this.chain, vault: this.vault };
  }

  private _throwIfNotConnected() {
    if (this.getStatus() !== 'connected') {
      throw this._onDisconnect();
    }
  }

  /**
   * Connects the provider and emits a 'connect' event.
   * If already connected, does nothing.
   * If connecting, waits for the connection to be established.
   *
   * @returns a promise of that resolves once connected
   */
  async connect() {
    if (this.status === 'connected') {
      return Promise.resolve();
    }

    if (this.status === 'connecting') {
      await this.waitForEmittedEvent('connect');
    }

    this.status = 'connecting';

    await Promise.all([this.request({ method: 'eth_accounts' }), this.request({ method: 'eth_chainId' })]).then(
      ([_address, chainId]) => {
        // verify disconnect wasn't called while waiting for the responses
        if (this.status === 'connecting') {
          this.status = 'connected';
          this.eventEmitter.emit('connect', { chainId } satisfies ProviderConnectInfo);
        }
      },
    );
  }

  /**
   * Disconnects the provider and emits a 'disconnect' event.
   */
  disconnect() {
    if (this.status === 'disconnected') {
      return;
    }

    this.chain = undefined;
    this.vault = undefined;
    this.status = 'disconnected';
    this._onDisconnect();
  }

  _onDisconnect() {
    const error = new ProviderDisconnectedError(new Error('Provider got disconnected'));
    this.eventEmitter.emit('disconnect', error);
    return error;
  }

  /**
   * Returns the current status of the provider
   *
   * @returns 'connected' if the provider is connected, 'connecting' if trying to connect, 'disconnected' otherwise.
   */
  getStatus() {
    return this.status;
  }

  /**
   * Returns the user info of the API user associated with this provider
   *
   * @returns API user info
   */
  getUserInfo(): UserInfo {
    return {
      id: extractUserIdFromJwt(this.config.apiUserToken),
      userType: UserType.apiUser,
      signerType: SignerType.apiSigner,
    };
  }
}
