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

import type { AptosChainUniqueId } from './AptosChainUniqueId';
import {
    AptosChainUniqueIdFromJSON,
    AptosChainUniqueIdToJSON,
} from './AptosChainUniqueId';

/**
 * 
 * @export
 * @interface AptosNewCoinTypeRequest
 */
export interface AptosNewCoinTypeRequest {
    /**
     * 
     * @type {AptosChainUniqueId}
     * @memberof AptosNewCoinTypeRequest
     */
    chain: AptosChainUniqueId;
    /**
     * 
     * @type {string}
     * @memberof AptosNewCoinTypeRequest
     */
    metadataAddress: string;
}

export function AptosNewCoinTypeRequestFromJSON(json: any): AptosNewCoinTypeRequest {
    return AptosNewCoinTypeRequestFromJSONTyped(json, false);
}

function AptosNewCoinTypeRequestFromJSONTyped(json: any, _ignoreDiscriminator: boolean): AptosNewCoinTypeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'chain': AptosChainUniqueIdFromJSON(json['chain']),
        'metadataAddress': json['metadata_address'],
    };
}

export function AptosNewCoinTypeRequestToJSON(json: any): AptosNewCoinTypeRequest {
    return AptosNewCoinTypeRequestToJSONTyped(json, false);
}

function AptosNewCoinTypeRequestToJSONTyped(value?: AptosNewCoinTypeRequest | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chain': AptosChainUniqueIdToJSON(value['chain']),
        'metadata_address': value['metadataAddress'],
    };
}

