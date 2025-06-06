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
import type { EnrichedUtxoAddress } from './EnrichedUtxoAddress';
import {
    EnrichedUtxoAddressFromJSON,
    EnrichedUtxoAddressFromJSONTyped,
    EnrichedUtxoAddressToJSON,
    EnrichedUtxoAddressToJSONTyped,
} from './EnrichedUtxoAddress';

/**
 * 
 * @export
 * @interface UtxoInput
 */
export interface UtxoInput {
    /**
     * 
     * @type {EnrichedUtxoAddress}
     * @memberof UtxoInput
     */
    address: EnrichedUtxoAddress;
    /**
     * 
     * @type {string}
     * @memberof UtxoInput
     */
    value: string;
    /**
     * 
     * @type {boolean}
     * @memberof UtxoInput
     */
    shouldSign?: boolean;
}

/**
 * Check if a given object implements the UtxoInput interface.
 */
export function instanceOfUtxoInput(value: object): value is UtxoInput {
    if (!('address' in value) || value['address'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function UtxoInputFromJSON(json: any): UtxoInput {
    return UtxoInputFromJSONTyped(json, false);
}

export function UtxoInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): UtxoInput {
    if (json == null) {
        return json;
    }
    return {
        
        'address': EnrichedUtxoAddressFromJSON(json['address']),
        'value': json['value'],
        'shouldSign': json['should_sign'] == null ? undefined : json['should_sign'],
    };
}

export function UtxoInputToJSON(json: any): UtxoInput {
    return UtxoInputToJSONTyped(json, false);
}

export function UtxoInputToJSONTyped(value?: UtxoInput | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'address': EnrichedUtxoAddressToJSON(value['address']),
        'value': value['value'],
        'should_sign': value['shouldSign'],
    };
}

