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

import type { TronChainUniqueId } from './TronChainUniqueId';
import {
    TronChainUniqueIdFromJSON,
    TronChainUniqueIdToJSON,
} from './TronChainUniqueId';

/**
 * 
 * @export
 * @interface TronAddressRequest
 */
export interface TronAddressRequest {
    /**
     * 
     * @type {TronChainUniqueId}
     * @memberof TronAddressRequest
     */
    chain: TronChainUniqueId;
    /**
     * 
     * @type {string}
     * @memberof TronAddressRequest
     */
    base58Repr: string;
}

export function TronAddressRequestFromJSON(json: any): TronAddressRequest {
    return TronAddressRequestFromJSONTyped(json, false);
}

function TronAddressRequestFromJSONTyped(json: any, _ignoreDiscriminator: boolean): TronAddressRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'chain': TronChainUniqueIdFromJSON(json['chain']),
        'base58Repr': json['base58_repr'],
    };
}

export function TronAddressRequestToJSON(json: any): TronAddressRequest {
    return TronAddressRequestToJSONTyped(json, false);
}

function TronAddressRequestToJSONTyped(value?: TronAddressRequest | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chain': TronChainUniqueIdToJSON(value['chain']),
        'base58_repr': value['base58Repr'],
    };
}

