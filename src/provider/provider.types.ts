import {
  Address,
  EIP1193EventMap,
  EIP1193Provider,
  EIP1474Methods,
  Hash,
  Hex,
  Quantity,
  RpcSchema,
  TransactionRequest,
  TypedDataDefinition,
} from 'viem';
import { FordefiProviderConfig } from '../types';
import { OmitFromArray } from '../utils/types';

// Fordefi API supports both hex strings and decimal string (so does the spec)
export type FordefiWeb3TransactionRequest = TransactionRequest<bigint | Hex>;

/** Spec of all methods implemented by Fordefi. */
export type FordefiRpcSchema = readonly [
  {
    Method: 'eth_chainId';
    Parameters?: undefined;
    ReturnType: Quantity;
  },
  {
    Method: 'eth_accounts';
    Parameters?: undefined;
    ReturnType: Address[];
  },
  {
    Method: 'eth_requestAccounts';
    Parameters?: undefined;
    ReturnType: Address[];
  },
  {
    Method: 'eth_sendTransaction';
    Parameters: [transaction: FordefiWeb3TransactionRequest];
    ReturnType: Hash;
  },
  {
    Method: 'eth_signTransaction';
    Parameters: [request: FordefiWeb3TransactionRequest];
    ReturnType: Hex;
  },
  {
    Method: 'personal_sign';
    Parameters: [data: Hex, address: Address];
    ReturnType: Hex;
  },
  {
    Method: 'eth_signTypedData';
    Parameters: [address: Address, message: TypedDataDefinition];
    ReturnType: Hex;
  },
  {
    Method: 'eth_signTypedData_v3';
    Parameters: [address: Address, message: TypedDataDefinition];
    ReturnType: Hex;
  },
  {
    Method: 'eth_signTypedData_v4';
    Parameters: [address: Address, message: TypedDataDefinition];
    ReturnType: Hex;
  },
];

/** Union of names of all methods implemented by Fordefi. */
export type FordefiMethodName = FordefiRpcSchema[number]['Method'];

const fordefiMethods = [
  'eth_sendTransaction',
  'eth_signTransaction',
  'eth_accounts',
  'eth_requestAccounts',
  'eth_chainId',
  'personal_sign',
  'eth_signTypedData',
  'eth_signTypedData_v3',
  'eth_signTypedData_v4',
] as const satisfies FordefiMethodName[];

/** @interface */
export type NonFordefiRpcSchema = OmitFromArray<
  EIP1474Methods,
  | 'eth_chainId'
  | 'eth_accounts'
  | 'eth_requestAccounts'
  | 'eth_sendTransaction'
  | 'eth_signTransaction'
  | 'personal_sign'
>;

export const isFordefiMethod = <S extends RpcSchema, M extends S[number]['Method']>(
  args: RequestArgs<S, M>,
  // @ts-ignore
): args is RequestArgs<FordefiRpcSchema, FordefiRpcSchema[number]['Method']> => {
  return fordefiMethods.includes(args.method as FordefiMethodName);
};

/** Method name and its arguments. Similar to `RequestArgs<S, M>` but doesn't support unknown methods. */
type MethodArgs<S extends RpcSchema, M extends S[number]['Method']> = S extends FordefiRpcSchema
  ? {
      method: M;
    } & (Extract<S[number], { Method: M; Parameters?: undefined }> extends never
      ? { params: Extract<S[number], { Method: M }>['Parameters'] }
      : { params?: never })
  : { params?: never };

/**
 * Arguments for the `request()` method.
 * Fordefi methods and other EIP-1474 methods are typed, other methods are treated as having unknown parameters and return type.
 *
 * @template S A schema of supported methods.
 *   Each method's schema is represented with `Method, Params, ReturnType`.
 *   Fordefi methods are available in {@link FordefiRpcSchema}, other EIP-1474 methods are available in {@link NonFordefiRpcSchema}.
 * @template M The method name as defined in spec's `Method`.
 * @interface
 */
export type RequestArgs<
  S extends RpcSchema = RpcSchema,
  M extends S[number]['Method'] | unknown = unknown,
> = S extends FordefiRpcSchema
  ? M extends S[number]['Method']
    ? MethodArgs<S, M>
    : {
        method: string;
        params?: unknown | undefined;
      }
  : {
      method: string;
      params?: unknown | undefined;
    };

/**
 * The return type of a method.
 * @internal
 */
export type MethodReturnType<
  S extends RpcSchema = FordefiRpcSchema,
  M extends S[number]['Method'] | unknown = S[number]['Method'] | unknown,
> = M extends S[number]['Method']
  ? Extract<S[number], { Method: M }> extends never
    ? unknown
    : Extract<S[number], { Method: M }>['ReturnType']
  : unknown;

/** The EIP-1193 interface the provider implements based on the spec. */
export type FordefiEIP1193Provider = Omit<EIP1193Provider, 'request'> & {
  request<S extends RpcSchema = FordefiRpcSchema, M extends S[number]['Method'] = S[number]['Method']>(
    args: RequestArgs<S, M>,
  ): Promise<MethodReturnType<S, M>>;
};

/** @internal */
export type EIP1193EventCallbackParams = {
  [K in keyof EIP1193EventMap]: Parameters<EIP1193EventMap[K]>;
};

/** Current state of the provider - consistent with the emitted 'connect' and 'disconnect' events. */
export type ConnectivityStatus = 'connected' | 'connecting' | 'disconnected';

export type FordefiProviderConfigWithDefaults = Omit<FordefiProviderConfig, 'pollingIntervalMs' | 'timeoutDurationMs'> &
  Required<Pick<FordefiProviderConfig, 'pollingIntervalMs' | 'timeoutDurationMs'>>;
