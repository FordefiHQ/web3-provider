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
import type { UserRef } from './UserRef';
import {
    UserRefFromJSON,
    UserRefFromJSONTyped,
    UserRefToJSON,
} from './UserRef';
import type { VaultGroupOwner } from './VaultGroupOwner';
import {
    VaultGroupOwnerFromJSON,
    VaultGroupOwnerFromJSONTyped,
    VaultGroupOwnerToJSON,
} from './VaultGroupOwner';
import type { VaultGroupPendingChangeRequestInfo } from './VaultGroupPendingChangeRequestInfo';
import {
    VaultGroupPendingChangeRequestInfoFromJSON,
    VaultGroupPendingChangeRequestInfoFromJSONTyped,
    VaultGroupPendingChangeRequestInfoToJSON,
} from './VaultGroupPendingChangeRequestInfo';
import type { VaultGroupPermissions } from './VaultGroupPermissions';
import {
    VaultGroupPermissionsFromJSON,
    VaultGroupPermissionsFromJSONTyped,
    VaultGroupPermissionsToJSON,
} from './VaultGroupPermissions';
import type { VaultGroupState } from './VaultGroupState';
import {
    VaultGroupStateFromJSON,
    VaultGroupStateFromJSONTyped,
    VaultGroupStateToJSON,
} from './VaultGroupState';

/**
 * 
 * @export
 * @interface VaultGroup
 */
export interface VaultGroup {
    /**
     * 
     * @type {string}
     * @memberof VaultGroup
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof VaultGroup
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof VaultGroup
     */
    modifiedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof VaultGroup
     */
    name: string;
    /**
     * 
     * @type {UserRef}
     * @memberof VaultGroup
     */
    createdBy?: UserRef;
    /**
     * 
     * @type {number}
     * @memberof VaultGroup
     */
    vaultCount: number;
    /**
     * 
     * @type {VaultGroupPermissions}
     * @memberof VaultGroup
     */
    permissions: VaultGroupPermissions;
    /**
     * 
     * @type {VaultGroupOwner}
     * @memberof VaultGroup
     */
    owner: VaultGroupOwner;
    /**
     * 
     * @type {UserRef}
     * @memberof VaultGroup
     */
    modifiedBy?: UserRef;
    /**
     * 
     * @type {VaultGroupPendingChangeRequestInfo}
     * @memberof VaultGroup
     */
    pendingChangeRequest?: VaultGroupPendingChangeRequestInfo;
    /**
     * 
     * @type {VaultGroupState}
     * @memberof VaultGroup
     */
    state: VaultGroupState;
}

/**
 * Check if a given object implements the VaultGroup interface.
 */
export function instanceOfVaultGroup(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "modifiedAt" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "vaultCount" in value;
    isInstance = isInstance && "permissions" in value;
    isInstance = isInstance && "owner" in value;
    isInstance = isInstance && "state" in value;

    return isInstance;
}

export function VaultGroupFromJSON(json: any): VaultGroup {
    return VaultGroupFromJSONTyped(json, false);
}

export function VaultGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): VaultGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['created_at'])),
        'modifiedAt': (new Date(json['modified_at'])),
        'name': json['name'],
        'createdBy': !exists(json, 'created_by') ? undefined : UserRefFromJSON(json['created_by']),
        'vaultCount': json['vault_count'],
        'permissions': VaultGroupPermissionsFromJSON(json['permissions']),
        'owner': VaultGroupOwnerFromJSON(json['owner']),
        'modifiedBy': !exists(json, 'modified_by') ? undefined : UserRefFromJSON(json['modified_by']),
        'pendingChangeRequest': !exists(json, 'pending_change_request') ? undefined : VaultGroupPendingChangeRequestInfoFromJSON(json['pending_change_request']),
        'state': VaultGroupStateFromJSON(json['state']),
    };
}

export function VaultGroupToJSON(value?: VaultGroup | null): any {
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
        'name': value.name,
        'created_by': UserRefToJSON(value.createdBy),
        'vault_count': value.vaultCount,
        'permissions': VaultGroupPermissionsToJSON(value.permissions),
        'owner': VaultGroupOwnerToJSON(value.owner),
        'modified_by': UserRefToJSON(value.modifiedBy),
        'pending_change_request': VaultGroupPendingChangeRequestInfoToJSON(value.pendingChangeRequest),
        'state': VaultGroupStateToJSON(value.state),
    };
}

