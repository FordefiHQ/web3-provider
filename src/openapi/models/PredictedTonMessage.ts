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
import type { TonMessageType } from './TonMessageType';
import {
    TonMessageTypeFromJSON,
    TonMessageTypeFromJSONTyped,
    TonMessageTypeToJSON,
} from './TonMessageType';
import type { TransactionRisk } from './TransactionRisk';
import {
    TransactionRiskFromJSON,
    TransactionRiskFromJSONTyped,
    TransactionRiskToJSON,
} from './TransactionRisk';

/**
 * 
 * @export
 * @interface PredictedTonMessage
 */
export interface PredictedTonMessage {
    /**
     * 
     * @type {PolicyMatch}
     * @memberof PredictedTonMessage
     */
    policyMatch: PolicyMatch;
    /**
     * 
     * @type {ApprovalRequest}
     * @memberof PredictedTonMessage
     */
    approvalRequest?: ApprovalRequest;
    /**
     * 
     * @type {Array<TransactionRisk>}
     * @memberof PredictedTonMessage
     */
    risks: Array<TransactionRisk>;
    /**
     * 
     * @type {string}
     * @memberof PredictedTonMessage
     */
    type: PredictedTonMessageTypeEnum;
    /**
     * 
     * @type {EnrichedTonChain}
     * @memberof PredictedTonMessage
     */
    chain: EnrichedTonChain;
    /**
     * 
     * @type {EnrichedTonAddress}
     * @memberof PredictedTonMessage
     */
    sender: EnrichedTonAddress;
    /**
     * 
     * @type {TonMessageType}
     * @memberof PredictedTonMessage
     */
    tonMessageType: TonMessageType;
    /**
     * 
     * @type {string}
     * @memberof PredictedTonMessage
     */
    messageToDisplay: string;
}


/**
 * @export
 */
export const PredictedTonMessageTypeEnum = {
    tonMessage: 'ton_message'
} as const;
export type PredictedTonMessageTypeEnum = typeof PredictedTonMessageTypeEnum[keyof typeof PredictedTonMessageTypeEnum];


/**
 * Check if a given object implements the PredictedTonMessage interface.
 */
export function instanceOfPredictedTonMessage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "policyMatch" in value;
    isInstance = isInstance && "risks" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "sender" in value;
    isInstance = isInstance && "tonMessageType" in value;
    isInstance = isInstance && "messageToDisplay" in value;

    return isInstance;
}

export function PredictedTonMessageFromJSON(json: any): PredictedTonMessage {
    return PredictedTonMessageFromJSONTyped(json, false);
}

export function PredictedTonMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): PredictedTonMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'policyMatch': PolicyMatchFromJSON(json['policy_match']),
        'approvalRequest': !exists(json, 'approval_request') ? undefined : ApprovalRequestFromJSON(json['approval_request']),
        'risks': ((json['risks'] as Array<any>).map(TransactionRiskFromJSON)),
        'type': json['type'],
        'chain': EnrichedTonChainFromJSON(json['chain']),
        'sender': EnrichedTonAddressFromJSON(json['sender']),
        'tonMessageType': TonMessageTypeFromJSON(json['ton_message_type']),
        'messageToDisplay': json['message_to_display'],
    };
}

export function PredictedTonMessageToJSON(value?: PredictedTonMessage | null): any {
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
        'chain': EnrichedTonChainToJSON(value.chain),
        'sender': EnrichedTonAddressToJSON(value.sender),
        'ton_message_type': TonMessageTypeToJSON(value.tonMessageType),
        'message_to_display': value.messageToDisplay,
    };
}

