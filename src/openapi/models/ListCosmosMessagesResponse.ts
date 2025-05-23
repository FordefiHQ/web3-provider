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

/**
 * 
 * @export
 * @interface ListCosmosMessagesResponse
 */
export interface ListCosmosMessagesResponse {
    /**
     * 
     * @type {PartialErrorResponse}
     * @memberof ListCosmosMessagesResponse
     */
    partialError?: PartialErrorResponse;
    /**
     * 
     * @type {number}
     * @memberof ListCosmosMessagesResponse
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof ListCosmosMessagesResponse
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof ListCosmosMessagesResponse
     */
    size: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListCosmosMessagesResponse
     */
    messages: Array<string>;
}

/**
 * Check if a given object implements the ListCosmosMessagesResponse interface.
 */
export function instanceOfListCosmosMessagesResponse(value: object): value is ListCosmosMessagesResponse {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('page' in value) || value['page'] === undefined) return false;
    if (!('size' in value) || value['size'] === undefined) return false;
    if (!('messages' in value) || value['messages'] === undefined) return false;
    return true;
}

export function ListCosmosMessagesResponseFromJSON(json: any): ListCosmosMessagesResponse {
    return ListCosmosMessagesResponseFromJSONTyped(json, false);
}

export function ListCosmosMessagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListCosmosMessagesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'partialError': json['partial_error'] == null ? undefined : PartialErrorResponseFromJSON(json['partial_error']),
        'total': json['total'],
        'page': json['page'],
        'size': json['size'],
        'messages': json['messages'],
    };
}

export function ListCosmosMessagesResponseToJSON(json: any): ListCosmosMessagesResponse {
    return ListCosmosMessagesResponseToJSONTyped(json, false);
}

export function ListCosmosMessagesResponseToJSONTyped(value?: ListCosmosMessagesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'partial_error': PartialErrorResponseToJSON(value['partialError']),
        'total': value['total'],
        'page': value['page'],
        'size': value['size'],
        'messages': value['messages'],
    };
}

