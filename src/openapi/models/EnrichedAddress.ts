/* tslint:disable */
/* eslint-disable */
/**
 * Fordefi API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { EnrichedAptosAddress } from './EnrichedAptosAddress';
import {
    instanceOfEnrichedAptosAddress,
    EnrichedAptosAddressFromJSON,
    EnrichedAptosAddressFromJSONTyped,
    EnrichedAptosAddressToJSON,
} from './EnrichedAptosAddress';
import type { EnrichedCosmosBechAddress } from './EnrichedCosmosBechAddress';
import {
    instanceOfEnrichedCosmosBechAddress,
    EnrichedCosmosBechAddressFromJSON,
    EnrichedCosmosBechAddressFromJSONTyped,
    EnrichedCosmosBechAddressToJSON,
} from './EnrichedCosmosBechAddress';
import type { EnrichedEvmAddress } from './EnrichedEvmAddress';
import {
    instanceOfEnrichedEvmAddress,
    EnrichedEvmAddressFromJSON,
    EnrichedEvmAddressFromJSONTyped,
    EnrichedEvmAddressToJSON,
} from './EnrichedEvmAddress';
import type { EnrichedExchangeAddress } from './EnrichedExchangeAddress';
import {
    instanceOfEnrichedExchangeAddress,
    EnrichedExchangeAddressFromJSON,
    EnrichedExchangeAddressFromJSONTyped,
    EnrichedExchangeAddressToJSON,
} from './EnrichedExchangeAddress';
import type { EnrichedSolanaAddress } from './EnrichedSolanaAddress';
import {
    instanceOfEnrichedSolanaAddress,
    EnrichedSolanaAddressFromJSON,
    EnrichedSolanaAddressFromJSONTyped,
    EnrichedSolanaAddressToJSON,
} from './EnrichedSolanaAddress';
import type { EnrichedStacksAddress } from './EnrichedStacksAddress';
import {
    instanceOfEnrichedStacksAddress,
    EnrichedStacksAddressFromJSON,
    EnrichedStacksAddressFromJSONTyped,
    EnrichedStacksAddressToJSON,
} from './EnrichedStacksAddress';
import type { EnrichedStarknetAddress } from './EnrichedStarknetAddress';
import {
    instanceOfEnrichedStarknetAddress,
    EnrichedStarknetAddressFromJSON,
    EnrichedStarknetAddressFromJSONTyped,
    EnrichedStarknetAddressToJSON,
} from './EnrichedStarknetAddress';
import type { EnrichedSuiAddress } from './EnrichedSuiAddress';
import {
    instanceOfEnrichedSuiAddress,
    EnrichedSuiAddressFromJSON,
    EnrichedSuiAddressFromJSONTyped,
    EnrichedSuiAddressToJSON,
} from './EnrichedSuiAddress';
import type { EnrichedTonAddress } from './EnrichedTonAddress';
import {
    instanceOfEnrichedTonAddress,
    EnrichedTonAddressFromJSON,
    EnrichedTonAddressFromJSONTyped,
    EnrichedTonAddressToJSON,
} from './EnrichedTonAddress';
import type { EnrichedTronAddress } from './EnrichedTronAddress';
import {
    instanceOfEnrichedTronAddress,
    EnrichedTronAddressFromJSON,
    EnrichedTronAddressFromJSONTyped,
    EnrichedTronAddressToJSON,
} from './EnrichedTronAddress';
import type { EnrichedUtxoAddress } from './EnrichedUtxoAddress';
import {
    instanceOfEnrichedUtxoAddress,
    EnrichedUtxoAddressFromJSON,
    EnrichedUtxoAddressFromJSONTyped,
    EnrichedUtxoAddressToJSON,
} from './EnrichedUtxoAddress';

/**
 * @type EnrichedAddress
 * 
 * @export
 */
export type EnrichedAddress = { type: 'aptos' } & EnrichedAptosAddress | { type: 'cosmos' } & EnrichedCosmosBechAddress | { type: 'evm' } & EnrichedEvmAddress | { type: 'exchange' } & EnrichedExchangeAddress | { type: 'solana' } & EnrichedSolanaAddress | { type: 'stacks' } & EnrichedStacksAddress | { type: 'starknet' } & EnrichedStarknetAddress | { type: 'sui' } & EnrichedSuiAddress | { type: 'ton' } & EnrichedTonAddress | { type: 'tron' } & EnrichedTronAddress | { type: 'utxo' } & EnrichedUtxoAddress;

export function EnrichedAddressFromJSON(json: any): EnrichedAddress {
    return EnrichedAddressFromJSONTyped(json, false);
}

export function EnrichedAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrichedAddress {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'aptos':
            return Object.assign({}, EnrichedAptosAddressFromJSONTyped(json, true), { type: 'aptos' } as const);
        case 'cosmos':
            return Object.assign({}, EnrichedCosmosBechAddressFromJSONTyped(json, true), { type: 'cosmos' } as const);
        case 'evm':
            return Object.assign({}, EnrichedEvmAddressFromJSONTyped(json, true), { type: 'evm' } as const);
        case 'exchange':
            return Object.assign({}, EnrichedExchangeAddressFromJSONTyped(json, true), { type: 'exchange' } as const);
        case 'solana':
            return Object.assign({}, EnrichedSolanaAddressFromJSONTyped(json, true), { type: 'solana' } as const);
        case 'stacks':
            return Object.assign({}, EnrichedStacksAddressFromJSONTyped(json, true), { type: 'stacks' } as const);
        case 'starknet':
            return Object.assign({}, EnrichedStarknetAddressFromJSONTyped(json, true), { type: 'starknet' } as const);
        case 'sui':
            return Object.assign({}, EnrichedSuiAddressFromJSONTyped(json, true), { type: 'sui' } as const);
        case 'ton':
            return Object.assign({}, EnrichedTonAddressFromJSONTyped(json, true), { type: 'ton' } as const);
        case 'tron':
            return Object.assign({}, EnrichedTronAddressFromJSONTyped(json, true), { type: 'tron' } as const);
        case 'utxo':
            return Object.assign({}, EnrichedUtxoAddressFromJSONTyped(json, true), { type: 'utxo' } as const);
        default:
            throw new Error(`No variant of EnrichedAddress exists with 'type=${json['type']}'`);
    }
}

export function EnrichedAddressToJSON(json: any): any {
    return EnrichedAddressToJSONTyped(json, false);
}

export function EnrichedAddressToJSONTyped(value?: EnrichedAddress | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'aptos':
            return Object.assign({}, EnrichedAptosAddressToJSON(value), { type: 'aptos' } as const);
        case 'cosmos':
            return Object.assign({}, EnrichedCosmosBechAddressToJSON(value), { type: 'cosmos' } as const);
        case 'evm':
            return Object.assign({}, EnrichedEvmAddressToJSON(value), { type: 'evm' } as const);
        case 'exchange':
            return Object.assign({}, EnrichedExchangeAddressToJSON(value), { type: 'exchange' } as const);
        case 'solana':
            return Object.assign({}, EnrichedSolanaAddressToJSON(value), { type: 'solana' } as const);
        case 'stacks':
            return Object.assign({}, EnrichedStacksAddressToJSON(value), { type: 'stacks' } as const);
        case 'starknet':
            return Object.assign({}, EnrichedStarknetAddressToJSON(value), { type: 'starknet' } as const);
        case 'sui':
            return Object.assign({}, EnrichedSuiAddressToJSON(value), { type: 'sui' } as const);
        case 'ton':
            return Object.assign({}, EnrichedTonAddressToJSON(value), { type: 'ton' } as const);
        case 'tron':
            return Object.assign({}, EnrichedTronAddressToJSON(value), { type: 'tron' } as const);
        case 'utxo':
            return Object.assign({}, EnrichedUtxoAddressToJSON(value), { type: 'utxo' } as const);
        default:
            throw new Error(`No variant of EnrichedAddress exists with 'type=${value['type']}'`);
    }

}

