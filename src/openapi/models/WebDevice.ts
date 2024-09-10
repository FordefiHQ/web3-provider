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
import type { OrganizationRef } from './OrganizationRef';
import {
    OrganizationRefFromJSON,
    OrganizationRefFromJSONTyped,
    OrganizationRefToJSON,
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
export function instanceOfWebDevice(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "modifiedAt" in value;
    isInstance = isInstance && "apiKeyId" in value;
    isInstance = isInstance && "userAgent" in value;
    isInstance = isInstance && "organizations" in value;

    return isInstance;
}

export function WebDeviceFromJSON(json: any): WebDevice {
    return WebDeviceFromJSONTyped(json, false);
}

export function WebDeviceFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebDevice {
    if ((json === undefined) || (json === null)) {
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

export function WebDeviceToJSON(value?: WebDevice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'created_at': (value.createdAt.toISOString()),
        'modified_at': (value.modifiedAt.toISOString()),
        'api_key_id': value.apiKeyId,
        'user_agent': value.userAgent,
        'organizations': ((value.organizations as Array<any>).map(OrganizationRefToJSON)),
    };
}
