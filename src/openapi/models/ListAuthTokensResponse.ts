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
import type { PartialErrorResponse } from './PartialErrorResponse';
import {
    PartialErrorResponseFromJSON,
    PartialErrorResponseFromJSONTyped,
    PartialErrorResponseToJSON,
    PartialErrorResponseToJSONTyped,
} from './PartialErrorResponse';
import type { AuthToken } from './AuthToken';
import {
    AuthTokenFromJSON,
    AuthTokenFromJSONTyped,
    AuthTokenToJSON,
    AuthTokenToJSONTyped,
} from './AuthToken';

/**
 * 
 * @export
 * @interface ListAuthTokensResponse
 */
export interface ListAuthTokensResponse {
    /**
     * 
     * @type {PartialErrorResponse}
     * @memberof ListAuthTokensResponse
     */
    partialError?: PartialErrorResponse;
    /**
     * 
     * @type {number}
     * @memberof ListAuthTokensResponse
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof ListAuthTokensResponse
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof ListAuthTokensResponse
     */
    size: number;
    /**
     * 
     * @type {Array<AuthToken>}
     * @memberof ListAuthTokensResponse
     */
    authTokens: Array<AuthToken>;
}

/**
 * Check if a given object implements the ListAuthTokensResponse interface.
 */
export function instanceOfListAuthTokensResponse(value: object): value is ListAuthTokensResponse {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('page' in value) || value['page'] === undefined) return false;
    if (!('size' in value) || value['size'] === undefined) return false;
    if (!('authTokens' in value) || value['authTokens'] === undefined) return false;
    return true;
}

export function ListAuthTokensResponseFromJSON(json: any): ListAuthTokensResponse {
    return ListAuthTokensResponseFromJSONTyped(json, false);
}

export function ListAuthTokensResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListAuthTokensResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'partialError': json['partial_error'] == null ? undefined : PartialErrorResponseFromJSON(json['partial_error']),
        'total': json['total'],
        'page': json['page'],
        'size': json['size'],
        'authTokens': ((json['auth_tokens'] as Array<any>).map(AuthTokenFromJSON)),
    };
}

export function ListAuthTokensResponseToJSON(json: any): ListAuthTokensResponse {
    return ListAuthTokensResponseToJSONTyped(json, false);
}

export function ListAuthTokensResponseToJSONTyped(value?: ListAuthTokensResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'partial_error': PartialErrorResponseToJSON(value['partialError']),
        'total': value['total'],
        'page': value['page'],
        'size': value['size'],
        'auth_tokens': ((value['authTokens'] as Array<any>).map(AuthTokenToJSON)),
    };
}

