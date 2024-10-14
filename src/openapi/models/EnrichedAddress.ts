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

import {
    EnrichedAptosAddress,
    instanceOfEnrichedAptosAddress,
    EnrichedAptosAddressFromJSON,
    EnrichedAptosAddressFromJSONTyped,
    EnrichedAptosAddressToJSON,
} from './EnrichedAptosAddress';
import {
    EnrichedCosmosBechAddress,
    instanceOfEnrichedCosmosBechAddress,
    EnrichedCosmosBechAddressFromJSON,
    EnrichedCosmosBechAddressFromJSONTyped,
    EnrichedCosmosBechAddressToJSON,
} from './EnrichedCosmosBechAddress';
import {
    EnrichedEvmAddress,
    instanceOfEnrichedEvmAddress,
    EnrichedEvmAddressFromJSON,
    EnrichedEvmAddressFromJSONTyped,
    EnrichedEvmAddressToJSON,
} from './EnrichedEvmAddress';
import {
    EnrichedSolanaAddress,
    instanceOfEnrichedSolanaAddress,
    EnrichedSolanaAddressFromJSON,
    EnrichedSolanaAddressFromJSONTyped,
    EnrichedSolanaAddressToJSON,
} from './EnrichedSolanaAddress';
import {
    EnrichedSuiAddress,
    instanceOfEnrichedSuiAddress,
    EnrichedSuiAddressFromJSON,
    EnrichedSuiAddressFromJSONTyped,
    EnrichedSuiAddressToJSON,
} from './EnrichedSuiAddress';
import {
    EnrichedTonAddress,
    instanceOfEnrichedTonAddress,
    EnrichedTonAddressFromJSON,
    EnrichedTonAddressFromJSONTyped,
    EnrichedTonAddressToJSON,
} from './EnrichedTonAddress';
import {
    EnrichedUtxoAddress,
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
export type EnrichedAddress = { type: 'aptos' } & EnrichedAptosAddress | { type: 'cosmos' } & EnrichedCosmosBechAddress | { type: 'evm' } & EnrichedEvmAddress | { type: 'solana' } & EnrichedSolanaAddress | { type: 'sui' } & EnrichedSuiAddress | { type: 'ton' } & EnrichedTonAddress | { type: 'utxo' } & EnrichedUtxoAddress;

export function EnrichedAddressFromJSON(json: any): EnrichedAddress {
    return EnrichedAddressFromJSONTyped(json, false);
}

export function EnrichedAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrichedAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'aptos':
            return {...EnrichedAptosAddressFromJSONTyped(json, true), type: 'aptos'};
        case 'cosmos':
            return {...EnrichedCosmosBechAddressFromJSONTyped(json, true), type: 'cosmos'};
        case 'evm':
            return {...EnrichedEvmAddressFromJSONTyped(json, true), type: 'evm'};
        case 'solana':
            return {...EnrichedSolanaAddressFromJSONTyped(json, true), type: 'solana'};
        case 'sui':
            return {...EnrichedSuiAddressFromJSONTyped(json, true), type: 'sui'};
        case 'ton':
            return {...EnrichedTonAddressFromJSONTyped(json, true), type: 'ton'};
        case 'utxo':
            return {...EnrichedUtxoAddressFromJSONTyped(json, true), type: 'utxo'};
        default:
            throw new Error(`No variant of EnrichedAddress exists with 'type=${json['type']}'`);
    }
}

export function EnrichedAddressToJSON(value?: EnrichedAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'aptos':
            return EnrichedAptosAddressToJSON(value);
        case 'cosmos':
            return EnrichedCosmosBechAddressToJSON(value);
        case 'evm':
            return EnrichedEvmAddressToJSON(value);
        case 'solana':
            return EnrichedSolanaAddressToJSON(value);
        case 'sui':
            return EnrichedSuiAddressToJSON(value);
        case 'ton':
            return EnrichedTonAddressToJSON(value);
        case 'utxo':
            return EnrichedUtxoAddressToJSON(value);
        default:
            throw new Error(`No variant of EnrichedAddress exists with 'type=${value['type']}'`);
    }

}

