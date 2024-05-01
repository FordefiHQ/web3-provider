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
 * @interface CompleteOnboardingApiSignerRequest
 */
export interface CompleteOnboardingApiSignerRequest {
    /**
     * 
     * @type {string}
     * @memberof CompleteOnboardingApiSignerRequest
     */
    publicKey: string;
    /**
     * 
     * @type {EncryptionData}
     * @memberof CompleteOnboardingApiSignerRequest
     */
    encryptedPinMessage: EncryptionData;
}

/**
 * Check if a given object implements the CompleteOnboardingApiSignerRequest interface.
 */
export function instanceOfCompleteOnboardingApiSignerRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "publicKey" in value;
    isInstance = isInstance && "encryptedPinMessage" in value;

    return isInstance;
}

export function CompleteOnboardingApiSignerRequestFromJSON(json: any): CompleteOnboardingApiSignerRequest {
    return CompleteOnboardingApiSignerRequestFromJSONTyped(json, false);
}

export function CompleteOnboardingApiSignerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompleteOnboardingApiSignerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'publicKey': json['public_key'],
        'encryptedPinMessage': EncryptionDataFromJSON(json['encrypted_pin_message']),
    };
}

export function CompleteOnboardingApiSignerRequestToJSON(value?: CompleteOnboardingApiSignerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'public_key': value.publicKey,
        'encrypted_pin_message': EncryptionDataToJSON(value.encryptedPinMessage),
    };
}

