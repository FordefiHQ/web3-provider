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
import type { CosmosSuggestedFees } from './CosmosSuggestedFees';
import {
    CosmosSuggestedFeesFromJSON,
    CosmosSuggestedFeesFromJSONTyped,
    CosmosSuggestedFeesToJSON,
} from './CosmosSuggestedFees';
import type { CosmosTransactionResult } from './CosmosTransactionResult';
import {
    CosmosTransactionResultFromJSON,
    CosmosTransactionResultFromJSONTyped,
    CosmosTransactionResultToJSON,
} from './CosmosTransactionResult';
import type { CosmosTransactionTypeDetails } from './CosmosTransactionTypeDetails';
import {
    CosmosTransactionTypeDetailsFromJSON,
    CosmosTransactionTypeDetailsFromJSONTyped,
    CosmosTransactionTypeDetailsToJSON,
} from './CosmosTransactionTypeDetails';
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
import type { PolicyMatch } from './PolicyMatch';
import {
    PolicyMatchFromJSON,
    PolicyMatchFromJSONTyped,
    PolicyMatchToJSON,
} from './PolicyMatch';
import type { TransactionRisk } from './TransactionRisk';
import {
    TransactionRiskFromJSON,
    TransactionRiskFromJSONTyped,
    TransactionRiskToJSON,
} from './TransactionRisk';

/**
 * 
 * @export
 * @interface PredictedCosmosTransaction
 */
export interface PredictedCosmosTransaction {
    /**
     * 
     * @type {PolicyMatch}
     * @memberof PredictedCosmosTransaction
     */
    policyMatch: PolicyMatch;
    /**
     * 
     * @type {ApprovalRequest}
     * @memberof PredictedCosmosTransaction
     */
    approvalRequest?: ApprovalRequest;
    /**
     * 
     * @type {Array<TransactionRisk>}
     * @memberof PredictedCosmosTransaction
     */
    risks: Array<TransactionRisk>;
    /**
     * 
     * @type {string}
     * @memberof PredictedCosmosTransaction
     */
    type: PredictedCosmosTransactionTypeEnum;
    /**
     * 
     * @type {CosmosTransactionResult}
     * @memberof PredictedCosmosTransaction
     */
    expectedResult: CosmosTransactionResult;
    /**
     * 
     * @type {EnrichedCosmosChain}
     * @memberof PredictedCosmosTransaction
     */
    chain: EnrichedCosmosChain;
    /**
     * 
     * @type {CosmosTransactionTypeDetails}
     * @memberof PredictedCosmosTransaction
     */
    cosmosTransactionTypeDetails: CosmosTransactionTypeDetails;
    /**
     * 
     * @type {string}
     * @memberof PredictedCosmosTransaction
     */
    memo?: string;
    /**
     * 
     * @type {EnrichedCosmosBechAddress}
     * @memberof PredictedCosmosTransaction
     */
    sender: EnrichedCosmosBechAddress;
    /**
     * 
     * @type {CosmosSuggestedFees}
     * @memberof PredictedCosmosTransaction
     */
    suggestedFees: CosmosSuggestedFees;
}


/**
 * @export
 */
export const PredictedCosmosTransactionTypeEnum = {
    cosmosTransaction: 'cosmos_transaction'
} as const;
export type PredictedCosmosTransactionTypeEnum = typeof PredictedCosmosTransactionTypeEnum[keyof typeof PredictedCosmosTransactionTypeEnum];


/**
 * Check if a given object implements the PredictedCosmosTransaction interface.
 */
export function instanceOfPredictedCosmosTransaction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "policyMatch" in value;
    isInstance = isInstance && "risks" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "expectedResult" in value;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "cosmosTransactionTypeDetails" in value;
    isInstance = isInstance && "sender" in value;
    isInstance = isInstance && "suggestedFees" in value;

    return isInstance;
}

export function PredictedCosmosTransactionFromJSON(json: any): PredictedCosmosTransaction {
    return PredictedCosmosTransactionFromJSONTyped(json, false);
}

export function PredictedCosmosTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PredictedCosmosTransaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'policyMatch': PolicyMatchFromJSON(json['policy_match']),
        'approvalRequest': !exists(json, 'approval_request') ? undefined : ApprovalRequestFromJSON(json['approval_request']),
        'risks': ((json['risks'] as Array<any>).map(TransactionRiskFromJSON)),
        'type': json['type'],
        'expectedResult': CosmosTransactionResultFromJSON(json['expected_result']),
        'chain': EnrichedCosmosChainFromJSON(json['chain']),
        'cosmosTransactionTypeDetails': CosmosTransactionTypeDetailsFromJSON(json['cosmos_transaction_type_details']),
        'memo': !exists(json, 'memo') ? undefined : json['memo'],
        'sender': EnrichedCosmosBechAddressFromJSON(json['sender']),
        'suggestedFees': CosmosSuggestedFeesFromJSON(json['suggested_fees']),
    };
}

export function PredictedCosmosTransactionToJSON(value?: PredictedCosmosTransaction | null): any {
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
        'expected_result': CosmosTransactionResultToJSON(value.expectedResult),
        'chain': EnrichedCosmosChainToJSON(value.chain),
        'cosmos_transaction_type_details': CosmosTransactionTypeDetailsToJSON(value.cosmosTransactionTypeDetails),
        'memo': value.memo,
        'sender': EnrichedCosmosBechAddressToJSON(value.sender),
        'suggested_fees': CosmosSuggestedFeesToJSON(value.suggestedFees),
    };
}

