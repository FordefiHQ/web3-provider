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
/**
 * 
 * @export
 * @interface PendingVaultGroupActionAdd
 */
export interface PendingVaultGroupActionAdd {
    /**
     * 
     * @type {string}
     * @memberof PendingVaultGroupActionAdd
     */
    type: PendingVaultGroupActionAddTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PendingVaultGroupActionAdd
     */
    vaultGroupId: string;
    /**
     * 
     * @type {string}
     * @memberof PendingVaultGroupActionAdd
     */
    vaultGroupName: string;
}


/**
 * @export
 */
export const PendingVaultGroupActionAddTypeEnum = {
    add: 'add'
} as const;
export type PendingVaultGroupActionAddTypeEnum = typeof PendingVaultGroupActionAddTypeEnum[keyof typeof PendingVaultGroupActionAddTypeEnum];


/**
 * Check if a given object implements the PendingVaultGroupActionAdd interface.
 */
export function instanceOfPendingVaultGroupActionAdd(value: object): value is PendingVaultGroupActionAdd {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('vaultGroupId' in value) || value['vaultGroupId'] === undefined) return false;
    if (!('vaultGroupName' in value) || value['vaultGroupName'] === undefined) return false;
    return true;
}

export function PendingVaultGroupActionAddFromJSON(json: any): PendingVaultGroupActionAdd {
    return PendingVaultGroupActionAddFromJSONTyped(json, false);
}

export function PendingVaultGroupActionAddFromJSONTyped(json: any, ignoreDiscriminator: boolean): PendingVaultGroupActionAdd {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'vaultGroupId': json['vault_group_id'],
        'vaultGroupName': json['vault_group_name'],
    };
}

export function PendingVaultGroupActionAddToJSON(json: any): PendingVaultGroupActionAdd {
    return PendingVaultGroupActionAddToJSONTyped(json, false);
}

export function PendingVaultGroupActionAddToJSONTyped(value?: PendingVaultGroupActionAdd | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'vault_group_id': value['vaultGroupId'],
        'vault_group_name': value['vaultGroupName'],
    };
}

