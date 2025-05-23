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
import type { UserAllowedIpSettings } from './UserAllowedIpSettings';
import {
    UserAllowedIpSettingsFromJSON,
    UserAllowedIpSettingsFromJSONTyped,
    UserAllowedIpSettingsToJSON,
    UserAllowedIpSettingsToJSONTyped,
} from './UserAllowedIpSettings';

/**
 * 
 * @export
 * @interface CreateApiUserRequest
 */
export interface CreateApiUserRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateApiUserRequest
     */
    userType: CreateApiUserRequestUserTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateApiUserRequest
     */
    userName: string;
    /**
     * 
     * @type {string}
     * @memberof CreateApiUserRequest
     */
    userRole: CreateApiUserRequestUserRoleEnum;
    /**
     * 
     * @type {UserAllowedIpSettings}
     * @memberof CreateApiUserRequest
     */
    allowedIpSettings: UserAllowedIpSettings;
}


/**
 * @export
 */
export const CreateApiUserRequestUserTypeEnum = {
    apiUser: 'api_user'
} as const;
export type CreateApiUserRequestUserTypeEnum = typeof CreateApiUserRequestUserTypeEnum[keyof typeof CreateApiUserRequestUserTypeEnum];

/**
 * @export
 */
export const CreateApiUserRequestUserRoleEnum = {
    viewer: 'viewer',
    trader: 'trader'
} as const;
export type CreateApiUserRequestUserRoleEnum = typeof CreateApiUserRequestUserRoleEnum[keyof typeof CreateApiUserRequestUserRoleEnum];


/**
 * Check if a given object implements the CreateApiUserRequest interface.
 */
export function instanceOfCreateApiUserRequest(value: object): value is CreateApiUserRequest {
    if (!('userType' in value) || value['userType'] === undefined) return false;
    if (!('userName' in value) || value['userName'] === undefined) return false;
    if (!('userRole' in value) || value['userRole'] === undefined) return false;
    if (!('allowedIpSettings' in value) || value['allowedIpSettings'] === undefined) return false;
    return true;
}

export function CreateApiUserRequestFromJSON(json: any): CreateApiUserRequest {
    return CreateApiUserRequestFromJSONTyped(json, false);
}

export function CreateApiUserRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateApiUserRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'userType': json['user_type'],
        'userName': json['user_name'],
        'userRole': json['user_role'],
        'allowedIpSettings': UserAllowedIpSettingsFromJSON(json['allowed_ip_settings']),
    };
}

export function CreateApiUserRequestToJSON(json: any): CreateApiUserRequest {
    return CreateApiUserRequestToJSONTyped(json, false);
}

export function CreateApiUserRequestToJSONTyped(value?: CreateApiUserRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'user_type': value['userType'],
        'user_name': value['userName'],
        'user_role': value['userRole'],
        'allowed_ip_settings': UserAllowedIpSettingsToJSON(value['allowedIpSettings']),
    };
}

