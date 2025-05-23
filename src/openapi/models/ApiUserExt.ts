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
import type { UserAllowedIpSettings } from './UserAllowedIpSettings';
import {
    UserAllowedIpSettingsFromJSON,
    UserAllowedIpSettingsFromJSONTyped,
    UserAllowedIpSettingsToJSON,
    UserAllowedIpSettingsToJSONTyped,
} from './UserAllowedIpSettings';
import type { UserRole } from './UserRole';
import {
    UserRoleFromJSON,
    UserRoleFromJSONTyped,
    UserRoleToJSON,
    UserRoleToJSONTyped,
} from './UserRole';
import type { UserGroupRef } from './UserGroupRef';
import {
    UserGroupRefFromJSON,
    UserGroupRefFromJSONTyped,
    UserGroupRefToJSON,
    UserGroupRefToJSONTyped,
} from './UserGroupRef';

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
     * @type {UserAllowedIpSettings}
     * @memberof ApiUserExt
     */
    allowedIpSettings: UserAllowedIpSettings;
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
     * @deprecated
     */
    isSavedToEnclave?: boolean;
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
export function instanceOfApiUserExt(value: object): value is ApiUserExt {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('modifiedAt' in value) || value['modifiedAt'] === undefined) return false;
    if (!('userType' in value) || value['userType'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    if (!('role' in value) || value['role'] === undefined) return false;
    if (!('allowedIpSettings' in value) || value['allowedIpSettings'] === undefined) return false;
    if (!('publicKey' in value) || value['publicKey'] === undefined) return false;
    if (!('publicKeyHmac' in value) || value['publicKeyHmac'] === undefined) return false;
    return true;
}

export function ApiUserExtFromJSON(json: any): ApiUserExt {
    return ApiUserExtFromJSONTyped(json, false);
}

export function ApiUserExtFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiUserExt {
    if (json == null) {
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
        'userGroups': json['user_groups'] == null ? undefined : ((json['user_groups'] as Array<any>).map(UserGroupRefFromJSON)),
        'pendingAdditionToUserGroups': json['pending_addition_to_user_groups'] == null ? undefined : ((json['pending_addition_to_user_groups'] as Array<any>).map(UserGroupRefFromJSON)),
        'pendingRemovalFromUserGroups': json['pending_removal_from_user_groups'] == null ? undefined : ((json['pending_removal_from_user_groups'] as Array<any>).map(UserGroupRefFromJSON)),
        'allowedIpSettings': UserAllowedIpSettingsFromJSON(json['allowed_ip_settings']),
        'publicKey': json['public_key'],
        'publicKeyHmac': json['public_key_hmac'],
        'isSavedToEnclave': json['is_saved_to_enclave'] == null ? undefined : json['is_saved_to_enclave'],
    };
}

export function ApiUserExtToJSON(json: any): ApiUserExt {
    return ApiUserExtToJSONTyped(json, false);
}

export function ApiUserExtToJSONTyped(value?: ApiUserExt | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'created_at': ((value['createdAt']).toISOString()),
        'modified_at': ((value['modifiedAt']).toISOString()),
        'user_type': value['userType'],
        'name': value['name'],
        'state': value['state'],
        'role': UserRoleToJSON(value['role']),
        'user_groups': value['userGroups'] == null ? undefined : ((value['userGroups'] as Array<any>).map(UserGroupRefToJSON)),
        'pending_addition_to_user_groups': value['pendingAdditionToUserGroups'] == null ? undefined : ((value['pendingAdditionToUserGroups'] as Array<any>).map(UserGroupRefToJSON)),
        'pending_removal_from_user_groups': value['pendingRemovalFromUserGroups'] == null ? undefined : ((value['pendingRemovalFromUserGroups'] as Array<any>).map(UserGroupRefToJSON)),
        'allowed_ip_settings': UserAllowedIpSettingsToJSON(value['allowedIpSettings']),
        'public_key': value['publicKey'],
        'public_key_hmac': value['publicKeyHmac'],
        'is_saved_to_enclave': value['isSavedToEnclave'],
    };
}

