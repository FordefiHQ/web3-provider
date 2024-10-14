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
import type { PolicyMatch } from './PolicyMatch';
import {
    PolicyMatchFromJSON,
    PolicyMatchFromJSONTyped,
    PolicyMatchToJSON,
} from './PolicyMatch';
import type { PredictedSuiTransactionSuiTransactionTypeDetails } from './PredictedSuiTransactionSuiTransactionTypeDetails';
import {
    PredictedSuiTransactionSuiTransactionTypeDetailsFromJSON,
    PredictedSuiTransactionSuiTransactionTypeDetailsFromJSONTyped,
    PredictedSuiTransactionSuiTransactionTypeDetailsToJSON,
} from './PredictedSuiTransactionSuiTransactionTypeDetails';
import type { SimulationStatusResult } from './SimulationStatusResult';
import {
    SimulationStatusResultFromJSON,
    SimulationStatusResultFromJSONTyped,
    SimulationStatusResultToJSON,
} from './SimulationStatusResult';
import type { SuiSuggestedFees } from './SuiSuggestedFees';
import {
    SuiSuggestedFeesFromJSON,
    SuiSuggestedFeesFromJSONTyped,
    SuiSuggestedFeesToJSON,
} from './SuiSuggestedFees';
import type { SuiTransactionResult } from './SuiTransactionResult';
import {
    SuiTransactionResultFromJSON,
    SuiTransactionResultFromJSONTyped,
    SuiTransactionResultToJSON,
} from './SuiTransactionResult';
import type { TransactionRisk } from './TransactionRisk';
import {
    TransactionRiskFromJSON,
    TransactionRiskFromJSONTyped,
    TransactionRiskToJSON,
} from './TransactionRisk';

/**
 * 
 * @export
 * @interface PredictedSuiTransaction
 */
export interface PredictedSuiTransaction {
    /**
     * 
     * @type {PolicyMatch}
     * @memberof PredictedSuiTransaction
     */
    policyMatch: PolicyMatch;
    /**
     * 
     * @type {ApprovalRequest}
     * @memberof PredictedSuiTransaction
     */
    approvalRequest?: ApprovalRequest;
    /**
     * 
     * @type {Array<TransactionRisk>}
     * @memberof PredictedSuiTransaction
     */
    risks: Array<TransactionRisk>;
    /**
     * 
     * @type {string}
     * @memberof PredictedSuiTransaction
     */
    type: PredictedSuiTransactionTypeEnum;
    /**
     * 
     * @type {SuiTransactionResult}
     * @memberof PredictedSuiTransaction
     */
    expectedResult: SuiTransactionResult;
    /**
     * 
     * @type {EnrichedSuiChain}
     * @memberof PredictedSuiTransaction
     */
    chain: EnrichedSuiChain;
    /**
     * 
     * @type {SimulationStatusResult}
     * @memberof PredictedSuiTransaction
     */
    simulationStatusResult: SimulationStatusResult;
    /**
     * 
     * @type {PredictedSuiTransactionSuiTransactionTypeDetails}
     * @memberof PredictedSuiTransaction
     */
    suiTransactionTypeDetails: PredictedSuiTransactionSuiTransactionTypeDetails;
    /**
     * 
     * @type {EnrichedSuiAddress}
     * @memberof PredictedSuiTransaction
     */
    sender: EnrichedSuiAddress;
    /**
     * 
     * @type {SuiSuggestedFees}
     * @memberof PredictedSuiTransaction
     */
    suggestedFees: SuiSuggestedFees;
}


/**
 * @export
 */
export const PredictedSuiTransactionTypeEnum = {
    suiTransaction: 'sui_transaction'
} as const;
export type PredictedSuiTransactionTypeEnum = typeof PredictedSuiTransactionTypeEnum[keyof typeof PredictedSuiTransactionTypeEnum];


/**
 * Check if a given object implements the PredictedSuiTransaction interface.
 */
export function instanceOfPredictedSuiTransaction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "policyMatch" in value;
    isInstance = isInstance && "risks" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "expectedResult" in value;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "simulationStatusResult" in value;
    isInstance = isInstance && "suiTransactionTypeDetails" in value;
    isInstance = isInstance && "sender" in value;
    isInstance = isInstance && "suggestedFees" in value;

    return isInstance;
}

export function PredictedSuiTransactionFromJSON(json: any): PredictedSuiTransaction {
    return PredictedSuiTransactionFromJSONTyped(json, false);
}

export function PredictedSuiTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PredictedSuiTransaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'policyMatch': PolicyMatchFromJSON(json['policy_match']),
        'approvalRequest': !exists(json, 'approval_request') ? undefined : ApprovalRequestFromJSON(json['approval_request']),
        'risks': ((json['risks'] as Array<any>).map(TransactionRiskFromJSON)),
        'type': json['type'],
        'expectedResult': SuiTransactionResultFromJSON(json['expected_result']),
        'chain': EnrichedSuiChainFromJSON(json['chain']),
        'simulationStatusResult': SimulationStatusResultFromJSON(json['simulation_status_result']),
        'suiTransactionTypeDetails': PredictedSuiTransactionSuiTransactionTypeDetailsFromJSON(json['sui_transaction_type_details']),
        'sender': EnrichedSuiAddressFromJSON(json['sender']),
        'suggestedFees': SuiSuggestedFeesFromJSON(json['suggested_fees']),
    };
}

export function PredictedSuiTransactionToJSON(value?: PredictedSuiTransaction | null): any {
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
        'expected_result': SuiTransactionResultToJSON(value.expectedResult),
        'chain': EnrichedSuiChainToJSON(value.chain),
        'simulation_status_result': SimulationStatusResultToJSON(value.simulationStatusResult),
        'sui_transaction_type_details': PredictedSuiTransactionSuiTransactionTypeDetailsToJSON(value.suiTransactionTypeDetails),
        'sender': EnrichedSuiAddressToJSON(value.sender),
        'suggested_fees': SuiSuggestedFeesToJSON(value.suggestedFees),
    };
}

