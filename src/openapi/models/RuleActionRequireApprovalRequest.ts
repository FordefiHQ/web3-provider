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
import type { ApprovalGroupRequest } from './ApprovalGroupRequest';
import {
    ApprovalGroupRequestFromJSON,
    ApprovalGroupRequestFromJSONTyped,
    ApprovalGroupRequestToJSON,
} from './ApprovalGroupRequest';

/**
 * 
 * @export
 * @interface RuleActionRequireApprovalRequest
 */
export interface RuleActionRequireApprovalRequest {
    /**
     * 
     * @type {string}
     * @memberof RuleActionRequireApprovalRequest
     */
    type: RuleActionRequireApprovalRequestTypeEnum;
    /**
     * 
     * @type {Array<ApprovalGroupRequest>}
     * @memberof RuleActionRequireApprovalRequest
     */
    approvalGroups: Array<ApprovalGroupRequest>;
}


/**
 * @export
 */
export const RuleActionRequireApprovalRequestTypeEnum = {
    requireApproval: 'require_approval'
} as const;
export type RuleActionRequireApprovalRequestTypeEnum = typeof RuleActionRequireApprovalRequestTypeEnum[keyof typeof RuleActionRequireApprovalRequestTypeEnum];


/**
 * Check if a given object implements the RuleActionRequireApprovalRequest interface.
 */
export function instanceOfRuleActionRequireApprovalRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "approvalGroups" in value;

    return isInstance;
}

export function RuleActionRequireApprovalRequestFromJSON(json: any): RuleActionRequireApprovalRequest {
    return RuleActionRequireApprovalRequestFromJSONTyped(json, false);
}

export function RuleActionRequireApprovalRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuleActionRequireApprovalRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'approvalGroups': ((json['approval_groups'] as Array<any>).map(ApprovalGroupRequestFromJSON)),
    };
}

export function RuleActionRequireApprovalRequestToJSON(value?: RuleActionRequireApprovalRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'approval_groups': ((value.approvalGroups as Array<any>).map(ApprovalGroupRequestToJSON)),
    };
}

