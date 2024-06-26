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
import type { UserWithOrganization } from './UserWithOrganization';
import {
    UserWithOrganizationFromJSON,
    UserWithOrganizationFromJSONTyped,
    UserWithOrganizationToJSON,
} from './UserWithOrganization';

/**
 * 
 * @export
 * @interface CompleteDeviceOnboardingResponse
 */
export interface CompleteDeviceOnboardingResponse {
    /**
     * 
     * @type {UserWithOrganization}
     * @memberof CompleteDeviceOnboardingResponse
     */
    userInfo: UserWithOrganization;
}

/**
 * Check if a given object implements the CompleteDeviceOnboardingResponse interface.
 */
export function instanceOfCompleteDeviceOnboardingResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userInfo" in value;

    return isInstance;
}

export function CompleteDeviceOnboardingResponseFromJSON(json: any): CompleteDeviceOnboardingResponse {
    return CompleteDeviceOnboardingResponseFromJSONTyped(json, false);
}

export function CompleteDeviceOnboardingResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompleteDeviceOnboardingResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userInfo': UserWithOrganizationFromJSON(json['user_info']),
    };
}

export function CompleteDeviceOnboardingResponseToJSON(value?: CompleteDeviceOnboardingResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user_info': UserWithOrganizationToJSON(value.userInfo),
    };
}

