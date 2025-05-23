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
 * @interface VaultMetadata
 */
export interface VaultMetadata {
    /**
     * 
     * @type {string}
     * @memberof VaultMetadata
     */
    masterKeyId: string;
    /**
     * 
     * @type {string}
     * @memberof VaultMetadata
     */
    derivationPath: string;
}

/**
 * Check if a given object implements the VaultMetadata interface.
 */
export function instanceOfVaultMetadata(value: object): value is VaultMetadata {
    if (!('masterKeyId' in value) || value['masterKeyId'] === undefined) return false;
    if (!('derivationPath' in value) || value['derivationPath'] === undefined) return false;
    return true;
}

export function VaultMetadataFromJSON(json: any): VaultMetadata {
    return VaultMetadataFromJSONTyped(json, false);
}

export function VaultMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): VaultMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'masterKeyId': json['master_key_id'],
        'derivationPath': json['derivation_path'],
    };
}

export function VaultMetadataToJSON(json: any): VaultMetadata {
    return VaultMetadataToJSONTyped(json, false);
}

export function VaultMetadataToJSONTyped(value?: VaultMetadata | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'master_key_id': value['masterKeyId'],
        'derivation_path': value['derivationPath'],
    };
}

