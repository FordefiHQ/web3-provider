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
import type { AddressBookGroup } from './AddressBookGroup';
import {
    AddressBookGroupFromJSON,
    AddressBookGroupFromJSONTyped,
    AddressBookGroupToJSON,
    AddressBookGroupToJSONTyped,
} from './AddressBookGroup';
import type { PartialErrorResponse } from './PartialErrorResponse';
import {
    PartialErrorResponseFromJSON,
    PartialErrorResponseFromJSONTyped,
    PartialErrorResponseToJSON,
    PartialErrorResponseToJSONTyped,
} from './PartialErrorResponse';

/**
 * 
 * @export
 * @interface ListAddressBookGroupsResponse
 */
export interface ListAddressBookGroupsResponse {
    /**
     * 
     * @type {PartialErrorResponse}
     * @memberof ListAddressBookGroupsResponse
     */
    partialError?: PartialErrorResponse;
    /**
     * 
     * @type {number}
     * @memberof ListAddressBookGroupsResponse
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof ListAddressBookGroupsResponse
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof ListAddressBookGroupsResponse
     */
    size: number;
    /**
     * 
     * @type {Array<AddressBookGroup>}
     * @memberof ListAddressBookGroupsResponse
     */
    groups: Array<AddressBookGroup>;
}

/**
 * Check if a given object implements the ListAddressBookGroupsResponse interface.
 */
export function instanceOfListAddressBookGroupsResponse(value: object): value is ListAddressBookGroupsResponse {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('page' in value) || value['page'] === undefined) return false;
    if (!('size' in value) || value['size'] === undefined) return false;
    if (!('groups' in value) || value['groups'] === undefined) return false;
    return true;
}

export function ListAddressBookGroupsResponseFromJSON(json: any): ListAddressBookGroupsResponse {
    return ListAddressBookGroupsResponseFromJSONTyped(json, false);
}

export function ListAddressBookGroupsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListAddressBookGroupsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'partialError': json['partial_error'] == null ? undefined : PartialErrorResponseFromJSON(json['partial_error']),
        'total': json['total'],
        'page': json['page'],
        'size': json['size'],
        'groups': ((json['groups'] as Array<any>).map(AddressBookGroupFromJSON)),
    };
}

export function ListAddressBookGroupsResponseToJSON(json: any): ListAddressBookGroupsResponse {
    return ListAddressBookGroupsResponseToJSONTyped(json, false);
}

export function ListAddressBookGroupsResponseToJSONTyped(value?: ListAddressBookGroupsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'partial_error': PartialErrorResponseToJSON(value['partialError']),
        'total': value['total'],
        'page': value['page'],
        'size': value['size'],
        'groups': ((value['groups'] as Array<any>).map(AddressBookGroupToJSON)),
    };
}

