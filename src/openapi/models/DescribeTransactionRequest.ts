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

import {
    TransactionDetailsCosmosTransactionRequest,
    instanceOfTransactionDetailsCosmosTransactionRequest,
    TransactionDetailsCosmosTransactionRequestFromJSON,
    TransactionDetailsCosmosTransactionRequestFromJSONTyped,
    TransactionDetailsCosmosTransactionRequestToJSON,
} from './TransactionDetailsCosmosTransactionRequest';
import {
    TransactionDetailsEvmMessageRequest,
    instanceOfTransactionDetailsEvmMessageRequest,
    TransactionDetailsEvmMessageRequestFromJSON,
    TransactionDetailsEvmMessageRequestFromJSONTyped,
    TransactionDetailsEvmMessageRequestToJSON,
} from './TransactionDetailsEvmMessageRequest';
import {
    TransactionDetailsEvmTransactionRequest,
    instanceOfTransactionDetailsEvmTransactionRequest,
    TransactionDetailsEvmTransactionRequestFromJSON,
    TransactionDetailsEvmTransactionRequestFromJSONTyped,
    TransactionDetailsEvmTransactionRequestToJSON,
} from './TransactionDetailsEvmTransactionRequest';
import {
    TransactionDetailsSolanaMessageRequest,
    instanceOfTransactionDetailsSolanaMessageRequest,
    TransactionDetailsSolanaMessageRequestFromJSON,
    TransactionDetailsSolanaMessageRequestFromJSONTyped,
    TransactionDetailsSolanaMessageRequestToJSON,
} from './TransactionDetailsSolanaMessageRequest';
import {
    TransactionDetailsSolanaTransactionRequest,
    instanceOfTransactionDetailsSolanaTransactionRequest,
    TransactionDetailsSolanaTransactionRequestFromJSON,
    TransactionDetailsSolanaTransactionRequestFromJSONTyped,
    TransactionDetailsSolanaTransactionRequestToJSON,
} from './TransactionDetailsSolanaTransactionRequest';

/**
 * @type DescribeTransactionRequest
 * 
 * @export
 */
export type DescribeTransactionRequest = { type: 'cosmos_transaction' } & TransactionDetailsCosmosTransactionRequest | { type: 'evm_message' } & TransactionDetailsEvmMessageRequest | { type: 'evm_transaction' } & TransactionDetailsEvmTransactionRequest | { type: 'solana_message' } & TransactionDetailsSolanaMessageRequest | { type: 'solana_transaction' } & TransactionDetailsSolanaTransactionRequest;

export function DescribeTransactionRequestFromJSON(json: any): DescribeTransactionRequest {
    return DescribeTransactionRequestFromJSONTyped(json, false);
}

export function DescribeTransactionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DescribeTransactionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'cosmos_transaction':
            return {...TransactionDetailsCosmosTransactionRequestFromJSONTyped(json, true), type: 'cosmos_transaction'};
        case 'evm_message':
            return {...TransactionDetailsEvmMessageRequestFromJSONTyped(json, true), type: 'evm_message'};
        case 'evm_transaction':
            return {...TransactionDetailsEvmTransactionRequestFromJSONTyped(json, true), type: 'evm_transaction'};
        case 'solana_message':
            return {...TransactionDetailsSolanaMessageRequestFromJSONTyped(json, true), type: 'solana_message'};
        case 'solana_transaction':
            return {...TransactionDetailsSolanaTransactionRequestFromJSONTyped(json, true), type: 'solana_transaction'};
        default:
            throw new Error(`No variant of DescribeTransactionRequest exists with 'type=${json['type']}'`);
    }
}

export function DescribeTransactionRequestToJSON(value?: DescribeTransactionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'cosmos_transaction':
            return TransactionDetailsCosmosTransactionRequestToJSON(value);
        case 'evm_message':
            return TransactionDetailsEvmMessageRequestToJSON(value);
        case 'evm_transaction':
            return TransactionDetailsEvmTransactionRequestToJSON(value);
        case 'solana_message':
            return TransactionDetailsSolanaMessageRequestToJSON(value);
        case 'solana_transaction':
            return TransactionDetailsSolanaTransactionRequestToJSON(value);
        default:
            throw new Error(`No variant of DescribeTransactionRequest exists with 'type=${value['type']}'`);
    }

}

