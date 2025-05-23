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
 * @interface SuiNativeAsset
 */
export interface SuiNativeAsset {
    /**
     * 
     * @type {EnrichedSuiChain}
     * @memberof SuiNativeAsset
     */
    chain: EnrichedSuiChain;
    /**
     * 
     * @type {string}
     * @memberof SuiNativeAsset
     */
    type: SuiNativeAssetTypeEnum;
}


/**
 * @export
 */
export const SuiNativeAssetTypeEnum = {
    suiNativeAsset: 'sui_native_asset'
} as const;
export type SuiNativeAssetTypeEnum = typeof SuiNativeAssetTypeEnum[keyof typeof SuiNativeAssetTypeEnum];


/**
 * Check if a given object implements the SuiNativeAsset interface.
 */
export function instanceOfSuiNativeAsset(value: object): value is SuiNativeAsset {
    if (!('chain' in value) || value['chain'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function SuiNativeAssetFromJSON(json: any): SuiNativeAsset {
    return SuiNativeAssetFromJSONTyped(json, false);
}

export function SuiNativeAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiNativeAsset {
    if (json == null) {
        return json;
    }
    return {
        
        'chain': EnrichedSuiChainFromJSON(json['chain']),
        'type': json['type'],
    };
}

export function SuiNativeAssetToJSON(json: any): SuiNativeAsset {
    return SuiNativeAssetToJSONTyped(json, false);
}

export function SuiNativeAssetToJSONTyped(value?: SuiNativeAsset | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chain': EnrichedSuiChainToJSON(value['chain']),
        'type': value['type'],
    };
}

