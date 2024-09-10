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
 * @interface OrganizationRef
 */
export interface OrganizationRef {
    /**
     * 
     * @type {string}
     * @memberof OrganizationRef
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationRef
     */
    name: string;
}

/**
 * Check if a given object implements the OrganizationRef interface.
 */
export function instanceOfOrganizationRef(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function OrganizationRefFromJSON(json: any): OrganizationRef {
    return OrganizationRefFromJSONTyped(json, false);
}

export function OrganizationRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationRef {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function OrganizationRefToJSON(value?: OrganizationRef | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}

