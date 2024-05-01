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
import type { KeyDerivationArgs } from './KeyDerivationArgs';
import {
    KeyDerivationArgsFromJSON,
    KeyDerivationArgsFromJSONTyped,
    KeyDerivationArgsToJSON,
} from './KeyDerivationArgs';
import type { SignSession } from './SignSession';
import {
    SignSessionFromJSON,
    SignSessionFromJSONTyped,
    SignSessionToJSON,
} from './SignSession';
import type { TimestampedSignature } from './TimestampedSignature';
import {
    TimestampedSignatureFromJSON,
    TimestampedSignatureFromJSONTyped,
    TimestampedSignatureToJSON,
} from './TimestampedSignature';

/**
 * 
 * @export
 * @interface RegisterTransactionSignSessionResponse
 */
export interface RegisterTransactionSignSessionResponse {
    /**
     * 
     * @type {string}
     * @memberof RegisterTransactionSignSessionResponse
     * @deprecated
     */
    sessionId: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterTransactionSignSessionResponse
     * @deprecated
     */
    hash: string;
    /**
     * 
     * @type {TimestampedSignature}
     * @memberof RegisterTransactionSignSessionResponse
     */
    timestampedSignature: TimestampedSignature;
    /**
     * 
     * @type {TimestampedSignature}
     * @memberof RegisterTransactionSignSessionResponse
     */
    timestampedSignatureV2: TimestampedSignature;
    /**
     * 
     * @type {KeyDerivationArgs}
     * @memberof RegisterTransactionSignSessionResponse
     */
    keyDerivationArgs: KeyDerivationArgs;
    /**
     * 
     * @type {Array<SignSession>}
     * @memberof RegisterTransactionSignSessionResponse
     */
    signSessions: Array<SignSession>;
}

/**
 * Check if a given object implements the RegisterTransactionSignSessionResponse interface.
 */
export function instanceOfRegisterTransactionSignSessionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sessionId" in value;
    isInstance = isInstance && "hash" in value;
    isInstance = isInstance && "timestampedSignature" in value;
    isInstance = isInstance && "timestampedSignatureV2" in value;
    isInstance = isInstance && "keyDerivationArgs" in value;
    isInstance = isInstance && "signSessions" in value;

    return isInstance;
}

export function RegisterTransactionSignSessionResponseFromJSON(json: any): RegisterTransactionSignSessionResponse {
    return RegisterTransactionSignSessionResponseFromJSONTyped(json, false);
}

export function RegisterTransactionSignSessionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterTransactionSignSessionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sessionId': json['session_id'],
        'hash': json['hash'],
        'timestampedSignature': TimestampedSignatureFromJSON(json['timestamped_signature']),
        'timestampedSignatureV2': TimestampedSignatureFromJSON(json['timestamped_signature_v2']),
        'keyDerivationArgs': KeyDerivationArgsFromJSON(json['key_derivation_args']),
        'signSessions': ((json['sign_sessions'] as Array<any>).map(SignSessionFromJSON)),
    };
}

export function RegisterTransactionSignSessionResponseToJSON(value?: RegisterTransactionSignSessionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'session_id': value.sessionId,
        'hash': value.hash,
        'timestamped_signature': TimestampedSignatureToJSON(value.timestampedSignature),
        'timestamped_signature_v2': TimestampedSignatureToJSON(value.timestampedSignatureV2),
        'key_derivation_args': KeyDerivationArgsToJSON(value.keyDerivationArgs),
        'sign_sessions': ((value.signSessions as Array<any>).map(SignSessionToJSON)),
    };
}

