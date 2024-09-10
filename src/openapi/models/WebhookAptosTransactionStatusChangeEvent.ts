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
import type { AptosChain } from './AptosChain';
import {
    AptosChainFromJSON,
    AptosChainFromJSONTyped,
    AptosChainToJSON,
} from './AptosChain';
import type { AptosTransactionState } from './AptosTransactionState';
import {
    AptosTransactionStateFromJSON,
    AptosTransactionStateFromJSONTyped,
    AptosTransactionStateToJSON,
} from './AptosTransactionState';
import type { AptosTransactionType } from './AptosTransactionType';
import {
    AptosTransactionTypeFromJSON,
    AptosTransactionTypeFromJSONTyped,
    AptosTransactionTypeToJSON,
} from './AptosTransactionType';
import type { TransactionDirection } from './TransactionDirection';
import {
    TransactionDirectionFromJSON,
    TransactionDirectionFromJSONTyped,
    TransactionDirectionToJSON,
} from './TransactionDirection';
import type { TransactionSpamState } from './TransactionSpamState';
import {
    TransactionSpamStateFromJSON,
    TransactionSpamStateFromJSONTyped,
    TransactionSpamStateToJSON,
} from './TransactionSpamState';

/**
 * 
 * @export
 * @interface WebhookAptosTransactionStatusChangeEvent
 */
export interface WebhookAptosTransactionStatusChangeEvent {
    /**
     * 
     * @type {string}
     * @memberof WebhookAptosTransactionStatusChangeEvent
     */
    transactionId: string;
    /**
     * 
     * @type {boolean}
     * @memberof WebhookAptosTransactionStatusChangeEvent
     * @deprecated
     */
    isManagedTransaction: boolean;
    /**
     * 
     * @type {TransactionDirection}
     * @memberof WebhookAptosTransactionStatusChangeEvent
     */
    direction: TransactionDirection;
    /**
     * 
     * @type {string}
     * @memberof WebhookAptosTransactionStatusChangeEvent
     */
    note?: string;
    /**
     * 
     * @type {TransactionSpamState}
     * @memberof WebhookAptosTransactionStatusChangeEvent
     */
    spamState: TransactionSpamState;
    /**
     * 
     * @type {string}
     * @memberof WebhookAptosTransactionStatusChangeEvent
     */
    type: WebhookAptosTransactionStatusChangeEventTypeEnum;
    /**
     * 
     * @type {AptosTransactionType}
     * @memberof WebhookAptosTransactionStatusChangeEvent
     */
    aptosTransactionType: AptosTransactionType;
    /**
     * 
     * @type {AptosTransactionState}
     * @memberof WebhookAptosTransactionStatusChangeEvent
     */
    state: AptosTransactionState;
    /**
     * 
     * @type {string}
     * @memberof WebhookAptosTransactionStatusChangeEvent
     */
    hash?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookAptosTransactionStatusChangeEvent
     */
    serializedSignedTransaction?: string;
    /**
     * 
     * @type {AptosChain}
     * @memberof WebhookAptosTransactionStatusChangeEvent
     */
    chain: AptosChain;
}


/**
 * @export
 */
export const WebhookAptosTransactionStatusChangeEventTypeEnum = {
    aptosTransaction: 'aptos_transaction'
} as const;
export type WebhookAptosTransactionStatusChangeEventTypeEnum = typeof WebhookAptosTransactionStatusChangeEventTypeEnum[keyof typeof WebhookAptosTransactionStatusChangeEventTypeEnum];


/**
 * Check if a given object implements the WebhookAptosTransactionStatusChangeEvent interface.
 */
export function instanceOfWebhookAptosTransactionStatusChangeEvent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "transactionId" in value;
    isInstance = isInstance && "isManagedTransaction" in value;
    isInstance = isInstance && "direction" in value;
    isInstance = isInstance && "spamState" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "aptosTransactionType" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "chain" in value;

    return isInstance;
}

export function WebhookAptosTransactionStatusChangeEventFromJSON(json: any): WebhookAptosTransactionStatusChangeEvent {
    return WebhookAptosTransactionStatusChangeEventFromJSONTyped(json, false);
}

export function WebhookAptosTransactionStatusChangeEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookAptosTransactionStatusChangeEvent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transactionId': json['transaction_id'],
        'isManagedTransaction': json['is_managed_transaction'],
        'direction': TransactionDirectionFromJSON(json['direction']),
        'note': !exists(json, 'note') ? undefined : json['note'],
        'spamState': TransactionSpamStateFromJSON(json['spam_state']),
        'type': json['type'],
        'aptosTransactionType': AptosTransactionTypeFromJSON(json['aptos_transaction_type']),
        'state': AptosTransactionStateFromJSON(json['state']),
        'hash': !exists(json, 'hash') ? undefined : json['hash'],
        'serializedSignedTransaction': !exists(json, 'serialized_signed_transaction') ? undefined : json['serialized_signed_transaction'],
        'chain': AptosChainFromJSON(json['chain']),
    };
}

export function WebhookAptosTransactionStatusChangeEventToJSON(value?: WebhookAptosTransactionStatusChangeEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transaction_id': value.transactionId,
        'is_managed_transaction': value.isManagedTransaction,
        'direction': TransactionDirectionToJSON(value.direction),
        'note': value.note,
        'spam_state': TransactionSpamStateToJSON(value.spamState),
        'type': value.type,
        'aptos_transaction_type': AptosTransactionTypeToJSON(value.aptosTransactionType),
        'state': AptosTransactionStateToJSON(value.state),
        'hash': value.hash,
        'serialized_signed_transaction': value.serializedSignedTransaction,
        'chain': AptosChainToJSON(value.chain),
    };
}

