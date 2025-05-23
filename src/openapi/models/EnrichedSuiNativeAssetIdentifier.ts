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

import { mapValues } from '../runtime';
import type { EnrichedSuiChain } from './EnrichedSuiChain';
import {
    EnrichedSuiChainFromJSON,
    EnrichedSuiChainFromJSONTyped,
    EnrichedSuiChainToJSON,
    EnrichedSuiChainToJSONTyped,
} from './EnrichedSuiChain';

/**
 * 
 * @export
 * @interface EnrichedSuiNativeAssetIdentifier
 */
export interface EnrichedSuiNativeAssetIdentifier {
    /**
     * 
     * @type {EnrichedSuiChain}
     * @memberof EnrichedSuiNativeAssetIdentifier
     */
    chain: EnrichedSuiChain;
    /**
     * 
     * @type {string}
     * @memberof EnrichedSuiNativeAssetIdentifier
     */
    type: EnrichedSuiNativeAssetIdentifierTypeEnum;
}


/**
 * @export
 */
export const EnrichedSuiNativeAssetIdentifierTypeEnum = {
    native: 'native'
} as const;
export type EnrichedSuiNativeAssetIdentifierTypeEnum = typeof EnrichedSuiNativeAssetIdentifierTypeEnum[keyof typeof EnrichedSuiNativeAssetIdentifierTypeEnum];


/**
 * Check if a given object implements the EnrichedSuiNativeAssetIdentifier interface.
 */
export function instanceOfEnrichedSuiNativeAssetIdentifier(value: object): value is EnrichedSuiNativeAssetIdentifier {
    if (!('chain' in value) || value['chain'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function EnrichedSuiNativeAssetIdentifierFromJSON(json: any): EnrichedSuiNativeAssetIdentifier {
    return EnrichedSuiNativeAssetIdentifierFromJSONTyped(json, false);
}

export function EnrichedSuiNativeAssetIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrichedSuiNativeAssetIdentifier {
    if (json == null) {
        return json;
    }
    return {
        
        'chain': EnrichedSuiChainFromJSON(json['chain']),
        'type': json['type'],
    };
}

export function EnrichedSuiNativeAssetIdentifierToJSON(json: any): EnrichedSuiNativeAssetIdentifier {
    return EnrichedSuiNativeAssetIdentifierToJSONTyped(json, false);
}

export function EnrichedSuiNativeAssetIdentifierToJSONTyped(value?: EnrichedSuiNativeAssetIdentifier | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chain': EnrichedSuiChainToJSON(value['chain']),
        'type': value['type'],
    };
}

