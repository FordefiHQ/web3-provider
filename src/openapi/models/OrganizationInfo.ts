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
import type { OrganizationType } from './OrganizationType';
import {
    OrganizationTypeFromJSON,
    OrganizationTypeFromJSONTyped,
    OrganizationTypeToJSON,
    OrganizationTypeToJSONTyped,
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
    /**
     * 
     * @type {string}
     * @memberof OrganizationInfo
     */
    crmId: string;
}



/**
 * Check if a given object implements the OrganizationInfo interface.
 */
export function instanceOfOrganizationInfo(value: object): value is OrganizationInfo {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('crmId' in value) || value['crmId'] === undefined) return false;
    return true;
}

export function OrganizationInfoFromJSON(json: any): OrganizationInfo {
    return OrganizationInfoFromJSONTyped(json, false);
}

export function OrganizationInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'type': OrganizationTypeFromJSON(json['type']),
        'crmId': json['crm_id'],
    };
}

export function OrganizationInfoToJSON(json: any): OrganizationInfo {
    return OrganizationInfoToJSONTyped(json, false);
}

export function OrganizationInfoToJSONTyped(value?: OrganizationInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'type': OrganizationTypeToJSON(value['type']),
        'crm_id': value['crmId'],
    };
}

