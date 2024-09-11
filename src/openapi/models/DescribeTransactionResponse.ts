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
    DescribedAptosMessage,
    instanceOfDescribedAptosMessage,
    DescribedAptosMessageFromJSON,
    DescribedAptosMessageFromJSONTyped,
    DescribedAptosMessageToJSON,
} from './DescribedAptosMessage';
import {
    DescribedAptosTransaction,
    instanceOfDescribedAptosTransaction,
    DescribedAptosTransactionFromJSON,
    DescribedAptosTransactionFromJSONTyped,
    DescribedAptosTransactionToJSON,
} from './DescribedAptosTransaction';
import {
    DescribedCosmosMessage,
    instanceOfDescribedCosmosMessage,
    DescribedCosmosMessageFromJSON,
    DescribedCosmosMessageFromJSONTyped,
    DescribedCosmosMessageToJSON,
} from './DescribedCosmosMessage';
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
import {
    DescribedSuiMessage,
    instanceOfDescribedSuiMessage,
    DescribedSuiMessageFromJSON,
    DescribedSuiMessageFromJSONTyped,
    DescribedSuiMessageToJSON,
} from './DescribedSuiMessage';
import {
    DescribedSuiTransaction,
    instanceOfDescribedSuiTransaction,
    DescribedSuiTransactionFromJSON,
    DescribedSuiTransactionFromJSONTyped,
    DescribedSuiTransactionToJSON,
} from './DescribedSuiTransaction';
import {
    DescribedUtxoMessage,
    instanceOfDescribedUtxoMessage,
    DescribedUtxoMessageFromJSON,
    DescribedUtxoMessageFromJSONTyped,
    DescribedUtxoMessageToJSON,
} from './DescribedUtxoMessage';
import {
    DescribedUtxoTransaction,
    instanceOfDescribedUtxoTransaction,
    DescribedUtxoTransactionFromJSON,
    DescribedUtxoTransactionFromJSONTyped,
    DescribedUtxoTransactionToJSON,
} from './DescribedUtxoTransaction';

/**
 * @type DescribeTransactionResponse
 * 
 * @export
 */
export type DescribeTransactionResponse = { type: 'aptos_message' } & DescribedAptosMessage | { type: 'aptos_transaction' } & DescribedAptosTransaction | { type: 'cosmos_message' } & DescribedCosmosMessage | { type: 'cosmos_transaction' } & DescribedCosmosTransaction | { type: 'evm_message' } & DescribedEvmMessage | { type: 'evm_transaction' } & DescribedEvmTransaction | { type: 'solana_message' } & DescribedSolanaMessage | { type: 'solana_transaction' } & DescribedSolanaTransaction | { type: 'sui_message' } & DescribedSuiMessage | { type: 'sui_transaction' } & DescribedSuiTransaction | { type: 'utxo_message' } & DescribedUtxoMessage | { type: 'utxo_transaction' } & DescribedUtxoTransaction;

export function DescribeTransactionResponseFromJSON(json: any): DescribeTransactionResponse {
    return DescribeTransactionResponseFromJSONTyped(json, false);
}

export function DescribeTransactionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DescribeTransactionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'aptos_message':
            return {...DescribedAptosMessageFromJSONTyped(json, true), type: 'aptos_message'};
        case 'aptos_transaction':
            return {...DescribedAptosTransactionFromJSONTyped(json, true), type: 'aptos_transaction'};
        case 'cosmos_message':
            return {...DescribedCosmosMessageFromJSONTyped(json, true), type: 'cosmos_message'};
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
        case 'sui_message':
            return {...DescribedSuiMessageFromJSONTyped(json, true), type: 'sui_message'};
        case 'sui_transaction':
            return {...DescribedSuiTransactionFromJSONTyped(json, true), type: 'sui_transaction'};
        case 'utxo_message':
            return {...DescribedUtxoMessageFromJSONTyped(json, true), type: 'utxo_message'};
        case 'utxo_transaction':
            return {...DescribedUtxoTransactionFromJSONTyped(json, true), type: 'utxo_transaction'};
        default:
            throw new Error(`No variant of DescribeTransactionResponse exists with 'type=${json['type']}'`);
    }
}

export function DescribeTransactionResponseToJSON(value?: DescribeTransactionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'aptos_message':
            return DescribedAptosMessageToJSON(value);
        case 'aptos_transaction':
            return DescribedAptosTransactionToJSON(value);
        case 'cosmos_message':
            return DescribedCosmosMessageToJSON(value);
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
        case 'sui_message':
            return DescribedSuiMessageToJSON(value);
        case 'sui_transaction':
            return DescribedSuiTransactionToJSON(value);
        case 'utxo_message':
            return DescribedUtxoMessageToJSON(value);
        case 'utxo_transaction':
            return DescribedUtxoTransactionToJSON(value);
        default:
            throw new Error(`No variant of DescribeTransactionResponse exists with 'type=${value['type']}'`);
    }

}

