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
import type { UserGroupRef } from './UserGroupRef';
import {
    UserGroupRefFromJSON,
    UserGroupRefFromJSONTyped,
    UserGroupRefToJSON,
} from './UserGroupRef';
import type { UserRef } from './UserRef';
import {
    UserRefFromJSON,
    UserRefFromJSONTyped,
    UserRefToJSON,
} from './UserRef';

/**
 * 
 * @export
 * @interface InitiatorsCondition
 */
export interface InitiatorsCondition {
    /**
     * 
     * @type {Array<UserRef>}
     * @memberof InitiatorsCondition
     */
    users?: Array<UserRef>;
    /**
     * 
     * @type {Array<UserGroupRef>}
     * @memberof InitiatorsCondition
     */
    userGroups?: Array<UserGroupRef>;
}

/**
 * Check if a given object implements the InitiatorsCondition interface.
 */
export function instanceOfInitiatorsCondition(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InitiatorsConditionFromJSON(json: any): InitiatorsCondition {
    return InitiatorsConditionFromJSONTyped(json, false);
}

export function InitiatorsConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): InitiatorsCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'users': !exists(json, 'users') ? undefined : ((json['users'] as Array<any>).map(UserRefFromJSON)),
        'userGroups': !exists(json, 'user_groups') ? undefined : ((json['user_groups'] as Array<any>).map(UserGroupRefFromJSON)),
    };
}

export function InitiatorsConditionToJSON(value?: InitiatorsCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'users': value.users === undefined ? undefined : ((value.users as Array<any>).map(UserRefToJSON)),
        'user_groups': value.userGroups === undefined ? undefined : ((value.userGroups as Array<any>).map(UserGroupRefToJSON)),
    };
}

