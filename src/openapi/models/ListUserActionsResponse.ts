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
import type { UserAction } from './UserAction';
import {
    UserActionFromJSON,
    UserActionFromJSONTyped,
    UserActionToJSON,
    UserActionToJSONTyped,
} from './UserAction';
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
 * @interface ListUserActionsResponse
 */
export interface ListUserActionsResponse {
    /**
     * 
     * @type {PartialErrorResponse}
     * @memberof ListUserActionsResponse
     */
    partialError?: PartialErrorResponse;
    /**
     * 
     * @type {number}
     * @memberof ListUserActionsResponse
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof ListUserActionsResponse
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof ListUserActionsResponse
     */
    size: number;
    /**
     * 
     * @type {Array<UserAction>}
     * @memberof ListUserActionsResponse
     */
    actions: Array<UserAction>;
}

/**
 * Check if a given object implements the ListUserActionsResponse interface.
 */
export function instanceOfListUserActionsResponse(value: object): value is ListUserActionsResponse {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('page' in value) || value['page'] === undefined) return false;
    if (!('size' in value) || value['size'] === undefined) return false;
    if (!('actions' in value) || value['actions'] === undefined) return false;
    return true;
}

export function ListUserActionsResponseFromJSON(json: any): ListUserActionsResponse {
    return ListUserActionsResponseFromJSONTyped(json, false);
}

export function ListUserActionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListUserActionsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'partialError': json['partial_error'] == null ? undefined : PartialErrorResponseFromJSON(json['partial_error']),
        'total': json['total'],
        'page': json['page'],
        'size': json['size'],
        'actions': ((json['actions'] as Array<any>).map(UserActionFromJSON)),
    };
}

export function ListUserActionsResponseToJSON(json: any): ListUserActionsResponse {
    return ListUserActionsResponseToJSONTyped(json, false);
}

export function ListUserActionsResponseToJSONTyped(value?: ListUserActionsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'partial_error': PartialErrorResponseToJSON(value['partialError']),
        'total': value['total'],
        'page': value['page'],
        'size': value['size'],
        'actions': ((value['actions'] as Array<any>).map(UserActionToJSON)),
    };
}

