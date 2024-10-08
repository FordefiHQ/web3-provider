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
import type { SuiChain } from './SuiChain';
import {
    SuiChainFromJSON,
    SuiChainFromJSONTyped,
    SuiChainToJSON,
} from './SuiChain';
import type { SuiMessageState } from './SuiMessageState';
import {
    SuiMessageStateFromJSON,
    SuiMessageStateFromJSONTyped,
    SuiMessageStateToJSON,
} from './SuiMessageState';
import type { SuiMessageType } from './SuiMessageType';
import {
    SuiMessageTypeFromJSON,
    SuiMessageTypeFromJSONTyped,
    SuiMessageTypeToJSON,
} from './SuiMessageType';
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
 * @interface WebhookSuiMessageStatusChangeEvent
 */
export interface WebhookSuiMessageStatusChangeEvent {
    /**
     * 
     * @type {string}
     * @memberof WebhookSuiMessageStatusChangeEvent
     */
    transactionId: string;
    /**
     * 
     * @type {boolean}
     * @memberof WebhookSuiMessageStatusChangeEvent
     * @deprecated
     */
    isManagedTransaction: boolean;
    /**
     * 
     * @type {TransactionDirection}
     * @memberof WebhookSuiMessageStatusChangeEvent
     */
    direction: TransactionDirection;
    /**
     * 
     * @type {string}
     * @memberof WebhookSuiMessageStatusChangeEvent
     */
    note?: string;
    /**
     * 
     * @type {TransactionSpamState}
     * @memberof WebhookSuiMessageStatusChangeEvent
     */
    spamState: TransactionSpamState;
    /**
     * 
     * @type {string}
     * @memberof WebhookSuiMessageStatusChangeEvent
     */
    type: WebhookSuiMessageStatusChangeEventTypeEnum;
    /**
     * 
     * @type {SuiMessageType}
     * @memberof WebhookSuiMessageStatusChangeEvent
     */
    suiMessageType: SuiMessageType;
    /**
     * 
     * @type {SuiMessageState}
     * @memberof WebhookSuiMessageStatusChangeEvent
     */
    state: SuiMessageState;
    /**
     * 
     * @type {SuiChain}
     * @memberof WebhookSuiMessageStatusChangeEvent
     */
    chain: SuiChain;
}


/**
 * @export
 */
export const WebhookSuiMessageStatusChangeEventTypeEnum = {
    suiMessage: 'sui_message'
} as const;
export type WebhookSuiMessageStatusChangeEventTypeEnum = typeof WebhookSuiMessageStatusChangeEventTypeEnum[keyof typeof WebhookSuiMessageStatusChangeEventTypeEnum];


/**
 * Check if a given object implements the WebhookSuiMessageStatusChangeEvent interface.
 */
export function instanceOfWebhookSuiMessageStatusChangeEvent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "transactionId" in value;
    isInstance = isInstance && "isManagedTransaction" in value;
    isInstance = isInstance && "direction" in value;
    isInstance = isInstance && "spamState" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "suiMessageType" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "chain" in value;

    return isInstance;
}

export function WebhookSuiMessageStatusChangeEventFromJSON(json: any): WebhookSuiMessageStatusChangeEvent {
    return WebhookSuiMessageStatusChangeEventFromJSONTyped(json, false);
}

export function WebhookSuiMessageStatusChangeEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookSuiMessageStatusChangeEvent {
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
        'suiMessageType': SuiMessageTypeFromJSON(json['sui_message_type']),
        'state': SuiMessageStateFromJSON(json['state']),
        'chain': SuiChainFromJSON(json['chain']),
    };
}

export function WebhookSuiMessageStatusChangeEventToJSON(value?: WebhookSuiMessageStatusChangeEvent | null): any {
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
        'sui_message_type': SuiMessageTypeToJSON(value.suiMessageType),
        'state': SuiMessageStateToJSON(value.state),
        'chain': SuiChainToJSON(value.chain),
    };
}

