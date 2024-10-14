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
import type { EnrichedSuiAddress } from './EnrichedSuiAddress';
import {
    EnrichedSuiAddressFromJSON,
    EnrichedSuiAddressFromJSONTyped,
    EnrichedSuiAddressToJSON,
} from './EnrichedSuiAddress';
import type { EnrichedSuiChain } from './EnrichedSuiChain';
import {
    EnrichedSuiChainFromJSON,
    EnrichedSuiChainFromJSONTyped,
    EnrichedSuiChainToJSON,
} from './EnrichedSuiChain';
import type { ManagedTransactionData } from './ManagedTransactionData';
import {
    ManagedTransactionDataFromJSON,
    ManagedTransactionDataFromJSONTyped,
    ManagedTransactionDataToJSON,
} from './ManagedTransactionData';
import type { PredictedSuiTransactionSuiTransactionTypeDetails } from './PredictedSuiTransactionSuiTransactionTypeDetails';
import {
    PredictedSuiTransactionSuiTransactionTypeDetailsFromJSON,
    PredictedSuiTransactionSuiTransactionTypeDetailsFromJSONTyped,
    PredictedSuiTransactionSuiTransactionTypeDetailsToJSON,
} from './PredictedSuiTransactionSuiTransactionTypeDetails';
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
import type { SuiCheckpointData } from './SuiCheckpointData';
import {
    SuiCheckpointDataFromJSON,
    SuiCheckpointDataFromJSONTyped,
    SuiCheckpointDataToJSON,
} from './SuiCheckpointData';
import type { SuiCommand } from './SuiCommand';
import {
    SuiCommandFromJSON,
    SuiCommandFromJSONTyped,
    SuiCommandToJSON,
} from './SuiCommand';
import type { SuiGasConfig } from './SuiGasConfig';
import {
    SuiGasConfigFromJSON,
    SuiGasConfigFromJSONTyped,
    SuiGasConfigToJSON,
} from './SuiGasConfig';
import type { SuiInput } from './SuiInput';
import {
    SuiInputFromJSON,
    SuiInputFromJSONTyped,
    SuiInputToJSON,
} from './SuiInput';
import type { SuiMessageVersion } from './SuiMessageVersion';
import {
    SuiMessageVersionFromJSON,
    SuiMessageVersionFromJSONTyped,
    SuiMessageVersionToJSON,
} from './SuiMessageVersion';
import type { SuiTransactionResult } from './SuiTransactionResult';
import {
    SuiTransactionResultFromJSON,
    SuiTransactionResultFromJSONTyped,
    SuiTransactionResultToJSON,
} from './SuiTransactionResult';
import type { SuiTransactionState } from './SuiTransactionState';
import {
    SuiTransactionStateFromJSON,
    SuiTransactionStateFromJSONTyped,
    SuiTransactionStateToJSON,
} from './SuiTransactionState';
import type { SuiTransactionStateChange } from './SuiTransactionStateChange';
import {
    SuiTransactionStateChangeFromJSON,
    SuiTransactionStateChangeFromJSONTyped,
    SuiTransactionStateChangeToJSON,
} from './SuiTransactionStateChange';
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
 * @interface SuiTransaction
 */
export interface SuiTransaction {
    /**
     * 
     * @type {string}
     * @memberof SuiTransaction
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof SuiTransaction
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof SuiTransaction
     */
    modifiedAt: Date;
    /**
     * 
     * @type {ManagedTransactionData}
     * @memberof SuiTransaction
     */
    managedTransactionData?: ManagedTransactionData;
    /**
     * 
     * @type {Array<Signature>}
     * @memberof SuiTransaction
     */
    signatures: Array<Signature>;
    /**
     * 
     * @type {string}
     * @memberof SuiTransaction
     */
    note?: string;
    /**
     * 
     * @type {TransactionSpamState}
     * @memberof SuiTransaction
     */
    spamState?: TransactionSpamState;
    /**
     * 
     * @type {TransactionDirection}
     * @memberof SuiTransaction
     */
    direction: TransactionDirection;
    /**
     * 
     * @type {string}
     * @memberof SuiTransaction
     */
    type: SuiTransactionTypeEnum;
    /**
     * 
     * @type {PredictedSuiTransactionSuiTransactionTypeDetails}
     * @memberof SuiTransaction
     */
    suiTransactionTypeDetails: PredictedSuiTransactionSuiTransactionTypeDetails;
    /**
     * 
     * @type {EnrichedSuiChain}
     * @memberof SuiTransaction
     */
    chain: EnrichedSuiChain;
    /**
     * 
     * @type {SuiTransactionState}
     * @memberof SuiTransaction
     */
    state: SuiTransactionState;
    /**
     * 
     * @type {Array<SuiTransactionStateChange>}
     * @memberof SuiTransaction
     */
    stateChanges: Array<SuiTransactionStateChange>;
    /**
     * 
     * @type {SuiMessageVersion}
     * @memberof SuiTransaction
     */
    version: SuiMessageVersion;
    /**
     * 
     * @type {Array<SuiInput>}
     * @memberof SuiTransaction
     */
    inputs: Array<SuiInput>;
    /**
     * 
     * @type {Array<SuiCommand>}
     * @memberof SuiTransaction
     */
    commands: Array<SuiCommand>;
    /**
     * 
     * @type {EnrichedSuiAddress}
     * @memberof SuiTransaction
     */
    sender: EnrichedSuiAddress;
    /**
     * 
     * @type {EnrichedSuiAddress}
     * @memberof SuiTransaction
     */
    recipient?: EnrichedSuiAddress;
    /**
     * 
     * @type {string}
     * @memberof SuiTransaction
     */
    digest?: string;
    /**
     * 
     * @type {string}
     * @memberof SuiTransaction
     */
    txBytes?: string;
    /**
     * 
     * @type {SuiCheckpointData}
     * @memberof SuiTransaction
     */
    checkpoint?: SuiCheckpointData;
    /**
     * 
     * @type {number}
     * @memberof SuiTransaction
     */
    epoch?: number;
    /**
     * 
     * @type {SuiGasConfig}
     * @memberof SuiTransaction
     */
    gasSubmitted: SuiGasConfig;
    /**
     * 
     * @type {SuiTransactionResult}
     * @memberof SuiTransaction
     */
    expectedResult?: SuiTransactionResult;
    /**
     * 
     * @type {SimulationStatusResult}
     * @memberof SuiTransaction
     */
    simulationStatusResult: SimulationStatusResult;
    /**
     * 
     * @type {SuiTransactionResult}
     * @memberof SuiTransaction
     */
    minedResult?: SuiTransactionResult;
    /**
     * 
     * @type {string}
     * @memberof SuiTransaction
     */
    transactionBlockData?: string;
    /**
     * 
     * @type {string}
     * @memberof SuiTransaction
     */
    explorerUrl?: string;
}


/**
 * @export
 */
export const SuiTransactionTypeEnum = {
    suiTransaction: 'sui_transaction'
} as const;
export type SuiTransactionTypeEnum = typeof SuiTransactionTypeEnum[keyof typeof SuiTransactionTypeEnum];


/**
 * Check if a given object implements the SuiTransaction interface.
 */
export function instanceOfSuiTransaction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "modifiedAt" in value;
    isInstance = isInstance && "signatures" in value;
    isInstance = isInstance && "direction" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "suiTransactionTypeDetails" in value;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "stateChanges" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "inputs" in value;
    isInstance = isInstance && "commands" in value;
    isInstance = isInstance && "sender" in value;
    isInstance = isInstance && "gasSubmitted" in value;
    isInstance = isInstance && "simulationStatusResult" in value;

    return isInstance;
}

export function SuiTransactionFromJSON(json: any): SuiTransaction {
    return SuiTransactionFromJSONTyped(json, false);
}

export function SuiTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiTransaction {
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
        'suiTransactionTypeDetails': PredictedSuiTransactionSuiTransactionTypeDetailsFromJSON(json['sui_transaction_type_details']),
        'chain': EnrichedSuiChainFromJSON(json['chain']),
        'state': SuiTransactionStateFromJSON(json['state']),
        'stateChanges': ((json['state_changes'] as Array<any>).map(SuiTransactionStateChangeFromJSON)),
        'version': SuiMessageVersionFromJSON(json['version']),
        'inputs': ((json['inputs'] as Array<any>).map(SuiInputFromJSON)),
        'commands': ((json['commands'] as Array<any>).map(SuiCommandFromJSON)),
        'sender': EnrichedSuiAddressFromJSON(json['sender']),
        'recipient': !exists(json, 'recipient') ? undefined : EnrichedSuiAddressFromJSON(json['recipient']),
        'digest': !exists(json, 'digest') ? undefined : json['digest'],
        'txBytes': !exists(json, 'tx_bytes') ? undefined : json['tx_bytes'],
        'checkpoint': !exists(json, 'checkpoint') ? undefined : SuiCheckpointDataFromJSON(json['checkpoint']),
        'epoch': !exists(json, 'epoch') ? undefined : json['epoch'],
        'gasSubmitted': SuiGasConfigFromJSON(json['gas_submitted']),
        'expectedResult': !exists(json, 'expected_result') ? undefined : SuiTransactionResultFromJSON(json['expected_result']),
        'simulationStatusResult': SimulationStatusResultFromJSON(json['simulation_status_result']),
        'minedResult': !exists(json, 'mined_result') ? undefined : SuiTransactionResultFromJSON(json['mined_result']),
        'transactionBlockData': !exists(json, 'transaction_block_data') ? undefined : json['transaction_block_data'],
        'explorerUrl': !exists(json, 'explorer_url') ? undefined : json['explorer_url'],
    };
}

export function SuiTransactionToJSON(value?: SuiTransaction | null): any {
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
        'sui_transaction_type_details': PredictedSuiTransactionSuiTransactionTypeDetailsToJSON(value.suiTransactionTypeDetails),
        'chain': EnrichedSuiChainToJSON(value.chain),
        'state': SuiTransactionStateToJSON(value.state),
        'state_changes': ((value.stateChanges as Array<any>).map(SuiTransactionStateChangeToJSON)),
        'version': SuiMessageVersionToJSON(value.version),
        'inputs': ((value.inputs as Array<any>).map(SuiInputToJSON)),
        'commands': ((value.commands as Array<any>).map(SuiCommandToJSON)),
        'sender': EnrichedSuiAddressToJSON(value.sender),
        'recipient': EnrichedSuiAddressToJSON(value.recipient),
        'digest': value.digest,
        'tx_bytes': value.txBytes,
        'checkpoint': SuiCheckpointDataToJSON(value.checkpoint),
        'epoch': value.epoch,
        'gas_submitted': SuiGasConfigToJSON(value.gasSubmitted),
        'expected_result': SuiTransactionResultToJSON(value.expectedResult),
        'simulation_status_result': SimulationStatusResultToJSON(value.simulationStatusResult),
        'mined_result': SuiTransactionResultToJSON(value.minedResult),
        'transaction_block_data': value.transactionBlockData,
        'explorer_url': value.explorerUrl,
    };
}

