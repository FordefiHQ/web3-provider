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
import type { ApprovalRequest } from './ApprovalRequest';
import {
    ApprovalRequestFromJSON,
    ApprovalRequestFromJSONTyped,
    ApprovalRequestToJSON,
} from './ApprovalRequest';
import type { UserRef } from './UserRef';
import {
    UserRefFromJSON,
    UserRefFromJSONTyped,
    UserRefToJSON,
} from './UserRef';

/**
 * 
 * @export
 * @interface AdminQuorumChangeAction
 */
export interface AdminQuorumChangeAction {
    /**
     * 
     * @type {string}
     * @memberof AdminQuorumChangeAction
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof AdminQuorumChangeAction
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof AdminQuorumChangeAction
     */
    modifiedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof AdminQuorumChangeAction
     */
    type: AdminQuorumChangeActionTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof AdminQuorumChangeAction
     */
    isPending: boolean;
    /**
     * 
     * @type {UserRef}
     * @memberof AdminQuorumChangeAction
     */
    createdBy: UserRef;
    /**
     * 
     * @type {UserRef}
     * @memberof AdminQuorumChangeAction
     */
    abortedBy?: UserRef;
    /**
     * 
     * @type {ApprovalRequest}
     * @memberof AdminQuorumChangeAction
     */
    approvalRequest: ApprovalRequest;
    /**
     * 
     * @type {string}
     * @memberof AdminQuorumChangeAction
     */
    state: AdminQuorumChangeActionStateEnum;
    /**
     * 
     * @type {number}
     * @memberof AdminQuorumChangeAction
     */
    oldQuorumSize: number;
    /**
     * 
     * @type {number}
     * @memberof AdminQuorumChangeAction
     */
    newQuorumSize: number;
}


/**
 * @export
 */
export const AdminQuorumChangeActionTypeEnum = {
    adminQuorumChange: 'admin_quorum_change'
} as const;
export type AdminQuorumChangeActionTypeEnum = typeof AdminQuorumChangeActionTypeEnum[keyof typeof AdminQuorumChangeActionTypeEnum];

/**
 * @export
 */
export const AdminQuorumChangeActionStateEnum = {
    created: 'created',
    completed: 'completed',
    aborted: 'aborted',
    failed: 'failed'
} as const;
export type AdminQuorumChangeActionStateEnum = typeof AdminQuorumChangeActionStateEnum[keyof typeof AdminQuorumChangeActionStateEnum];


/**
 * Check if a given object implements the AdminQuorumChangeAction interface.
 */
export function instanceOfAdminQuorumChangeAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "modifiedAt" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "isPending" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "approvalRequest" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "oldQuorumSize" in value;
    isInstance = isInstance && "newQuorumSize" in value;

    return isInstance;
}

export function AdminQuorumChangeActionFromJSON(json: any): AdminQuorumChangeAction {
    return AdminQuorumChangeActionFromJSONTyped(json, false);
}

export function AdminQuorumChangeActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdminQuorumChangeAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['created_at'])),
        'modifiedAt': (new Date(json['modified_at'])),
        'type': json['type'],
        'isPending': json['is_pending'],
        'createdBy': UserRefFromJSON(json['created_by']),
        'abortedBy': !exists(json, 'aborted_by') ? undefined : UserRefFromJSON(json['aborted_by']),
        'approvalRequest': ApprovalRequestFromJSON(json['approval_request']),
        'state': json['state'],
        'oldQuorumSize': json['old_quorum_size'],
        'newQuorumSize': json['new_quorum_size'],
    };
}

export function AdminQuorumChangeActionToJSON(value?: AdminQuorumChangeAction | null): any {
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
        'type': value.type,
        'is_pending': value.isPending,
        'created_by': UserRefToJSON(value.createdBy),
        'aborted_by': UserRefToJSON(value.abortedBy),
        'approval_request': ApprovalRequestToJSON(value.approvalRequest),
        'state': value.state,
        'old_quorum_size': value.oldQuorumSize,
        'new_quorum_size': value.newQuorumSize,
    };
}

