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
 * @interface TimestampedSignature
 */
export interface TimestampedSignature {
    /**
     * 
     * @type {string}
     * @memberof TimestampedSignature
     */
    signature: string;
    /**
     * 
     * @type {number}
     * @memberof TimestampedSignature
     */
    timestamp: number;
}

/**
 * Check if a given object implements the TimestampedSignature interface.
 */
export function instanceOfTimestampedSignature(value: object): value is TimestampedSignature {
    if (!('signature' in value) || value['signature'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    return true;
}

export function TimestampedSignatureFromJSON(json: any): TimestampedSignature {
    return TimestampedSignatureFromJSONTyped(json, false);
}

export function TimestampedSignatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimestampedSignature {
    if (json == null) {
        return json;
    }
    return {
        
        'signature': json['signature'],
        'timestamp': json['timestamp'],
    };
}

export function TimestampedSignatureToJSON(json: any): TimestampedSignature {
    return TimestampedSignatureToJSONTyped(json, false);
}

export function TimestampedSignatureToJSONTyped(value?: TimestampedSignature | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'signature': value['signature'],
        'timestamp': value['timestamp'],
    };
}

