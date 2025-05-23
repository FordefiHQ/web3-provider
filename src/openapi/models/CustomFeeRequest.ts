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
 * @interface CustomFeeRequest
 */
export interface CustomFeeRequest {
    /**
     * 
     * @type {string}
     * @memberof CustomFeeRequest
     */
    type: CustomFeeRequestTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CustomFeeRequest
     */
    feePerByte: string;
}


/**
 * @export
 */
export const CustomFeeRequestTypeEnum = {
    custom: 'custom'
} as const;
export type CustomFeeRequestTypeEnum = typeof CustomFeeRequestTypeEnum[keyof typeof CustomFeeRequestTypeEnum];


/**
 * Check if a given object implements the CustomFeeRequest interface.
 */
export function instanceOfCustomFeeRequest(value: object): value is CustomFeeRequest {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('feePerByte' in value) || value['feePerByte'] === undefined) return false;
    return true;
}

export function CustomFeeRequestFromJSON(json: any): CustomFeeRequest {
    return CustomFeeRequestFromJSONTyped(json, false);
}

export function CustomFeeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomFeeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'feePerByte': json['fee_per_byte'],
    };
}

export function CustomFeeRequestToJSON(json: any): CustomFeeRequest {
    return CustomFeeRequestToJSONTyped(json, false);
}

export function CustomFeeRequestToJSONTyped(value?: CustomFeeRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'fee_per_byte': value['feePerByte'],
    };
}

