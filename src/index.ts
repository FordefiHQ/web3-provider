export { EIP1193EventMap } from 'viem';
export * from './provider';
export { FordefiProviderConfig } from './types';

// Re-exporting types from openapi in a way that is typedoc friendly to hide enums' type aliases.
import { EvmChainId as _EvmChainId, EvmChainUniqueId as _EvmChainUniqueId } from './openapi';

/** @enum */
export const EvmChainId = _EvmChainId;
/** @hidden */
export type EvmChainId = _EvmChainId;

/** @enum */
export const EvmChainUniqueId = _EvmChainUniqueId;
/** @hidden */
export type EvmChainUniqueId = _EvmChainUniqueId;
