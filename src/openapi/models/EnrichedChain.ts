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
    EnrichedCosmosChain,
    instanceOfEnrichedCosmosChain,
    EnrichedCosmosChainFromJSON,
    EnrichedCosmosChainFromJSONTyped,
    EnrichedCosmosChainToJSON,
} from './EnrichedCosmosChain';
import {
    EnrichedEvmChain,
    instanceOfEnrichedEvmChain,
    EnrichedEvmChainFromJSON,
    EnrichedEvmChainFromJSONTyped,
    EnrichedEvmChainToJSON,
} from './EnrichedEvmChain';
import {
    EnrichedSolanaChain,
    instanceOfEnrichedSolanaChain,
    EnrichedSolanaChainFromJSON,
    EnrichedSolanaChainFromJSONTyped,
    EnrichedSolanaChainToJSON,
} from './EnrichedSolanaChain';
import {
    EnrichedUtxoChain,
    instanceOfEnrichedUtxoChain,
    EnrichedUtxoChainFromJSON,
    EnrichedUtxoChainFromJSONTyped,
    EnrichedUtxoChainToJSON,
} from './EnrichedUtxoChain';

/**
 * @type EnrichedChain
 * 
 * @export
 */
export type EnrichedChain = { chainType: 'cosmos' } & EnrichedCosmosChain | { chainType: 'evm' } & EnrichedEvmChain | { chainType: 'solana' } & EnrichedSolanaChain | { chainType: 'utxo' } & EnrichedUtxoChain;

export function EnrichedChainFromJSON(json: any): EnrichedChain {
    return EnrichedChainFromJSONTyped(json, false);
}

export function EnrichedChainFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrichedChain {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['chain_type']) {
        case 'cosmos':
            return {...EnrichedCosmosChainFromJSONTyped(json, true), chainType: 'cosmos'};
        case 'evm':
            return {...EnrichedEvmChainFromJSONTyped(json, true), chainType: 'evm'};
        case 'solana':
            return {...EnrichedSolanaChainFromJSONTyped(json, true), chainType: 'solana'};
        case 'utxo':
            return {...EnrichedUtxoChainFromJSONTyped(json, true), chainType: 'utxo'};
        default:
            throw new Error(`No variant of EnrichedChain exists with 'chainType=${json['chainType']}'`);
    }
}

export function EnrichedChainToJSON(value?: EnrichedChain | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['chainType']) {
        case 'cosmos':
            return EnrichedCosmosChainToJSON(value);
        case 'evm':
            return EnrichedEvmChainToJSON(value);
        case 'solana':
            return EnrichedSolanaChainToJSON(value);
        case 'utxo':
            return EnrichedUtxoChainToJSON(value);
        default:
            throw new Error(`No variant of EnrichedChain exists with 'chainType=${value['chainType']}'`);
    }

}

