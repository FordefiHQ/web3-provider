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
import type { TonChainUniqueId } from './TonChainUniqueId';
import {
    TonChainUniqueIdFromJSON,
    TonChainUniqueIdFromJSONTyped,
    TonChainUniqueIdToJSON,
} from './TonChainUniqueId';

/**
 * 
 * @export
 * @interface TonNativeAssetIdentifierRequest
 */
export interface TonNativeAssetIdentifierRequest {
    /**
     * 
     * @type {string}
     * @memberof TonNativeAssetIdentifierRequest
     */
    type: TonNativeAssetIdentifierRequestTypeEnum;
    /**
     * 
     * @type {TonChainUniqueId}
     * @memberof TonNativeAssetIdentifierRequest
     */
    chain: TonChainUniqueId;
}


/**
 * @export
 */
export const TonNativeAssetIdentifierRequestTypeEnum = {
    native: 'native'
} as const;
export type TonNativeAssetIdentifierRequestTypeEnum = typeof TonNativeAssetIdentifierRequestTypeEnum[keyof typeof TonNativeAssetIdentifierRequestTypeEnum];


/**
 * Check if a given object implements the TonNativeAssetIdentifierRequest interface.
 */
export function instanceOfTonNativeAssetIdentifierRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "chain" in value;

    return isInstance;
}

export function TonNativeAssetIdentifierRequestFromJSON(json: any): TonNativeAssetIdentifierRequest {
    return TonNativeAssetIdentifierRequestFromJSONTyped(json, false);
}

export function TonNativeAssetIdentifierRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonNativeAssetIdentifierRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'chain': TonChainUniqueIdFromJSON(json['chain']),
    };
}

export function TonNativeAssetIdentifierRequestToJSON(value?: TonNativeAssetIdentifierRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'chain': TonChainUniqueIdToJSON(value.chain),
    };
}

