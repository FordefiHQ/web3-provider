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
import type { TimestampedSignature } from './TimestampedSignature';
import {
    TimestampedSignatureFromJSON,
    TimestampedSignatureFromJSONTyped,
    TimestampedSignatureToJSON,
} from './TimestampedSignature';

/**
 * 
 * @export
 * @interface SignedEncryptionKey
 */
export interface SignedEncryptionKey {
    /**
     * 
     * @type {string}
     * @memberof SignedEncryptionKey
     */
    publicKey: string;
    /**
     * 
     * @type {TimestampedSignature}
     * @memberof SignedEncryptionKey
     */
    timestampedSignature: TimestampedSignature;
}

/**
 * Check if a given object implements the SignedEncryptionKey interface.
 */
export function instanceOfSignedEncryptionKey(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "publicKey" in value;
    isInstance = isInstance && "timestampedSignature" in value;

    return isInstance;
}

export function SignedEncryptionKeyFromJSON(json: any): SignedEncryptionKey {
    return SignedEncryptionKeyFromJSONTyped(json, false);
}

export function SignedEncryptionKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignedEncryptionKey {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'publicKey': json['public_key'],
        'timestampedSignature': TimestampedSignatureFromJSON(json['timestamped_signature']),
    };
}

export function SignedEncryptionKeyToJSON(value?: SignedEncryptionKey | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'public_key': value.publicKey,
        'timestamped_signature': TimestampedSignatureToJSON(value.timestampedSignature),
    };
}

