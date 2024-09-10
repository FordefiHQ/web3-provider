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
import type { AptosBlock } from './AptosBlock';
import {
    AptosBlockFromJSON,
    AptosBlockFromJSONTyped,
    AptosBlockToJSON,
} from './AptosBlock';
import type { AptosGasData } from './AptosGasData';
import {
    AptosGasDataFromJSON,
    AptosGasDataFromJSONTyped,
    AptosGasDataToJSON,
} from './AptosGasData';
import type { AptosTransactionAptosTransactionTypeDetails } from './AptosTransactionAptosTransactionTypeDetails';
import {
    AptosTransactionAptosTransactionTypeDetailsFromJSON,
    AptosTransactionAptosTransactionTypeDetailsFromJSONTyped,
    AptosTransactionAptosTransactionTypeDetailsToJSON,
} from './AptosTransactionAptosTransactionTypeDetails';
import type { AptosTransactionPayload } from './AptosTransactionPayload';
import {
    AptosTransactionPayloadFromJSON,
    AptosTransactionPayloadFromJSONTyped,
    AptosTransactionPayloadToJSON,
} from './AptosTransactionPayload';
import type { AptosTransactionResult } from './AptosTransactionResult';
import {
    AptosTransactionResultFromJSON,
    AptosTransactionResultFromJSONTyped,
    AptosTransactionResultToJSON,
} from './AptosTransactionResult';
import type { AptosTransactionState } from './AptosTransactionState';
import {
    AptosTransactionStateFromJSON,
    AptosTransactionStateFromJSONTyped,
    AptosTransactionStateToJSON,
} from './AptosTransactionState';
import type { AptosTransactionStateChange } from './AptosTransactionStateChange';
import {
    AptosTransactionStateChangeFromJSON,
    AptosTransactionStateChangeFromJSONTyped,
    AptosTransactionStateChangeToJSON,
} from './AptosTransactionStateChange';
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
import type { SimulationStatusResult } from './SimulationStatusResult';
import {
    SimulationStatusResultFromJSON,
    SimulationStatusResultFromJSONTyped,
    SimulationStatusResultToJSON,
} from './SimulationStatusResult';
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
 * @interface AptosTransaction
 */
export interface AptosTransaction {
    /**
     * 
     * @type {string}
     * @memberof AptosTransaction
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof AptosTransaction
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof AptosTransaction
     */
    modifiedAt: Date;
    /**
     * 
     * @type {ManagedTransactionData}
     * @memberof AptosTransaction
     */
    managedTransactionData?: ManagedTransactionData;
    /**
     * 
     * @type {Array<Signature>}
     * @memberof AptosTransaction
     */
    signatures: Array<Signature>;
    /**
     * 
     * @type {string}
     * @memberof AptosTransaction
     */
    note?: string;
    /**
     * 
     * @type {TransactionSpamState}
     * @memberof AptosTransaction
     */
    spamState?: TransactionSpamState;
    /**
     * 
     * @type {TransactionDirection}
     * @memberof AptosTransaction
     */
    direction: TransactionDirection;
    /**
     * 
     * @type {string}
     * @memberof AptosTransaction
     */
    type: AptosTransactionTypeEnum;
    /**
     * 
     * @type {AptosTransactionAptosTransactionTypeDetails}
     * @memberof AptosTransaction
     */
    aptosTransactionTypeDetails: AptosTransactionAptosTransactionTypeDetails;
    /**
     * 
     * @type {EnrichedAptosChain}
     * @memberof AptosTransaction
     */
    chain: EnrichedAptosChain;
    /**
     * 
     * @type {AptosTransactionState}
     * @memberof AptosTransaction
     */
    state: AptosTransactionState;
    /**
     * 
     * @type {Array<AptosTransactionStateChange>}
     * @memberof AptosTransaction
     */
    stateChanges: Array<AptosTransactionStateChange>;
    /**
     * 
     * @type {number}
     * @memberof AptosTransaction
     */
    version?: number;
    /**
     * 
     * @type {number}
     * @memberof AptosTransaction
     */
    nonce?: number;
    /**
     * 
     * @type {EnrichedAptosAddress}
     * @memberof AptosTransaction
     */
    sender: EnrichedAptosAddress;
    /**
     * 
     * @type {AptosTransactionPayload}
     * @memberof AptosTransaction
     */
    payload: AptosTransactionPayload;
    /**
     * 
     * @type {string}
     * @memberof AptosTransaction
     */
    hash?: string;
    /**
     * 
     * @type {AptosBlock}
     * @memberof AptosTransaction
     */
    block?: AptosBlock;
    /**
     * 
     * @type {AptosGasData}
     * @memberof AptosTransaction
     */
    gasSubmitted: AptosGasData;
    /**
     * 
     * @type {string}
     * @memberof AptosTransaction
     */
    serializedSignedTransaction?: string;
    /**
     * 
     * @type {AptosTransactionResult}
     * @memberof AptosTransaction
     */
    expectedResult?: AptosTransactionResult;
    /**
     * 
     * @type {SimulationStatusResult}
     * @memberof AptosTransaction
     */
    simulationStatusResult?: SimulationStatusResult;
    /**
     * 
     * @type {AptosTransactionResult}
     * @memberof AptosTransaction
     */
    minedResult?: AptosTransactionResult;
    /**
     * 
     * @type {string}
     * @memberof AptosTransaction
     */
    explorerUrl?: string;
}


/**
 * @export
 */
export const AptosTransactionTypeEnum = {
    aptosTransaction: 'aptos_transaction'
} as const;
export type AptosTransactionTypeEnum = typeof AptosTransactionTypeEnum[keyof typeof AptosTransactionTypeEnum];


/**
 * Check if a given object implements the AptosTransaction interface.
 */
export function instanceOfAptosTransaction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "modifiedAt" in value;
    isInstance = isInstance && "signatures" in value;
    isInstance = isInstance && "direction" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "aptosTransactionTypeDetails" in value;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "stateChanges" in value;
    isInstance = isInstance && "sender" in value;
    isInstance = isInstance && "payload" in value;
    isInstance = isInstance && "gasSubmitted" in value;

    return isInstance;
}

export function AptosTransactionFromJSON(json: any): AptosTransaction {
    return AptosTransactionFromJSONTyped(json, false);
}

export function AptosTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AptosTransaction {
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
        'aptosTransactionTypeDetails': AptosTransactionAptosTransactionTypeDetailsFromJSON(json['aptos_transaction_type_details']),
        'chain': EnrichedAptosChainFromJSON(json['chain']),
        'state': AptosTransactionStateFromJSON(json['state']),
        'stateChanges': ((json['state_changes'] as Array<any>).map(AptosTransactionStateChangeFromJSON)),
        'version': !exists(json, 'version') ? undefined : json['version'],
        'nonce': !exists(json, 'nonce') ? undefined : json['nonce'],
        'sender': EnrichedAptosAddressFromJSON(json['sender']),
        'payload': AptosTransactionPayloadFromJSON(json['payload']),
        'hash': !exists(json, 'hash') ? undefined : json['hash'],
        'block': !exists(json, 'block') ? undefined : AptosBlockFromJSON(json['block']),
        'gasSubmitted': AptosGasDataFromJSON(json['gas_submitted']),
        'serializedSignedTransaction': !exists(json, 'serialized_signed_transaction') ? undefined : json['serialized_signed_transaction'],
        'expectedResult': !exists(json, 'expected_result') ? undefined : AptosTransactionResultFromJSON(json['expected_result']),
        'simulationStatusResult': !exists(json, 'simulation_status_result') ? undefined : SimulationStatusResultFromJSON(json['simulation_status_result']),
        'minedResult': !exists(json, 'mined_result') ? undefined : AptosTransactionResultFromJSON(json['mined_result']),
        'explorerUrl': !exists(json, 'explorer_url') ? undefined : json['explorer_url'],
    };
}

export function AptosTransactionToJSON(value?: AptosTransaction | null): any {
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
        'aptos_transaction_type_details': AptosTransactionAptosTransactionTypeDetailsToJSON(value.aptosTransactionTypeDetails),
        'chain': EnrichedAptosChainToJSON(value.chain),
        'state': AptosTransactionStateToJSON(value.state),
        'state_changes': ((value.stateChanges as Array<any>).map(AptosTransactionStateChangeToJSON)),
        'version': value.version,
        'nonce': value.nonce,
        'sender': EnrichedAptosAddressToJSON(value.sender),
        'payload': AptosTransactionPayloadToJSON(value.payload),
        'hash': value.hash,
        'block': AptosBlockToJSON(value.block),
        'gas_submitted': AptosGasDataToJSON(value.gasSubmitted),
        'serialized_signed_transaction': value.serializedSignedTransaction,
        'expected_result': AptosTransactionResultToJSON(value.expectedResult),
        'simulation_status_result': SimulationStatusResultToJSON(value.simulationStatusResult),
        'mined_result': AptosTransactionResultToJSON(value.minedResult),
        'explorer_url': value.explorerUrl,
    };
}

