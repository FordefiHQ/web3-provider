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
import type { SolanaChainUniqueId } from './SolanaChainUniqueId';
import {
    SolanaChainUniqueIdFromJSON,
    SolanaChainUniqueIdFromJSONTyped,
    SolanaChainUniqueIdToJSON,
    SolanaChainUniqueIdToJSONTyped,
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



/**
 * Check if a given object implements the SolanaAddressRequest interface.
 */
export function instanceOfSolanaAddressRequest(value: object): value is SolanaAddressRequest {
    if (!('chain' in value) || value['chain'] === undefined) return false;
    if (!('base58Repr' in value) || value['base58Repr'] === undefined) return false;
    return true;
}

export function SolanaAddressRequestFromJSON(json: any): SolanaAddressRequest {
    return SolanaAddressRequestFromJSONTyped(json, false);
}

export function SolanaAddressRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolanaAddressRequest {
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

export function SolanaAddressRequestToJSONTyped(value?: SolanaAddressRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chain': SolanaChainUniqueIdToJSON(value['chain']),
        'base58_repr': value['base58Repr'],
    };
}

