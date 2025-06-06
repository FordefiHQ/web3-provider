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
 * @interface LogSyncKeysSuccessRequest
 */
export interface LogSyncKeysSuccessRequest {
    /**
     * 
     * @type {string}
     * @memberof LogSyncKeysSuccessRequest
     */
    buildVersion: string;
}

/**
 * Check if a given object implements the LogSyncKeysSuccessRequest interface.
 */
export function instanceOfLogSyncKeysSuccessRequest(value: object): value is LogSyncKeysSuccessRequest {
    if (!('buildVersion' in value) || value['buildVersion'] === undefined) return false;
    return true;
}

export function LogSyncKeysSuccessRequestFromJSON(json: any): LogSyncKeysSuccessRequest {
    return LogSyncKeysSuccessRequestFromJSONTyped(json, false);
}

export function LogSyncKeysSuccessRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LogSyncKeysSuccessRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'buildVersion': json['build_version'],
    };
}

export function LogSyncKeysSuccessRequestToJSON(json: any): LogSyncKeysSuccessRequest {
    return LogSyncKeysSuccessRequestToJSONTyped(json, false);
}

export function LogSyncKeysSuccessRequestToJSONTyped(value?: LogSyncKeysSuccessRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'build_version': value['buildVersion'],
    };
}

