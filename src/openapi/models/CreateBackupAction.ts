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
import type { ActionSigningRequest } from './ActionSigningRequest';
import {
    ActionSigningRequestFromJSON,
    ActionSigningRequestFromJSONTyped,
    ActionSigningRequestToJSON,
    ActionSigningRequestToJSONTyped,
} from './ActionSigningRequest';
import type { ApprovalRequest } from './ApprovalRequest';
import {
    ApprovalRequestFromJSON,
    ApprovalRequestFromJSONTyped,
    ApprovalRequestToJSON,
    ApprovalRequestToJSONTyped,
} from './ApprovalRequest';
import type { BackupPublicKey } from './BackupPublicKey';
import {
    BackupPublicKeyFromJSON,
    BackupPublicKeyFromJSONTyped,
    BackupPublicKeyToJSON,
    BackupPublicKeyToJSONTyped,
} from './BackupPublicKey';
import type { BackupType } from './BackupType';
import {
    BackupTypeFromJSON,
    BackupTypeFromJSONTyped,
    BackupTypeToJSON,
    BackupTypeToJSONTyped,
} from './BackupType';
import type { UserRef } from './UserRef';
import {
    UserRefFromJSON,
    UserRefFromJSONTyped,
    UserRefToJSON,
    UserRefToJSONTyped,
} from './UserRef';

/**
 * 
 * @export
 * @interface CreateBackupAction
 */
export interface CreateBackupAction {
    /**
     * 
     * @type {string}
     * @memberof CreateBackupAction
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateBackupAction
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof CreateBackupAction
     */
    modifiedAt: Date;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBackupAction
     */
    isPending: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateBackupAction
     */
    type: CreateBackupActionTypeEnum;
    /**
     * 
     * @type {UserRef}
     * @memberof CreateBackupAction
     */
    createdBy: UserRef;
    /**
     * 
     * @type {UserRef}
     * @memberof CreateBackupAction
     */
    abortedBy?: UserRef;
    /**
     * 
     * @type {string}
     * @memberof CreateBackupAction
     */
    state: CreateBackupActionStateEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateBackupAction
     */
    requestId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateBackupAction
     */
    email: string;
    /**
     * 
     * @type {BackupType}
     * @memberof CreateBackupAction
     */
    backupType: BackupType;
    /**
     * 
     * @type {BackupPublicKey}
     * @memberof CreateBackupAction
     */
    publicKey?: BackupPublicKey;
    /**
     * 
     * @type {ApprovalRequest}
     * @memberof CreateBackupAction
     */
    approvalRequest?: ApprovalRequest;
    /**
     * 
     * @type {ActionSigningRequest}
     * @memberof CreateBackupAction
     */
    signingRequest: ActionSigningRequest;
}


/**
 * @export
 */
export const CreateBackupActionTypeEnum = {
    createBackup: 'create_backup'
} as const;
export type CreateBackupActionTypeEnum = typeof CreateBackupActionTypeEnum[keyof typeof CreateBackupActionTypeEnum];

/**
 * @export
 */
export const CreateBackupActionStateEnum = {
    created: 'created',
    signed: 'signed',
    completed: 'completed',
    aborted: 'aborted'
} as const;
export type CreateBackupActionStateEnum = typeof CreateBackupActionStateEnum[keyof typeof CreateBackupActionStateEnum];


/**
 * Check if a given object implements the CreateBackupAction interface.
 */
export function instanceOfCreateBackupAction(value: object): value is CreateBackupAction {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('modifiedAt' in value) || value['modifiedAt'] === undefined) return false;
    if (!('isPending' in value) || value['isPending'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('createdBy' in value) || value['createdBy'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    if (!('requestId' in value) || value['requestId'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('backupType' in value) || value['backupType'] === undefined) return false;
    if (!('signingRequest' in value) || value['signingRequest'] === undefined) return false;
    return true;
}

export function CreateBackupActionFromJSON(json: any): CreateBackupAction {
    return CreateBackupActionFromJSONTyped(json, false);
}

export function CreateBackupActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateBackupAction {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['created_at'])),
        'modifiedAt': (new Date(json['modified_at'])),
        'isPending': json['is_pending'],
        'type': json['type'],
        'createdBy': UserRefFromJSON(json['created_by']),
        'abortedBy': json['aborted_by'] == null ? undefined : UserRefFromJSON(json['aborted_by']),
        'state': json['state'],
        'requestId': json['request_id'],
        'email': json['email'],
        'backupType': BackupTypeFromJSON(json['backup_type']),
        'publicKey': json['public_key'] == null ? undefined : BackupPublicKeyFromJSON(json['public_key']),
        'approvalRequest': json['approval_request'] == null ? undefined : ApprovalRequestFromJSON(json['approval_request']),
        'signingRequest': ActionSigningRequestFromJSON(json['signing_request']),
    };
}

export function CreateBackupActionToJSON(json: any): CreateBackupAction {
    return CreateBackupActionToJSONTyped(json, false);
}

export function CreateBackupActionToJSONTyped(value?: CreateBackupAction | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'created_at': ((value['createdAt']).toISOString()),
        'modified_at': ((value['modifiedAt']).toISOString()),
        'is_pending': value['isPending'],
        'type': value['type'],
        'created_by': UserRefToJSON(value['createdBy']),
        'aborted_by': UserRefToJSON(value['abortedBy']),
        'state': value['state'],
        'request_id': value['requestId'],
        'email': value['email'],
        'backup_type': BackupTypeToJSON(value['backupType']),
        'public_key': BackupPublicKeyToJSON(value['publicKey']),
        'approval_request': ApprovalRequestToJSON(value['approvalRequest']),
        'signing_request': ActionSigningRequestToJSON(value['signingRequest']),
    };
}

