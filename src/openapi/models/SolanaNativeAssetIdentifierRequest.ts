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
import type { SolanaChainUniqueId } from './SolanaChainUniqueId';
import {
    SolanaChainUniqueIdFromJSON,
    SolanaChainUniqueIdFromJSONTyped,
    SolanaChainUniqueIdToJSON,
} from './SolanaChainUniqueId';

/**
 * 
 * @export
 * @interface SolanaNativeAssetIdentifierRequest
 */
export interface SolanaNativeAssetIdentifierRequest {
    /**
     * 
     * @type {string}
     * @memberof SolanaNativeAssetIdentifierRequest
     */
    type: SolanaNativeAssetIdentifierRequestTypeEnum;
    /**
     * 
     * @type {SolanaChainUniqueId}
     * @memberof SolanaNativeAssetIdentifierRequest
     */
    chain: SolanaChainUniqueId;
}


/**
 * @export
 */
export const SolanaNativeAssetIdentifierRequestTypeEnum = {
    native: 'native'
} as const;
export type SolanaNativeAssetIdentifierRequestTypeEnum = typeof SolanaNativeAssetIdentifierRequestTypeEnum[keyof typeof SolanaNativeAssetIdentifierRequestTypeEnum];


/**
 * Check if a given object implements the SolanaNativeAssetIdentifierRequest interface.
 */
export function instanceOfSolanaNativeAssetIdentifierRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "chain" in value;

    return isInstance;
}

export function SolanaNativeAssetIdentifierRequestFromJSON(json: any): SolanaNativeAssetIdentifierRequest {
    return SolanaNativeAssetIdentifierRequestFromJSONTyped(json, false);
}

export function SolanaNativeAssetIdentifierRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolanaNativeAssetIdentifierRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'chain': SolanaChainUniqueIdFromJSON(json['chain']),
    };
}

export function SolanaNativeAssetIdentifierRequestToJSON(value?: SolanaNativeAssetIdentifierRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'chain': SolanaChainUniqueIdToJSON(value.chain),
    };
}

