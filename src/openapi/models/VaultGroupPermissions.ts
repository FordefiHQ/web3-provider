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
import type { VaultGroupAccessPermissions } from './VaultGroupAccessPermissions';
import {
    VaultGroupAccessPermissionsFromJSON,
    VaultGroupAccessPermissionsFromJSONTyped,
    VaultGroupAccessPermissionsToJSON,
} from './VaultGroupAccessPermissions';

/**
 * 
 * @export
 * @interface VaultGroupPermissions
 */
export interface VaultGroupPermissions {
    /**
     * 
     * @type {VaultGroupAccessPermissions}
     * @memberof VaultGroupPermissions
     */
    accessPermissions: VaultGroupAccessPermissions;
    /**
     * 
     * @type {boolean}
     * @memberof VaultGroupPermissions
     */
    canNonAdminsCreateOrEditVaults: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof VaultGroupPermissions
     */
    canCurrentUserCreateOrEditVaults: boolean;
}

/**
 * Check if a given object implements the VaultGroupPermissions interface.
 */
export function instanceOfVaultGroupPermissions(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accessPermissions" in value;
    isInstance = isInstance && "canNonAdminsCreateOrEditVaults" in value;
    isInstance = isInstance && "canCurrentUserCreateOrEditVaults" in value;

    return isInstance;
}

export function VaultGroupPermissionsFromJSON(json: any): VaultGroupPermissions {
    return VaultGroupPermissionsFromJSONTyped(json, false);
}

export function VaultGroupPermissionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): VaultGroupPermissions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessPermissions': VaultGroupAccessPermissionsFromJSON(json['access_permissions']),
        'canNonAdminsCreateOrEditVaults': json['can_non_admins_create_or_edit_vaults'],
        'canCurrentUserCreateOrEditVaults': json['can_current_user_create_or_edit_vaults'],
    };
}

export function VaultGroupPermissionsToJSON(value?: VaultGroupPermissions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'access_permissions': VaultGroupAccessPermissionsToJSON(value.accessPermissions),
        'can_non_admins_create_or_edit_vaults': value.canNonAdminsCreateOrEditVaults,
        'can_current_user_create_or_edit_vaults': value.canCurrentUserCreateOrEditVaults,
    };
}

