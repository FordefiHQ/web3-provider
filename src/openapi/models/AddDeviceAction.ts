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
import type { ActionSigningRequest } from './ActionSigningRequest';
import {
    ActionSigningRequestFromJSON,
    ActionSigningRequestFromJSONTyped,
    ActionSigningRequestToJSON,
} from './ActionSigningRequest';
import type { PersonRef } from './PersonRef';
import {
    PersonRefFromJSON,
    PersonRefFromJSONTyped,
    PersonRefToJSON,
} from './PersonRef';
import type { UserRef } from './UserRef';
import {
    UserRefFromJSON,
    UserRefFromJSONTyped,
    UserRefToJSON,
} from './UserRef';

/**
 * 
 * @export
 * @interface AddDeviceAction
 */
export interface AddDeviceAction {
    /**
     * 
     * @type {string}
     * @memberof AddDeviceAction
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof AddDeviceAction
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof AddDeviceAction
     */
    modifiedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof AddDeviceAction
     */
    type: AddDeviceActionTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof AddDeviceAction
     */
    isPending: boolean;
    /**
     * 
     * @type {UserRef}
     * @memberof AddDeviceAction
     */
    createdBy: UserRef;
    /**
     * 
     * @type {UserRef}
     * @memberof AddDeviceAction
     */
    abortedBy?: UserRef;
    /**
     * 
     * @type {PersonRef}
     * @memberof AddDeviceAction
     */
    owner: PersonRef;
    /**
     * 
     * @type {string}
     * @memberof AddDeviceAction
     */
    deviceId: string;
    /**
     * 
     * @type {string}
     * @memberof AddDeviceAction
     */
    state: AddDeviceActionStateEnum;
    /**
     * 
     * @type {ActionSigningRequest}
     * @memberof AddDeviceAction
     */
    deviceSigningRequest: ActionSigningRequest;
}


/**
 * @export
 */
export const AddDeviceActionTypeEnum = {
    addDevice: 'add_device'
} as const;
export type AddDeviceActionTypeEnum = typeof AddDeviceActionTypeEnum[keyof typeof AddDeviceActionTypeEnum];

/**
 * @export
 */
export const AddDeviceActionStateEnum = {
    created: 'created',
    signed: 'signed',
    completed: 'completed',
    aborted: 'aborted',
    failed: 'failed'
} as const;
export type AddDeviceActionStateEnum = typeof AddDeviceActionStateEnum[keyof typeof AddDeviceActionStateEnum];


/**
 * Check if a given object implements the AddDeviceAction interface.
 */
export function instanceOfAddDeviceAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "modifiedAt" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "isPending" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "owner" in value;
    isInstance = isInstance && "deviceId" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "deviceSigningRequest" in value;

    return isInstance;
}

export function AddDeviceActionFromJSON(json: any): AddDeviceAction {
    return AddDeviceActionFromJSONTyped(json, false);
}

export function AddDeviceActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddDeviceAction {
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
        'owner': PersonRefFromJSON(json['owner']),
        'deviceId': json['device_id'],
        'state': json['state'],
        'deviceSigningRequest': ActionSigningRequestFromJSON(json['device_signing_request']),
    };
}

export function AddDeviceActionToJSON(value?: AddDeviceAction | null): any {
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
        'owner': PersonRefToJSON(value.owner),
        'device_id': value.deviceId,
        'state': value.state,
        'device_signing_request': ActionSigningRequestToJSON(value.deviceSigningRequest),
    };
}

