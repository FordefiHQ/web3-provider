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

import type { VaultGroupAccessPermissionsAll } from './VaultGroupAccessPermissionsAll';
import {
    instanceOfVaultGroupAccessPermissionsAll,
    VaultGroupAccessPermissionsAllFromJSON,
    VaultGroupAccessPermissionsAllFromJSONTyped,
    VaultGroupAccessPermissionsAllToJSON,
} from './VaultGroupAccessPermissionsAll';
import type { VaultGroupAccessPermissionsPermitted } from './VaultGroupAccessPermissionsPermitted';
import {
    instanceOfVaultGroupAccessPermissionsPermitted,
    VaultGroupAccessPermissionsPermittedFromJSON,
    VaultGroupAccessPermissionsPermittedFromJSONTyped,
    VaultGroupAccessPermissionsPermittedToJSON,
} from './VaultGroupAccessPermissionsPermitted';

/**
 * @type VaultGroupAccessPermissions
 * 
 * @export
 */
export type VaultGroupAccessPermissions = { accessType: 'all' } & VaultGroupAccessPermissionsAll | { accessType: 'permitted' } & VaultGroupAccessPermissionsPermitted;

export function VaultGroupAccessPermissionsFromJSON(json: any): VaultGroupAccessPermissions {
    return VaultGroupAccessPermissionsFromJSONTyped(json, false);
}

export function VaultGroupAccessPermissionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): VaultGroupAccessPermissions {
    if (json == null) {
        return json;
    }
    switch (json['access_type']) {
        case 'all':
            return Object.assign({}, VaultGroupAccessPermissionsAllFromJSONTyped(json, true), { accessType: 'all' } as const);
        case 'permitted':
            return Object.assign({}, VaultGroupAccessPermissionsPermittedFromJSONTyped(json, true), { accessType: 'permitted' } as const);
        default:
            throw new Error(`No variant of VaultGroupAccessPermissions exists with 'accessType=${json['accessType']}'`);
    }
}

export function VaultGroupAccessPermissionsToJSON(json: any): any {
    return VaultGroupAccessPermissionsToJSONTyped(json, false);
}

export function VaultGroupAccessPermissionsToJSONTyped(value?: VaultGroupAccessPermissions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['accessType']) {
        case 'all':
            return Object.assign({}, VaultGroupAccessPermissionsAllToJSON(value), { accessType: 'all' } as const);
        case 'permitted':
            return Object.assign({}, VaultGroupAccessPermissionsPermittedToJSON(value), { accessType: 'permitted' } as const);
        default:
            throw new Error(`No variant of VaultGroupAccessPermissions exists with 'accessType=${value['accessType']}'`);
    }

}

