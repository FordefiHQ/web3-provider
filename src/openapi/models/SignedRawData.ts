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
 * @interface SignedRawData
 */
export interface SignedRawData {
    /**
     * 
     * @type {string}
     * @memberof SignedRawData
     */
    rawData: string;
    /**
     * 
     * @type {TimestampedSignature}
     * @memberof SignedRawData
     */
    timestampSignature: TimestampedSignature;
    /**
     * 
     * @type {string}
     * @memberof SignedRawData
     */
    urlPath: string;
}

/**
 * Check if a given object implements the SignedRawData interface.
 */
export function instanceOfSignedRawData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "rawData" in value;
    isInstance = isInstance && "timestampSignature" in value;
    isInstance = isInstance && "urlPath" in value;

    return isInstance;
}

export function SignedRawDataFromJSON(json: any): SignedRawData {
    return SignedRawDataFromJSONTyped(json, false);
}

export function SignedRawDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignedRawData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rawData': json['raw_data'],
        'timestampSignature': TimestampedSignatureFromJSON(json['timestamp_signature']),
        'urlPath': json['url_path'],
    };
}

export function SignedRawDataToJSON(value?: SignedRawData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'raw_data': value.rawData,
        'timestamp_signature': TimestampedSignatureToJSON(value.timestampSignature),
        'url_path': value.urlPath,
    };
}

