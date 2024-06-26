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
import type { OrganizationType } from './OrganizationType';
import {
    OrganizationTypeFromJSON,
    OrganizationTypeFromJSONTyped,
    OrganizationTypeToJSON,
} from './OrganizationType';

/**
 * 
 * @export
 * @interface OrganizationInfo
 */
export interface OrganizationInfo {
    /**
     * 
     * @type {string}
     * @memberof OrganizationInfo
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationInfo
     */
    name: string;
    /**
     * 
     * @type {OrganizationType}
     * @memberof OrganizationInfo
     */
    type: OrganizationType;
}

/**
 * Check if a given object implements the OrganizationInfo interface.
 */
export function instanceOfOrganizationInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function OrganizationInfoFromJSON(json: any): OrganizationInfo {
    return OrganizationInfoFromJSONTyped(json, false);
}

export function OrganizationInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'type': OrganizationTypeFromJSON(json['type']),
    };
}

export function OrganizationInfoToJSON(value?: OrganizationInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'type': OrganizationTypeToJSON(value.type),
    };
}

