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
import type { UserExt } from './UserExt';
import {
    UserExtFromJSON,
    UserExtFromJSONTyped,
    UserExtToJSON,
    UserExtToJSONTyped,
} from './UserExt';
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
 * @interface ListUsersExtResponse
 */
export interface ListUsersExtResponse {
    /**
     * 
     * @type {PartialErrorResponse}
     * @memberof ListUsersExtResponse
     */
    partialError?: PartialErrorResponse;
    /**
     * 
     * @type {number}
     * @memberof ListUsersExtResponse
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof ListUsersExtResponse
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof ListUsersExtResponse
     */
    size: number;
    /**
     * 
     * @type {Array<UserExt>}
     * @memberof ListUsersExtResponse
     */
    users: Array<UserExt>;
}

/**
 * Check if a given object implements the ListUsersExtResponse interface.
 */
export function instanceOfListUsersExtResponse(value: object): value is ListUsersExtResponse {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('page' in value) || value['page'] === undefined) return false;
    if (!('size' in value) || value['size'] === undefined) return false;
    if (!('users' in value) || value['users'] === undefined) return false;
    return true;
}

export function ListUsersExtResponseFromJSON(json: any): ListUsersExtResponse {
    return ListUsersExtResponseFromJSONTyped(json, false);
}

export function ListUsersExtResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListUsersExtResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'partialError': json['partial_error'] == null ? undefined : PartialErrorResponseFromJSON(json['partial_error']),
        'total': json['total'],
        'page': json['page'],
        'size': json['size'],
        'users': ((json['users'] as Array<any>).map(UserExtFromJSON)),
    };
}

export function ListUsersExtResponseToJSON(json: any): ListUsersExtResponse {
    return ListUsersExtResponseToJSONTyped(json, false);
}

export function ListUsersExtResponseToJSONTyped(value?: ListUsersExtResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'partial_error': PartialErrorResponseToJSON(value['partialError']),
        'total': value['total'],
        'page': value['page'],
        'size': value['size'],
        'users': ((value['users'] as Array<any>).map(UserExtToJSON)),
    };
}

