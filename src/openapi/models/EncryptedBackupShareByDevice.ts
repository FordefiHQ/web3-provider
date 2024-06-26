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
import type { EncryptionData } from './EncryptionData';
import {
    EncryptionDataFromJSON,
    EncryptionDataFromJSONTyped,
    EncryptionDataToJSON,
} from './EncryptionData';

/**
 * 
 * @export
 * @interface EncryptedBackupShareByDevice
 */
export interface EncryptedBackupShareByDevice {
    /**
     * 
     * @type {string}
     * @memberof EncryptedBackupShareByDevice
     */
    deviceId: string;
    /**
     * 
     * @type {EncryptionData}
     * @memberof EncryptedBackupShareByDevice
     */
    encryptedShare: EncryptionData;
    /**
     * 
     * @type {string}
     * @memberof EncryptedBackupShareByDevice
     */
    hmacForPublicRsaKeys: string;
}

/**
 * Check if a given object implements the EncryptedBackupShareByDevice interface.
 */
export function instanceOfEncryptedBackupShareByDevice(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "deviceId" in value;
    isInstance = isInstance && "encryptedShare" in value;
    isInstance = isInstance && "hmacForPublicRsaKeys" in value;

    return isInstance;
}

export function EncryptedBackupShareByDeviceFromJSON(json: any): EncryptedBackupShareByDevice {
    return EncryptedBackupShareByDeviceFromJSONTyped(json, false);
}

export function EncryptedBackupShareByDeviceFromJSONTyped(json: any, ignoreDiscriminator: boolean): EncryptedBackupShareByDevice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deviceId': json['device_id'],
        'encryptedShare': EncryptionDataFromJSON(json['encrypted_share']),
        'hmacForPublicRsaKeys': json['hmac_for_public_rsa_keys'],
    };
}

export function EncryptedBackupShareByDeviceToJSON(value?: EncryptedBackupShareByDevice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'device_id': value.deviceId,
        'encrypted_share': EncryptionDataToJSON(value.encryptedShare),
        'hmac_for_public_rsa_keys': value.hmacForPublicRsaKeys,
    };
}

