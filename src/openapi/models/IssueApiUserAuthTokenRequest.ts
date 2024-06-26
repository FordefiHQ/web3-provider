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
/**
 * 
 * @export
 * @interface IssueApiUserAuthTokenRequest
 */
export interface IssueApiUserAuthTokenRequest {
    /**
     * 
     * @type {string}
     * @memberof IssueApiUserAuthTokenRequest
     */
    userType: IssueApiUserAuthTokenRequestUserTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof IssueApiUserAuthTokenRequest
     */
    userId: string;
}


/**
 * @export
 */
export const IssueApiUserAuthTokenRequestUserTypeEnum = {
    apiUser: 'api_user'
} as const;
export type IssueApiUserAuthTokenRequestUserTypeEnum = typeof IssueApiUserAuthTokenRequestUserTypeEnum[keyof typeof IssueApiUserAuthTokenRequestUserTypeEnum];


/**
 * Check if a given object implements the IssueApiUserAuthTokenRequest interface.
 */
export function instanceOfIssueApiUserAuthTokenRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userType" in value;
    isInstance = isInstance && "userId" in value;

    return isInstance;
}

export function IssueApiUserAuthTokenRequestFromJSON(json: any): IssueApiUserAuthTokenRequest {
    return IssueApiUserAuthTokenRequestFromJSONTyped(json, false);
}

export function IssueApiUserAuthTokenRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IssueApiUserAuthTokenRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userType': json['user_type'],
        'userId': json['user_id'],
    };
}

export function IssueApiUserAuthTokenRequestToJSON(value?: IssueApiUserAuthTokenRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user_type': value.userType,
        'user_id': value.userId,
    };
}

