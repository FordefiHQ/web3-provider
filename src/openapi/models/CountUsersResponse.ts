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
/**
 * 
 * @export
 * @interface CountUsersResponse
 */
export interface CountUsersResponse {
    /**
     * 
     * @type {number}
     * @memberof CountUsersResponse
     */
    count: number;
}

/**
 * Check if a given object implements the CountUsersResponse interface.
 */
export function instanceOfCountUsersResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "count" in value;

    return isInstance;
}

export function CountUsersResponseFromJSON(json: any): CountUsersResponse {
    return CountUsersResponseFromJSONTyped(json, false);
}

export function CountUsersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CountUsersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': json['count'],
    };
}

export function CountUsersResponseToJSON(value?: CountUsersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
    };
}

