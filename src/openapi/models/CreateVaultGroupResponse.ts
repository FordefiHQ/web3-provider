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
import type { VaultGroupOwner } from './VaultGroupOwner';
import {
    VaultGroupOwnerFromJSON,
    VaultGroupOwnerFromJSONTyped,
    VaultGroupOwnerToJSON,
    VaultGroupOwnerToJSONTyped,
} from './VaultGroupOwner';
import type { VaultGroupPermissions } from './VaultGroupPermissions';
import {
    VaultGroupPermissionsFromJSON,
    VaultGroupPermissionsFromJSONTyped,
    VaultGroupPermissionsToJSON,
    VaultGroupPermissionsToJSONTyped,
} from './VaultGroupPermissions';
import type { VaultGroupPendingChangeRequestInfo } from './VaultGroupPendingChangeRequestInfo';
import {
    VaultGroupPendingChangeRequestInfoFromJSON,
    VaultGroupPendingChangeRequestInfoFromJSONTyped,
    VaultGroupPendingChangeRequestInfoToJSON,
    VaultGroupPendingChangeRequestInfoToJSONTyped,
} from './VaultGroupPendingChangeRequestInfo';
import type { VaultGroupState } from './VaultGroupState';
import {
    VaultGroupStateFromJSON,
    VaultGroupStateFromJSONTyped,
    VaultGroupStateToJSON,
    VaultGroupStateToJSONTyped,
} from './VaultGroupState';
import type { UserRef } from './UserRef';
import {
    UserRefFromJSON,
    UserRefFromJSONTyped,
    UserRefToJSON,
    UserRefToJSONTyped,
} from './UserRef';

/**
 * 
 * @export
 * @interface CreateVaultGroupResponse
 */
export interface CreateVaultGroupResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateVaultGroupResponse
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateVaultGroupResponse
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof CreateVaultGroupResponse
     */
    modifiedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof CreateVaultGroupResponse
     */
    name: string;
    /**
     * 
     * @type {UserRef}
     * @memberof CreateVaultGroupResponse
     */
    createdBy?: UserRef;
    /**
     * 
     * @type {number}
     * @memberof CreateVaultGroupResponse
     */
    vaultCount: number;
    /**
     * 
     * @type {VaultGroupPermissions}
     * @memberof CreateVaultGroupResponse
     */
    permissions: VaultGroupPermissions;
    /**
     * 
     * @type {VaultGroupOwner}
     * @memberof CreateVaultGroupResponse
     */
    owner: VaultGroupOwner;
    /**
     * 
     * @type {UserRef}
     * @memberof CreateVaultGroupResponse
     */
    modifiedBy?: UserRef;
    /**
     * 
     * @type {VaultGroupPendingChangeRequestInfo}
     * @memberof CreateVaultGroupResponse
     */
    pendingChangeRequest?: VaultGroupPendingChangeRequestInfo;
    /**
     * 
     * @type {VaultGroupState}
     * @memberof CreateVaultGroupResponse
     */
    state: VaultGroupState;
}



/**
 * Check if a given object implements the CreateVaultGroupResponse interface.
 */
export function instanceOfCreateVaultGroupResponse(value: object): value is CreateVaultGroupResponse {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('modifiedAt' in value) || value['modifiedAt'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('vaultCount' in value) || value['vaultCount'] === undefined) return false;
    if (!('permissions' in value) || value['permissions'] === undefined) return false;
    if (!('owner' in value) || value['owner'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    return true;
}

export function CreateVaultGroupResponseFromJSON(json: any): CreateVaultGroupResponse {
    return CreateVaultGroupResponseFromJSONTyped(json, false);
}

export function CreateVaultGroupResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateVaultGroupResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['created_at'])),
        'modifiedAt': (new Date(json['modified_at'])),
        'name': json['name'],
        'createdBy': json['created_by'] == null ? undefined : UserRefFromJSON(json['created_by']),
        'vaultCount': json['vault_count'],
        'permissions': VaultGroupPermissionsFromJSON(json['permissions']),
        'owner': VaultGroupOwnerFromJSON(json['owner']),
        'modifiedBy': json['modified_by'] == null ? undefined : UserRefFromJSON(json['modified_by']),
        'pendingChangeRequest': json['pending_change_request'] == null ? undefined : VaultGroupPendingChangeRequestInfoFromJSON(json['pending_change_request']),
        'state': VaultGroupStateFromJSON(json['state']),
    };
}

export function CreateVaultGroupResponseToJSON(json: any): CreateVaultGroupResponse {
    return CreateVaultGroupResponseToJSONTyped(json, false);
}

export function CreateVaultGroupResponseToJSONTyped(value?: CreateVaultGroupResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'created_at': ((value['createdAt']).toISOString()),
        'modified_at': ((value['modifiedAt']).toISOString()),
        'name': value['name'],
        'created_by': UserRefToJSON(value['createdBy']),
        'vault_count': value['vaultCount'],
        'permissions': VaultGroupPermissionsToJSON(value['permissions']),
        'owner': VaultGroupOwnerToJSON(value['owner']),
        'modified_by': UserRefToJSON(value['modifiedBy']),
        'pending_change_request': VaultGroupPendingChangeRequestInfoToJSON(value['pendingChangeRequest']),
        'state': VaultGroupStateToJSON(value['state']),
    };
}

