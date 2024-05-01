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
import type { BlackBoxSignatureState } from './BlackBoxSignatureState';
import {
    BlackBoxSignatureStateFromJSON,
    BlackBoxSignatureStateFromJSONTyped,
    BlackBoxSignatureStateToJSON,
} from './BlackBoxSignatureState';
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
 * @interface WebhookBlackBoxSignatureStatusChangeEvent
 */
export interface WebhookBlackBoxSignatureStatusChangeEvent {
    /**
     * 
     * @type {string}
     * @memberof WebhookBlackBoxSignatureStatusChangeEvent
     */
    transactionId: string;
    /**
     * 
     * @type {boolean}
     * @memberof WebhookBlackBoxSignatureStatusChangeEvent
     * @deprecated
     */
    isManagedTransaction: boolean;
    /**
     * 
     * @type {TransactionDirection}
     * @memberof WebhookBlackBoxSignatureStatusChangeEvent
     */
    direction: TransactionDirection;
    /**
     * 
     * @type {string}
     * @memberof WebhookBlackBoxSignatureStatusChangeEvent
     */
    note?: string;
    /**
     * 
     * @type {TransactionSpamState}
     * @memberof WebhookBlackBoxSignatureStatusChangeEvent
     */
    spamState: TransactionSpamState;
    /**
     * 
     * @type {string}
     * @memberof WebhookBlackBoxSignatureStatusChangeEvent
     */
    type: WebhookBlackBoxSignatureStatusChangeEventTypeEnum;
    /**
     * 
     * @type {BlackBoxSignatureState}
     * @memberof WebhookBlackBoxSignatureStatusChangeEvent
     */
    state: BlackBoxSignatureState;
}


/**
 * @export
 */
export const WebhookBlackBoxSignatureStatusChangeEventTypeEnum = {
    blackBoxSignature: 'black_box_signature'
} as const;
export type WebhookBlackBoxSignatureStatusChangeEventTypeEnum = typeof WebhookBlackBoxSignatureStatusChangeEventTypeEnum[keyof typeof WebhookBlackBoxSignatureStatusChangeEventTypeEnum];


/**
 * Check if a given object implements the WebhookBlackBoxSignatureStatusChangeEvent interface.
 */
export function instanceOfWebhookBlackBoxSignatureStatusChangeEvent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "transactionId" in value;
    isInstance = isInstance && "isManagedTransaction" in value;
    isInstance = isInstance && "direction" in value;
    isInstance = isInstance && "spamState" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "state" in value;

    return isInstance;
}

export function WebhookBlackBoxSignatureStatusChangeEventFromJSON(json: any): WebhookBlackBoxSignatureStatusChangeEvent {
    return WebhookBlackBoxSignatureStatusChangeEventFromJSONTyped(json, false);
}

export function WebhookBlackBoxSignatureStatusChangeEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookBlackBoxSignatureStatusChangeEvent {
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
        'state': BlackBoxSignatureStateFromJSON(json['state']),
    };
}

export function WebhookBlackBoxSignatureStatusChangeEventToJSON(value?: WebhookBlackBoxSignatureStatusChangeEvent | null): any {
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
        'state': BlackBoxSignatureStateToJSON(value.state),
    };
}

