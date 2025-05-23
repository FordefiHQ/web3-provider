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
import type { SuiChainUniqueId } from './SuiChainUniqueId';
import {
    SuiChainUniqueIdFromJSON,
    SuiChainUniqueIdFromJSONTyped,
    SuiChainUniqueIdToJSON,
    SuiChainUniqueIdToJSONTyped,
} from './SuiChainUniqueId';

/**
 * 
 * @export
 * @interface SuiNativeAssetIdentifierRequest
 */
export interface SuiNativeAssetIdentifierRequest {
    /**
     * 
     * @type {string}
     * @memberof SuiNativeAssetIdentifierRequest
     */
    type: SuiNativeAssetIdentifierRequestTypeEnum;
    /**
     * 
     * @type {SuiChainUniqueId}
     * @memberof SuiNativeAssetIdentifierRequest
     */
    chain: SuiChainUniqueId;
}


/**
 * @export
 */
export const SuiNativeAssetIdentifierRequestTypeEnum = {
    native: 'native'
} as const;
export type SuiNativeAssetIdentifierRequestTypeEnum = typeof SuiNativeAssetIdentifierRequestTypeEnum[keyof typeof SuiNativeAssetIdentifierRequestTypeEnum];


/**
 * Check if a given object implements the SuiNativeAssetIdentifierRequest interface.
 */
export function instanceOfSuiNativeAssetIdentifierRequest(value: object): value is SuiNativeAssetIdentifierRequest {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('chain' in value) || value['chain'] === undefined) return false;
    return true;
}

export function SuiNativeAssetIdentifierRequestFromJSON(json: any): SuiNativeAssetIdentifierRequest {
    return SuiNativeAssetIdentifierRequestFromJSONTyped(json, false);
}

export function SuiNativeAssetIdentifierRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiNativeAssetIdentifierRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'chain': SuiChainUniqueIdFromJSON(json['chain']),
    };
}

export function SuiNativeAssetIdentifierRequestToJSON(json: any): SuiNativeAssetIdentifierRequest {
    return SuiNativeAssetIdentifierRequestToJSONTyped(json, false);
}

export function SuiNativeAssetIdentifierRequestToJSONTyped(value?: SuiNativeAssetIdentifierRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'chain': SuiChainUniqueIdToJSON(value['chain']),
    };
}

