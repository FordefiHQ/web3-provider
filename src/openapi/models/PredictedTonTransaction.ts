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
import type { ApprovalRequest } from './ApprovalRequest';
import {
    ApprovalRequestFromJSON,
    ApprovalRequestFromJSONTyped,
    ApprovalRequestToJSON,
} from './ApprovalRequest';
import type { EnrichedTonAddress } from './EnrichedTonAddress';
import {
    EnrichedTonAddressFromJSON,
    EnrichedTonAddressFromJSONTyped,
    EnrichedTonAddressToJSON,
} from './EnrichedTonAddress';
import type { EnrichedTonChain } from './EnrichedTonChain';
import {
    EnrichedTonChainFromJSON,
    EnrichedTonChainFromJSONTyped,
    EnrichedTonChainToJSON,
} from './EnrichedTonChain';
import type { PolicyMatch } from './PolicyMatch';
import {
    PolicyMatchFromJSON,
    PolicyMatchFromJSONTyped,
    PolicyMatchToJSON,
} from './PolicyMatch';
import type { PredictedTonTransactionTonTransactionTypeDetails } from './PredictedTonTransactionTonTransactionTypeDetails';
import {
    PredictedTonTransactionTonTransactionTypeDetailsFromJSON,
    PredictedTonTransactionTonTransactionTypeDetailsFromJSONTyped,
    PredictedTonTransactionTonTransactionTypeDetailsToJSON,
} from './PredictedTonTransactionTonTransactionTypeDetails';
import type { SimulationStatusResult } from './SimulationStatusResult';
import {
    SimulationStatusResultFromJSON,
    SimulationStatusResultFromJSONTyped,
    SimulationStatusResultToJSON,
} from './SimulationStatusResult';
import type { TonSuggestedFees } from './TonSuggestedFees';
import {
    TonSuggestedFeesFromJSON,
    TonSuggestedFeesFromJSONTyped,
    TonSuggestedFeesToJSON,
} from './TonSuggestedFees';
import type { TonTransactionPayload } from './TonTransactionPayload';
import {
    TonTransactionPayloadFromJSON,
    TonTransactionPayloadFromJSONTyped,
    TonTransactionPayloadToJSON,
} from './TonTransactionPayload';
import type { TonTransactionResult } from './TonTransactionResult';
import {
    TonTransactionResultFromJSON,
    TonTransactionResultFromJSONTyped,
    TonTransactionResultToJSON,
} from './TonTransactionResult';
import type { TransactionRisk } from './TransactionRisk';
import {
    TransactionRiskFromJSON,
    TransactionRiskFromJSONTyped,
    TransactionRiskToJSON,
} from './TransactionRisk';

/**
 * 
 * @export
 * @interface PredictedTonTransaction
 */
export interface PredictedTonTransaction {
    /**
     * 
     * @type {PolicyMatch}
     * @memberof PredictedTonTransaction
     */
    policyMatch: PolicyMatch;
    /**
     * 
     * @type {ApprovalRequest}
     * @memberof PredictedTonTransaction
     */
    approvalRequest?: ApprovalRequest;
    /**
     * 
     * @type {Array<TransactionRisk>}
     * @memberof PredictedTonTransaction
     */
    risks: Array<TransactionRisk>;
    /**
     * 
     * @type {string}
     * @memberof PredictedTonTransaction
     */
    type: PredictedTonTransactionTypeEnum;
    /**
     * 
     * @type {TonTransactionResult}
     * @memberof PredictedTonTransaction
     */
    expectedResult: TonTransactionResult;
    /**
     * 
     * @type {EnrichedTonChain}
     * @memberof PredictedTonTransaction
     */
    chain: EnrichedTonChain;
    /**
     * 
     * @type {SimulationStatusResult}
     * @memberof PredictedTonTransaction
     */
    simulationStatusResult: SimulationStatusResult;
    /**
     * 
     * @type {TonTransactionPayload}
     * @memberof PredictedTonTransaction
     */
    payload: TonTransactionPayload;
    /**
     * 
     * @type {PredictedTonTransactionTonTransactionTypeDetails}
     * @memberof PredictedTonTransaction
     */
    tonTransactionTypeDetails: PredictedTonTransactionTonTransactionTypeDetails;
    /**
     * 
     * @type {TonSuggestedFees}
     * @memberof PredictedTonTransaction
     */
    suggestedFees: TonSuggestedFees;
    /**
     * 
     * @type {EnrichedTonAddress}
     * @memberof PredictedTonTransaction
     */
    sender: EnrichedTonAddress;
}


/**
 * @export
 */
export const PredictedTonTransactionTypeEnum = {
    tonTransaction: 'ton_transaction'
} as const;
export type PredictedTonTransactionTypeEnum = typeof PredictedTonTransactionTypeEnum[keyof typeof PredictedTonTransactionTypeEnum];


/**
 * Check if a given object implements the PredictedTonTransaction interface.
 */
export function instanceOfPredictedTonTransaction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "policyMatch" in value;
    isInstance = isInstance && "risks" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "expectedResult" in value;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "simulationStatusResult" in value;
    isInstance = isInstance && "payload" in value;
    isInstance = isInstance && "tonTransactionTypeDetails" in value;
    isInstance = isInstance && "suggestedFees" in value;
    isInstance = isInstance && "sender" in value;

    return isInstance;
}

export function PredictedTonTransactionFromJSON(json: any): PredictedTonTransaction {
    return PredictedTonTransactionFromJSONTyped(json, false);
}

export function PredictedTonTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PredictedTonTransaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'policyMatch': PolicyMatchFromJSON(json['policy_match']),
        'approvalRequest': !exists(json, 'approval_request') ? undefined : ApprovalRequestFromJSON(json['approval_request']),
        'risks': ((json['risks'] as Array<any>).map(TransactionRiskFromJSON)),
        'type': json['type'],
        'expectedResult': TonTransactionResultFromJSON(json['expected_result']),
        'chain': EnrichedTonChainFromJSON(json['chain']),
        'simulationStatusResult': SimulationStatusResultFromJSON(json['simulation_status_result']),
        'payload': TonTransactionPayloadFromJSON(json['payload']),
        'tonTransactionTypeDetails': PredictedTonTransactionTonTransactionTypeDetailsFromJSON(json['ton_transaction_type_details']),
        'suggestedFees': TonSuggestedFeesFromJSON(json['suggested_fees']),
        'sender': EnrichedTonAddressFromJSON(json['sender']),
    };
}

export function PredictedTonTransactionToJSON(value?: PredictedTonTransaction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'policy_match': PolicyMatchToJSON(value.policyMatch),
        'approval_request': ApprovalRequestToJSON(value.approvalRequest),
        'risks': ((value.risks as Array<any>).map(TransactionRiskToJSON)),
        'type': value.type,
        'expected_result': TonTransactionResultToJSON(value.expectedResult),
        'chain': EnrichedTonChainToJSON(value.chain),
        'simulation_status_result': SimulationStatusResultToJSON(value.simulationStatusResult),
        'payload': TonTransactionPayloadToJSON(value.payload),
        'ton_transaction_type_details': PredictedTonTransactionTonTransactionTypeDetailsToJSON(value.tonTransactionTypeDetails),
        'suggested_fees': TonSuggestedFeesToJSON(value.suggestedFees),
        'sender': EnrichedTonAddressToJSON(value.sender),
    };
}

