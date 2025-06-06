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
 * @interface VaultAddressRef
 */
export interface VaultAddressRef {
    /**
     * 
     * @type {string}
     * @memberof VaultAddressRef
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof VaultAddressRef
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof VaultAddressRef
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof VaultAddressRef
     */
    address: string;
}

/**
 * Check if a given object implements the VaultAddressRef interface.
 */
export function instanceOfVaultAddressRef(value: object): value is VaultAddressRef {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('vaultId' in value) || value['vaultId'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('address' in value) || value['address'] === undefined) return false;
    return true;
}

export function VaultAddressRefFromJSON(json: any): VaultAddressRef {
    return VaultAddressRefFromJSONTyped(json, false);
}

export function VaultAddressRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): VaultAddressRef {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'vaultId': json['vault_id'],
        'name': json['name'],
        'address': json['address'],
    };
}

export function VaultAddressRefToJSON(json: any): VaultAddressRef {
    return VaultAddressRefToJSONTyped(json, false);
}

export function VaultAddressRefToJSONTyped(value?: VaultAddressRef | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'vault_id': value['vaultId'],
        'name': value['name'],
        'address': value['address'],
    };
}

