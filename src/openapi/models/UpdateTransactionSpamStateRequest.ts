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
 * @interface UpdateTransactionSpamStateRequest
 */
export interface UpdateTransactionSpamStateRequest {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateTransactionSpamStateRequest
     */
    isSpam: boolean;
}

/**
 * Check if a given object implements the UpdateTransactionSpamStateRequest interface.
 */
export function instanceOfUpdateTransactionSpamStateRequest(value: object): value is UpdateTransactionSpamStateRequest {
    if (!('isSpam' in value) || value['isSpam'] === undefined) return false;
    return true;
}

export function UpdateTransactionSpamStateRequestFromJSON(json: any): UpdateTransactionSpamStateRequest {
    return UpdateTransactionSpamStateRequestFromJSONTyped(json, false);
}

export function UpdateTransactionSpamStateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateTransactionSpamStateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'isSpam': json['is_spam'],
    };
}

export function UpdateTransactionSpamStateRequestToJSON(json: any): UpdateTransactionSpamStateRequest {
    return UpdateTransactionSpamStateRequestToJSONTyped(json, false);
}

export function UpdateTransactionSpamStateRequestToJSONTyped(value?: UpdateTransactionSpamStateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'is_spam': value['isSpam'],
    };
}

