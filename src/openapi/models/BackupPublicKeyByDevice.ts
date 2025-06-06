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
 * @interface BackupPublicKeyByDevice
 */
export interface BackupPublicKeyByDevice {
    /**
     * 
     * @type {string}
     * @memberof BackupPublicKeyByDevice
     */
    deviceId: string;
    /**
     * 
     * @type {string}
     * @memberof BackupPublicKeyByDevice
     */
    publicKey: string;
}

/**
 * Check if a given object implements the BackupPublicKeyByDevice interface.
 */
export function instanceOfBackupPublicKeyByDevice(value: object): value is BackupPublicKeyByDevice {
    if (!('deviceId' in value) || value['deviceId'] === undefined) return false;
    if (!('publicKey' in value) || value['publicKey'] === undefined) return false;
    return true;
}

export function BackupPublicKeyByDeviceFromJSON(json: any): BackupPublicKeyByDevice {
    return BackupPublicKeyByDeviceFromJSONTyped(json, false);
}

export function BackupPublicKeyByDeviceFromJSONTyped(json: any, ignoreDiscriminator: boolean): BackupPublicKeyByDevice {
    if (json == null) {
        return json;
    }
    return {
        
        'deviceId': json['device_id'],
        'publicKey': json['public_key'],
    };
}

export function BackupPublicKeyByDeviceToJSON(json: any): BackupPublicKeyByDevice {
    return BackupPublicKeyByDeviceToJSONTyped(json, false);
}

export function BackupPublicKeyByDeviceToJSONTyped(value?: BackupPublicKeyByDevice | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'device_id': value['deviceId'],
        'public_key': value['publicKey'],
    };
}

