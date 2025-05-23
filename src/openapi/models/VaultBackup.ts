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
import type { VaultAddressBackup } from './VaultAddressBackup';
import {
    VaultAddressBackupFromJSON,
    VaultAddressBackupFromJSONTyped,
    VaultAddressBackupToJSON,
    VaultAddressBackupToJSONTyped,
} from './VaultAddressBackup';

/**
 * 
 * @export
 * @interface VaultBackup
 */
export interface VaultBackup {
    /**
     * 
     * @type {string}
     * @memberof VaultBackup
     */
    masterKeyId: string;
    /**
     * 
     * @type {string}
     * @memberof VaultBackup
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof VaultBackup
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof VaultBackup
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof VaultBackup
     */
    derivationPath: string;
    /**
     * 
     * @type {string}
     * @memberof VaultBackup
     */
    vaultType: string;
    /**
     * 
     * @type {Array<VaultAddressBackup>}
     * @memberof VaultBackup
     */
    vaultAddresses: Array<VaultAddressBackup>;
    /**
     * 
     * @type {string}
     * @memberof VaultBackup
     */
    vaultState: string;
}

/**
 * Check if a given object implements the VaultBackup interface.
 */
export function instanceOfVaultBackup(value: object): value is VaultBackup {
    if (!('masterKeyId' in value) || value['masterKeyId'] === undefined) return false;
    if (!('vaultId' in value) || value['vaultId'] === undefined) return false;
    if (!('address' in value) || value['address'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('derivationPath' in value) || value['derivationPath'] === undefined) return false;
    if (!('vaultType' in value) || value['vaultType'] === undefined) return false;
    if (!('vaultAddresses' in value) || value['vaultAddresses'] === undefined) return false;
    if (!('vaultState' in value) || value['vaultState'] === undefined) return false;
    return true;
}

export function VaultBackupFromJSON(json: any): VaultBackup {
    return VaultBackupFromJSONTyped(json, false);
}

export function VaultBackupFromJSONTyped(json: any, ignoreDiscriminator: boolean): VaultBackup {
    if (json == null) {
        return json;
    }
    return {
        
        'masterKeyId': json['master_key_id'],
        'vaultId': json['vault_id'],
        'address': json['address'],
        'name': json['name'],
        'derivationPath': json['derivation_path'],
        'vaultType': json['vault_type'],
        'vaultAddresses': ((json['vault_addresses'] as Array<any>).map(VaultAddressBackupFromJSON)),
        'vaultState': json['vault_state'],
    };
}

export function VaultBackupToJSON(json: any): VaultBackup {
    return VaultBackupToJSONTyped(json, false);
}

export function VaultBackupToJSONTyped(value?: VaultBackup | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'master_key_id': value['masterKeyId'],
        'vault_id': value['vaultId'],
        'address': value['address'],
        'name': value['name'],
        'derivation_path': value['derivationPath'],
        'vault_type': value['vaultType'],
        'vault_addresses': ((value['vaultAddresses'] as Array<any>).map(VaultAddressBackupToJSON)),
        'vault_state': value['vaultState'],
    };
}

