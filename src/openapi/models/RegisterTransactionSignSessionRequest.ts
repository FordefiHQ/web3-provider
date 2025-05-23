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
 * @interface RegisterTransactionSignSessionRequest
 */
export interface RegisterTransactionSignSessionRequest {
    /**
     * 
     * @type {string}
     * @memberof RegisterTransactionSignSessionRequest
     */
    protocolVersion: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterTransactionSignSessionRequest
     */
    sessionSeed?: string;
}

/**
 * Check if a given object implements the RegisterTransactionSignSessionRequest interface.
 */
export function instanceOfRegisterTransactionSignSessionRequest(value: object): value is RegisterTransactionSignSessionRequest {
    if (!('protocolVersion' in value) || value['protocolVersion'] === undefined) return false;
    return true;
}

export function RegisterTransactionSignSessionRequestFromJSON(json: any): RegisterTransactionSignSessionRequest {
    return RegisterTransactionSignSessionRequestFromJSONTyped(json, false);
}

export function RegisterTransactionSignSessionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterTransactionSignSessionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'protocolVersion': json['protocol_version'],
        'sessionSeed': json['session_seed'] == null ? undefined : json['session_seed'],
    };
}

export function RegisterTransactionSignSessionRequestToJSON(json: any): RegisterTransactionSignSessionRequest {
    return RegisterTransactionSignSessionRequestToJSONTyped(json, false);
}

export function RegisterTransactionSignSessionRequestToJSONTyped(value?: RegisterTransactionSignSessionRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'protocol_version': value['protocolVersion'],
        'session_seed': value['sessionSeed'],
    };
}

