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
import type { UserGroupState } from './UserGroupState';
import {
    UserGroupStateFromJSON,
    UserGroupStateFromJSONTyped,
    UserGroupStateToJSON,
} from './UserGroupState';

/**
 * 
 * @export
 * @interface UserGroupRef
 */
export interface UserGroupRef {
    /**
     * 
     * @type {string}
     * @memberof UserGroupRef
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UserGroupRef
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof UserGroupRef
     */
    usersCount: number;
    /**
     * 
     * @type {UserGroupState}
     * @memberof UserGroupRef
     */
    state: UserGroupState;
}

/**
 * Check if a given object implements the UserGroupRef interface.
 */
export function instanceOfUserGroupRef(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "usersCount" in value;
    isInstance = isInstance && "state" in value;

    return isInstance;
}

export function UserGroupRefFromJSON(json: any): UserGroupRef {
    return UserGroupRefFromJSONTyped(json, false);
}

export function UserGroupRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserGroupRef {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'usersCount': json['users_count'],
        'state': UserGroupStateFromJSON(json['state']),
    };
}

export function UserGroupRefToJSON(value?: UserGroupRef | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'users_count': value.usersCount,
        'state': UserGroupStateToJSON(value.state),
    };
}

