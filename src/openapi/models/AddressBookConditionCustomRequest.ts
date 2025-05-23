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
 * @interface AddressBookConditionCustomRequest
 */
export interface AddressBookConditionCustomRequest {
    /**
     * 
     * @type {string}
     * @memberof AddressBookConditionCustomRequest
     */
    type: AddressBookConditionCustomRequestTypeEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof AddressBookConditionCustomRequest
     */
    contactIds?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof AddressBookConditionCustomRequest
     */
    groupIds?: Array<string>;
}


/**
 * @export
 */
export const AddressBookConditionCustomRequestTypeEnum = {
    custom: 'custom'
} as const;
export type AddressBookConditionCustomRequestTypeEnum = typeof AddressBookConditionCustomRequestTypeEnum[keyof typeof AddressBookConditionCustomRequestTypeEnum];


/**
 * Check if a given object implements the AddressBookConditionCustomRequest interface.
 */
export function instanceOfAddressBookConditionCustomRequest(value: object): value is AddressBookConditionCustomRequest {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function AddressBookConditionCustomRequestFromJSON(json: any): AddressBookConditionCustomRequest {
    return AddressBookConditionCustomRequestFromJSONTyped(json, false);
}

export function AddressBookConditionCustomRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressBookConditionCustomRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'contactIds': json['contact_ids'] == null ? undefined : json['contact_ids'],
        'groupIds': json['group_ids'] == null ? undefined : json['group_ids'],
    };
}

export function AddressBookConditionCustomRequestToJSON(json: any): AddressBookConditionCustomRequest {
    return AddressBookConditionCustomRequestToJSONTyped(json, false);
}

export function AddressBookConditionCustomRequestToJSONTyped(value?: AddressBookConditionCustomRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'contact_ids': value['contactIds'],
        'group_ids': value['groupIds'],
    };
}

