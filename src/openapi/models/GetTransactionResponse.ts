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

import type { AptosMessage } from './AptosMessage';
import {
    AptosMessageFromJSONTyped,
} from './AptosMessage';
import type { AptosTransaction } from './AptosTransaction';
import {
    AptosTransactionFromJSONTyped,
} from './AptosTransaction';
import type { BlackBoxSignature } from './BlackBoxSignature';
import {
    BlackBoxSignatureFromJSONTyped,
} from './BlackBoxSignature';
import type { CosmosMessage } from './CosmosMessage';
import {
    CosmosMessageFromJSONTyped,
} from './CosmosMessage';
import type { CosmosTransaction } from './CosmosTransaction';
import {
    CosmosTransactionFromJSONTyped,
} from './CosmosTransaction';
import type { EvmMessage } from './EvmMessage';
import {
    EvmMessageFromJSONTyped,
} from './EvmMessage';
import type { EvmTransaction } from './EvmTransaction';
import {
    EvmTransactionFromJSONTyped,
} from './EvmTransaction';
import type { ExchangeTransaction } from './ExchangeTransaction';
import {
    ExchangeTransactionFromJSONTyped,
} from './ExchangeTransaction';
import type { SolanaMessage } from './SolanaMessage';
import {
    SolanaMessageFromJSONTyped,
} from './SolanaMessage';
import type { SolanaTransaction } from './SolanaTransaction';
import {
    SolanaTransactionFromJSONTyped,
} from './SolanaTransaction';
import type { StacksTransaction } from './StacksTransaction';
import {
    StacksTransactionFromJSONTyped,
} from './StacksTransaction';
import type { StarknetMessage } from './StarknetMessage';
import {
    StarknetMessageFromJSONTyped,
} from './StarknetMessage';
import type { StarknetTransaction } from './StarknetTransaction';
import {
    StarknetTransactionFromJSONTyped,
} from './StarknetTransaction';
import type { SuiMessage } from './SuiMessage';
import {
    SuiMessageFromJSONTyped,
} from './SuiMessage';
import type { SuiTransaction } from './SuiTransaction';
import {
    SuiTransactionFromJSONTyped,
} from './SuiTransaction';
import type { TonMessage } from './TonMessage';
import {
    TonMessageFromJSONTyped,
} from './TonMessage';
import type { TonTransaction } from './TonTransaction';
import {
    TonTransactionFromJSONTyped,
} from './TonTransaction';
import type { TronTransaction } from './TronTransaction';
import {
    TronTransactionFromJSONTyped,
} from './TronTransaction';
import type { UtxoMessage } from './UtxoMessage';
import {
    UtxoMessageFromJSONTyped,
} from './UtxoMessage';
import type { UtxoTransaction } from './UtxoTransaction';
import {
    UtxoTransactionFromJSONTyped,
} from './UtxoTransaction';

/**
 * 
 * @export
 * @type GetTransactionResponse
 */
export type GetTransactionResponse = { type: 'aptos_message' } & AptosMessage | { type: 'aptos_transaction' } & AptosTransaction | { type: 'black_box_signature' } & BlackBoxSignature | { type: 'cosmos_message' } & CosmosMessage | { type: 'cosmos_transaction' } & CosmosTransaction | { type: 'evm_message' } & EvmMessage | { type: 'evm_transaction' } & EvmTransaction | { type: 'exchange_transaction' } & ExchangeTransaction | { type: 'solana_message' } & SolanaMessage | { type: 'solana_transaction' } & SolanaTransaction | { type: 'stacks_transaction' } & StacksTransaction | { type: 'starknet_message' } & StarknetMessage | { type: 'starknet_transaction' } & StarknetTransaction | { type: 'sui_message' } & SuiMessage | { type: 'sui_transaction' } & SuiTransaction | { type: 'ton_message' } & TonMessage | { type: 'ton_transaction' } & TonTransaction | { type: 'tron_transaction' } & TronTransaction | { type: 'utxo_message' } & UtxoMessage | { type: 'utxo_transaction' } & UtxoTransaction;

export function GetTransactionResponseFromJSON(json: any): GetTransactionResponse {
    return GetTransactionResponseFromJSONTyped(json, false);
}

function GetTransactionResponseFromJSONTyped(json: any, _ignoreDiscriminator: boolean): GetTransactionResponse {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'aptos_message':
            return Object.assign({}, AptosMessageFromJSONTyped(json, true), { type: 'aptos_message' } as const);
        case 'aptos_transaction':
            return Object.assign({}, AptosTransactionFromJSONTyped(json, true), { type: 'aptos_transaction' } as const);
        case 'black_box_signature':
            return Object.assign({}, BlackBoxSignatureFromJSONTyped(json, true), { type: 'black_box_signature' } as const);
        case 'cosmos_message':
            return Object.assign({}, CosmosMessageFromJSONTyped(json, true), { type: 'cosmos_message' } as const);
        case 'cosmos_transaction':
            return Object.assign({}, CosmosTransactionFromJSONTyped(json, true), { type: 'cosmos_transaction' } as const);
        case 'evm_message':
            return Object.assign({}, EvmMessageFromJSONTyped(json, true), { type: 'evm_message' } as const);
        case 'evm_transaction':
            return Object.assign({}, EvmTransactionFromJSONTyped(json, true), { type: 'evm_transaction' } as const);
        case 'exchange_transaction':
            return Object.assign({}, ExchangeTransactionFromJSONTyped(json, true), { type: 'exchange_transaction' } as const);
        case 'solana_message':
            return Object.assign({}, SolanaMessageFromJSONTyped(json, true), { type: 'solana_message' } as const);
        case 'solana_transaction':
            return Object.assign({}, SolanaTransactionFromJSONTyped(json, true), { type: 'solana_transaction' } as const);
        case 'stacks_transaction':
            return Object.assign({}, StacksTransactionFromJSONTyped(json, true), { type: 'stacks_transaction' } as const);
        case 'starknet_message':
            return Object.assign({}, StarknetMessageFromJSONTyped(json, true), { type: 'starknet_message' } as const);
        case 'starknet_transaction':
            return Object.assign({}, StarknetTransactionFromJSONTyped(json, true), { type: 'starknet_transaction' } as const);
        case 'sui_message':
            return Object.assign({}, SuiMessageFromJSONTyped(json, true), { type: 'sui_message' } as const);
        case 'sui_transaction':
            return Object.assign({}, SuiTransactionFromJSONTyped(json, true), { type: 'sui_transaction' } as const);
        case 'ton_message':
            return Object.assign({}, TonMessageFromJSONTyped(json, true), { type: 'ton_message' } as const);
        case 'ton_transaction':
            return Object.assign({}, TonTransactionFromJSONTyped(json, true), { type: 'ton_transaction' } as const);
        case 'tron_transaction':
            return Object.assign({}, TronTransactionFromJSONTyped(json, true), { type: 'tron_transaction' } as const);
        case 'utxo_message':
            return Object.assign({}, UtxoMessageFromJSONTyped(json, true), { type: 'utxo_message' } as const);
        case 'utxo_transaction':
            return Object.assign({}, UtxoTransactionFromJSONTyped(json, true), { type: 'utxo_transaction' } as const);
        default:
            throw new Error(`No variant of GetTransactionResponse exists with 'type=${json['type']}'`);
    }
}

