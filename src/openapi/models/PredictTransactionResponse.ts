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

import type { PredictedAptosMessage } from './PredictedAptosMessage';
import {
    instanceOfPredictedAptosMessage,
    PredictedAptosMessageFromJSON,
    PredictedAptosMessageFromJSONTyped,
    PredictedAptosMessageToJSON,
} from './PredictedAptosMessage';
import type { PredictedAptosTransaction } from './PredictedAptosTransaction';
import {
    instanceOfPredictedAptosTransaction,
    PredictedAptosTransactionFromJSON,
    PredictedAptosTransactionFromJSONTyped,
    PredictedAptosTransactionToJSON,
} from './PredictedAptosTransaction';
import type { PredictedCosmosMessage } from './PredictedCosmosMessage';
import {
    instanceOfPredictedCosmosMessage,
    PredictedCosmosMessageFromJSON,
    PredictedCosmosMessageFromJSONTyped,
    PredictedCosmosMessageToJSON,
} from './PredictedCosmosMessage';
import type { PredictedCosmosTransaction } from './PredictedCosmosTransaction';
import {
    instanceOfPredictedCosmosTransaction,
    PredictedCosmosTransactionFromJSON,
    PredictedCosmosTransactionFromJSONTyped,
    PredictedCosmosTransactionToJSON,
} from './PredictedCosmosTransaction';
import type { PredictedEvmMessage } from './PredictedEvmMessage';
import {
    instanceOfPredictedEvmMessage,
    PredictedEvmMessageFromJSON,
    PredictedEvmMessageFromJSONTyped,
    PredictedEvmMessageToJSON,
} from './PredictedEvmMessage';
import type { PredictedEvmTransaction } from './PredictedEvmTransaction';
import {
    instanceOfPredictedEvmTransaction,
    PredictedEvmTransactionFromJSON,
    PredictedEvmTransactionFromJSONTyped,
    PredictedEvmTransactionToJSON,
} from './PredictedEvmTransaction';
import type { PredictedExchangeTransaction } from './PredictedExchangeTransaction';
import {
    instanceOfPredictedExchangeTransaction,
    PredictedExchangeTransactionFromJSON,
    PredictedExchangeTransactionFromJSONTyped,
    PredictedExchangeTransactionToJSON,
} from './PredictedExchangeTransaction';
import type { PredictedSolanaMessage } from './PredictedSolanaMessage';
import {
    instanceOfPredictedSolanaMessage,
    PredictedSolanaMessageFromJSON,
    PredictedSolanaMessageFromJSONTyped,
    PredictedSolanaMessageToJSON,
} from './PredictedSolanaMessage';
import type { PredictedSolanaTransaction } from './PredictedSolanaTransaction';
import {
    instanceOfPredictedSolanaTransaction,
    PredictedSolanaTransactionFromJSON,
    PredictedSolanaTransactionFromJSONTyped,
    PredictedSolanaTransactionToJSON,
} from './PredictedSolanaTransaction';
import type { PredictedStacksTransaction } from './PredictedStacksTransaction';
import {
    instanceOfPredictedStacksTransaction,
    PredictedStacksTransactionFromJSON,
    PredictedStacksTransactionFromJSONTyped,
    PredictedStacksTransactionToJSON,
} from './PredictedStacksTransaction';
import type { PredictedStarknetMessage } from './PredictedStarknetMessage';
import {
    instanceOfPredictedStarknetMessage,
    PredictedStarknetMessageFromJSON,
    PredictedStarknetMessageFromJSONTyped,
    PredictedStarknetMessageToJSON,
} from './PredictedStarknetMessage';
import type { PredictedStarknetTransaction } from './PredictedStarknetTransaction';
import {
    instanceOfPredictedStarknetTransaction,
    PredictedStarknetTransactionFromJSON,
    PredictedStarknetTransactionFromJSONTyped,
    PredictedStarknetTransactionToJSON,
} from './PredictedStarknetTransaction';
import type { PredictedSuiMessage } from './PredictedSuiMessage';
import {
    instanceOfPredictedSuiMessage,
    PredictedSuiMessageFromJSON,
    PredictedSuiMessageFromJSONTyped,
    PredictedSuiMessageToJSON,
} from './PredictedSuiMessage';
import type { PredictedSuiTransaction } from './PredictedSuiTransaction';
import {
    instanceOfPredictedSuiTransaction,
    PredictedSuiTransactionFromJSON,
    PredictedSuiTransactionFromJSONTyped,
    PredictedSuiTransactionToJSON,
} from './PredictedSuiTransaction';
import type { PredictedTonMessage } from './PredictedTonMessage';
import {
    instanceOfPredictedTonMessage,
    PredictedTonMessageFromJSON,
    PredictedTonMessageFromJSONTyped,
    PredictedTonMessageToJSON,
} from './PredictedTonMessage';
import type { PredictedTonTransaction } from './PredictedTonTransaction';
import {
    instanceOfPredictedTonTransaction,
    PredictedTonTransactionFromJSON,
    PredictedTonTransactionFromJSONTyped,
    PredictedTonTransactionToJSON,
} from './PredictedTonTransaction';
import type { PredictedTronTransaction } from './PredictedTronTransaction';
import {
    instanceOfPredictedTronTransaction,
    PredictedTronTransactionFromJSON,
    PredictedTronTransactionFromJSONTyped,
    PredictedTronTransactionToJSON,
} from './PredictedTronTransaction';
import type { PredictedUtxoMessage } from './PredictedUtxoMessage';
import {
    instanceOfPredictedUtxoMessage,
    PredictedUtxoMessageFromJSON,
    PredictedUtxoMessageFromJSONTyped,
    PredictedUtxoMessageToJSON,
} from './PredictedUtxoMessage';
import type { PredictedUtxoTransaction } from './PredictedUtxoTransaction';
import {
    instanceOfPredictedUtxoTransaction,
    PredictedUtxoTransactionFromJSON,
    PredictedUtxoTransactionFromJSONTyped,
    PredictedUtxoTransactionToJSON,
} from './PredictedUtxoTransaction';

/**
 * @type PredictTransactionResponse
 * 
 * @export
 */
export type PredictTransactionResponse = { type: 'aptos_message' } & PredictedAptosMessage | { type: 'aptos_transaction' } & PredictedAptosTransaction | { type: 'cosmos_message' } & PredictedCosmosMessage | { type: 'cosmos_transaction' } & PredictedCosmosTransaction | { type: 'evm_message' } & PredictedEvmMessage | { type: 'evm_transaction' } & PredictedEvmTransaction | { type: 'exchange_transaction' } & PredictedExchangeTransaction | { type: 'solana_message' } & PredictedSolanaMessage | { type: 'solana_transaction' } & PredictedSolanaTransaction | { type: 'stacks_transaction' } & PredictedStacksTransaction | { type: 'starknet_message' } & PredictedStarknetMessage | { type: 'starknet_transaction' } & PredictedStarknetTransaction | { type: 'sui_message' } & PredictedSuiMessage | { type: 'sui_transaction' } & PredictedSuiTransaction | { type: 'ton_message' } & PredictedTonMessage | { type: 'ton_transaction' } & PredictedTonTransaction | { type: 'tron_transaction' } & PredictedTronTransaction | { type: 'utxo_message' } & PredictedUtxoMessage | { type: 'utxo_transaction' } & PredictedUtxoTransaction;

export function PredictTransactionResponseFromJSON(json: any): PredictTransactionResponse {
    return PredictTransactionResponseFromJSONTyped(json, false);
}

export function PredictTransactionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PredictTransactionResponse {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'aptos_message':
            return Object.assign({}, PredictedAptosMessageFromJSONTyped(json, true), { type: 'aptos_message' } as const);
        case 'aptos_transaction':
            return Object.assign({}, PredictedAptosTransactionFromJSONTyped(json, true), { type: 'aptos_transaction' } as const);
        case 'cosmos_message':
            return Object.assign({}, PredictedCosmosMessageFromJSONTyped(json, true), { type: 'cosmos_message' } as const);
        case 'cosmos_transaction':
            return Object.assign({}, PredictedCosmosTransactionFromJSONTyped(json, true), { type: 'cosmos_transaction' } as const);
        case 'evm_message':
            return Object.assign({}, PredictedEvmMessageFromJSONTyped(json, true), { type: 'evm_message' } as const);
        case 'evm_transaction':
            return Object.assign({}, PredictedEvmTransactionFromJSONTyped(json, true), { type: 'evm_transaction' } as const);
        case 'exchange_transaction':
            return Object.assign({}, PredictedExchangeTransactionFromJSONTyped(json, true), { type: 'exchange_transaction' } as const);
        case 'solana_message':
            return Object.assign({}, PredictedSolanaMessageFromJSONTyped(json, true), { type: 'solana_message' } as const);
        case 'solana_transaction':
            return Object.assign({}, PredictedSolanaTransactionFromJSONTyped(json, true), { type: 'solana_transaction' } as const);
        case 'stacks_transaction':
            return Object.assign({}, PredictedStacksTransactionFromJSONTyped(json, true), { type: 'stacks_transaction' } as const);
        case 'starknet_message':
            return Object.assign({}, PredictedStarknetMessageFromJSONTyped(json, true), { type: 'starknet_message' } as const);
        case 'starknet_transaction':
            return Object.assign({}, PredictedStarknetTransactionFromJSONTyped(json, true), { type: 'starknet_transaction' } as const);
        case 'sui_message':
            return Object.assign({}, PredictedSuiMessageFromJSONTyped(json, true), { type: 'sui_message' } as const);
        case 'sui_transaction':
            return Object.assign({}, PredictedSuiTransactionFromJSONTyped(json, true), { type: 'sui_transaction' } as const);
        case 'ton_message':
            return Object.assign({}, PredictedTonMessageFromJSONTyped(json, true), { type: 'ton_message' } as const);
        case 'ton_transaction':
            return Object.assign({}, PredictedTonTransactionFromJSONTyped(json, true), { type: 'ton_transaction' } as const);
        case 'tron_transaction':
            return Object.assign({}, PredictedTronTransactionFromJSONTyped(json, true), { type: 'tron_transaction' } as const);
        case 'utxo_message':
            return Object.assign({}, PredictedUtxoMessageFromJSONTyped(json, true), { type: 'utxo_message' } as const);
        case 'utxo_transaction':
            return Object.assign({}, PredictedUtxoTransactionFromJSONTyped(json, true), { type: 'utxo_transaction' } as const);
        default:
            throw new Error(`No variant of PredictTransactionResponse exists with 'type=${json['type']}'`);
    }
}

export function PredictTransactionResponseToJSON(json: any): any {
    return PredictTransactionResponseToJSONTyped(json, false);
}

export function PredictTransactionResponseToJSONTyped(value?: PredictTransactionResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'aptos_message':
            return Object.assign({}, PredictedAptosMessageToJSON(value), { type: 'aptos_message' } as const);
        case 'aptos_transaction':
            return Object.assign({}, PredictedAptosTransactionToJSON(value), { type: 'aptos_transaction' } as const);
        case 'cosmos_message':
            return Object.assign({}, PredictedCosmosMessageToJSON(value), { type: 'cosmos_message' } as const);
        case 'cosmos_transaction':
            return Object.assign({}, PredictedCosmosTransactionToJSON(value), { type: 'cosmos_transaction' } as const);
        case 'evm_message':
            return Object.assign({}, PredictedEvmMessageToJSON(value), { type: 'evm_message' } as const);
        case 'evm_transaction':
            return Object.assign({}, PredictedEvmTransactionToJSON(value), { type: 'evm_transaction' } as const);
        case 'exchange_transaction':
            return Object.assign({}, PredictedExchangeTransactionToJSON(value), { type: 'exchange_transaction' } as const);
        case 'solana_message':
            return Object.assign({}, PredictedSolanaMessageToJSON(value), { type: 'solana_message' } as const);
        case 'solana_transaction':
            return Object.assign({}, PredictedSolanaTransactionToJSON(value), { type: 'solana_transaction' } as const);
        case 'stacks_transaction':
            return Object.assign({}, PredictedStacksTransactionToJSON(value), { type: 'stacks_transaction' } as const);
        case 'starknet_message':
            return Object.assign({}, PredictedStarknetMessageToJSON(value), { type: 'starknet_message' } as const);
        case 'starknet_transaction':
            return Object.assign({}, PredictedStarknetTransactionToJSON(value), { type: 'starknet_transaction' } as const);
        case 'sui_message':
            return Object.assign({}, PredictedSuiMessageToJSON(value), { type: 'sui_message' } as const);
        case 'sui_transaction':
            return Object.assign({}, PredictedSuiTransactionToJSON(value), { type: 'sui_transaction' } as const);
        case 'ton_message':
            return Object.assign({}, PredictedTonMessageToJSON(value), { type: 'ton_message' } as const);
        case 'ton_transaction':
            return Object.assign({}, PredictedTonTransactionToJSON(value), { type: 'ton_transaction' } as const);
        case 'tron_transaction':
            return Object.assign({}, PredictedTronTransactionToJSON(value), { type: 'tron_transaction' } as const);
        case 'utxo_message':
            return Object.assign({}, PredictedUtxoMessageToJSON(value), { type: 'utxo_message' } as const);
        case 'utxo_transaction':
            return Object.assign({}, PredictedUtxoTransactionToJSON(value), { type: 'utxo_transaction' } as const);
        default:
            throw new Error(`No variant of PredictTransactionResponse exists with 'type=${value['type']}'`);
    }

}

