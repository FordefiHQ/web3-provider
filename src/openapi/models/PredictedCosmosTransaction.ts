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

import { mapValues } from '../runtime';
import type { EnrichedCosmosBechAddress } from './EnrichedCosmosBechAddress';
import {
    EnrichedCosmosBechAddressFromJSON,
    EnrichedCosmosBechAddressFromJSONTyped,
    EnrichedCosmosBechAddressToJSON,
    EnrichedCosmosBechAddressToJSONTyped,
} from './EnrichedCosmosBechAddress';
import type { EnrichedCosmosChain } from './EnrichedCosmosChain';
import {
    EnrichedCosmosChainFromJSON,
    EnrichedCosmosChainFromJSONTyped,
    EnrichedCosmosChainToJSON,
    EnrichedCosmosChainToJSONTyped,
} from './EnrichedCosmosChain';
import type { AmlPolicyMatchOutgoing } from './AmlPolicyMatchOutgoing';
import {
    AmlPolicyMatchOutgoingFromJSON,
    AmlPolicyMatchOutgoingFromJSONTyped,
    AmlPolicyMatchOutgoingToJSON,
    AmlPolicyMatchOutgoingToJSONTyped,
} from './AmlPolicyMatchOutgoing';
import type { TransactionRisk } from './TransactionRisk';
import {
    TransactionRiskFromJSON,
    TransactionRiskFromJSONTyped,
    TransactionRiskToJSON,
    TransactionRiskToJSONTyped,
} from './TransactionRisk';
import type { ApprovalRequest } from './ApprovalRequest';
import {
    ApprovalRequestFromJSON,
    ApprovalRequestFromJSONTyped,
    ApprovalRequestToJSON,
    ApprovalRequestToJSONTyped,
} from './ApprovalRequest';
import type { CosmosTransactionResult } from './CosmosTransactionResult';
import {
    CosmosTransactionResultFromJSON,
    CosmosTransactionResultFromJSONTyped,
    CosmosTransactionResultToJSON,
    CosmosTransactionResultToJSONTyped,
} from './CosmosTransactionResult';
import type { PolicyMatch } from './PolicyMatch';
import {
    PolicyMatchFromJSON,
    PolicyMatchFromJSONTyped,
    PolicyMatchToJSON,
    PolicyMatchToJSONTyped,
} from './PolicyMatch';
import type { AmlResults } from './AmlResults';
import {
    AmlResultsFromJSON,
    AmlResultsFromJSONTyped,
    AmlResultsToJSON,
    AmlResultsToJSONTyped,
} from './AmlResults';
import type { CosmosTransactionTypeDetails } from './CosmosTransactionTypeDetails';
import {
    CosmosTransactionTypeDetailsFromJSON,
    CosmosTransactionTypeDetailsFromJSONTyped,
    CosmosTransactionTypeDetailsToJSON,
    CosmosTransactionTypeDetailsToJSONTyped,
} from './CosmosTransactionTypeDetails';
import type { CosmosSuggestedFees } from './CosmosSuggestedFees';
import {
    CosmosSuggestedFeesFromJSON,
    CosmosSuggestedFeesFromJSONTyped,
    CosmosSuggestedFeesToJSON,
    CosmosSuggestedFeesToJSONTyped,
} from './CosmosSuggestedFees';

/**
 * 
 * @export
 * @interface PredictedCosmosTransaction
 */
export interface PredictedCosmosTransaction {
    /**
     * 
     * @type {AmlPolicyMatchOutgoing}
     * @memberof PredictedCosmosTransaction
     */
    amlPolicyMatch?: AmlPolicyMatchOutgoing;
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
    note?: string;
    /**
     * 
     * @type {AmlResults}
     * @memberof PredictedCosmosTransaction
     */
    amlResults?: AmlResults;
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
export function instanceOfPredictedCosmosTransaction(value: object): value is PredictedCosmosTransaction {
    if (!('policyMatch' in value) || value['policyMatch'] === undefined) return false;
    if (!('risks' in value) || value['risks'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('expectedResult' in value) || value['expectedResult'] === undefined) return false;
    if (!('chain' in value) || value['chain'] === undefined) return false;
    if (!('cosmosTransactionTypeDetails' in value) || value['cosmosTransactionTypeDetails'] === undefined) return false;
    if (!('sender' in value) || value['sender'] === undefined) return false;
    if (!('suggestedFees' in value) || value['suggestedFees'] === undefined) return false;
    return true;
}

export function PredictedCosmosTransactionFromJSON(json: any): PredictedCosmosTransaction {
    return PredictedCosmosTransactionFromJSONTyped(json, false);
}

export function PredictedCosmosTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PredictedCosmosTransaction {
    if (json == null) {
        return json;
    }
    return {
        
        'amlPolicyMatch': json['aml_policy_match'] == null ? undefined : AmlPolicyMatchOutgoingFromJSON(json['aml_policy_match']),
        'policyMatch': PolicyMatchFromJSON(json['policy_match']),
        'approvalRequest': json['approval_request'] == null ? undefined : ApprovalRequestFromJSON(json['approval_request']),
        'risks': ((json['risks'] as Array<any>).map(TransactionRiskFromJSON)),
        'note': json['note'] == null ? undefined : json['note'],
        'amlResults': json['aml_results'] == null ? undefined : AmlResultsFromJSON(json['aml_results']),
        'type': json['type'],
        'expectedResult': CosmosTransactionResultFromJSON(json['expected_result']),
        'chain': EnrichedCosmosChainFromJSON(json['chain']),
        'cosmosTransactionTypeDetails': CosmosTransactionTypeDetailsFromJSON(json['cosmos_transaction_type_details']),
        'memo': json['memo'] == null ? undefined : json['memo'],
        'sender': EnrichedCosmosBechAddressFromJSON(json['sender']),
        'suggestedFees': CosmosSuggestedFeesFromJSON(json['suggested_fees']),
    };
}

export function PredictedCosmosTransactionToJSON(json: any): PredictedCosmosTransaction {
    return PredictedCosmosTransactionToJSONTyped(json, false);
}

export function PredictedCosmosTransactionToJSONTyped(value?: PredictedCosmosTransaction | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'aml_policy_match': AmlPolicyMatchOutgoingToJSON(value['amlPolicyMatch']),
        'policy_match': PolicyMatchToJSON(value['policyMatch']),
        'approval_request': ApprovalRequestToJSON(value['approvalRequest']),
        'risks': ((value['risks'] as Array<any>).map(TransactionRiskToJSON)),
        'note': value['note'],
        'aml_results': AmlResultsToJSON(value['amlResults']),
        'type': value['type'],
        'expected_result': CosmosTransactionResultToJSON(value['expectedResult']),
        'chain': EnrichedCosmosChainToJSON(value['chain']),
        'cosmos_transaction_type_details': CosmosTransactionTypeDetailsToJSON(value['cosmosTransactionTypeDetails']),
        'memo': value['memo'],
        'sender': EnrichedCosmosBechAddressToJSON(value['sender']),
        'suggested_fees': CosmosSuggestedFeesToJSON(value['suggestedFees']),
    };
}

