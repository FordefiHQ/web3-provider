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
import type { AddressBookConditionCondition } from './AddressBookConditionCondition';
import {
    AddressBookConditionConditionFromJSON,
    AddressBookConditionConditionFromJSONTyped,
    AddressBookConditionConditionToJSON,
    AddressBookConditionConditionToJSONTyped,
} from './AddressBookConditionCondition';

/**
 * 
 * @export
 * @interface AddressBookCondition
 */
export interface AddressBookCondition {
    /**
     * 
     * @type {AddressBookConditionCondition}
     * @memberof AddressBookCondition
     */
    condition: AddressBookConditionCondition;
}

/**
 * Check if a given object implements the AddressBookCondition interface.
 */
export function instanceOfAddressBookCondition(value: object): value is AddressBookCondition {
    if (!('condition' in value) || value['condition'] === undefined) return false;
    return true;
}

export function AddressBookConditionFromJSON(json: any): AddressBookCondition {
    return AddressBookConditionFromJSONTyped(json, false);
}

export function AddressBookConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressBookCondition {
    if (json == null) {
        return json;
    }
    return {
        
        'condition': AddressBookConditionConditionFromJSON(json['condition']),
    };
}

export function AddressBookConditionToJSON(json: any): AddressBookCondition {
    return AddressBookConditionToJSONTyped(json, false);
}

export function AddressBookConditionToJSONTyped(value?: AddressBookCondition | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'condition': AddressBookConditionConditionToJSON(value['condition']),
    };
}

