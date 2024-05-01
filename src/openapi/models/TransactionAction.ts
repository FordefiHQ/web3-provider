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
import type { Transaction } from './Transaction';
import {
    TransactionFromJSON,
    TransactionFromJSONTyped,
    TransactionToJSON,
} from './Transaction';
import type { UserRef } from './UserRef';
import {
    UserRefFromJSON,
    UserRefFromJSONTyped,
    UserRefToJSON,
} from './UserRef';

/**
 * 
 * @export
 * @interface TransactionAction
 */
export interface TransactionAction {
    /**
     * 
     * @type {string}
     * @memberof TransactionAction
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof TransactionAction
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof TransactionAction
     */
    modifiedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof TransactionAction
     */
    type: TransactionActionTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof TransactionAction
     */
    isPending: boolean;
    /**
     * 
     * @type {UserRef}
     * @memberof TransactionAction
     */
    createdBy: UserRef;
    /**
     * 
     * @type {UserRef}
     * @memberof TransactionAction
     */
    abortedBy?: UserRef;
    /**
     * 
     * @type {Transaction}
     * @memberof TransactionAction
     */
    transaction: Transaction;
}


/**
 * @export
 */
export const TransactionActionTypeEnum = {
    transaction: 'transaction'
} as const;
export type TransactionActionTypeEnum = typeof TransactionActionTypeEnum[keyof typeof TransactionActionTypeEnum];


/**
 * Check if a given object implements the TransactionAction interface.
 */
export function instanceOfTransactionAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "modifiedAt" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "isPending" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "transaction" in value;

    return isInstance;
}

export function TransactionActionFromJSON(json: any): TransactionAction {
    return TransactionActionFromJSONTyped(json, false);
}

export function TransactionActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionAction {
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
        'transaction': TransactionFromJSON(json['transaction']),
    };
}

export function TransactionActionToJSON(value?: TransactionAction | null): any {
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
        'transaction': TransactionToJSON(value.transaction),
    };
}

