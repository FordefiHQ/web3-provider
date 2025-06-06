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
import type { BlockchainErrorType } from './BlockchainErrorType';
import {
    BlockchainErrorTypeFromJSON,
    BlockchainErrorTypeFromJSONTyped,
    BlockchainErrorTypeToJSON,
    BlockchainErrorTypeToJSONTyped,
} from './BlockchainErrorType';

/**
 * 
 * @export
 * @interface DefinedPreconditionErrorBlockchainErrorType
 */
export interface DefinedPreconditionErrorBlockchainErrorType {
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorBlockchainErrorType
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorBlockchainErrorType
     */
    detail: string;
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorBlockchainErrorType
     */
    requestId?: string;
    /**
     * 
     * @type {string}
     * @memberof DefinedPreconditionErrorBlockchainErrorType
     */
    systemErrorCode?: string;
    /**
     * 
     * @type {BlockchainErrorType}
     * @memberof DefinedPreconditionErrorBlockchainErrorType
     */
    errorType?: BlockchainErrorType;
}



/**
 * Check if a given object implements the DefinedPreconditionErrorBlockchainErrorType interface.
 */
export function instanceOfDefinedPreconditionErrorBlockchainErrorType(value: object): value is DefinedPreconditionErrorBlockchainErrorType {
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('detail' in value) || value['detail'] === undefined) return false;
    return true;
}

export function DefinedPreconditionErrorBlockchainErrorTypeFromJSON(json: any): DefinedPreconditionErrorBlockchainErrorType {
    return DefinedPreconditionErrorBlockchainErrorTypeFromJSONTyped(json, false);
}

export function DefinedPreconditionErrorBlockchainErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DefinedPreconditionErrorBlockchainErrorType {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'],
        'detail': json['detail'],
        'requestId': json['request_id'] == null ? undefined : json['request_id'],
        'systemErrorCode': json['system_error_code'] == null ? undefined : json['system_error_code'],
        'errorType': json['error_type'] == null ? undefined : BlockchainErrorTypeFromJSON(json['error_type']),
    };
}

export function DefinedPreconditionErrorBlockchainErrorTypeToJSON(json: any): DefinedPreconditionErrorBlockchainErrorType {
    return DefinedPreconditionErrorBlockchainErrorTypeToJSONTyped(json, false);
}

export function DefinedPreconditionErrorBlockchainErrorTypeToJSONTyped(value?: DefinedPreconditionErrorBlockchainErrorType | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'title': value['title'],
        'detail': value['detail'],
        'request_id': value['requestId'],
        'system_error_code': value['systemErrorCode'],
        'error_type': BlockchainErrorTypeToJSON(value['errorType']),
    };
}

