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
import type { EnrichedEvmAddress } from './EnrichedEvmAddress';
import {
    EnrichedEvmAddressFromJSON,
    EnrichedEvmAddressFromJSONTyped,
    EnrichedEvmAddressToJSON,
} from './EnrichedEvmAddress';
import type { EnrichedEvmChain } from './EnrichedEvmChain';
import {
    EnrichedEvmChainFromJSON,
    EnrichedEvmChainFromJSONTyped,
    EnrichedEvmChainToJSON,
} from './EnrichedEvmChain';
import type { EvmMessageState } from './EvmMessageState';
import {
    EvmMessageStateFromJSON,
    EvmMessageStateFromJSONTyped,
    EvmMessageStateToJSON,
} from './EvmMessageState';
import type { EvmMessageStateChange } from './EvmMessageStateChange';
import {
    EvmMessageStateChangeFromJSON,
    EvmMessageStateChangeFromJSONTyped,
    EvmMessageStateChangeToJSON,
} from './EvmMessageStateChange';
import type { EvmMessageType } from './EvmMessageType';
import {
    EvmMessageTypeFromJSON,
    EvmMessageTypeFromJSONTyped,
    EvmMessageTypeToJSON,
} from './EvmMessageType';
import type { EvmMessageTypedData } from './EvmMessageTypedData';
import {
    EvmMessageTypedDataFromJSON,
    EvmMessageTypedDataFromJSONTyped,
    EvmMessageTypedDataToJSON,
} from './EvmMessageTypedData';
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
import type { VaultRef } from './VaultRef';
import {
    VaultRefFromJSON,
    VaultRefFromJSONTyped,
    VaultRefToJSON,
} from './VaultRef';

/**
 * 
 * @export
 * @interface EvmMessage
 */
export interface EvmMessage {
    /**
     * 
     * @type {string}
     * @memberof EvmMessage
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof EvmMessage
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof EvmMessage
     */
    modifiedAt: Date;
    /**
     * 
     * @type {ManagedTransactionData}
     * @memberof EvmMessage
     */
    managedTransactionData?: ManagedTransactionData;
    /**
     * 
     * @type {Array<Signature>}
     * @memberof EvmMessage
     */
    signatures: Array<Signature>;
    /**
     * 
     * @type {string}
     * @memberof EvmMessage
     */
    note?: string;
    /**
     * 
     * @type {TransactionSpamState}
     * @memberof EvmMessage
     */
    spamState?: TransactionSpamState;
    /**
     * 
     * @type {TransactionDirection}
     * @memberof EvmMessage
     */
    direction: TransactionDirection;
    /**
     * 
     * @type {string}
     * @memberof EvmMessage
     */
    type: EvmMessageTypeEnum;
    /**
     * 
     * @type {EvmMessageType}
     * @memberof EvmMessage
     */
    evmMessageType: EvmMessageType;
    /**
     * 
     * @type {EvmMessageState}
     * @memberof EvmMessage
     */
    state: EvmMessageState;
    /**
     * 
     * @type {Array<EvmMessageStateChange>}
     * @memberof EvmMessage
     */
    stateChanges: Array<EvmMessageStateChange>;
    /**
     * 
     * @type {string}
     * @memberof EvmMessage
     */
    rawData: string;
    /**
     * 
     * @type {EvmMessageTypedData}
     * @memberof EvmMessage
     */
    typedData?: EvmMessageTypedData;
    /**
     * 
     * @type {VaultRef}
     * @memberof EvmMessage
     */
    vault: VaultRef;
    /**
     * 
     * @type {EnrichedEvmChain}
     * @memberof EvmMessage
     */
    chain: EnrichedEvmChain;
    /**
     * 
     * @type {EnrichedEvmAddress}
     * @memberof EvmMessage
     */
    sender: EnrichedEvmAddress;
}


/**
 * @export
 */
export const EvmMessageTypeEnum = {
    evmMessage: 'evm_message'
} as const;
export type EvmMessageTypeEnum = typeof EvmMessageTypeEnum[keyof typeof EvmMessageTypeEnum];


/**
 * Check if a given object implements the EvmMessage interface.
 */
export function instanceOfEvmMessage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "modifiedAt" in value;
    isInstance = isInstance && "signatures" in value;
    isInstance = isInstance && "direction" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "evmMessageType" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "stateChanges" in value;
    isInstance = isInstance && "rawData" in value;
    isInstance = isInstance && "vault" in value;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "sender" in value;

    return isInstance;
}

export function EvmMessageFromJSON(json: any): EvmMessage {
    return EvmMessageFromJSONTyped(json, false);
}

export function EvmMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvmMessage {
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
        'evmMessageType': EvmMessageTypeFromJSON(json['evm_message_type']),
        'state': EvmMessageStateFromJSON(json['state']),
        'stateChanges': ((json['state_changes'] as Array<any>).map(EvmMessageStateChangeFromJSON)),
        'rawData': json['raw_data'],
        'typedData': !exists(json, 'typed_data') ? undefined : EvmMessageTypedDataFromJSON(json['typed_data']),
        'vault': VaultRefFromJSON(json['vault']),
        'chain': EnrichedEvmChainFromJSON(json['chain']),
        'sender': EnrichedEvmAddressFromJSON(json['sender']),
    };
}

export function EvmMessageToJSON(value?: EvmMessage | null): any {
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
        'evm_message_type': EvmMessageTypeToJSON(value.evmMessageType),
        'state': EvmMessageStateToJSON(value.state),
        'state_changes': ((value.stateChanges as Array<any>).map(EvmMessageStateChangeToJSON)),
        'raw_data': value.rawData,
        'typed_data': EvmMessageTypedDataToJSON(value.typedData),
        'vault': VaultRefToJSON(value.vault),
        'chain': EnrichedEvmChainToJSON(value.chain),
        'sender': EnrichedEvmAddressToJSON(value.sender),
    };
}

