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
import type { UserState } from './UserState';
import {
    UserStateFromJSON,
    UserStateFromJSONTyped,
    UserStateToJSON,
    UserStateToJSONTyped,
} from './UserState';
import type { UserRole } from './UserRole';
import {
    UserRoleFromJSON,
    UserRoleFromJSONTyped,
    UserRoleToJSON,
    UserRoleToJSONTyped,
} from './UserRole';

/**
 * 
 * @export
 * @interface PersonRef
 */
export interface PersonRef {
    /**
     * 
     * @type {string}
     * @memberof PersonRef
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PersonRef
     */
    userType: PersonRefUserTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PersonRef
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PersonRef
     */
    email: string;
    /**
     * 
     * @type {UserState}
     * @memberof PersonRef
     */
    state: UserState;
    /**
     * 
     * @type {UserRole}
     * @memberof PersonRef
     */
    role: UserRole;
}


/**
 * @export
 */
export const PersonRefUserTypeEnum = {
    person: 'person'
} as const;
export type PersonRefUserTypeEnum = typeof PersonRefUserTypeEnum[keyof typeof PersonRefUserTypeEnum];


/**
 * Check if a given object implements the PersonRef interface.
 */
export function instanceOfPersonRef(value: object): value is PersonRef {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('userType' in value) || value['userType'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    if (!('role' in value) || value['role'] === undefined) return false;
    return true;
}

export function PersonRefFromJSON(json: any): PersonRef {
    return PersonRefFromJSONTyped(json, false);
}

export function PersonRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonRef {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userType': json['user_type'],
        'name': json['name'] == null ? undefined : json['name'],
        'email': json['email'],
        'state': UserStateFromJSON(json['state']),
        'role': UserRoleFromJSON(json['role']),
    };
}

export function PersonRefToJSON(json: any): PersonRef {
    return PersonRefToJSONTyped(json, false);
}

export function PersonRefToJSONTyped(value?: PersonRef | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'user_type': value['userType'],
        'name': value['name'],
        'email': value['email'],
        'state': UserStateToJSON(value['state']),
        'role': UserRoleToJSON(value['role']),
    };
}

