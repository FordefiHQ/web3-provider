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
 * @interface SetImpersonationByOrganizationRequest
 */
export interface SetImpersonationByOrganizationRequest {
    /**
     * 
     * @type {string}
     * @memberof SetImpersonationByOrganizationRequest
     */
    impersonatedOrganizationId: string;
}

/**
 * Check if a given object implements the SetImpersonationByOrganizationRequest interface.
 */
export function instanceOfSetImpersonationByOrganizationRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "impersonatedOrganizationId" in value;

    return isInstance;
}

export function SetImpersonationByOrganizationRequestFromJSON(json: any): SetImpersonationByOrganizationRequest {
    return SetImpersonationByOrganizationRequestFromJSONTyped(json, false);
}

export function SetImpersonationByOrganizationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetImpersonationByOrganizationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'impersonatedOrganizationId': json['impersonated_organization_id'],
    };
}

export function SetImpersonationByOrganizationRequestToJSON(value?: SetImpersonationByOrganizationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'impersonated_organization_id': value.impersonatedOrganizationId,
    };
}

