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
import type { CreateEndUserErrorType } from './CreateEndUserErrorType';
import {
    CreateEndUserErrorTypeFromJSON,
    CreateEndUserErrorTypeFromJSONTyped,
    CreateEndUserErrorTypeToJSON,
} from './CreateEndUserErrorType';

/**
 * 
 * @export
 * @interface DefinedPreconditionErrorCreateEndUserErrorType
 */
export interface DefinedPreconditionErrorCreateEndUserErrorType {
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorCreateEndUserErrorType
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorCreateEndUserErrorType
     */
    detail: string;
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorCreateEndUserErrorType
     */
    requestId?: string;
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorCreateEndUserErrorType
     */
    systemErrorCode?: string;
    /**
     * 
     * @type {CreateEndUserErrorType}
     * @memberof DefinedPreconditionErrorCreateEndUserErrorType
     */
    errorType?: CreateEndUserErrorType;
}

/**
 * Check if a given object implements the DefinedPreconditionErrorCreateEndUserErrorType interface.
 */
export function instanceOfDefinedPreconditionErrorCreateEndUserErrorType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "detail" in value;

    return isInstance;
}

export function DefinedPreconditionErrorCreateEndUserErrorTypeFromJSON(json: any): DefinedPreconditionErrorCreateEndUserErrorType {
    return DefinedPreconditionErrorCreateEndUserErrorTypeFromJSONTyped(json, false);
}

export function DefinedPreconditionErrorCreateEndUserErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DefinedPreconditionErrorCreateEndUserErrorType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'detail': json['detail'],
        'requestId': !exists(json, 'request_id') ? undefined : json['request_id'],
        'systemErrorCode': !exists(json, 'system_error_code') ? undefined : json['system_error_code'],
        'errorType': !exists(json, 'error_type') ? undefined : CreateEndUserErrorTypeFromJSON(json['error_type']),
    };
}

export function DefinedPreconditionErrorCreateEndUserErrorTypeToJSON(value?: DefinedPreconditionErrorCreateEndUserErrorType | null): any {
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
        'error_type': CreateEndUserErrorTypeToJSON(value.errorType),
    };
}

