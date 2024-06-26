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
import type { ValidationErrorDetail } from './ValidationErrorDetail';
import {
    ValidationErrorDetailFromJSON,
    ValidationErrorDetailFromJSONTyped,
    ValidationErrorDetailToJSON,
} from './ValidationErrorDetail';

/**
 * 
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    title: string;
    /**
     * 
     * @type {Array<ValidationErrorDetail>}
     * @memberof ValidationError
     */
    detail: Array<ValidationErrorDetail>;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    requestId?: string;
}

/**
 * Check if a given object implements the ValidationError interface.
 */
export function instanceOfValidationError(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "detail" in value;

    return isInstance;
}

export function ValidationErrorFromJSON(json: any): ValidationError {
    return ValidationErrorFromJSONTyped(json, false);
}

export function ValidationErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidationError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'detail': ((json['detail'] as Array<any>).map(ValidationErrorDetailFromJSON)),
        'requestId': !exists(json, 'request_id') ? undefined : json['request_id'],
    };
}

export function ValidationErrorToJSON(value?: ValidationError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'detail': ((value.detail as Array<any>).map(ValidationErrorDetailToJSON)),
        'request_id': value.requestId,
    };
}

