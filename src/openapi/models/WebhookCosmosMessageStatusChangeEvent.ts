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
import type { CosmosChain } from './CosmosChain';
import {
    CosmosChainFromJSON,
    CosmosChainFromJSONTyped,
    CosmosChainToJSON,
} from './CosmosChain';
import type { CosmosMessageState } from './CosmosMessageState';
import {
    CosmosMessageStateFromJSON,
    CosmosMessageStateFromJSONTyped,
    CosmosMessageStateToJSON,
} from './CosmosMessageState';
import type { CosmosMessageType } from './CosmosMessageType';
import {
    CosmosMessageTypeFromJSON,
    CosmosMessageTypeFromJSONTyped,
    CosmosMessageTypeToJSON,
} from './CosmosMessageType';
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
 * @interface WebhookCosmosMessageStatusChangeEvent
 */
export interface WebhookCosmosMessageStatusChangeEvent {
    /**
     * 
     * @type {string}
     * @memberof WebhookCosmosMessageStatusChangeEvent
     */
    transactionId: string;
    /**
     * 
     * @type {boolean}
     * @memberof WebhookCosmosMessageStatusChangeEvent
     * @deprecated
     */
    isManagedTransaction: boolean;
    /**
     * 
     * @type {TransactionDirection}
     * @memberof WebhookCosmosMessageStatusChangeEvent
     */
    direction: TransactionDirection;
    /**
     * 
     * @type {string}
     * @memberof WebhookCosmosMessageStatusChangeEvent
     */
    note?: string;
    /**
     * 
     * @type {TransactionSpamState}
     * @memberof WebhookCosmosMessageStatusChangeEvent
     */
    spamState: TransactionSpamState;
    /**
     * 
     * @type {string}
     * @memberof WebhookCosmosMessageStatusChangeEvent
     */
    type: WebhookCosmosMessageStatusChangeEventTypeEnum;
    /**
     * 
     * @type {CosmosMessageType}
     * @memberof WebhookCosmosMessageStatusChangeEvent
     */
    cosmosMessageType: CosmosMessageType;
    /**
     * 
     * @type {CosmosMessageState}
     * @memberof WebhookCosmosMessageStatusChangeEvent
     */
    state: CosmosMessageState;
    /**
     * 
     * @type {CosmosChain}
     * @memberof WebhookCosmosMessageStatusChangeEvent
     */
    chain: CosmosChain;
}


/**
 * @export
 */
export const WebhookCosmosMessageStatusChangeEventTypeEnum = {
    cosmosMessage: 'cosmos_message'
} as const;
export type WebhookCosmosMessageStatusChangeEventTypeEnum = typeof WebhookCosmosMessageStatusChangeEventTypeEnum[keyof typeof WebhookCosmosMessageStatusChangeEventTypeEnum];


/**
 * Check if a given object implements the WebhookCosmosMessageStatusChangeEvent interface.
 */
export function instanceOfWebhookCosmosMessageStatusChangeEvent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "transactionId" in value;
    isInstance = isInstance && "isManagedTransaction" in value;
    isInstance = isInstance && "direction" in value;
    isInstance = isInstance && "spamState" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "cosmosMessageType" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "chain" in value;

    return isInstance;
}

export function WebhookCosmosMessageStatusChangeEventFromJSON(json: any): WebhookCosmosMessageStatusChangeEvent {
    return WebhookCosmosMessageStatusChangeEventFromJSONTyped(json, false);
}

export function WebhookCosmosMessageStatusChangeEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookCosmosMessageStatusChangeEvent {
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
        'cosmosMessageType': CosmosMessageTypeFromJSON(json['cosmos_message_type']),
        'state': CosmosMessageStateFromJSON(json['state']),
        'chain': CosmosChainFromJSON(json['chain']),
    };
}

export function WebhookCosmosMessageStatusChangeEventToJSON(value?: WebhookCosmosMessageStatusChangeEvent | null): any {
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
        'cosmos_message_type': CosmosMessageTypeToJSON(value.cosmosMessageType),
        'state': CosmosMessageStateToJSON(value.state),
        'chain': CosmosChainToJSON(value.chain),
    };
}
