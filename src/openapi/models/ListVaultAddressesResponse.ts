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
import type { UtxoVaultAddress } from './UtxoVaultAddress';
import {
    UtxoVaultAddressFromJSON,
    UtxoVaultAddressFromJSONTyped,
    UtxoVaultAddressToJSON,
} from './UtxoVaultAddress';

/**
 * 
 * @export
 * @interface ListVaultAddressesResponse
 */
export interface ListVaultAddressesResponse {
    /**
     * 
     * @type {number}
     * @memberof ListVaultAddressesResponse
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof ListVaultAddressesResponse
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof ListVaultAddressesResponse
     */
    size: number;
    /**
     * 
     * @type {Array<UtxoVaultAddress>}
     * @memberof ListVaultAddressesResponse
     */
    addresses: Array<UtxoVaultAddress>;
}

/**
 * Check if a given object implements the ListVaultAddressesResponse interface.
 */
export function instanceOfListVaultAddressesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "total" in value;
    isInstance = isInstance && "page" in value;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "addresses" in value;

    return isInstance;
}

export function ListVaultAddressesResponseFromJSON(json: any): ListVaultAddressesResponse {
    return ListVaultAddressesResponseFromJSONTyped(json, false);
}

export function ListVaultAddressesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListVaultAddressesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'total': json['total'],
        'page': json['page'],
        'size': json['size'],
        'addresses': ((json['addresses'] as Array<any>).map(UtxoVaultAddressFromJSON)),
    };
}

export function ListVaultAddressesResponseToJSON(value?: ListVaultAddressesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'total': value.total,
        'page': value.page,
        'size': value.size,
        'addresses': ((value.addresses as Array<any>).map(UtxoVaultAddressToJSON)),
    };
}

