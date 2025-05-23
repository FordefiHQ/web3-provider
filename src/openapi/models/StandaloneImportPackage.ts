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
 * @interface StandaloneImportPackage
 */
export interface StandaloneImportPackage {
    /**
     * 
     * @type {string}
     * @memberof StandaloneImportPackage
     */
    type: StandaloneImportPackageTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof StandaloneImportPackage
     */
    keyName: string;
    /**
     * 
     * @type {string}
     * @memberof StandaloneImportPackage
     */
    backupZipContent: string;
}


/**
 * @export
 */
export const StandaloneImportPackageTypeEnum = {
    standalone: 'standalone'
} as const;
export type StandaloneImportPackageTypeEnum = typeof StandaloneImportPackageTypeEnum[keyof typeof StandaloneImportPackageTypeEnum];


/**
 * Check if a given object implements the StandaloneImportPackage interface.
 */
export function instanceOfStandaloneImportPackage(value: object): value is StandaloneImportPackage {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('keyName' in value) || value['keyName'] === undefined) return false;
    if (!('backupZipContent' in value) || value['backupZipContent'] === undefined) return false;
    return true;
}

export function StandaloneImportPackageFromJSON(json: any): StandaloneImportPackage {
    return StandaloneImportPackageFromJSONTyped(json, false);
}

export function StandaloneImportPackageFromJSONTyped(json: any, ignoreDiscriminator: boolean): StandaloneImportPackage {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'keyName': json['key_name'],
        'backupZipContent': json['backup_zip_content'],
    };
}

export function StandaloneImportPackageToJSON(json: any): StandaloneImportPackage {
    return StandaloneImportPackageToJSONTyped(json, false);
}

export function StandaloneImportPackageToJSONTyped(value?: StandaloneImportPackage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'key_name': value['keyName'],
        'backup_zip_content': value['backupZipContent'],
    };
}

