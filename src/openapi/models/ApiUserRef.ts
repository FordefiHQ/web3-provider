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
import type { UserRole } from './UserRole';
import {
    UserRoleFromJSON,
    UserRoleFromJSONTyped,
    UserRoleToJSON,
} from './UserRole';

/**
 * 
 * @export
 * @interface ApiUserRef
 */
export interface ApiUserRef {
    /**
     * 
     * @type {string}
     * @memberof ApiUserRef
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ApiUserRef
     */
    userType: ApiUserRefUserTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiUserRef
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ApiUserRef
     */
    state: ApiUserRefStateEnum;
    /**
     * 
     * @type {UserRole}
     * @memberof ApiUserRef
     */
    role: UserRole;
}


/**
 * @export
 */
export const ApiUserRefUserTypeEnum = {
    apiUser: 'api_user'
} as const;
export type ApiUserRefUserTypeEnum = typeof ApiUserRefUserTypeEnum[keyof typeof ApiUserRefUserTypeEnum];

/**
 * @export
 */
export const ApiUserRefStateEnum = {
    active: 'active',
    deleted: 'deleted'
} as const;
export type ApiUserRefStateEnum = typeof ApiUserRefStateEnum[keyof typeof ApiUserRefStateEnum];


/**
 * Check if a given object implements the ApiUserRef interface.
 */
export function instanceOfApiUserRef(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "userType" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "role" in value;

    return isInstance;
}

export function ApiUserRefFromJSON(json: any): ApiUserRef {
    return ApiUserRefFromJSONTyped(json, false);
}

export function ApiUserRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiUserRef {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userType': json['user_type'],
        'name': json['name'],
        'state': json['state'],
        'role': UserRoleFromJSON(json['role']),
    };
}

export function ApiUserRefToJSON(value?: ApiUserRef | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'user_type': value.userType,
        'name': value.name,
        'state': value.state,
        'role': UserRoleToJSON(value.role),
    };
}

