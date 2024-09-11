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
import type { UserRef } from './UserRef';
import {
    UserRefFromJSON,
    UserRefFromJSONTyped,
    UserRefToJSON,
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
     * @type {string}
     * @memberof ImportKeysAction
     */
    type: ImportKeysActionTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ImportKeysAction
     */
    isPending: boolean;
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
export function instanceOfImportKeysAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "modifiedAt" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "isPending" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "state" in value;

    return isInstance;
}

export function ImportKeysActionFromJSON(json: any): ImportKeysAction {
    return ImportKeysActionFromJSONTyped(json, false);
}

export function ImportKeysActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImportKeysAction {
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
        'state': json['state'],
    };
}

export function ImportKeysActionToJSON(value?: ImportKeysAction | null): any {
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
        'state': value.state,
    };
}

