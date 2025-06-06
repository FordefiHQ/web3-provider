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
 * @interface GetImpersonationResponse
 */
export interface GetImpersonationResponse {
    /**
     * 
     * @type {string}
     * @memberof GetImpersonationResponse
     */
    impersonatorUserEmail: string;
    /**
     * 
     * @type {string}
     * @memberof GetImpersonationResponse
     */
    impersonatedUserEmail: string;
}

/**
 * Check if a given object implements the GetImpersonationResponse interface.
 */
export function instanceOfGetImpersonationResponse(value: object): value is GetImpersonationResponse {
    if (!('impersonatorUserEmail' in value) || value['impersonatorUserEmail'] === undefined) return false;
    if (!('impersonatedUserEmail' in value) || value['impersonatedUserEmail'] === undefined) return false;
    return true;
}

export function GetImpersonationResponseFromJSON(json: any): GetImpersonationResponse {
    return GetImpersonationResponseFromJSONTyped(json, false);
}

export function GetImpersonationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetImpersonationResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'impersonatorUserEmail': json['impersonator_user_email'],
        'impersonatedUserEmail': json['impersonated_user_email'],
    };
}

export function GetImpersonationResponseToJSON(json: any): GetImpersonationResponse {
    return GetImpersonationResponseToJSONTyped(json, false);
}

export function GetImpersonationResponseToJSONTyped(value?: GetImpersonationResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'impersonator_user_email': value['impersonatorUserEmail'],
        'impersonated_user_email': value['impersonatedUserEmail'],
    };
}

