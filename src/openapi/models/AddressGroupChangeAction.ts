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
import type { AddressBookContact } from './AddressBookContact';
import {
    AddressBookContactFromJSON,
    AddressBookContactFromJSONTyped,
    AddressBookContactToJSON,
} from './AddressBookContact';
import type { AddressBookGroupChanges } from './AddressBookGroupChanges';
import {
    AddressBookGroupChangesFromJSON,
    AddressBookGroupChangesFromJSONTyped,
    AddressBookGroupChangesToJSON,
} from './AddressBookGroupChanges';
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
 * @interface AddressGroupChangeAction
 */
export interface AddressGroupChangeAction {
    /**
     * 
     * @type {string}
     * @memberof AddressGroupChangeAction
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof AddressGroupChangeAction
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof AddressGroupChangeAction
     */
    modifiedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof AddressGroupChangeAction
     */
    type: AddressGroupChangeActionTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof AddressGroupChangeAction
     */
    isPending: boolean;
    /**
     * 
     * @type {UserRef}
     * @memberof AddressGroupChangeAction
     */
    createdBy: UserRef;
    /**
     * 
     * @type {UserRef}
     * @memberof AddressGroupChangeAction
     */
    abortedBy?: UserRef;
    /**
     * 
     * @type {string}
     * @memberof AddressGroupChangeAction
     */
    groupId: string;
    /**
     * 
     * @type {string}
     * @memberof AddressGroupChangeAction
     */
    groupName: string;
    /**
     * 
     * @type {Array<AddressBookContact>}
     * @memberof AddressGroupChangeAction
     */
    groupContacts: Array<AddressBookContact>;
    /**
     * 
     * @type {AddressBookGroupChanges}
     * @memberof AddressGroupChangeAction
     */
    pendingChanges: AddressBookGroupChanges;
    /**
     * 
     * @type {string}
     * @memberof AddressGroupChangeAction
     */
    changeRequestId: string;
    /**
     * 
     * @type {string}
     * @memberof AddressGroupChangeAction
     */
    state: AddressGroupChangeActionStateEnum;
    /**
     * 
     * @type {ApprovalRequest}
     * @memberof AddressGroupChangeAction
     */
    approvalRequest: ApprovalRequest;
}


/**
 * @export
 */
export const AddressGroupChangeActionTypeEnum = {
    addressbookGroupChange: 'addressbook_group_change'
} as const;
export type AddressGroupChangeActionTypeEnum = typeof AddressGroupChangeActionTypeEnum[keyof typeof AddressGroupChangeActionTypeEnum];

/**
 * @export
 */
export const AddressGroupChangeActionStateEnum = {
    created: 'created',
    completed: 'completed',
    aborted: 'aborted',
    failed: 'failed'
} as const;
export type AddressGroupChangeActionStateEnum = typeof AddressGroupChangeActionStateEnum[keyof typeof AddressGroupChangeActionStateEnum];


/**
 * Check if a given object implements the AddressGroupChangeAction interface.
 */
export function instanceOfAddressGroupChangeAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "modifiedAt" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "isPending" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "groupId" in value;
    isInstance = isInstance && "groupName" in value;
    isInstance = isInstance && "groupContacts" in value;
    isInstance = isInstance && "pendingChanges" in value;
    isInstance = isInstance && "changeRequestId" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "approvalRequest" in value;

    return isInstance;
}

export function AddressGroupChangeActionFromJSON(json: any): AddressGroupChangeAction {
    return AddressGroupChangeActionFromJSONTyped(json, false);
}

export function AddressGroupChangeActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressGroupChangeAction {
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
        'groupId': json['group_id'],
        'groupName': json['group_name'],
        'groupContacts': ((json['group_contacts'] as Array<any>).map(AddressBookContactFromJSON)),
        'pendingChanges': AddressBookGroupChangesFromJSON(json['pending_changes']),
        'changeRequestId': json['change_request_id'],
        'state': json['state'],
        'approvalRequest': ApprovalRequestFromJSON(json['approval_request']),
    };
}

export function AddressGroupChangeActionToJSON(value?: AddressGroupChangeAction | null): any {
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
        'group_id': value.groupId,
        'group_name': value.groupName,
        'group_contacts': ((value.groupContacts as Array<any>).map(AddressBookContactToJSON)),
        'pending_changes': AddressBookGroupChangesToJSON(value.pendingChanges),
        'change_request_id': value.changeRequestId,
        'state': value.state,
        'approval_request': ApprovalRequestToJSON(value.approvalRequest),
    };
}

