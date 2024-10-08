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

import { exists, mapValues } from '../runtime';
import type { EnrichedSuiChain } from './EnrichedSuiChain';
import {
    EnrichedSuiChainFromJSON,
    EnrichedSuiChainFromJSONTyped,
    EnrichedSuiChainToJSON,
} from './EnrichedSuiChain';
import type { EnrichedSuiCoin } from './EnrichedSuiCoin';
import {
    EnrichedSuiCoinFromJSON,
    EnrichedSuiCoinFromJSONTyped,
    EnrichedSuiCoinToJSON,
} from './EnrichedSuiCoin';

/**
 * 
 * @export
 * @interface EnrichedSuiCoinAssetIdentifier
 */
export interface EnrichedSuiCoinAssetIdentifier {
    /**
     * 
     * @type {EnrichedSuiChain}
     * @memberof EnrichedSuiCoinAssetIdentifier
     */
    chain: EnrichedSuiChain;
    /**
     * 
     * @type {string}
     * @memberof EnrichedSuiCoinAssetIdentifier
     */
    type: EnrichedSuiCoinAssetIdentifierTypeEnum;
    /**
     * 
     * @type {EnrichedSuiCoin}
     * @memberof EnrichedSuiCoinAssetIdentifier
     */
    coin: EnrichedSuiCoin;
}


/**
 * @export
 */
export const EnrichedSuiCoinAssetIdentifierTypeEnum = {
    coin: 'coin'
} as const;
export type EnrichedSuiCoinAssetIdentifierTypeEnum = typeof EnrichedSuiCoinAssetIdentifierTypeEnum[keyof typeof EnrichedSuiCoinAssetIdentifierTypeEnum];


/**
 * Check if a given object implements the EnrichedSuiCoinAssetIdentifier interface.
 */
export function instanceOfEnrichedSuiCoinAssetIdentifier(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "coin" in value;

    return isInstance;
}

export function EnrichedSuiCoinAssetIdentifierFromJSON(json: any): EnrichedSuiCoinAssetIdentifier {
    return EnrichedSuiCoinAssetIdentifierFromJSONTyped(json, false);
}

export function EnrichedSuiCoinAssetIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrichedSuiCoinAssetIdentifier {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chain': EnrichedSuiChainFromJSON(json['chain']),
        'type': json['type'],
        'coin': EnrichedSuiCoinFromJSON(json['coin']),
    };
}

export function EnrichedSuiCoinAssetIdentifierToJSON(value?: EnrichedSuiCoinAssetIdentifier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chain': EnrichedSuiChainToJSON(value.chain),
        'type': value.type,
        'coin': EnrichedSuiCoinToJSON(value.coin),
    };
}

