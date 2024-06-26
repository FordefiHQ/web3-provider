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
    DescribedCosmosTransaction,
    instanceOfDescribedCosmosTransaction,
    DescribedCosmosTransactionFromJSON,
    DescribedCosmosTransactionFromJSONTyped,
    DescribedCosmosTransactionToJSON,
} from './DescribedCosmosTransaction';
import {
    DescribedEvmMessage,
    instanceOfDescribedEvmMessage,
    DescribedEvmMessageFromJSON,
    DescribedEvmMessageFromJSONTyped,
    DescribedEvmMessageToJSON,
} from './DescribedEvmMessage';
import {
    DescribedEvmTransaction,
    instanceOfDescribedEvmTransaction,
    DescribedEvmTransactionFromJSON,
    DescribedEvmTransactionFromJSONTyped,
    DescribedEvmTransactionToJSON,
} from './DescribedEvmTransaction';
import {
    DescribedSolanaMessage,
    instanceOfDescribedSolanaMessage,
    DescribedSolanaMessageFromJSON,
    DescribedSolanaMessageFromJSONTyped,
    DescribedSolanaMessageToJSON,
} from './DescribedSolanaMessage';
import {
    DescribedSolanaTransaction,
    instanceOfDescribedSolanaTransaction,
    DescribedSolanaTransactionFromJSON,
    DescribedSolanaTransactionFromJSONTyped,
    DescribedSolanaTransactionToJSON,
} from './DescribedSolanaTransaction';

/**
 * @type BulkDescribeTransactionResponse
 * 
 * @export
 */
export type BulkDescribeTransactionResponse = { type: 'cosmos_transaction' } & DescribedCosmosTransaction | { type: 'evm_message' } & DescribedEvmMessage | { type: 'evm_transaction' } & DescribedEvmTransaction | { type: 'solana_message' } & DescribedSolanaMessage | { type: 'solana_transaction' } & DescribedSolanaTransaction;

export function BulkDescribeTransactionResponseFromJSON(json: any): BulkDescribeTransactionResponse {
    return BulkDescribeTransactionResponseFromJSONTyped(json, false);
}

export function BulkDescribeTransactionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BulkDescribeTransactionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'cosmos_transaction':
            return {...DescribedCosmosTransactionFromJSONTyped(json, true), type: 'cosmos_transaction'};
        case 'evm_message':
            return {...DescribedEvmMessageFromJSONTyped(json, true), type: 'evm_message'};
        case 'evm_transaction':
            return {...DescribedEvmTransactionFromJSONTyped(json, true), type: 'evm_transaction'};
        case 'solana_message':
            return {...DescribedSolanaMessageFromJSONTyped(json, true), type: 'solana_message'};
        case 'solana_transaction':
            return {...DescribedSolanaTransactionFromJSONTyped(json, true), type: 'solana_transaction'};
        default:
            throw new Error(`No variant of BulkDescribeTransactionResponse exists with 'type=${json['type']}'`);
    }
}

export function BulkDescribeTransactionResponseToJSON(value?: BulkDescribeTransactionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'cosmos_transaction':
            return DescribedCosmosTransactionToJSON(value);
        case 'evm_message':
            return DescribedEvmMessageToJSON(value);
        case 'evm_transaction':
            return DescribedEvmTransactionToJSON(value);
        case 'solana_message':
            return DescribedSolanaMessageToJSON(value);
        case 'solana_transaction':
            return DescribedSolanaTransactionToJSON(value);
        default:
            throw new Error(`No variant of BulkDescribeTransactionResponse exists with 'type=${value['type']}'`);
    }

}

