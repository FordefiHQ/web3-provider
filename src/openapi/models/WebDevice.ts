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
import type { OrganizationRef } from './OrganizationRef';
import {
    OrganizationRefFromJSON,
    OrganizationRefFromJSONTyped,
    OrganizationRefToJSON,
    OrganizationRefToJSONTyped,
} from './OrganizationRef';

/**
 * 
 * @export
 * @interface WebDevice
 */
export interface WebDevice {
    /**
     * 
     * @type {string}
     * @memberof WebDevice
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof WebDevice
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof WebDevice
     */
    modifiedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof WebDevice
     */
    apiKeyId: string;
    /**
     * 
     * @type {string}
     * @memberof WebDevice
     */
    userAgent: string;
    /**
     * 
     * @type {Array<OrganizationRef>}
     * @memberof WebDevice
     */
    organizations: Array<OrganizationRef>;
}

/**
 * Check if a given object implements the WebDevice interface.
 */
export function instanceOfWebDevice(value: object): value is WebDevice {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('modifiedAt' in value) || value['modifiedAt'] === undefined) return false;
    if (!('apiKeyId' in value) || value['apiKeyId'] === undefined) return false;
    if (!('userAgent' in value) || value['userAgent'] === undefined) return false;
    if (!('organizations' in value) || value['organizations'] === undefined) return false;
    return true;
}

export function WebDeviceFromJSON(json: any): WebDevice {
    return WebDeviceFromJSONTyped(json, false);
}

export function WebDeviceFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebDevice {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['created_at'])),
        'modifiedAt': (new Date(json['modified_at'])),
        'apiKeyId': json['api_key_id'],
        'userAgent': json['user_agent'],
        'organizations': ((json['organizations'] as Array<any>).map(OrganizationRefFromJSON)),
    };
}

export function WebDeviceToJSON(json: any): WebDevice {
    return WebDeviceToJSONTyped(json, false);
}

export function WebDeviceToJSONTyped(value?: WebDevice | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'created_at': ((value['createdAt']).toISOString()),
        'modified_at': ((value['modifiedAt']).toISOString()),
        'api_key_id': value['apiKeyId'],
        'user_agent': value['userAgent'],
        'organizations': ((value['organizations'] as Array<any>).map(OrganizationRefToJSON)),
    };
}

