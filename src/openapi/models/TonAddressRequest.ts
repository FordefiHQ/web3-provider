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
 * @interface TonAddressRequest
 */
export interface TonAddressRequest {
    /**
     * 
     * @type {TonChainUniqueId}
     * @memberof TonAddressRequest
     */
    chain: TonChainUniqueId;
    /**
     * 
     * @type {string}
     * @memberof TonAddressRequest
     */
    base64UrlRepr: string;
}

/**
 * Check if a given object implements the TonAddressRequest interface.
 */
export function instanceOfTonAddressRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "base64UrlRepr" in value;

    return isInstance;
}

export function TonAddressRequestFromJSON(json: any): TonAddressRequest {
    return TonAddressRequestFromJSONTyped(json, false);
}

export function TonAddressRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonAddressRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chain': TonChainUniqueIdFromJSON(json['chain']),
        'base64UrlRepr': json['base64_url_repr'],
    };
}

export function TonAddressRequestToJSON(value?: TonAddressRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chain': TonChainUniqueIdToJSON(value.chain),
        'base64_url_repr': value.base64UrlRepr,
    };
}

