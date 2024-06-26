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
import type { OrganizationInfo } from './OrganizationInfo';
import {
    OrganizationInfoFromJSON,
    OrganizationInfoFromJSONTyped,
    OrganizationInfoToJSON,
} from './OrganizationInfo';

/**
 * 
 * @export
 * @interface ListOrganizationsResponse
 */
export interface ListOrganizationsResponse {
    /**
     * 
     * @type {Array<OrganizationInfo>}
     * @memberof ListOrganizationsResponse
     */
    organizations: Array<OrganizationInfo>;
}

/**
 * Check if a given object implements the ListOrganizationsResponse interface.
 */
export function instanceOfListOrganizationsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "organizations" in value;

    return isInstance;
}

export function ListOrganizationsResponseFromJSON(json: any): ListOrganizationsResponse {
    return ListOrganizationsResponseFromJSONTyped(json, false);
}

export function ListOrganizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListOrganizationsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'organizations': ((json['organizations'] as Array<any>).map(OrganizationInfoFromJSON)),
    };
}

export function ListOrganizationsResponseToJSON(value?: ListOrganizationsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'organizations': ((value.organizations as Array<any>).map(OrganizationInfoToJSON)),
    };
}

