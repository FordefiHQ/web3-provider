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
import type { EvmAddress } from './EvmAddress';
import {
    EvmAddressFromJSON,
    EvmAddressFromJSONTyped,
    EvmAddressToJSON,
    EvmAddressToJSONTyped,
} from './EvmAddress';

/**
 * 
 * @export
 * @interface Erc1155
 */
export interface Erc1155 {
    /**
     * 
     * @type {EvmAddress}
     * @memberof Erc1155
     */
    address: EvmAddress;
    /**
     * 
     * @type {string}
     * @memberof Erc1155
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Erc1155
     */
    symbol: string;
    /**
     * 
     * @type {string}
     * @memberof Erc1155
     */
    type: Erc1155TypeEnum;
}


/**
 * @export
 */
export const Erc1155TypeEnum = {
    erc1155: 'erc1155'
} as const;
export type Erc1155TypeEnum = typeof Erc1155TypeEnum[keyof typeof Erc1155TypeEnum];


/**
 * Check if a given object implements the Erc1155 interface.
 */
export function instanceOfErc1155(value: object): value is Erc1155 {
    if (!('address' in value) || value['address'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function Erc1155FromJSON(json: any): Erc1155 {
    return Erc1155FromJSONTyped(json, false);
}

export function Erc1155FromJSONTyped(json: any, ignoreDiscriminator: boolean): Erc1155 {
    if (json == null) {
        return json;
    }
    return {
        
        'address': EvmAddressFromJSON(json['address']),
        'name': json['name'],
        'symbol': json['symbol'],
        'type': json['type'],
    };
}

export function Erc1155ToJSON(json: any): Erc1155 {
    return Erc1155ToJSONTyped(json, false);
}

export function Erc1155ToJSONTyped(value?: Erc1155 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'address': EvmAddressToJSON(value['address']),
        'name': value['name'],
        'symbol': value['symbol'],
        'type': value['type'],
    };
}

