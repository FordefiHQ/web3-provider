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
import type { CosmosMessageData } from './CosmosMessageData';
import {
    CosmosMessageDataFromJSON,
    CosmosMessageDataFromJSONTyped,
    CosmosMessageDataToJSON,
} from './CosmosMessageData';
import type { CosmosMessageState } from './CosmosMessageState';
import {
    CosmosMessageStateFromJSON,
    CosmosMessageStateFromJSONTyped,
    CosmosMessageStateToJSON,
} from './CosmosMessageState';
import type { CosmosMessageStateChange } from './CosmosMessageStateChange';
import {
    CosmosMessageStateChangeFromJSON,
    CosmosMessageStateChangeFromJSONTyped,
    CosmosMessageStateChangeToJSON,
} from './CosmosMessageStateChange';
import type { CosmosMessageType } from './CosmosMessageType';
import {
    CosmosMessageTypeFromJSON,
    CosmosMessageTypeFromJSONTyped,
    CosmosMessageTypeToJSON,
} from './CosmosMessageType';
import type { EnrichedCosmosBechAddress } from './EnrichedCosmosBechAddress';
import {
    EnrichedCosmosBechAddressFromJSON,
    EnrichedCosmosBechAddressFromJSONTyped,
    EnrichedCosmosBechAddressToJSON,
} from './EnrichedCosmosBechAddress';
import type { EnrichedCosmosChain } from './EnrichedCosmosChain';
import {
    EnrichedCosmosChainFromJSON,
    EnrichedCosmosChainFromJSONTyped,
    EnrichedCosmosChainToJSON,
} from './EnrichedCosmosChain';
import type { ManagedTransactionData } from './ManagedTransactionData';
import {
    ManagedTransactionDataFromJSON,
    ManagedTransactionDataFromJSONTyped,
    ManagedTransactionDataToJSON,
} from './ManagedTransactionData';
import type { Signature } from './Signature';
import {
    SignatureFromJSON,
    SignatureFromJSONTyped,
    SignatureToJSON,
} from './Signature';
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
 * @interface CosmosMessage
 */
export interface CosmosMessage {
    /**
     * 
     * @type {string}
     * @memberof CosmosMessage
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof CosmosMessage
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof CosmosMessage
     */
    modifiedAt: Date;
    /**
     * 
     * @type {ManagedTransactionData}
     * @memberof CosmosMessage
     */
    managedTransactionData?: ManagedTransactionData;
    /**
     * 
     * @type {Array<Signature>}
     * @memberof CosmosMessage
     */
    signatures: Array<Signature>;
    /**
     * 
     * @type {string}
     * @memberof CosmosMessage
     */
    note?: string;
    /**
     * 
     * @type {TransactionSpamState}
     * @memberof CosmosMessage
     */
    spamState?: TransactionSpamState;
    /**
     * 
     * @type {TransactionDirection}
     * @memberof CosmosMessage
     */
    direction: TransactionDirection;
    /**
     * 
     * @type {string}
     * @memberof CosmosMessage
     */
    type: CosmosMessageTypeEnum;
    /**
     * 
     * @type {CosmosMessageType}
     * @memberof CosmosMessage
     */
    cosmosMessageType: CosmosMessageType;
    /**
     * 
     * @type {CosmosMessageState}
     * @memberof CosmosMessage
     */
    state: CosmosMessageState;
    /**
     * 
     * @type {Array<CosmosMessageStateChange>}
     * @memberof CosmosMessage
     */
    stateChanges: Array<CosmosMessageStateChange>;
    /**
     * 
     * @type {CosmosMessageData}
     * @memberof CosmosMessage
     */
    data: CosmosMessageData;
    /**
     * 
     * @type {EnrichedCosmosChain}
     * @memberof CosmosMessage
     */
    chain: EnrichedCosmosChain;
    /**
     * 
     * @type {EnrichedCosmosBechAddress}
     * @memberof CosmosMessage
     */
    sender: EnrichedCosmosBechAddress;
}


/**
 * @export
 */
export const CosmosMessageTypeEnum = {
    cosmosMessage: 'cosmos_message'
} as const;
export type CosmosMessageTypeEnum = typeof CosmosMessageTypeEnum[keyof typeof CosmosMessageTypeEnum];


/**
 * Check if a given object implements the CosmosMessage interface.
 */
export function instanceOfCosmosMessage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "modifiedAt" in value;
    isInstance = isInstance && "signatures" in value;
    isInstance = isInstance && "direction" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "cosmosMessageType" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "stateChanges" in value;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "sender" in value;

    return isInstance;
}

export function CosmosMessageFromJSON(json: any): CosmosMessage {
    return CosmosMessageFromJSONTyped(json, false);
}

export function CosmosMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['created_at'])),
        'modifiedAt': (new Date(json['modified_at'])),
        'managedTransactionData': !exists(json, 'managed_transaction_data') ? undefined : ManagedTransactionDataFromJSON(json['managed_transaction_data']),
        'signatures': ((json['signatures'] as Array<any>).map(SignatureFromJSON)),
        'note': !exists(json, 'note') ? undefined : json['note'],
        'spamState': !exists(json, 'spam_state') ? undefined : TransactionSpamStateFromJSON(json['spam_state']),
        'direction': TransactionDirectionFromJSON(json['direction']),
        'type': json['type'],
        'cosmosMessageType': CosmosMessageTypeFromJSON(json['cosmos_message_type']),
        'state': CosmosMessageStateFromJSON(json['state']),
        'stateChanges': ((json['state_changes'] as Array<any>).map(CosmosMessageStateChangeFromJSON)),
        'data': CosmosMessageDataFromJSON(json['data']),
        'chain': EnrichedCosmosChainFromJSON(json['chain']),
        'sender': EnrichedCosmosBechAddressFromJSON(json['sender']),
    };
}

export function CosmosMessageToJSON(value?: CosmosMessage | null): any {
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
        'managed_transaction_data': ManagedTransactionDataToJSON(value.managedTransactionData),
        'signatures': ((value.signatures as Array<any>).map(SignatureToJSON)),
        'note': value.note,
        'spam_state': TransactionSpamStateToJSON(value.spamState),
        'direction': TransactionDirectionToJSON(value.direction),
        'type': value.type,
        'cosmos_message_type': CosmosMessageTypeToJSON(value.cosmosMessageType),
        'state': CosmosMessageStateToJSON(value.state),
        'state_changes': ((value.stateChanges as Array<any>).map(CosmosMessageStateChangeToJSON)),
        'data': CosmosMessageDataToJSON(value.data),
        'chain': EnrichedCosmosChainToJSON(value.chain),
        'sender': EnrichedCosmosBechAddressToJSON(value.sender),
    };
}

