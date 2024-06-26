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
import type { SignTransactionErrorType } from './SignTransactionErrorType';
import {
    SignTransactionErrorTypeFromJSON,
    SignTransactionErrorTypeFromJSONTyped,
    SignTransactionErrorTypeToJSON,
} from './SignTransactionErrorType';

/**
 * 
 * @export
 * @interface DefinedPreconditionErrorSignTransactionErrorType
 */
export interface DefinedPreconditionErrorSignTransactionErrorType {
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorSignTransactionErrorType
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorSignTransactionErrorType
     */
    detail: string;
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorSignTransactionErrorType
     */
    requestId?: string;
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorSignTransactionErrorType
     */
    systemErrorCode?: string;
    /**
     * 
     * @type {SignTransactionErrorType}
     * @memberof DefinedPreconditionErrorSignTransactionErrorType
     */
    errorType?: SignTransactionErrorType;
}

/**
 * Check if a given object implements the DefinedPreconditionErrorSignTransactionErrorType interface.
 */
export function instanceOfDefinedPreconditionErrorSignTransactionErrorType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "detail" in value;

    return isInstance;
}

export function DefinedPreconditionErrorSignTransactionErrorTypeFromJSON(json: any): DefinedPreconditionErrorSignTransactionErrorType {
    return DefinedPreconditionErrorSignTransactionErrorTypeFromJSONTyped(json, false);
}

export function DefinedPreconditionErrorSignTransactionErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DefinedPreconditionErrorSignTransactionErrorType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'detail': json['detail'],
        'requestId': !exists(json, 'request_id') ? undefined : json['request_id'],
        'systemErrorCode': !exists(json, 'system_error_code') ? undefined : json['system_error_code'],
        'errorType': !exists(json, 'error_type') ? undefined : SignTransactionErrorTypeFromJSON(json['error_type']),
    };
}

export function DefinedPreconditionErrorSignTransactionErrorTypeToJSON(value?: DefinedPreconditionErrorSignTransactionErrorType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'detail': value.detail,
        'request_id': value.requestId,
        'system_error_code': value.systemErrorCode,
        'error_type': SignTransactionErrorTypeToJSON(value.errorType),
    };
}

