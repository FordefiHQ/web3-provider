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
import type { TestWebhookErrorType } from './TestWebhookErrorType';
import {
    TestWebhookErrorTypeFromJSON,
    TestWebhookErrorTypeFromJSONTyped,
    TestWebhookErrorTypeToJSON,
    TestWebhookErrorTypeToJSONTyped,
} from './TestWebhookErrorType';

/**
 * 
 * @export
 * @interface DefinedPreconditionErrorTestWebhookErrorType
 */
export interface DefinedPreconditionErrorTestWebhookErrorType {
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorTestWebhookErrorType
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorTestWebhookErrorType
     */
    detail: string;
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorTestWebhookErrorType
     */
    requestId?: string;
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorTestWebhookErrorType
     */
    systemErrorCode?: string;
    /**
     * 
     * @type {TestWebhookErrorType}
     * @memberof DefinedPreconditionErrorTestWebhookErrorType
     */
    errorType?: TestWebhookErrorType;
}



/**
 * Check if a given object implements the DefinedPreconditionErrorTestWebhookErrorType interface.
 */
export function instanceOfDefinedPreconditionErrorTestWebhookErrorType(value: object): value is DefinedPreconditionErrorTestWebhookErrorType {
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('detail' in value) || value['detail'] === undefined) return false;
    return true;
}

export function DefinedPreconditionErrorTestWebhookErrorTypeFromJSON(json: any): DefinedPreconditionErrorTestWebhookErrorType {
    return DefinedPreconditionErrorTestWebhookErrorTypeFromJSONTyped(json, false);
}

export function DefinedPreconditionErrorTestWebhookErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DefinedPreconditionErrorTestWebhookErrorType {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'],
        'detail': json['detail'],
        'requestId': json['request_id'] == null ? undefined : json['request_id'],
        'systemErrorCode': json['system_error_code'] == null ? undefined : json['system_error_code'],
        'errorType': json['error_type'] == null ? undefined : TestWebhookErrorTypeFromJSON(json['error_type']),
    };
}

export function DefinedPreconditionErrorTestWebhookErrorTypeToJSON(json: any): DefinedPreconditionErrorTestWebhookErrorType {
    return DefinedPreconditionErrorTestWebhookErrorTypeToJSONTyped(json, false);
}

export function DefinedPreconditionErrorTestWebhookErrorTypeToJSONTyped(value?: DefinedPreconditionErrorTestWebhookErrorType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'title': value['title'],
        'detail': value['detail'],
        'request_id': value['requestId'],
        'system_error_code': value['systemErrorCode'],
        'error_type': TestWebhookErrorTypeToJSON(value['errorType']),
    };
}

