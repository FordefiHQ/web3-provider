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
 * @interface ApprovalGroup
 */
export interface ApprovalGroup {
    /**
     * 
     * @type {number}
     * @memberof ApprovalGroup
     */
    threshold: number;
    /**
     * 
     * @type {Array<UserRef>}
     * @memberof ApprovalGroup
     */
    userRefs: Array<UserRef>;
    /**
     * 
     * @type {Array<UserGroupRef>}
     * @memberof ApprovalGroup
     */
    userGroupRefs: Array<UserGroupRef>;
}

/**
 * Check if a given object implements the ApprovalGroup interface.
 */
export function instanceOfApprovalGroup(value: object): value is ApprovalGroup {
    if (!('threshold' in value) || value['threshold'] === undefined) return false;
    if (!('userRefs' in value) || value['userRefs'] === undefined) return false;
    if (!('userGroupRefs' in value) || value['userGroupRefs'] === undefined) return false;
    return true;
}

export function ApprovalGroupFromJSON(json: any): ApprovalGroup {
    return ApprovalGroupFromJSONTyped(json, false);
}

export function ApprovalGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApprovalGroup {
    if (json == null) {
        return json;
    }
    return {
        
        'threshold': json['threshold'],
        'userRefs': ((json['user_refs'] as Array<any>).map(UserRefFromJSON)),
        'userGroupRefs': ((json['user_group_refs'] as Array<any>).map(UserGroupRefFromJSON)),
    };
}

export function ApprovalGroupToJSON(json: any): ApprovalGroup {
    return ApprovalGroupToJSONTyped(json, false);
}

export function ApprovalGroupToJSONTyped(value?: ApprovalGroup | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'threshold': value['threshold'],
        'user_refs': ((value['userRefs'] as Array<any>).map(UserRefToJSON)),
        'user_group_refs': ((value['userGroupRefs'] as Array<any>).map(UserGroupRefToJSON)),
    };
}

