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
import type { KeyType } from './KeyType';
import {
    KeyTypeFromJSON,
    KeyTypeFromJSONTyped,
    KeyTypeToJSON,
} from './KeyType';

/**
 * 
 * @export
 * @interface SignKeyShareBackupRequest
 */
export interface SignKeyShareBackupRequest {
    /**
     * 
     * @type {string}
     * @memberof SignKeyShareBackupRequest
     */
    signature: string;
    /**
     * 
     * @type {EncryptionData}
     * @memberof SignKeyShareBackupRequest
     */
    encryptedDeviceShare: EncryptionData;
    /**
     * 
     * @type {Array<KeyType>}
     * @memberof SignKeyShareBackupRequest
     */
    deviceSharesIncluded: Array<KeyType>;
    /**
     * 
     * @type {string}
     * @memberof SignKeyShareBackupRequest
     */
    deviceHmac: string;
    /**
     * 
     * @type {string}
     * @memberof SignKeyShareBackupRequest
     */
    backupKey: string;
}

/**
 * Check if a given object implements the SignKeyShareBackupRequest interface.
 */
export function instanceOfSignKeyShareBackupRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "encryptedDeviceShare" in value;
    isInstance = isInstance && "deviceSharesIncluded" in value;
    isInstance = isInstance && "deviceHmac" in value;
    isInstance = isInstance && "backupKey" in value;

    return isInstance;
}

export function SignKeyShareBackupRequestFromJSON(json: any): SignKeyShareBackupRequest {
    return SignKeyShareBackupRequestFromJSONTyped(json, false);
}

export function SignKeyShareBackupRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignKeyShareBackupRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'signature': json['signature'],
        'encryptedDeviceShare': EncryptionDataFromJSON(json['encrypted_device_share']),
        'deviceSharesIncluded': ((json['device_shares_included'] as Array<any>).map(KeyTypeFromJSON)),
        'deviceHmac': json['device_hmac'],
        'backupKey': json['backup_key'],
    };
}

export function SignKeyShareBackupRequestToJSON(value?: SignKeyShareBackupRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'signature': value.signature,
        'encrypted_device_share': EncryptionDataToJSON(value.encryptedDeviceShare),
        'device_shares_included': ((value.deviceSharesIncluded as Array<any>).map(KeyTypeToJSON)),
        'device_hmac': value.deviceHmac,
        'backup_key': value.backupKey,
    };
}

