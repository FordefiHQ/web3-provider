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
import type { ImportKeysStatus } from './ImportKeysStatus';
import {
    ImportKeysStatusFromJSON,
    ImportKeysStatusFromJSONTyped,
    ImportKeysStatusToJSON,
} from './ImportKeysStatus';
import type { UserRole } from './UserRole';
import {
    UserRoleFromJSON,
    UserRoleFromJSONTyped,
    UserRoleToJSON,
} from './UserRole';
import type { UserState } from './UserState';
import {
    UserStateFromJSON,
    UserStateFromJSONTyped,
    UserStateToJSON,
} from './UserState';

/**
 * 
 * @export
 * @interface OrganizationMembership
 */
export interface OrganizationMembership {
    /**
     * 
     * @type {string}
     * @memberof OrganizationMembership
     */
    organizationId: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationMembership
     */
    organizationName: string;
    /**
     * 
     * @type {UserState}
     * @memberof OrganizationMembership
     */
    state: UserState;
    /**
     * 
     * @type {boolean}
     * @memberof OrganizationMembership
     */
    isNewDeviceProvisioning: boolean;
    /**
     * 
     * @type {UserRole}
     * @memberof OrganizationMembership
     */
    role?: UserRole;
    /**
     * 
     * @type {boolean}
     * @memberof OrganizationMembership
     */
    isEndUsersSupportedOrganization: boolean;
    /**
     * 
     * @type {Date}
     * @memberof OrganizationMembership
     */
    organizationActivatedAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof OrganizationMembership
     */
    daysLeftToBackup?: number;
    /**
     * 
     * @type {boolean}
     * @memberof OrganizationMembership
     */
    organizationHasBackup: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrganizationMembership
     */
    activeDeviceId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrganizationMembership
     */
    isTrustedForCurrentWebDevice?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrganizationMembership
     */
    hasTrustedWebDevices?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrganizationMembership
     */
    isImportOrganization?: boolean;
    /**
     * 
     * @type {ImportKeysStatus}
     * @memberof OrganizationMembership
     */
    importKeysStatus?: ImportKeysStatus;
}

/**
 * Check if a given object implements the OrganizationMembership interface.
 */
export function instanceOfOrganizationMembership(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "organizationId" in value;
    isInstance = isInstance && "organizationName" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "isNewDeviceProvisioning" in value;
    isInstance = isInstance && "isEndUsersSupportedOrganization" in value;
    isInstance = isInstance && "organizationHasBackup" in value;

    return isInstance;
}

export function OrganizationMembershipFromJSON(json: any): OrganizationMembership {
    return OrganizationMembershipFromJSONTyped(json, false);
}

export function OrganizationMembershipFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationMembership {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'organizationId': json['organization_id'],
        'organizationName': json['organization_name'],
        'state': UserStateFromJSON(json['state']),
        'isNewDeviceProvisioning': json['is_new_device_provisioning'],
        'role': !exists(json, 'role') ? undefined : UserRoleFromJSON(json['role']),
        'isEndUsersSupportedOrganization': json['is_end_users_supported_organization'],
        'organizationActivatedAt': !exists(json, 'organization_activated_at') ? undefined : (new Date(json['organization_activated_at'])),
        'daysLeftToBackup': !exists(json, 'days_left_to_backup') ? undefined : json['days_left_to_backup'],
        'organizationHasBackup': json['organization_has_backup'],
        'activeDeviceId': !exists(json, 'active_device_id') ? undefined : json['active_device_id'],
        'isTrustedForCurrentWebDevice': !exists(json, 'is_trusted_for_current_web_device') ? undefined : json['is_trusted_for_current_web_device'],
        'hasTrustedWebDevices': !exists(json, 'has_trusted_web_devices') ? undefined : json['has_trusted_web_devices'],
        'isImportOrganization': !exists(json, 'is_import_organization') ? undefined : json['is_import_organization'],
        'importKeysStatus': !exists(json, 'import_keys_status') ? undefined : ImportKeysStatusFromJSON(json['import_keys_status']),
    };
}

export function OrganizationMembershipToJSON(value?: OrganizationMembership | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'organization_id': value.organizationId,
        'organization_name': value.organizationName,
        'state': UserStateToJSON(value.state),
        'is_new_device_provisioning': value.isNewDeviceProvisioning,
        'role': UserRoleToJSON(value.role),
        'is_end_users_supported_organization': value.isEndUsersSupportedOrganization,
        'organization_activated_at': value.organizationActivatedAt === undefined ? undefined : (value.organizationActivatedAt.toISOString()),
        'days_left_to_backup': value.daysLeftToBackup,
        'organization_has_backup': value.organizationHasBackup,
        'active_device_id': value.activeDeviceId,
        'is_trusted_for_current_web_device': value.isTrustedForCurrentWebDevice,
        'has_trusted_web_devices': value.hasTrustedWebDevices,
        'is_import_organization': value.isImportOrganization,
        'import_keys_status': ImportKeysStatusToJSON(value.importKeysStatus),
    };
}

