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
 * @interface BackupPublicKey
 */
export interface BackupPublicKey {
    /**
     * 
     * @type {string}
     * @memberof BackupPublicKey
     */
    fileName: string;
    /**
     * 
     * @type {string}
     * @memberof BackupPublicKey
     */
    key: string;
}

/**
 * Check if a given object implements the BackupPublicKey interface.
 */
export function instanceOfBackupPublicKey(value: object): value is BackupPublicKey {
    if (!('fileName' in value) || value['fileName'] === undefined) return false;
    if (!('key' in value) || value['key'] === undefined) return false;
    return true;
}

export function BackupPublicKeyFromJSON(json: any): BackupPublicKey {
    return BackupPublicKeyFromJSONTyped(json, false);
}

export function BackupPublicKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): BackupPublicKey {
    if (json == null) {
        return json;
    }
    return {
        
        'fileName': json['file_name'],
        'key': json['key'],
    };
}

export function BackupPublicKeyToJSON(json: any): BackupPublicKey {
    return BackupPublicKeyToJSONTyped(json, false);
}

export function BackupPublicKeyToJSONTyped(value?: BackupPublicKey | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'file_name': value['fileName'],
        'key': value['key'],
    };
}

