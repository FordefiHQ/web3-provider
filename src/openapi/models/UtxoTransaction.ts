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
import type { EnrichedUtxoChain } from './EnrichedUtxoChain';
import {
    EnrichedUtxoChainFromJSON,
    EnrichedUtxoChainFromJSONTyped,
    EnrichedUtxoChainToJSON,
} from './EnrichedUtxoChain';
import type { ManagedTransactionData } from './ManagedTransactionData';
import {
    ManagedTransactionDataFromJSON,
    ManagedTransactionDataFromJSONTyped,
    ManagedTransactionDataToJSON,
} from './ManagedTransactionData';
import type { PredictedUtxoTransactionUtxoTransactionTypeDetails } from './PredictedUtxoTransactionUtxoTransactionTypeDetails';
import {
    PredictedUtxoTransactionUtxoTransactionTypeDetailsFromJSON,
    PredictedUtxoTransactionUtxoTransactionTypeDetailsFromJSONTyped,
    PredictedUtxoTransactionUtxoTransactionTypeDetailsToJSON,
} from './PredictedUtxoTransactionUtxoTransactionTypeDetails';
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
import type { UtxoBlockData } from './UtxoBlockData';
import {
    UtxoBlockDataFromJSON,
    UtxoBlockDataFromJSONTyped,
    UtxoBlockDataToJSON,
} from './UtxoBlockData';
import type { UtxoTransactionResult } from './UtxoTransactionResult';
import {
    UtxoTransactionResultFromJSON,
    UtxoTransactionResultFromJSONTyped,
    UtxoTransactionResultToJSON,
} from './UtxoTransactionResult';
import type { UtxoTransactionState } from './UtxoTransactionState';
import {
    UtxoTransactionStateFromJSON,
    UtxoTransactionStateFromJSONTyped,
    UtxoTransactionStateToJSON,
} from './UtxoTransactionState';
import type { UtxoTransactionStateChange } from './UtxoTransactionStateChange';
import {
    UtxoTransactionStateChangeFromJSON,
    UtxoTransactionStateChangeFromJSONTyped,
    UtxoTransactionStateChangeToJSON,
} from './UtxoTransactionStateChange';

/**
 * 
 * @export
 * @interface UtxoTransaction
 */
export interface UtxoTransaction {
    /**
     * 
     * @type {string}
     * @memberof UtxoTransaction
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof UtxoTransaction
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof UtxoTransaction
     */
    modifiedAt: Date;
    /**
     * 
     * @type {ManagedTransactionData}
     * @memberof UtxoTransaction
     */
    managedTransactionData?: ManagedTransactionData;
    /**
     * 
     * @type {Array<Signature>}
     * @memberof UtxoTransaction
     */
    signatures: Array<Signature>;
    /**
     * 
     * @type {string}
     * @memberof UtxoTransaction
     */
    note?: string;
    /**
     * 
     * @type {TransactionSpamState}
     * @memberof UtxoTransaction
     */
    spamState?: TransactionSpamState;
    /**
     * 
     * @type {TransactionDirection}
     * @memberof UtxoTransaction
     */
    direction: TransactionDirection;
    /**
     * 
     * @type {string}
     * @memberof UtxoTransaction
     */
    type: UtxoTransactionTypeEnum;
    /**
     * 
     * @type {PredictedUtxoTransactionUtxoTransactionTypeDetails}
     * @memberof UtxoTransaction
     */
    utxoTransactionTypeDetails: PredictedUtxoTransactionUtxoTransactionTypeDetails;
    /**
     * 
     * @type {EnrichedUtxoChain}
     * @memberof UtxoTransaction
     */
    chain: EnrichedUtxoChain;
    /**
     * 
     * @type {string}
     * @memberof UtxoTransaction
     */
    hash?: string;
    /**
     * 
     * @type {string}
     * @memberof UtxoTransaction
     */
    explorerUrl?: string;
    /**
     * 
     * @type {UtxoTransactionState}
     * @memberof UtxoTransaction
     */
    state: UtxoTransactionState;
    /**
     * 
     * @type {Array<UtxoTransactionStateChange>}
     * @memberof UtxoTransaction
     */
    stateChanges: Array<UtxoTransactionStateChange>;
    /**
     * 
     * @type {UtxoBlockData}
     * @memberof UtxoTransaction
     */
    block?: UtxoBlockData;
    /**
     * 
     * @type {UtxoTransactionResult}
     * @memberof UtxoTransaction
     */
    expectedResult?: UtxoTransactionResult;
    /**
     * 
     * @type {UtxoTransactionResult}
     * @memberof UtxoTransaction
     */
    minedResult?: UtxoTransactionResult;
}


/**
 * @export
 */
export const UtxoTransactionTypeEnum = {
    utxoTransaction: 'utxo_transaction'
} as const;
export type UtxoTransactionTypeEnum = typeof UtxoTransactionTypeEnum[keyof typeof UtxoTransactionTypeEnum];


/**
 * Check if a given object implements the UtxoTransaction interface.
 */
export function instanceOfUtxoTransaction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "modifiedAt" in value;
    isInstance = isInstance && "signatures" in value;
    isInstance = isInstance && "direction" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "utxoTransactionTypeDetails" in value;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "stateChanges" in value;

    return isInstance;
}

export function UtxoTransactionFromJSON(json: any): UtxoTransaction {
    return UtxoTransactionFromJSONTyped(json, false);
}

export function UtxoTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): UtxoTransaction {
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
        'utxoTransactionTypeDetails': PredictedUtxoTransactionUtxoTransactionTypeDetailsFromJSON(json['utxo_transaction_type_details']),
        'chain': EnrichedUtxoChainFromJSON(json['chain']),
        'hash': !exists(json, 'hash') ? undefined : json['hash'],
        'explorerUrl': !exists(json, 'explorer_url') ? undefined : json['explorer_url'],
        'state': UtxoTransactionStateFromJSON(json['state']),
        'stateChanges': ((json['state_changes'] as Array<any>).map(UtxoTransactionStateChangeFromJSON)),
        'block': !exists(json, 'block') ? undefined : UtxoBlockDataFromJSON(json['block']),
        'expectedResult': !exists(json, 'expected_result') ? undefined : UtxoTransactionResultFromJSON(json['expected_result']),
        'minedResult': !exists(json, 'mined_result') ? undefined : UtxoTransactionResultFromJSON(json['mined_result']),
    };
}

export function UtxoTransactionToJSON(value?: UtxoTransaction | null): any {
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
        'utxo_transaction_type_details': PredictedUtxoTransactionUtxoTransactionTypeDetailsToJSON(value.utxoTransactionTypeDetails),
        'chain': EnrichedUtxoChainToJSON(value.chain),
        'hash': value.hash,
        'explorer_url': value.explorerUrl,
        'state': UtxoTransactionStateToJSON(value.state),
        'state_changes': ((value.stateChanges as Array<any>).map(UtxoTransactionStateChangeToJSON)),
        'block': UtxoBlockDataToJSON(value.block),
        'expected_result': UtxoTransactionResultToJSON(value.expectedResult),
        'mined_result': UtxoTransactionResultToJSON(value.minedResult),
    };
}

