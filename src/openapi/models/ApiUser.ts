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
import type { UserGroupRef } from './UserGroupRef';
import {
    UserGroupRefFromJSON,
    UserGroupRefFromJSONTyped,
    UserGroupRefToJSON,
} from './UserGroupRef';
import type { UserRole } from './UserRole';
import {
    UserRoleFromJSON,
    UserRoleFromJSONTyped,
    UserRoleToJSON,
} from './UserRole';

/**
 * 
 * @export
 * @interface ApiUser
 */
export interface ApiUser {
    /**
     * 
     * @type {string}
     * @memberof ApiUser
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof ApiUser
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof ApiUser
     */
    modifiedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ApiUser
     */
    userType: ApiUserUserTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiUser
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ApiUser
     */
    state: ApiUserStateEnum;
    /**
     * 
     * @type {UserRole}
     * @memberof ApiUser
     */
    role: UserRole;
    /**
     * 
     * @type {Array<UserGroupRef>}
     * @memberof ApiUser
     */
    userGroups?: Array<UserGroupRef>;
    /**
     * 
     * @type {Array<UserGroupRef>}
     * @memberof ApiUser
     */
    pendingAdditionToUserGroups?: Array<UserGroupRef>;
    /**
     * 
     * @type {Array<UserGroupRef>}
     * @memberof ApiUser
     */
    pendingRemovalFromUserGroups?: Array<UserGroupRef>;
}


/**
 * @export
 */
export const ApiUserUserTypeEnum = {
    apiUser: 'api_user'
} as const;
export type ApiUserUserTypeEnum = typeof ApiUserUserTypeEnum[keyof typeof ApiUserUserTypeEnum];

/**
 * @export
 */
export const ApiUserStateEnum = {
    active: 'active',
    deleted: 'deleted'
} as const;
export type ApiUserStateEnum = typeof ApiUserStateEnum[keyof typeof ApiUserStateEnum];


/**
 * Check if a given object implements the ApiUser interface.
 */
export function instanceOfApiUser(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "modifiedAt" in value;
    isInstance = isInstance && "userType" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "role" in value;

    return isInstance;
}

export function ApiUserFromJSON(json: any): ApiUser {
    return ApiUserFromJSONTyped(json, false);
}

export function ApiUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['created_at'])),
        'modifiedAt': (new Date(json['modified_at'])),
        'userType': json['user_type'],
        'name': json['name'],
        'state': json['state'],
        'role': UserRoleFromJSON(json['role']),
        'userGroups': !exists(json, 'user_groups') ? undefined : ((json['user_groups'] as Array<any>).map(UserGroupRefFromJSON)),
        'pendingAdditionToUserGroups': !exists(json, 'pending_addition_to_user_groups') ? undefined : ((json['pending_addition_to_user_groups'] as Array<any>).map(UserGroupRefFromJSON)),
        'pendingRemovalFromUserGroups': !exists(json, 'pending_removal_from_user_groups') ? undefined : ((json['pending_removal_from_user_groups'] as Array<any>).map(UserGroupRefFromJSON)),
    };
}

export function ApiUserToJSON(value?: ApiUser | null): any {
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
        'user_type': value.userType,
        'name': value.name,
        'state': value.state,
        'role': UserRoleToJSON(value.role),
        'user_groups': value.userGroups === undefined ? undefined : ((value.userGroups as Array<any>).map(UserGroupRefToJSON)),
        'pending_addition_to_user_groups': value.pendingAdditionToUserGroups === undefined ? undefined : ((value.pendingAdditionToUserGroups as Array<any>).map(UserGroupRefToJSON)),
        'pending_removal_from_user_groups': value.pendingRemovalFromUserGroups === undefined ? undefined : ((value.pendingRemovalFromUserGroups as Array<any>).map(UserGroupRefToJSON)),
    };
}

