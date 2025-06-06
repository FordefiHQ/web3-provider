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
import type { EvmChainRequest } from './EvmChainRequest';
import {
    EvmChainRequestFromJSON,
    EvmChainRequestFromJSONTyped,
    EvmChainRequestToJSON,
    EvmChainRequestToJSONTyped,
} from './EvmChainRequest';

/**
 * 
 * @export
 * @interface TransactionDetailsEvmPersonalMessageRequest
 */
export interface TransactionDetailsEvmPersonalMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof TransactionDetailsEvmPersonalMessageRequest
     */
    type: TransactionDetailsEvmPersonalMessageRequestTypeEnum;
    /**
     * 
     * @type {EvmChainRequest}
     * @memberof TransactionDetailsEvmPersonalMessageRequest
     */
    chain: EvmChainRequest;
    /**
     * 
     * @type {string}
     * @memberof TransactionDetailsEvmPersonalMessageRequest
     */
    rawData: string;
}


/**
 * @export
 */
export const TransactionDetailsEvmPersonalMessageRequestTypeEnum = {
    personalMessageType: 'personal_message_type'
} as const;
export type TransactionDetailsEvmPersonalMessageRequestTypeEnum = typeof TransactionDetailsEvmPersonalMessageRequestTypeEnum[keyof typeof TransactionDetailsEvmPersonalMessageRequestTypeEnum];


/**
 * Check if a given object implements the TransactionDetailsEvmPersonalMessageRequest interface.
 */
export function instanceOfTransactionDetailsEvmPersonalMessageRequest(value: object): value is TransactionDetailsEvmPersonalMessageRequest {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('chain' in value) || value['chain'] === undefined) return false;
    if (!('rawData' in value) || value['rawData'] === undefined) return false;
    return true;
}

export function TransactionDetailsEvmPersonalMessageRequestFromJSON(json: any): TransactionDetailsEvmPersonalMessageRequest {
    return TransactionDetailsEvmPersonalMessageRequestFromJSONTyped(json, false);
}

export function TransactionDetailsEvmPersonalMessageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDetailsEvmPersonalMessageRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'chain': EvmChainRequestFromJSON(json['chain']),
        'rawData': json['raw_data'],
    };
}

export function TransactionDetailsEvmPersonalMessageRequestToJSON(json: any): TransactionDetailsEvmPersonalMessageRequest {
    return TransactionDetailsEvmPersonalMessageRequestToJSONTyped(json, false);
}

export function TransactionDetailsEvmPersonalMessageRequestToJSONTyped(value?: TransactionDetailsEvmPersonalMessageRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'chain': EvmChainRequestToJSON(value['chain']),
        'raw_data': value['rawData'],
    };
}

