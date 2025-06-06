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

/**
 * 
 * @export
 * @interface ImportKeysAction
 */
export interface ImportKeysAction {
    /**
     * 
     * @type {string}
     * @memberof ImportKeysAction
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof ImportKeysAction
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof ImportKeysAction
     */
    modifiedAt: Date;
    /**
     * 
     * @type {boolean}
     * @memberof ImportKeysAction
     */
    isPending: boolean;
    /**
     * 
     * @type {string}
     * @memberof ImportKeysAction
     */
    type: ImportKeysActionTypeEnum;
    /**
     * 
     * @type {UserRef}
     * @memberof ImportKeysAction
     */
    createdBy: UserRef;
    /**
     * 
     * @type {UserRef}
     * @memberof ImportKeysAction
     */
    abortedBy?: UserRef;
    /**
     * 
     * @type {string}
     * @memberof ImportKeysAction
     */
    state: ImportKeysActionStateEnum;
}


/**
 * @export
 */
export const ImportKeysActionTypeEnum = {
    importKeys: 'import_keys'
} as const;
export type ImportKeysActionTypeEnum = typeof ImportKeysActionTypeEnum[keyof typeof ImportKeysActionTypeEnum];

/**
 * @export
 */
export const ImportKeysActionStateEnum = {
    created: 'created',
    completed: 'completed',
    aborted: 'aborted'
} as const;
export type ImportKeysActionStateEnum = typeof ImportKeysActionStateEnum[keyof typeof ImportKeysActionStateEnum];


/**
 * Check if a given object implements the ImportKeysAction interface.
 */
export function instanceOfImportKeysAction(value: object): value is ImportKeysAction {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('modifiedAt' in value) || value['modifiedAt'] === undefined) return false;
    if (!('isPending' in value) || value['isPending'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('createdBy' in value) || value['createdBy'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    return true;
}

export function ImportKeysActionFromJSON(json: any): ImportKeysAction {
    return ImportKeysActionFromJSONTyped(json, false);
}

export function ImportKeysActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImportKeysAction {
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
    };
}

export function ImportKeysActionToJSON(json: any): ImportKeysAction {
    return ImportKeysActionToJSONTyped(json, false);
}

export function ImportKeysActionToJSONTyped(value?: ImportKeysAction | null, ignoreDiscriminator: boolean = false): any {
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
    };
}

