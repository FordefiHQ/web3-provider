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
import type { EnrichedUtxoAddress } from './EnrichedUtxoAddress';
import {
    EnrichedUtxoAddressFromJSON,
    EnrichedUtxoAddressFromJSONTyped,
    EnrichedUtxoAddressToJSON,
    EnrichedUtxoAddressToJSONTyped,
} from './EnrichedUtxoAddress';
import type { UtxoMessageType } from './UtxoMessageType';
import {
    UtxoMessageTypeFromJSON,
    UtxoMessageTypeFromJSONTyped,
    UtxoMessageTypeToJSON,
    UtxoMessageTypeToJSONTyped,
} from './UtxoMessageType';
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
import type { EnrichedUtxoChain } from './EnrichedUtxoChain';
import {
    EnrichedUtxoChainFromJSON,
    EnrichedUtxoChainFromJSONTyped,
    EnrichedUtxoChainToJSON,
    EnrichedUtxoChainToJSONTyped,
} from './EnrichedUtxoChain';
import type { PolicyMatch } from './PolicyMatch';
import {
    PolicyMatchFromJSON,
    PolicyMatchFromJSONTyped,
    PolicyMatchToJSON,
    PolicyMatchToJSONTyped,
} from './PolicyMatch';

/**
 * 
 * @export
 * @interface PredictedUtxoMessage
 */
export interface PredictedUtxoMessage {
    /**
     * 
     * @type {AmlPolicyMatchOutgoing}
     * @memberof PredictedUtxoMessage
     */
    amlPolicyMatch?: AmlPolicyMatchOutgoing;
    /**
     * 
     * @type {PolicyMatch}
     * @memberof PredictedUtxoMessage
     */
    policyMatch: PolicyMatch;
    /**
     * 
     * @type {ApprovalRequest}
     * @memberof PredictedUtxoMessage
     */
    approvalRequest?: ApprovalRequest;
    /**
     * 
     * @type {Array<TransactionRisk>}
     * @memberof PredictedUtxoMessage
     */
    risks: Array<TransactionRisk>;
    /**
     * 
     * @type {string}
     * @memberof PredictedUtxoMessage
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof PredictedUtxoMessage
     */
    type: PredictedUtxoMessageTypeEnum;
    /**
     * 
     * @type {EnrichedUtxoChain}
     * @memberof PredictedUtxoMessage
     */
    chain: EnrichedUtxoChain;
    /**
     * 
     * @type {EnrichedUtxoAddress}
     * @memberof PredictedUtxoMessage
     */
    sender: EnrichedUtxoAddress;
    /**
     * 
     * @type {UtxoMessageType}
     * @memberof PredictedUtxoMessage
     */
    utxoMessageType: UtxoMessageType;
    /**
     * 
     * @type {string}
     * @memberof PredictedUtxoMessage
     */
    messageToDisplay: string;
}


/**
 * @export
 */
export const PredictedUtxoMessageTypeEnum = {
    utxoMessage: 'utxo_message'
} as const;
export type PredictedUtxoMessageTypeEnum = typeof PredictedUtxoMessageTypeEnum[keyof typeof PredictedUtxoMessageTypeEnum];


/**
 * Check if a given object implements the PredictedUtxoMessage interface.
 */
export function instanceOfPredictedUtxoMessage(value: object): value is PredictedUtxoMessage {
    if (!('policyMatch' in value) || value['policyMatch'] === undefined) return false;
    if (!('risks' in value) || value['risks'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('chain' in value) || value['chain'] === undefined) return false;
    if (!('sender' in value) || value['sender'] === undefined) return false;
    if (!('utxoMessageType' in value) || value['utxoMessageType'] === undefined) return false;
    if (!('messageToDisplay' in value) || value['messageToDisplay'] === undefined) return false;
    return true;
}

export function PredictedUtxoMessageFromJSON(json: any): PredictedUtxoMessage {
    return PredictedUtxoMessageFromJSONTyped(json, false);
}

export function PredictedUtxoMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): PredictedUtxoMessage {
    if (json == null) {
        return json;
    }
    return {
        
        'amlPolicyMatch': json['aml_policy_match'] == null ? undefined : AmlPolicyMatchOutgoingFromJSON(json['aml_policy_match']),
        'policyMatch': PolicyMatchFromJSON(json['policy_match']),
        'approvalRequest': json['approval_request'] == null ? undefined : ApprovalRequestFromJSON(json['approval_request']),
        'risks': ((json['risks'] as Array<any>).map(TransactionRiskFromJSON)),
        'note': json['note'] == null ? undefined : json['note'],
        'type': json['type'],
        'chain': EnrichedUtxoChainFromJSON(json['chain']),
        'sender': EnrichedUtxoAddressFromJSON(json['sender']),
        'utxoMessageType': UtxoMessageTypeFromJSON(json['utxo_message_type']),
        'messageToDisplay': json['message_to_display'],
    };
}

export function PredictedUtxoMessageToJSON(json: any): PredictedUtxoMessage {
    return PredictedUtxoMessageToJSONTyped(json, false);
}

export function PredictedUtxoMessageToJSONTyped(value?: PredictedUtxoMessage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'aml_policy_match': AmlPolicyMatchOutgoingToJSON(value['amlPolicyMatch']),
        'policy_match': PolicyMatchToJSON(value['policyMatch']),
        'approval_request': ApprovalRequestToJSON(value['approvalRequest']),
        'risks': ((value['risks'] as Array<any>).map(TransactionRiskToJSON)),
        'note': value['note'],
        'type': value['type'],
        'chain': EnrichedUtxoChainToJSON(value['chain']),
        'sender': EnrichedUtxoAddressToJSON(value['sender']),
        'utxo_message_type': UtxoMessageTypeToJSON(value['utxoMessageType']),
        'message_to_display': value['messageToDisplay'],
    };
}

