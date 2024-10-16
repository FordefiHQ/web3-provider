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
import type { EnrichedStarknetAddress } from './EnrichedStarknetAddress';
import {
    EnrichedStarknetAddressFromJSON,
    EnrichedStarknetAddressFromJSONTyped,
    EnrichedStarknetAddressToJSON,
} from './EnrichedStarknetAddress';
import type { EnrichedStarknetChain } from './EnrichedStarknetChain';
import {
    EnrichedStarknetChainFromJSON,
    EnrichedStarknetChainFromJSONTyped,
    EnrichedStarknetChainToJSON,
} from './EnrichedStarknetChain';
import type { PolicyMatch } from './PolicyMatch';
import {
    PolicyMatchFromJSON,
    PolicyMatchFromJSONTyped,
    PolicyMatchToJSON,
} from './PolicyMatch';
import type { StarknetMessageType } from './StarknetMessageType';
import {
    StarknetMessageTypeFromJSON,
    StarknetMessageTypeFromJSONTyped,
    StarknetMessageTypeToJSON,
} from './StarknetMessageType';
import type { TransactionRisk } from './TransactionRisk';
import {
    TransactionRiskFromJSON,
    TransactionRiskFromJSONTyped,
    TransactionRiskToJSON,
} from './TransactionRisk';

/**
 * 
 * @export
 * @interface PredictedStarknetMessage
 */
export interface PredictedStarknetMessage {
    /**
     * 
     * @type {PolicyMatch}
     * @memberof PredictedStarknetMessage
     */
    policyMatch: PolicyMatch;
    /**
     * 
     * @type {ApprovalRequest}
     * @memberof PredictedStarknetMessage
     */
    approvalRequest?: ApprovalRequest;
    /**
     * 
     * @type {Array<TransactionRisk>}
     * @memberof PredictedStarknetMessage
     */
    risks: Array<TransactionRisk>;
    /**
     * 
     * @type {string}
     * @memberof PredictedStarknetMessage
     */
    type: PredictedStarknetMessageTypeEnum;
    /**
     * 
     * @type {EnrichedStarknetChain}
     * @memberof PredictedStarknetMessage
     */
    chain: EnrichedStarknetChain;
    /**
     * 
     * @type {EnrichedStarknetAddress}
     * @memberof PredictedStarknetMessage
     */
    sender: EnrichedStarknetAddress;
    /**
     * 
     * @type {StarknetMessageType}
     * @memberof PredictedStarknetMessage
     */
    starknetMessageType: StarknetMessageType;
    /**
     * 
     * @type {string}
     * @memberof PredictedStarknetMessage
     */
    messageToDisplay: string;
}


/**
 * @export
 */
export const PredictedStarknetMessageTypeEnum = {
    starknetMessage: 'starknet_message'
} as const;
export type PredictedStarknetMessageTypeEnum = typeof PredictedStarknetMessageTypeEnum[keyof typeof PredictedStarknetMessageTypeEnum];


/**
 * Check if a given object implements the PredictedStarknetMessage interface.
 */
export function instanceOfPredictedStarknetMessage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "policyMatch" in value;
    isInstance = isInstance && "risks" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "sender" in value;
    isInstance = isInstance && "starknetMessageType" in value;
    isInstance = isInstance && "messageToDisplay" in value;

    return isInstance;
}

export function PredictedStarknetMessageFromJSON(json: any): PredictedStarknetMessage {
    return PredictedStarknetMessageFromJSONTyped(json, false);
}

export function PredictedStarknetMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): PredictedStarknetMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'policyMatch': PolicyMatchFromJSON(json['policy_match']),
        'approvalRequest': !exists(json, 'approval_request') ? undefined : ApprovalRequestFromJSON(json['approval_request']),
        'risks': ((json['risks'] as Array<any>).map(TransactionRiskFromJSON)),
        'type': json['type'],
        'chain': EnrichedStarknetChainFromJSON(json['chain']),
        'sender': EnrichedStarknetAddressFromJSON(json['sender']),
        'starknetMessageType': StarknetMessageTypeFromJSON(json['starknet_message_type']),
        'messageToDisplay': json['message_to_display'],
    };
}

export function PredictedStarknetMessageToJSON(value?: PredictedStarknetMessage | null): any {
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
        'chain': EnrichedStarknetChainToJSON(value.chain),
        'sender': EnrichedStarknetAddressToJSON(value.sender),
        'starknet_message_type': StarknetMessageTypeToJSON(value.starknetMessageType),
        'message_to_display': value.messageToDisplay,
    };
}

