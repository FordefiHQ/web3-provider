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
import type { AddressBookContact } from './AddressBookContact';
import {
    AddressBookContactFromJSON,
    AddressBookContactFromJSONTyped,
    AddressBookContactToJSON,
} from './AddressBookContact';

/**
 * 
 * @export
 * @interface AddressBookGroupChanges
 */
export interface AddressBookGroupChanges {
    /**
     * 
     * @type {string}
     * @memberof AddressBookGroupChanges
     */
    changeRequestId?: string;
    /**
     * 
     * @type {Array<AddressBookContact>}
     * @memberof AddressBookGroupChanges
     */
    addedContacts: Array<AddressBookContact>;
    /**
     * 
     * @type {Array<AddressBookContact>}
     * @memberof AddressBookGroupChanges
     */
    removedContacts: Array<AddressBookContact>;
    /**
     * 
     * @type {string}
     * @memberof AddressBookGroupChanges
     */
    newName: string;
}

/**
 * Check if a given object implements the AddressBookGroupChanges interface.
 */
export function instanceOfAddressBookGroupChanges(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "addedContacts" in value;
    isInstance = isInstance && "removedContacts" in value;
    isInstance = isInstance && "newName" in value;

    return isInstance;
}

export function AddressBookGroupChangesFromJSON(json: any): AddressBookGroupChanges {
    return AddressBookGroupChangesFromJSONTyped(json, false);
}

export function AddressBookGroupChangesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressBookGroupChanges {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changeRequestId': !exists(json, 'change_request_id') ? undefined : json['change_request_id'],
        'addedContacts': ((json['added_contacts'] as Array<any>).map(AddressBookContactFromJSON)),
        'removedContacts': ((json['removed_contacts'] as Array<any>).map(AddressBookContactFromJSON)),
        'newName': json['new_name'],
    };
}

export function AddressBookGroupChangesToJSON(value?: AddressBookGroupChanges | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'change_request_id': value.changeRequestId,
        'added_contacts': ((value.addedContacts as Array<any>).map(AddressBookContactToJSON)),
        'removed_contacts': ((value.removedContacts as Array<any>).map(AddressBookContactToJSON)),
        'new_name': value.newName,
    };
}

