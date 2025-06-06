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
/**
 * 
 * @export
 * @interface SystemUserRef
 */
export interface SystemUserRef {
    /**
     * 
     * @type {string}
     * @memberof SystemUserRef
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof SystemUserRef
     */
    userType: SystemUserRefUserTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SystemUserRef
     */
    name: string;
}


/**
 * @export
 */
export const SystemUserRefUserTypeEnum = {
    system: 'system'
} as const;
export type SystemUserRefUserTypeEnum = typeof SystemUserRefUserTypeEnum[keyof typeof SystemUserRefUserTypeEnum];


/**
 * Check if a given object implements the SystemUserRef interface.
 */
export function instanceOfSystemUserRef(value: object): value is SystemUserRef {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('userType' in value) || value['userType'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function SystemUserRefFromJSON(json: any): SystemUserRef {
    return SystemUserRefFromJSONTyped(json, false);
}

export function SystemUserRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemUserRef {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userType': json['user_type'],
        'name': json['name'],
    };
}

export function SystemUserRefToJSON(json: any): SystemUserRef {
    return SystemUserRefToJSONTyped(json, false);
}

export function SystemUserRefToJSONTyped(value?: SystemUserRef | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'user_type': value['userType'],
        'name': value['name'],
    };
}

