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
import type { UserRef } from './UserRef';
import {
    UserRefFromJSON,
    UserRefFromJSONTyped,
    UserRefToJSON,
    UserRefToJSONTyped,
} from './UserRef';
import type { UserGroupRef } from './UserGroupRef';
import {
    UserGroupRefFromJSON,
    UserGroupRefFromJSONTyped,
    UserGroupRefToJSON,
    UserGroupRefToJSONTyped,
} from './UserGroupRef';

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
export function instanceOfInitiatorsCondition(value: object): value is InitiatorsCondition {
    return true;
}

export function InitiatorsConditionFromJSON(json: any): InitiatorsCondition {
    return InitiatorsConditionFromJSONTyped(json, false);
}

export function InitiatorsConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): InitiatorsCondition {
    if (json == null) {
        return json;
    }
    return {
        
        'users': json['users'] == null ? undefined : ((json['users'] as Array<any>).map(UserRefFromJSON)),
        'userGroups': json['user_groups'] == null ? undefined : ((json['user_groups'] as Array<any>).map(UserGroupRefFromJSON)),
    };
}

export function InitiatorsConditionToJSON(json: any): InitiatorsCondition {
    return InitiatorsConditionToJSONTyped(json, false);
}

export function InitiatorsConditionToJSONTyped(value?: InitiatorsCondition | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'users': value['users'] == null ? undefined : ((value['users'] as Array<any>).map(UserRefToJSON)),
        'user_groups': value['userGroups'] == null ? undefined : ((value['userGroups'] as Array<any>).map(UserGroupRefToJSON)),
    };
}

