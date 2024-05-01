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
export function instanceOfTimestampedSignature(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "timestamp" in value;

    return isInstance;
}

export function TimestampedSignatureFromJSON(json: any): TimestampedSignature {
    return TimestampedSignatureFromJSONTyped(json, false);
}

export function TimestampedSignatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimestampedSignature {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'signature': json['signature'],
        'timestamp': json['timestamp'],
    };
}

export function TimestampedSignatureToJSON(value?: TimestampedSignature | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'signature': value.signature,
        'timestamp': value.timestamp,
    };
}

