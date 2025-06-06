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
import type { CreateExchangeAssetMappingErrorType } from './CreateExchangeAssetMappingErrorType';
import {
    CreateExchangeAssetMappingErrorTypeFromJSON,
    CreateExchangeAssetMappingErrorTypeFromJSONTyped,
    CreateExchangeAssetMappingErrorTypeToJSON,
    CreateExchangeAssetMappingErrorTypeToJSONTyped,
} from './CreateExchangeAssetMappingErrorType';

/**
 * 
 * @export
 * @interface DefinedPreconditionErrorCreateExchangeAssetMappingErrorType
 */
export interface DefinedPreconditionErrorCreateExchangeAssetMappingErrorType {
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorCreateExchangeAssetMappingErrorType
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorCreateExchangeAssetMappingErrorType
     */
    detail: string;
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorCreateExchangeAssetMappingErrorType
     */
    requestId?: string;
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorCreateExchangeAssetMappingErrorType
     */
    systemErrorCode?: string;
    /**
     * 
     * @type {CreateExchangeAssetMappingErrorType}
     * @memberof DefinedPreconditionErrorCreateExchangeAssetMappingErrorType
     */
    errorType?: CreateExchangeAssetMappingErrorType;
}



/**
 * Check if a given object implements the DefinedPreconditionErrorCreateExchangeAssetMappingErrorType interface.
 */
export function instanceOfDefinedPreconditionErrorCreateExchangeAssetMappingErrorType(value: object): value is DefinedPreconditionErrorCreateExchangeAssetMappingErrorType {
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('detail' in value) || value['detail'] === undefined) return false;
    return true;
}

export function DefinedPreconditionErrorCreateExchangeAssetMappingErrorTypeFromJSON(json: any): DefinedPreconditionErrorCreateExchangeAssetMappingErrorType {
    return DefinedPreconditionErrorCreateExchangeAssetMappingErrorTypeFromJSONTyped(json, false);
}

export function DefinedPreconditionErrorCreateExchangeAssetMappingErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DefinedPreconditionErrorCreateExchangeAssetMappingErrorType {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'],
        'detail': json['detail'],
        'requestId': json['request_id'] == null ? undefined : json['request_id'],
        'systemErrorCode': json['system_error_code'] == null ? undefined : json['system_error_code'],
        'errorType': json['error_type'] == null ? undefined : CreateExchangeAssetMappingErrorTypeFromJSON(json['error_type']),
    };
}

export function DefinedPreconditionErrorCreateExchangeAssetMappingErrorTypeToJSON(json: any): DefinedPreconditionErrorCreateExchangeAssetMappingErrorType {
    return DefinedPreconditionErrorCreateExchangeAssetMappingErrorTypeToJSONTyped(json, false);
}

export function DefinedPreconditionErrorCreateExchangeAssetMappingErrorTypeToJSONTyped(value?: DefinedPreconditionErrorCreateExchangeAssetMappingErrorType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'title': value['title'],
        'detail': value['detail'],
        'request_id': value['requestId'],
        'system_error_code': value['systemErrorCode'],
        'error_type': CreateExchangeAssetMappingErrorTypeToJSON(value['errorType']),
    };
}

