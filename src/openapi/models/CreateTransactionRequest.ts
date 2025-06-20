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

import type { CreateAptosMessageRequest } from './CreateAptosMessageRequest';
import {
    CreateAptosMessageRequestToJSON,
} from './CreateAptosMessageRequest';
import type { CreateAptosTransactionRequest } from './CreateAptosTransactionRequest';
import {
    CreateAptosTransactionRequestToJSON,
} from './CreateAptosTransactionRequest';
import type { CreateBlackBoxSignatureRequest } from './CreateBlackBoxSignatureRequest';
import {
    CreateBlackBoxSignatureRequestToJSON,
} from './CreateBlackBoxSignatureRequest';
import type { CreateCosmosMessageRequest } from './CreateCosmosMessageRequest';
import {
    CreateCosmosMessageRequestToJSON,
} from './CreateCosmosMessageRequest';
import type { CreateCosmosTransactionRequest } from './CreateCosmosTransactionRequest';
import {
    CreateCosmosTransactionRequestToJSON,
} from './CreateCosmosTransactionRequest';
import type { CreateEvmMessageRequest } from './CreateEvmMessageRequest';
import {
    CreateEvmMessageRequestToJSON,
} from './CreateEvmMessageRequest';
import type { CreateEvmTransactionRequest } from './CreateEvmTransactionRequest';
import {
    CreateEvmTransactionRequestToJSON,
} from './CreateEvmTransactionRequest';
import type { CreateExchangeTransactionRequest } from './CreateExchangeTransactionRequest';
import {
    CreateExchangeTransactionRequestToJSON,
} from './CreateExchangeTransactionRequest';
import type { CreateSolanaMessageRequest } from './CreateSolanaMessageRequest';
import {
    CreateSolanaMessageRequestToJSON,
} from './CreateSolanaMessageRequest';
import type { CreateSolanaTransactionRequest } from './CreateSolanaTransactionRequest';
import {
    CreateSolanaTransactionRequestToJSON,
} from './CreateSolanaTransactionRequest';
import type { CreateStacksTransactionRequest } from './CreateStacksTransactionRequest';
import {
    CreateStacksTransactionRequestToJSON,
} from './CreateStacksTransactionRequest';
import type { CreateStarknetMessageRequest } from './CreateStarknetMessageRequest';
import {
    CreateStarknetMessageRequestToJSON,
} from './CreateStarknetMessageRequest';
import type { CreateStarknetTransactionRequest } from './CreateStarknetTransactionRequest';
import {
    CreateStarknetTransactionRequestToJSON,
} from './CreateStarknetTransactionRequest';
import type { CreateSuiMessageRequest } from './CreateSuiMessageRequest';
import {
    CreateSuiMessageRequestToJSON,
} from './CreateSuiMessageRequest';
import type { CreateSuiTransactionRequest } from './CreateSuiTransactionRequest';
import {
    CreateSuiTransactionRequestToJSON,
} from './CreateSuiTransactionRequest';
import type { CreateTonMessageRequest } from './CreateTonMessageRequest';
import {
    CreateTonMessageRequestToJSON,
} from './CreateTonMessageRequest';
import type { CreateTonTransactionRequest } from './CreateTonTransactionRequest';
import {
    CreateTonTransactionRequestToJSON,
} from './CreateTonTransactionRequest';
import type { CreateTronTransactionRequest } from './CreateTronTransactionRequest';
import {
    CreateTronTransactionRequestToJSON,
} from './CreateTronTransactionRequest';
import type { CreateUtxoMessageRequest } from './CreateUtxoMessageRequest';
import {
    CreateUtxoMessageRequestToJSON,
} from './CreateUtxoMessageRequest';
import type { CreateUtxoTransactionRequest } from './CreateUtxoTransactionRequest';
import {
    CreateUtxoTransactionRequestToJSON,
} from './CreateUtxoTransactionRequest';

/**
 * 
 * @export
 * @type CreateTransactionRequest
 */
export type CreateTransactionRequest = { type: 'aptos_message' } & CreateAptosMessageRequest | { type: 'aptos_transaction' } & CreateAptosTransactionRequest | { type: 'black_box_signature' } & CreateBlackBoxSignatureRequest | { type: 'cosmos_message' } & CreateCosmosMessageRequest | { type: 'cosmos_transaction' } & CreateCosmosTransactionRequest | { type: 'evm_message' } & CreateEvmMessageRequest | { type: 'evm_transaction' } & CreateEvmTransactionRequest | { type: 'exchange_transaction' } & CreateExchangeTransactionRequest | { type: 'solana_message' } & CreateSolanaMessageRequest | { type: 'solana_transaction' } & CreateSolanaTransactionRequest | { type: 'stacks_transaction' } & CreateStacksTransactionRequest | { type: 'starknet_message' } & CreateStarknetMessageRequest | { type: 'starknet_transaction' } & CreateStarknetTransactionRequest | { type: 'sui_message' } & CreateSuiMessageRequest | { type: 'sui_transaction' } & CreateSuiTransactionRequest | { type: 'ton_message' } & CreateTonMessageRequest | { type: 'ton_transaction' } & CreateTonTransactionRequest | { type: 'tron_transaction' } & CreateTronTransactionRequest | { type: 'utxo_message' } & CreateUtxoMessageRequest | { type: 'utxo_transaction' } & CreateUtxoTransactionRequest;

export function CreateTransactionRequestToJSON(json: any): any {
    return CreateTransactionRequestToJSONTyped(json, false);
}

function CreateTransactionRequestToJSONTyped(value?: CreateTransactionRequest | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'aptos_message':
            return Object.assign({}, CreateAptosMessageRequestToJSON(value), { type: 'aptos_message' } as const);
        case 'aptos_transaction':
            return Object.assign({}, CreateAptosTransactionRequestToJSON(value), { type: 'aptos_transaction' } as const);
        case 'black_box_signature':
            return Object.assign({}, CreateBlackBoxSignatureRequestToJSON(value), { type: 'black_box_signature' } as const);
        case 'cosmos_message':
            return Object.assign({}, CreateCosmosMessageRequestToJSON(value), { type: 'cosmos_message' } as const);
        case 'cosmos_transaction':
            return Object.assign({}, CreateCosmosTransactionRequestToJSON(value), { type: 'cosmos_transaction' } as const);
        case 'evm_message':
            return Object.assign({}, CreateEvmMessageRequestToJSON(value), { type: 'evm_message' } as const);
        case 'evm_transaction':
            return Object.assign({}, CreateEvmTransactionRequestToJSON(value), { type: 'evm_transaction' } as const);
        case 'exchange_transaction':
            return Object.assign({}, CreateExchangeTransactionRequestToJSON(value), { type: 'exchange_transaction' } as const);
        case 'solana_message':
            return Object.assign({}, CreateSolanaMessageRequestToJSON(value), { type: 'solana_message' } as const);
        case 'solana_transaction':
            return Object.assign({}, CreateSolanaTransactionRequestToJSON(value), { type: 'solana_transaction' } as const);
        case 'stacks_transaction':
            return Object.assign({}, CreateStacksTransactionRequestToJSON(value), { type: 'stacks_transaction' } as const);
        case 'starknet_message':
            return Object.assign({}, CreateStarknetMessageRequestToJSON(value), { type: 'starknet_message' } as const);
        case 'starknet_transaction':
            return Object.assign({}, CreateStarknetTransactionRequestToJSON(value), { type: 'starknet_transaction' } as const);
        case 'sui_message':
            return Object.assign({}, CreateSuiMessageRequestToJSON(value), { type: 'sui_message' } as const);
        case 'sui_transaction':
            return Object.assign({}, CreateSuiTransactionRequestToJSON(value), { type: 'sui_transaction' } as const);
        case 'ton_message':
            return Object.assign({}, CreateTonMessageRequestToJSON(value), { type: 'ton_message' } as const);
        case 'ton_transaction':
            return Object.assign({}, CreateTonTransactionRequestToJSON(value), { type: 'ton_transaction' } as const);
        case 'tron_transaction':
            return Object.assign({}, CreateTronTransactionRequestToJSON(value), { type: 'tron_transaction' } as const);
        case 'utxo_message':
            return Object.assign({}, CreateUtxoMessageRequestToJSON(value), { type: 'utxo_message' } as const);
        case 'utxo_transaction':
            return Object.assign({}, CreateUtxoTransactionRequestToJSON(value), { type: 'utxo_transaction' } as const);
        default:
            throw new Error(`No variant of CreateTransactionRequest exists with 'type=${value['type']}'`);
    }

}

