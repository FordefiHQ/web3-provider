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
import type { UserGroupChangeRequest } from './UserGroupChangeRequest';
import {
    UserGroupChangeRequestFromJSON,
    UserGroupChangeRequestFromJSONTyped,
    UserGroupChangeRequestToJSON,
} from './UserGroupChangeRequest';
import type { UserGroupState } from './UserGroupState';
import {
    UserGroupStateFromJSON,
    UserGroupStateFromJSONTyped,
    UserGroupStateToJSON,
} from './UserGroupState';
import type { UserRef } from './UserRef';
import {
    UserRefFromJSON,
    UserRefFromJSONTyped,
    UserRefToJSON,
} from './UserRef';

/**
 * 
 * @export
 * @interface UserGroup
 */
export interface UserGroup {
    /**
     * 
     * @type {string}
     * @memberof UserGroup
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof UserGroup
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof UserGroup
     */
    modifiedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof UserGroup
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof UserGroup
     */
    usersCount: number;
    /**
     * 
     * @type {UserGroupState}
     * @memberof UserGroup
     */
    state: UserGroupState;
    /**
     * 
     * @type {UserRef}
     * @memberof UserGroup
     */
    modifiedBy: UserRef;
    /**
     * 
     * @type {UserGroupChangeRequest}
     * @memberof UserGroup
     */
    proposedChange?: UserGroupChangeRequest;
}

/**
 * Check if a given object implements the UserGroup interface.
 */
export function instanceOfUserGroup(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "modifiedAt" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "usersCount" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "modifiedBy" in value;

    return isInstance;
}

export function UserGroupFromJSON(json: any): UserGroup {
    return UserGroupFromJSONTyped(json, false);
}

export function UserGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['created_at'])),
        'modifiedAt': (new Date(json['modified_at'])),
        'name': json['name'],
        'usersCount': json['users_count'],
        'state': UserGroupStateFromJSON(json['state']),
        'modifiedBy': UserRefFromJSON(json['modified_by']),
        'proposedChange': !exists(json, 'proposed_change') ? undefined : UserGroupChangeRequestFromJSON(json['proposed_change']),
    };
}

export function UserGroupToJSON(value?: UserGroup | null): any {
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
        'name': value.name,
        'users_count': value.usersCount,
        'state': UserGroupStateToJSON(value.state),
        'modified_by': UserRefToJSON(value.modifiedBy),
        'proposed_change': UserGroupChangeRequestToJSON(value.proposedChange),
    };
}

