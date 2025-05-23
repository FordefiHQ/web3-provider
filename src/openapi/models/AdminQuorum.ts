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
import type { ApprovalGroup } from './ApprovalGroup';
import {
    ApprovalGroupFromJSON,
    ApprovalGroupFromJSONTyped,
    ApprovalGroupToJSON,
    ApprovalGroupToJSONTyped,
} from './ApprovalGroup';

/**
 * 
 * @export
 * @interface AdminQuorum
 */
export interface AdminQuorum {
    /**
     * 
     * @type {Array<ApprovalGroup>}
     * @memberof AdminQuorum
     */
    approvalGroups: Array<ApprovalGroup>;
    /**
     * 
     * @type {number}
     * @memberof AdminQuorum
     */
    requiredGroups: number;
    /**
     * 
     * @type {boolean}
     * @memberof AdminQuorum
     */
    requireInitiatorApproval?: boolean;
}

/**
 * Check if a given object implements the AdminQuorum interface.
 */
export function instanceOfAdminQuorum(value: object): value is AdminQuorum {
    if (!('approvalGroups' in value) || value['approvalGroups'] === undefined) return false;
    if (!('requiredGroups' in value) || value['requiredGroups'] === undefined) return false;
    return true;
}

export function AdminQuorumFromJSON(json: any): AdminQuorum {
    return AdminQuorumFromJSONTyped(json, false);
}

export function AdminQuorumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdminQuorum {
    if (json == null) {
        return json;
    }
    return {
        
        'approvalGroups': ((json['approval_groups'] as Array<any>).map(ApprovalGroupFromJSON)),
        'requiredGroups': json['required_groups'],
        'requireInitiatorApproval': json['require_initiator_approval'] == null ? undefined : json['require_initiator_approval'],
    };
}

export function AdminQuorumToJSON(json: any): AdminQuorum {
    return AdminQuorumToJSONTyped(json, false);
}

export function AdminQuorumToJSONTyped(value?: AdminQuorum | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'approval_groups': ((value['approvalGroups'] as Array<any>).map(ApprovalGroupToJSON)),
        'required_groups': value['requiredGroups'],
        'require_initiator_approval': value['requireInitiatorApproval'],
    };
}

