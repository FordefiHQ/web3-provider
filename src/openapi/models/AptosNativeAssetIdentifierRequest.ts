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
import type { AptosChainUniqueId } from './AptosChainUniqueId';
import {
    AptosChainUniqueIdFromJSON,
    AptosChainUniqueIdFromJSONTyped,
    AptosChainUniqueIdToJSON,
} from './AptosChainUniqueId';

/**
 * 
 * @export
 * @interface AptosNativeAssetIdentifierRequest
 */
export interface AptosNativeAssetIdentifierRequest {
    /**
     * 
     * @type {string}
     * @memberof AptosNativeAssetIdentifierRequest
     */
    type: AptosNativeAssetIdentifierRequestTypeEnum;
    /**
     * 
     * @type {AptosChainUniqueId}
     * @memberof AptosNativeAssetIdentifierRequest
     */
    chain: AptosChainUniqueId;
}


/**
 * @export
 */
export const AptosNativeAssetIdentifierRequestTypeEnum = {
    native: 'native'
} as const;
export type AptosNativeAssetIdentifierRequestTypeEnum = typeof AptosNativeAssetIdentifierRequestTypeEnum[keyof typeof AptosNativeAssetIdentifierRequestTypeEnum];


/**
 * Check if a given object implements the AptosNativeAssetIdentifierRequest interface.
 */
export function instanceOfAptosNativeAssetIdentifierRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "chain" in value;

    return isInstance;
}

export function AptosNativeAssetIdentifierRequestFromJSON(json: any): AptosNativeAssetIdentifierRequest {
    return AptosNativeAssetIdentifierRequestFromJSONTyped(json, false);
}

export function AptosNativeAssetIdentifierRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AptosNativeAssetIdentifierRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'chain': AptosChainUniqueIdFromJSON(json['chain']),
    };
}

export function AptosNativeAssetIdentifierRequestToJSON(value?: AptosNativeAssetIdentifierRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'chain': AptosChainUniqueIdToJSON(value.chain),
    };
}

