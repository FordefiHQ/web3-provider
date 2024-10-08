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
import type { AptosMessageState } from './AptosMessageState';
import {
    AptosMessageStateFromJSON,
    AptosMessageStateFromJSONTyped,
    AptosMessageStateToJSON,
} from './AptosMessageState';
import type { AptosMessageStateChange } from './AptosMessageStateChange';
import {
    AptosMessageStateChangeFromJSON,
    AptosMessageStateChangeFromJSONTyped,
    AptosMessageStateChangeToJSON,
} from './AptosMessageStateChange';
import type { AptosMessageType } from './AptosMessageType';
import {
    AptosMessageTypeFromJSON,
    AptosMessageTypeFromJSONTyped,
    AptosMessageTypeToJSON,
} from './AptosMessageType';
import type { EnrichedAptosAddress } from './EnrichedAptosAddress';
import {
    EnrichedAptosAddressFromJSON,
    EnrichedAptosAddressFromJSONTyped,
    EnrichedAptosAddressToJSON,
} from './EnrichedAptosAddress';
import type { EnrichedAptosChain } from './EnrichedAptosChain';
import {
    EnrichedAptosChainFromJSON,
    EnrichedAptosChainFromJSONTyped,
    EnrichedAptosChainToJSON,
} from './EnrichedAptosChain';
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
 * @interface AptosMessage
 */
export interface AptosMessage {
    /**
     * 
     * @type {string}
     * @memberof AptosMessage
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof AptosMessage
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof AptosMessage
     */
    modifiedAt: Date;
    /**
     * 
     * @type {ManagedTransactionData}
     * @memberof AptosMessage
     */
    managedTransactionData?: ManagedTransactionData;
    /**
     * 
     * @type {Array<Signature>}
     * @memberof AptosMessage
     */
    signatures: Array<Signature>;
    /**
     * 
     * @type {string}
     * @memberof AptosMessage
     */
    note?: string;
    /**
     * 
     * @type {TransactionSpamState}
     * @memberof AptosMessage
     */
    spamState?: TransactionSpamState;
    /**
     * 
     * @type {TransactionDirection}
     * @memberof AptosMessage
     */
    direction: TransactionDirection;
    /**
     * 
     * @type {string}
     * @memberof AptosMessage
     */
    type: AptosMessageTypeEnum;
    /**
     * 
     * @type {AptosMessageType}
     * @memberof AptosMessage
     */
    aptosMessageType: AptosMessageType;
    /**
     * 
     * @type {AptosMessageState}
     * @memberof AptosMessage
     */
    state: AptosMessageState;
    /**
     * 
     * @type {Array<AptosMessageStateChange>}
     * @memberof AptosMessage
     */
    stateChanges: Array<AptosMessageStateChange>;
    /**
     * 
     * @type {string}
     * @memberof AptosMessage
     */
    rawOriginalMessageToSign: string;
    /**
     * 
     * @type {string}
     * @memberof AptosMessage
     */
    stringOriginalMessageToSign: string;
    /**
     * 
     * @type {string}
     * @memberof AptosMessage
     */
    rawFullMessageToSign: string;
    /**
     * 
     * @type {string}
     * @memberof AptosMessage
     */
    stringFullMessageToSign: string;
    /**
     * 
     * @type {EnrichedAptosChain}
     * @memberof AptosMessage
     */
    chain: EnrichedAptosChain;
    /**
     * 
     * @type {EnrichedAptosAddress}
     * @memberof AptosMessage
     */
    sender: EnrichedAptosAddress;
}


/**
 * @export
 */
export const AptosMessageTypeEnum = {
    aptosMessage: 'aptos_message'
} as const;
export type AptosMessageTypeEnum = typeof AptosMessageTypeEnum[keyof typeof AptosMessageTypeEnum];


/**
 * Check if a given object implements the AptosMessage interface.
 */
export function instanceOfAptosMessage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "modifiedAt" in value;
    isInstance = isInstance && "signatures" in value;
    isInstance = isInstance && "direction" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "aptosMessageType" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "stateChanges" in value;
    isInstance = isInstance && "rawOriginalMessageToSign" in value;
    isInstance = isInstance && "stringOriginalMessageToSign" in value;
    isInstance = isInstance && "rawFullMessageToSign" in value;
    isInstance = isInstance && "stringFullMessageToSign" in value;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "sender" in value;

    return isInstance;
}

export function AptosMessageFromJSON(json: any): AptosMessage {
    return AptosMessageFromJSONTyped(json, false);
}

export function AptosMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AptosMessage {
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
        'aptosMessageType': AptosMessageTypeFromJSON(json['aptos_message_type']),
        'state': AptosMessageStateFromJSON(json['state']),
        'stateChanges': ((json['state_changes'] as Array<any>).map(AptosMessageStateChangeFromJSON)),
        'rawOriginalMessageToSign': json['raw_original_message_to_sign'],
        'stringOriginalMessageToSign': json['string_original_message_to_sign'],
        'rawFullMessageToSign': json['raw_full_message_to_sign'],
        'stringFullMessageToSign': json['string_full_message_to_sign'],
        'chain': EnrichedAptosChainFromJSON(json['chain']),
        'sender': EnrichedAptosAddressFromJSON(json['sender']),
    };
}

export function AptosMessageToJSON(value?: AptosMessage | null): any {
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
        'aptos_message_type': AptosMessageTypeToJSON(value.aptosMessageType),
        'state': AptosMessageStateToJSON(value.state),
        'state_changes': ((value.stateChanges as Array<any>).map(AptosMessageStateChangeToJSON)),
        'raw_original_message_to_sign': value.rawOriginalMessageToSign,
        'string_original_message_to_sign': value.stringOriginalMessageToSign,
        'raw_full_message_to_sign': value.rawFullMessageToSign,
        'string_full_message_to_sign': value.stringFullMessageToSign,
        'chain': EnrichedAptosChainToJSON(value.chain),
        'sender': EnrichedAptosAddressToJSON(value.sender),
    };
}

