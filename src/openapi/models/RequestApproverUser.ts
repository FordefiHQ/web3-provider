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

import type { ApiUserRef } from './ApiUserRef';
import {
    instanceOfApiUserRef,
    ApiUserRefFromJSON,
    ApiUserRefFromJSONTyped,
    ApiUserRefToJSON,
} from './ApiUserRef';
import type { PersonRef } from './PersonRef';
import {
    instanceOfPersonRef,
    PersonRefFromJSON,
    PersonRefFromJSONTyped,
    PersonRefToJSON,
} from './PersonRef';

/**
 * @type RequestApproverUser
 * 
 * @export
 */
export type RequestApproverUser = { userType: 'api_user' } & ApiUserRef | { userType: 'person' } & PersonRef;

export function RequestApproverUserFromJSON(json: any): RequestApproverUser {
    return RequestApproverUserFromJSONTyped(json, false);
}

export function RequestApproverUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestApproverUser {
    if (json == null) {
        return json;
    }
    switch (json['user_type']) {
        case 'api_user':
            return Object.assign({}, ApiUserRefFromJSONTyped(json, true), { userType: 'api_user' } as const);
        case 'person':
            return Object.assign({}, PersonRefFromJSONTyped(json, true), { userType: 'person' } as const);
        default:
            throw new Error(`No variant of RequestApproverUser exists with 'userType=${json['userType']}'`);
    }
}

export function RequestApproverUserToJSON(json: any): any {
    return RequestApproverUserToJSONTyped(json, false);
}

export function RequestApproverUserToJSONTyped(value?: RequestApproverUser | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['userType']) {
        case 'api_user':
            return Object.assign({}, ApiUserRefToJSON(value), { userType: 'api_user' } as const);
        case 'person':
            return Object.assign({}, PersonRefToJSON(value), { userType: 'person' } as const);
        default:
            throw new Error(`No variant of RequestApproverUser exists with 'userType=${value['userType']}'`);
    }

}

