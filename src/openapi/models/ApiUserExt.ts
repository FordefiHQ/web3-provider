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
 * @interface ApiUserExt
 */
export interface ApiUserExt {
    /**
     * 
     * @type {string}
     * @memberof ApiUserExt
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof ApiUserExt
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof ApiUserExt
     */
    modifiedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof ApiUserExt
     */
    userType: ApiUserExtUserTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ApiUserExt
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ApiUserExt
     */
    state: ApiUserExtStateEnum;
    /**
     * 
     * @type {UserRole}
     * @memberof ApiUserExt
     */
    role: UserRole;
    /**
     * 
     * @type {Array<UserGroupRef>}
     * @memberof ApiUserExt
     */
    userGroups?: Array<UserGroupRef>;
    /**
     * 
     * @type {Array<UserGroupRef>}
     * @memberof ApiUserExt
     */
    pendingAdditionToUserGroups?: Array<UserGroupRef>;
    /**
     * 
     * @type {Array<UserGroupRef>}
     * @memberof ApiUserExt
     */
    pendingRemovalFromUserGroups?: Array<UserGroupRef>;
    /**
     * 
     * @type {string}
     * @memberof ApiUserExt
     */
    publicKey: string;
    /**
     * 
     * @type {string}
     * @memberof ApiUserExt
     */
    publicKeyHmac: string;
    /**
     * 
     * @type {boolean}
     * @memberof ApiUserExt
     */
    isSavedToEnclave: boolean;
}


/**
 * @export
 */
export const ApiUserExtUserTypeEnum = {
    apiUser: 'api_user'
} as const;
export type ApiUserExtUserTypeEnum = typeof ApiUserExtUserTypeEnum[keyof typeof ApiUserExtUserTypeEnum];

/**
 * @export
 */
export const ApiUserExtStateEnum = {
    active: 'active',
    deleted: 'deleted'
} as const;
export type ApiUserExtStateEnum = typeof ApiUserExtStateEnum[keyof typeof ApiUserExtStateEnum];


/**
 * Check if a given object implements the ApiUserExt interface.
 */
export function instanceOfApiUserExt(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "modifiedAt" in value;
    isInstance = isInstance && "userType" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "role" in value;
    isInstance = isInstance && "publicKey" in value;
    isInstance = isInstance && "publicKeyHmac" in value;
    isInstance = isInstance && "isSavedToEnclave" in value;

    return isInstance;
}

export function ApiUserExtFromJSON(json: any): ApiUserExt {
    return ApiUserExtFromJSONTyped(json, false);
}

export function ApiUserExtFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiUserExt {
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
        'publicKey': json['public_key'],
        'publicKeyHmac': json['public_key_hmac'],
        'isSavedToEnclave': json['is_saved_to_enclave'],
    };
}

export function ApiUserExtToJSON(value?: ApiUserExt | null): any {
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
        'public_key': value.publicKey,
        'public_key_hmac': value.publicKeyHmac,
        'is_saved_to_enclave': value.isSavedToEnclave,
    };
}

