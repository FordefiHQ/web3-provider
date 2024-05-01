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
import type { DeleteUserErrorType } from './DeleteUserErrorType';
import {
    DeleteUserErrorTypeFromJSON,
    DeleteUserErrorTypeFromJSONTyped,
    DeleteUserErrorTypeToJSON,
} from './DeleteUserErrorType';

/**
 * 
 * @export
 * @interface DefinedPreconditionErrorDeleteUserErrorType
 */
export interface DefinedPreconditionErrorDeleteUserErrorType {
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorDeleteUserErrorType
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorDeleteUserErrorType
     */
    detail: string;
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorDeleteUserErrorType
     */
    requestId?: string;
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorDeleteUserErrorType
     */
    systemErrorCode?: string;
    /**
     * 
     * @type {DeleteUserErrorType}
     * @memberof DefinedPreconditionErrorDeleteUserErrorType
     */
    errorType?: DeleteUserErrorType;
}

/**
 * Check if a given object implements the DefinedPreconditionErrorDeleteUserErrorType interface.
 */
export function instanceOfDefinedPreconditionErrorDeleteUserErrorType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "detail" in value;

    return isInstance;
}

export function DefinedPreconditionErrorDeleteUserErrorTypeFromJSON(json: any): DefinedPreconditionErrorDeleteUserErrorType {
    return DefinedPreconditionErrorDeleteUserErrorTypeFromJSONTyped(json, false);
}

export function DefinedPreconditionErrorDeleteUserErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DefinedPreconditionErrorDeleteUserErrorType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'detail': json['detail'],
        'requestId': !exists(json, 'request_id') ? undefined : json['request_id'],
        'systemErrorCode': !exists(json, 'system_error_code') ? undefined : json['system_error_code'],
        'errorType': !exists(json, 'error_type') ? undefined : DeleteUserErrorTypeFromJSON(json['error_type']),
    };
}

export function DefinedPreconditionErrorDeleteUserErrorTypeToJSON(value?: DefinedPreconditionErrorDeleteUserErrorType | null): any {
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
        'error_type': DeleteUserErrorTypeToJSON(value.errorType),
    };
}

