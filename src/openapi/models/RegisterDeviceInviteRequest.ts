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
 * @interface RegisterDeviceInviteRequest
 */
export interface RegisterDeviceInviteRequest {
    /**
     * 
     * @type {EncryptionData}
     * @memberof RegisterDeviceInviteRequest
     */
    encryptedPinMessage: EncryptionData;
    /**
     * 
     * @type {string}
     * @memberof RegisterDeviceInviteRequest
     */
    signature: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterDeviceInviteRequest
     */
    encryptedMpcKey: string;
}

/**
 * Check if a given object implements the RegisterDeviceInviteRequest interface.
 */
export function instanceOfRegisterDeviceInviteRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "encryptedPinMessage" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "encryptedMpcKey" in value;

    return isInstance;
}

export function RegisterDeviceInviteRequestFromJSON(json: any): RegisterDeviceInviteRequest {
    return RegisterDeviceInviteRequestFromJSONTyped(json, false);
}

export function RegisterDeviceInviteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterDeviceInviteRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'encryptedPinMessage': EncryptionDataFromJSON(json['encrypted_pin_message']),
        'signature': json['signature'],
        'encryptedMpcKey': json['encrypted_mpc_key'],
    };
}

export function RegisterDeviceInviteRequestToJSON(value?: RegisterDeviceInviteRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'encrypted_pin_message': EncryptionDataToJSON(value.encryptedPinMessage),
        'signature': value.signature,
        'encrypted_mpc_key': value.encryptedMpcKey,
    };
}

