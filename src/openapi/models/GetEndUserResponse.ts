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
 * @interface GetEndUserResponse
 */
export interface GetEndUserResponse {
    /**
     * 
     * @type {string}
     * @memberof GetEndUserResponse
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof GetEndUserResponse
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof GetEndUserResponse
     */
    modifiedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof GetEndUserResponse
     */
    externalId: string;
    /**
     * 
     * @type {Date}
     * @memberof GetEndUserResponse
     */
    lastLoginAt: Date;
}

/**
 * Check if a given object implements the GetEndUserResponse interface.
 */
export function instanceOfGetEndUserResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "modifiedAt" in value;
    isInstance = isInstance && "externalId" in value;
    isInstance = isInstance && "lastLoginAt" in value;

    return isInstance;
}

export function GetEndUserResponseFromJSON(json: any): GetEndUserResponse {
    return GetEndUserResponseFromJSONTyped(json, false);
}

export function GetEndUserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetEndUserResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['created_at'])),
        'modifiedAt': (new Date(json['modified_at'])),
        'externalId': json['external_id'],
        'lastLoginAt': (new Date(json['last_login_at'])),
    };
}

export function GetEndUserResponseToJSON(value?: GetEndUserResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'created_at': (value.createdAt.toISOString()),
        'modified_at': (value.modifiedAt.toISOString()),
        'external_id': value.externalId,
        'last_login_at': (value.lastLoginAt.toISOString()),
    };
}

