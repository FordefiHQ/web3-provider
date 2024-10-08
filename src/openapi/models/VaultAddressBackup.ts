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
/**
 * 
 * @export
 * @interface VaultAddressBackup
 */
export interface VaultAddressBackup {
    /**
     * 
     * @type {number}
     * @memberof VaultAddressBackup
     */
    addressIndex: number;
    /**
     * 
     * @type {string}
     * @memberof VaultAddressBackup
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof VaultAddressBackup
     */
    addressType: string;
}

/**
 * Check if a given object implements the VaultAddressBackup interface.
 */
export function instanceOfVaultAddressBackup(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "addressIndex" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "addressType" in value;

    return isInstance;
}

export function VaultAddressBackupFromJSON(json: any): VaultAddressBackup {
    return VaultAddressBackupFromJSONTyped(json, false);
}

export function VaultAddressBackupFromJSONTyped(json: any, ignoreDiscriminator: boolean): VaultAddressBackup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressIndex': json['address_index'],
        'address': json['address'],
        'addressType': json['address_type'],
    };
}

export function VaultAddressBackupToJSON(value?: VaultAddressBackup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address_index': value.addressIndex,
        'address': value.address,
        'address_type': value.addressType,
    };
}

