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

import type { SolanaChainUniqueId } from './SolanaChainUniqueId';
import {
    SolanaChainUniqueIdFromJSON,
    SolanaChainUniqueIdToJSON,
} from './SolanaChainUniqueId';

/**
 * 
 * @export
 * @interface SolanaAddressRequest
 */
export interface SolanaAddressRequest {
    /**
     * 
     * @type {SolanaChainUniqueId}
     * @memberof SolanaAddressRequest
     */
    chain: SolanaChainUniqueId;
    /**
     * 
     * @type {string}
     * @memberof SolanaAddressRequest
     */
    base58Repr: string;
}

export function SolanaAddressRequestFromJSON(json: any): SolanaAddressRequest {
    return SolanaAddressRequestFromJSONTyped(json, false);
}

function SolanaAddressRequestFromJSONTyped(json: any, _ignoreDiscriminator: boolean): SolanaAddressRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'chain': SolanaChainUniqueIdFromJSON(json['chain']),
        'base58Repr': json['base58_repr'],
    };
}

export function SolanaAddressRequestToJSON(json: any): SolanaAddressRequest {
    return SolanaAddressRequestToJSONTyped(json, false);
}

function SolanaAddressRequestToJSONTyped(value?: SolanaAddressRequest | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chain': SolanaChainUniqueIdToJSON(value['chain']),
        'base58_repr': value['base58Repr'],
    };
}

