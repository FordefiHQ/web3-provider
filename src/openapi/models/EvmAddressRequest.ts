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
/**
 * 
 * @export
 * @interface EvmAddressRequest
 */
export interface EvmAddressRequest {
    /**
     * 
     * @type {string}
     * @memberof EvmAddressRequest
     */
    chain: string;
    /**
     * 
     * @type {string}
     * @memberof EvmAddressRequest
     */
    hexRepr: string;
}

/**
 * Check if a given object implements the EvmAddressRequest interface.
 */
export function instanceOfEvmAddressRequest(value: object): value is EvmAddressRequest {
    if (!('chain' in value) || value['chain'] === undefined) return false;
    if (!('hexRepr' in value) || value['hexRepr'] === undefined) return false;
    return true;
}

export function EvmAddressRequestFromJSON(json: any): EvmAddressRequest {
    return EvmAddressRequestFromJSONTyped(json, false);
}

export function EvmAddressRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvmAddressRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'chain': json['chain'],
        'hexRepr': json['hex_repr'],
    };
}

export function EvmAddressRequestToJSON(json: any): EvmAddressRequest {
    return EvmAddressRequestToJSONTyped(json, false);
}

export function EvmAddressRequestToJSONTyped(value?: EvmAddressRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chain': value['chain'],
        'hex_repr': value['hexRepr'],
    };
}

