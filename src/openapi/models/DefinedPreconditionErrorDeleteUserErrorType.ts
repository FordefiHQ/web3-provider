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
import type { DeleteUserErrorType } from './DeleteUserErrorType';
import {
    DeleteUserErrorTypeFromJSON,
    DeleteUserErrorTypeFromJSONTyped,
    DeleteUserErrorTypeToJSON,
    DeleteUserErrorTypeToJSONTyped,
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
export function instanceOfDefinedPreconditionErrorDeleteUserErrorType(value: object): value is DefinedPreconditionErrorDeleteUserErrorType {
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('detail' in value) || value['detail'] === undefined) return false;
    return true;
}

export function DefinedPreconditionErrorDeleteUserErrorTypeFromJSON(json: any): DefinedPreconditionErrorDeleteUserErrorType {
    return DefinedPreconditionErrorDeleteUserErrorTypeFromJSONTyped(json, false);
}

export function DefinedPreconditionErrorDeleteUserErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DefinedPreconditionErrorDeleteUserErrorType {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'],
        'detail': json['detail'],
        'requestId': json['request_id'] == null ? undefined : json['request_id'],
        'systemErrorCode': json['system_error_code'] == null ? undefined : json['system_error_code'],
        'errorType': json['error_type'] == null ? undefined : DeleteUserErrorTypeFromJSON(json['error_type']),
    };
}

export function DefinedPreconditionErrorDeleteUserErrorTypeToJSON(json: any): DefinedPreconditionErrorDeleteUserErrorType {
    return DefinedPreconditionErrorDeleteUserErrorTypeToJSONTyped(json, false);
}

export function DefinedPreconditionErrorDeleteUserErrorTypeToJSONTyped(value?: DefinedPreconditionErrorDeleteUserErrorType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'title': value['title'],
        'detail': value['detail'],
        'request_id': value['requestId'],
        'system_error_code': value['systemErrorCode'],
        'error_type': DeleteUserErrorTypeToJSON(value['errorType']),
    };
}

