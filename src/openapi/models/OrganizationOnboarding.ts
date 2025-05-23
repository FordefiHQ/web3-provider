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
import type { OnboardingType } from './OnboardingType';
import {
    OnboardingTypeFromJSON,
    OnboardingTypeFromJSONTyped,
    OnboardingTypeToJSON,
    OnboardingTypeToJSONTyped,
} from './OnboardingType';

/**
 * 
 * @export
 * @interface OrganizationOnboarding
 */
export interface OrganizationOnboarding {
    /**
     * 
     * @type {string}
     * @memberof OrganizationOnboarding
     */
    organizationId: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationOnboarding
     */
    organizationName: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationOnboarding
     */
    deviceId: string;
    /**
     * 
     * @type {OnboardingType}
     * @memberof OrganizationOnboarding
     */
    onboardingType: OnboardingType;
    /**
     * 
     * @type {Date}
     * @memberof OrganizationOnboarding
     */
    invitedToOrganizationAt: Date;
}



/**
 * Check if a given object implements the OrganizationOnboarding interface.
 */
export function instanceOfOrganizationOnboarding(value: object): value is OrganizationOnboarding {
    if (!('organizationId' in value) || value['organizationId'] === undefined) return false;
    if (!('organizationName' in value) || value['organizationName'] === undefined) return false;
    if (!('deviceId' in value) || value['deviceId'] === undefined) return false;
    if (!('onboardingType' in value) || value['onboardingType'] === undefined) return false;
    if (!('invitedToOrganizationAt' in value) || value['invitedToOrganizationAt'] === undefined) return false;
    return true;
}

export function OrganizationOnboardingFromJSON(json: any): OrganizationOnboarding {
    return OrganizationOnboardingFromJSONTyped(json, false);
}

export function OrganizationOnboardingFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationOnboarding {
    if (json == null) {
        return json;
    }
    return {
        
        'organizationId': json['organization_id'],
        'organizationName': json['organization_name'],
        'deviceId': json['device_id'],
        'onboardingType': OnboardingTypeFromJSON(json['onboarding_type']),
        'invitedToOrganizationAt': (new Date(json['invited_to_organization_at'])),
    };
}

export function OrganizationOnboardingToJSON(json: any): OrganizationOnboarding {
    return OrganizationOnboardingToJSONTyped(json, false);
}

export function OrganizationOnboardingToJSONTyped(value?: OrganizationOnboarding | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'organization_id': value['organizationId'],
        'organization_name': value['organizationName'],
        'device_id': value['deviceId'],
        'onboarding_type': OnboardingTypeToJSON(value['onboardingType']),
        'invited_to_organization_at': ((value['invitedToOrganizationAt']).toISOString()),
    };
}

