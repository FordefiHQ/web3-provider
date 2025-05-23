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

import type { IssueEndUserAuthTokenRequest } from './IssueEndUserAuthTokenRequest';
import {
    instanceOfIssueEndUserAuthTokenRequest,
    IssueEndUserAuthTokenRequestFromJSON,
    IssueEndUserAuthTokenRequestFromJSONTyped,
    IssueEndUserAuthTokenRequestToJSON,
} from './IssueEndUserAuthTokenRequest';

/**
 * @type IssueAuthTokenRequest
 * 
 * @export
 */
export type IssueAuthTokenRequest = { userType: 'end_user' } & IssueEndUserAuthTokenRequest;

export function IssueAuthTokenRequestFromJSON(json: any): IssueAuthTokenRequest {
    return IssueAuthTokenRequestFromJSONTyped(json, false);
}

export function IssueAuthTokenRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IssueAuthTokenRequest {
    if (json == null) {
        return json;
    }
    switch (json['user_type']) {
        case 'end_user':
            return Object.assign({}, IssueEndUserAuthTokenRequestFromJSONTyped(json, true), { userType: 'end_user' } as const);
        default:
            throw new Error(`No variant of IssueAuthTokenRequest exists with 'userType=${json['userType']}'`);
    }
}

export function IssueAuthTokenRequestToJSON(json: any): any {
    return IssueAuthTokenRequestToJSONTyped(json, false);
}

export function IssueAuthTokenRequestToJSONTyped(value?: IssueAuthTokenRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['userType']) {
        case 'end_user':
            return Object.assign({}, IssueEndUserAuthTokenRequestToJSON(value), { userType: 'end_user' } as const);
        default:
            throw new Error(`No variant of IssueAuthTokenRequest exists with 'userType=${value['userType']}'`);
    }

}

