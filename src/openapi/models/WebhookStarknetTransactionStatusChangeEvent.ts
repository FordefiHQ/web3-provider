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
import type { TransactionSpamState } from './TransactionSpamState';
import {
    TransactionSpamStateFromJSON,
    TransactionSpamStateFromJSONTyped,
    TransactionSpamStateToJSON,
    TransactionSpamStateToJSONTyped,
} from './TransactionSpamState';
import type { TransactionDirection } from './TransactionDirection';
import {
    TransactionDirectionFromJSON,
    TransactionDirectionFromJSONTyped,
    TransactionDirectionToJSON,
    TransactionDirectionToJSONTyped,
} from './TransactionDirection';
import type { StarknetTransactionType } from './StarknetTransactionType';
import {
    StarknetTransactionTypeFromJSON,
    StarknetTransactionTypeFromJSONTyped,
    StarknetTransactionTypeToJSON,
    StarknetTransactionTypeToJSONTyped,
} from './StarknetTransactionType';
import type { StarknetChain } from './StarknetChain';
import {
    StarknetChainFromJSON,
    StarknetChainFromJSONTyped,
    StarknetChainToJSON,
    StarknetChainToJSONTyped,
} from './StarknetChain';
import type { PushableTransactionState } from './PushableTransactionState';
import {
    PushableTransactionStateFromJSON,
    PushableTransactionStateFromJSONTyped,
    PushableTransactionStateToJSON,
    PushableTransactionStateToJSONTyped,
} from './PushableTransactionState';

/**
 * 
 * @export
 * @interface WebhookStarknetTransactionStatusChangeEvent
 */
export interface WebhookStarknetTransactionStatusChangeEvent {
    /**
     * 
     * @type {string}
     * @memberof WebhookStarknetTransactionStatusChangeEvent
     */
    transactionId: string;
    /**
     * 
     * @type {boolean}
     * @memberof WebhookStarknetTransactionStatusChangeEvent
     * @deprecated
     */
    isManagedTransaction: boolean;
    /**
     * 
     * @type {TransactionDirection}
     * @memberof WebhookStarknetTransactionStatusChangeEvent
     */
    direction: TransactionDirection;
    /**
     * 
     * @type {string}
     * @memberof WebhookStarknetTransactionStatusChangeEvent
     */
    note?: string;
    /**
     * 
     * @type {TransactionSpamState}
     * @memberof WebhookStarknetTransactionStatusChangeEvent
     */
    spamState: TransactionSpamState;
    /**
     * 
     * @type {PushableTransactionState}
     * @memberof WebhookStarknetTransactionStatusChangeEvent
     */
    state: PushableTransactionState;
    /**
     * 
     * @type {string}
     * @memberof WebhookStarknetTransactionStatusChangeEvent
     */
    type: WebhookStarknetTransactionStatusChangeEventTypeEnum;
    /**
     * 
     * @type {StarknetTransactionType}
     * @memberof WebhookStarknetTransactionStatusChangeEvent
     */
    starknetTransactionType: StarknetTransactionType;
    /**
     * 
     * @type {string}
     * @memberof WebhookStarknetTransactionStatusChangeEvent
     */
    hash?: string;
    /**
     * 
     * @type {StarknetChain}
     * @memberof WebhookStarknetTransactionStatusChangeEvent
     */
    chain: StarknetChain;
}


/**
 * @export
 */
export const WebhookStarknetTransactionStatusChangeEventTypeEnum = {
    starknetTransaction: 'starknet_transaction'
} as const;
export type WebhookStarknetTransactionStatusChangeEventTypeEnum = typeof WebhookStarknetTransactionStatusChangeEventTypeEnum[keyof typeof WebhookStarknetTransactionStatusChangeEventTypeEnum];


/**
 * Check if a given object implements the WebhookStarknetTransactionStatusChangeEvent interface.
 */
export function instanceOfWebhookStarknetTransactionStatusChangeEvent(value: object): value is WebhookStarknetTransactionStatusChangeEvent {
    if (!('transactionId' in value) || value['transactionId'] === undefined) return false;
    if (!('isManagedTransaction' in value) || value['isManagedTransaction'] === undefined) return false;
    if (!('direction' in value) || value['direction'] === undefined) return false;
    if (!('spamState' in value) || value['spamState'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('starknetTransactionType' in value) || value['starknetTransactionType'] === undefined) return false;
    if (!('chain' in value) || value['chain'] === undefined) return false;
    return true;
}

export function WebhookStarknetTransactionStatusChangeEventFromJSON(json: any): WebhookStarknetTransactionStatusChangeEvent {
    return WebhookStarknetTransactionStatusChangeEventFromJSONTyped(json, false);
}

export function WebhookStarknetTransactionStatusChangeEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookStarknetTransactionStatusChangeEvent {
    if (json == null) {
        return json;
    }
    return {
        
        'transactionId': json['transaction_id'],
        'isManagedTransaction': json['is_managed_transaction'],
        'direction': TransactionDirectionFromJSON(json['direction']),
        'note': json['note'] == null ? undefined : json['note'],
        'spamState': TransactionSpamStateFromJSON(json['spam_state']),
        'state': PushableTransactionStateFromJSON(json['state']),
        'type': json['type'],
        'starknetTransactionType': StarknetTransactionTypeFromJSON(json['starknet_transaction_type']),
        'hash': json['hash'] == null ? undefined : json['hash'],
        'chain': StarknetChainFromJSON(json['chain']),
    };
}

export function WebhookStarknetTransactionStatusChangeEventToJSON(json: any): WebhookStarknetTransactionStatusChangeEvent {
    return WebhookStarknetTransactionStatusChangeEventToJSONTyped(json, false);
}

export function WebhookStarknetTransactionStatusChangeEventToJSONTyped(value?: WebhookStarknetTransactionStatusChangeEvent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'transaction_id': value['transactionId'],
        'is_managed_transaction': value['isManagedTransaction'],
        'direction': TransactionDirectionToJSON(value['direction']),
        'note': value['note'],
        'spam_state': TransactionSpamStateToJSON(value['spamState']),
        'state': PushableTransactionStateToJSON(value['state']),
        'type': value['type'],
        'starknet_transaction_type': StarknetTransactionTypeToJSON(value['starknetTransactionType']),
        'hash': value['hash'],
        'chain': StarknetChainToJSON(value['chain']),
    };
}

