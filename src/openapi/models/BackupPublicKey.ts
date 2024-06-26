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
export function instanceOfBackupPublicKey(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "fileName" in value;
    isInstance = isInstance && "key" in value;

    return isInstance;
}

export function BackupPublicKeyFromJSON(json: any): BackupPublicKey {
    return BackupPublicKeyFromJSONTyped(json, false);
}

export function BackupPublicKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): BackupPublicKey {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fileName': json['file_name'],
        'key': json['key'],
    };
}

export function BackupPublicKeyToJSON(value?: BackupPublicKey | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'file_name': value.fileName,
        'key': value.key,
    };
}

