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
import type { StacksChainUniqueId } from './StacksChainUniqueId';
import {
    StacksChainUniqueIdFromJSON,
    StacksChainUniqueIdFromJSONTyped,
    StacksChainUniqueIdToJSON,
    StacksChainUniqueIdToJSONTyped,
} from './StacksChainUniqueId';

/**
 * 
 * @export
 * @interface StacksNativeAssetIdentifierRequest
 */
export interface StacksNativeAssetIdentifierRequest {
    /**
     * 
     * @type {string}
     * @memberof StacksNativeAssetIdentifierRequest
     */
    type: StacksNativeAssetIdentifierRequestTypeEnum;
    /**
     * 
     * @type {StacksChainUniqueId}
     * @memberof StacksNativeAssetIdentifierRequest
     */
    chain: StacksChainUniqueId;
}


/**
 * @export
 */
export const StacksNativeAssetIdentifierRequestTypeEnum = {
    native: 'native'
} as const;
export type StacksNativeAssetIdentifierRequestTypeEnum = typeof StacksNativeAssetIdentifierRequestTypeEnum[keyof typeof StacksNativeAssetIdentifierRequestTypeEnum];


/**
 * Check if a given object implements the StacksNativeAssetIdentifierRequest interface.
 */
export function instanceOfStacksNativeAssetIdentifierRequest(value: object): value is StacksNativeAssetIdentifierRequest {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('chain' in value) || value['chain'] === undefined) return false;
    return true;
}

export function StacksNativeAssetIdentifierRequestFromJSON(json: any): StacksNativeAssetIdentifierRequest {
    return StacksNativeAssetIdentifierRequestFromJSONTyped(json, false);
}

export function StacksNativeAssetIdentifierRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StacksNativeAssetIdentifierRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'chain': StacksChainUniqueIdFromJSON(json['chain']),
    };
}

export function StacksNativeAssetIdentifierRequestToJSON(json: any): StacksNativeAssetIdentifierRequest {
    return StacksNativeAssetIdentifierRequestToJSONTyped(json, false);
}

export function StacksNativeAssetIdentifierRequestToJSONTyped(value?: StacksNativeAssetIdentifierRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'chain': StacksChainUniqueIdToJSON(value['chain']),
    };
}

