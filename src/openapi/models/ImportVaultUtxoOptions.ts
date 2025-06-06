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
 * @interface ImportVaultUtxoOptions
 */
export interface ImportVaultUtxoOptions {
    /**
     * 
     * @type {string}
     * @memberof ImportVaultUtxoOptions
     */
    defaultAddressDerivationPath: string;
    /**
     * 
     * @type {string}
     * @memberof ImportVaultUtxoOptions
     */
    defaultAddressName: string;
    /**
     * 
     * @type {string}
     * @memberof ImportVaultUtxoOptions
     */
    keyId: string;
}

/**
 * Check if a given object implements the ImportVaultUtxoOptions interface.
 */
export function instanceOfImportVaultUtxoOptions(value: object): value is ImportVaultUtxoOptions {
    if (!('defaultAddressDerivationPath' in value) || value['defaultAddressDerivationPath'] === undefined) return false;
    if (!('defaultAddressName' in value) || value['defaultAddressName'] === undefined) return false;
    if (!('keyId' in value) || value['keyId'] === undefined) return false;
    return true;
}

export function ImportVaultUtxoOptionsFromJSON(json: any): ImportVaultUtxoOptions {
    return ImportVaultUtxoOptionsFromJSONTyped(json, false);
}

export function ImportVaultUtxoOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImportVaultUtxoOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'defaultAddressDerivationPath': json['default_address_derivation_path'],
        'defaultAddressName': json['default_address_name'],
        'keyId': json['key_id'],
    };
}

export function ImportVaultUtxoOptionsToJSON(json: any): ImportVaultUtxoOptions {
    return ImportVaultUtxoOptionsToJSONTyped(json, false);
}

export function ImportVaultUtxoOptionsToJSONTyped(value?: ImportVaultUtxoOptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'default_address_derivation_path': value['defaultAddressDerivationPath'],
        'default_address_name': value['defaultAddressName'],
        'key_id': value['keyId'],
    };
}

