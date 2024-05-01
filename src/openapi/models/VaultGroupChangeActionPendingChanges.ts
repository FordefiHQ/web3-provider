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

import {
    AddVaultGroupChanges,
    instanceOfAddVaultGroupChanges,
    AddVaultGroupChangesFromJSON,
    AddVaultGroupChangesFromJSONTyped,
    AddVaultGroupChangesToJSON,
} from './AddVaultGroupChanges';
import {
    EditVaultGroupChanges,
    instanceOfEditVaultGroupChanges,
    EditVaultGroupChangesFromJSON,
    EditVaultGroupChangesFromJSONTyped,
    EditVaultGroupChangesToJSON,
} from './EditVaultGroupChanges';

/**
 * @type VaultGroupChangeActionPendingChanges
 * 
 * @export
 */
export type VaultGroupChangeActionPendingChanges = { type: 'add_group' } & AddVaultGroupChanges | { type: 'edit_group' } & EditVaultGroupChanges;

export function VaultGroupChangeActionPendingChangesFromJSON(json: any): VaultGroupChangeActionPendingChanges {
    return VaultGroupChangeActionPendingChangesFromJSONTyped(json, false);
}

export function VaultGroupChangeActionPendingChangesFromJSONTyped(json: any, ignoreDiscriminator: boolean): VaultGroupChangeActionPendingChanges {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'add_group':
            return {...AddVaultGroupChangesFromJSONTyped(json, true), type: 'add_group'};
        case 'edit_group':
            return {...EditVaultGroupChangesFromJSONTyped(json, true), type: 'edit_group'};
        default:
            throw new Error(`No variant of VaultGroupChangeActionPendingChanges exists with 'type=${json['type']}'`);
    }
}

export function VaultGroupChangeActionPendingChangesToJSON(value?: VaultGroupChangeActionPendingChanges | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'add_group':
            return AddVaultGroupChangesToJSON(value);
        case 'edit_group':
            return EditVaultGroupChangesToJSON(value);
        default:
            throw new Error(`No variant of VaultGroupChangeActionPendingChanges exists with 'type=${value['type']}'`);
    }

}

