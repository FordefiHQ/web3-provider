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
import type { EnrichedUtxoAddress } from './EnrichedUtxoAddress';
import {
    EnrichedUtxoAddressFromJSON,
    EnrichedUtxoAddressFromJSONTyped,
    EnrichedUtxoAddressToJSON,
} from './EnrichedUtxoAddress';
import type { EnrichedUtxoChain } from './EnrichedUtxoChain';
import {
    EnrichedUtxoChainFromJSON,
    EnrichedUtxoChainFromJSONTyped,
    EnrichedUtxoChainToJSON,
} from './EnrichedUtxoChain';
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
import type { UtxoMessageType } from './UtxoMessageType';
import {
    UtxoMessageTypeFromJSON,
    UtxoMessageTypeFromJSONTyped,
    UtxoMessageTypeToJSON,
} from './UtxoMessageType';

/**
 * 
 * @export
 * @interface PredictedUtxoMessage
 */
export interface PredictedUtxoMessage {
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
export function instanceOfPredictedUtxoMessage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "policyMatch" in value;
    isInstance = isInstance && "risks" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "sender" in value;
    isInstance = isInstance && "utxoMessageType" in value;
    isInstance = isInstance && "messageToDisplay" in value;

    return isInstance;
}

export function PredictedUtxoMessageFromJSON(json: any): PredictedUtxoMessage {
    return PredictedUtxoMessageFromJSONTyped(json, false);
}

export function PredictedUtxoMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): PredictedUtxoMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'policyMatch': PolicyMatchFromJSON(json['policy_match']),
        'approvalRequest': !exists(json, 'approval_request') ? undefined : ApprovalRequestFromJSON(json['approval_request']),
        'risks': ((json['risks'] as Array<any>).map(TransactionRiskFromJSON)),
        'type': json['type'],
        'chain': EnrichedUtxoChainFromJSON(json['chain']),
        'sender': EnrichedUtxoAddressFromJSON(json['sender']),
        'utxoMessageType': UtxoMessageTypeFromJSON(json['utxo_message_type']),
        'messageToDisplay': json['message_to_display'],
    };
}

export function PredictedUtxoMessageToJSON(value?: PredictedUtxoMessage | null): any {
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
        'chain': EnrichedUtxoChainToJSON(value.chain),
        'sender': EnrichedUtxoAddressToJSON(value.sender),
        'utxo_message_type': UtxoMessageTypeToJSON(value.utxoMessageType),
        'message_to_display': value.messageToDisplay,
    };
}

