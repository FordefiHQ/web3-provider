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
import type { AutoRevokeProtection } from './AutoRevokeProtection';
import {
    AutoRevokeProtectionFromJSON,
    AutoRevokeProtectionFromJSONTyped,
    AutoRevokeProtectionToJSON,
} from './AutoRevokeProtection';

/**
 * 
 * @export
 * @interface OrganizationSettings
 */
export interface OrganizationSettings {
    /**
     * 
     * @type {AutoRevokeProtection}
     * @memberof OrganizationSettings
     */
    autoRevokeProtection: AutoRevokeProtection;
}

/**
 * Check if a given object implements the OrganizationSettings interface.
 */
export function instanceOfOrganizationSettings(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "autoRevokeProtection" in value;

    return isInstance;
}

export function OrganizationSettingsFromJSON(json: any): OrganizationSettings {
    return OrganizationSettingsFromJSONTyped(json, false);
}

export function OrganizationSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'autoRevokeProtection': AutoRevokeProtectionFromJSON(json['auto_revoke_protection']),
    };
}

export function OrganizationSettingsToJSON(value?: OrganizationSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'auto_revoke_protection': AutoRevokeProtectionToJSON(value.autoRevokeProtection),
    };
}
