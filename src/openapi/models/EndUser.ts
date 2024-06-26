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
 * @interface EndUser
 */
export interface EndUser {
    /**
     * 
     * @type {string}
     * @memberof EndUser
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof EndUser
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof EndUser
     */
    modifiedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof EndUser
     */
    externalId: string;
    /**
     * 
     * @type {Date}
     * @memberof EndUser
     */
    lastLoginAt: Date;
}

/**
 * Check if a given object implements the EndUser interface.
 */
export function instanceOfEndUser(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "modifiedAt" in value;
    isInstance = isInstance && "externalId" in value;
    isInstance = isInstance && "lastLoginAt" in value;

    return isInstance;
}

export function EndUserFromJSON(json: any): EndUser {
    return EndUserFromJSONTyped(json, false);
}

export function EndUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUser {
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

export function EndUserToJSON(value?: EndUser | null): any {
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

