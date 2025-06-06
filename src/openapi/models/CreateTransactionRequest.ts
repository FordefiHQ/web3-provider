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

import type { CreateAptosMessageRequest } from './CreateAptosMessageRequest';
import {
    instanceOfCreateAptosMessageRequest,
    CreateAptosMessageRequestFromJSON,
    CreateAptosMessageRequestFromJSONTyped,
    CreateAptosMessageRequestToJSON,
} from './CreateAptosMessageRequest';
import type { CreateAptosTransactionRequest } from './CreateAptosTransactionRequest';
import {
    instanceOfCreateAptosTransactionRequest,
    CreateAptosTransactionRequestFromJSON,
    CreateAptosTransactionRequestFromJSONTyped,
    CreateAptosTransactionRequestToJSON,
} from './CreateAptosTransactionRequest';
import type { CreateBlackBoxSignatureRequest } from './CreateBlackBoxSignatureRequest';
import {
    instanceOfCreateBlackBoxSignatureRequest,
    CreateBlackBoxSignatureRequestFromJSON,
    CreateBlackBoxSignatureRequestFromJSONTyped,
    CreateBlackBoxSignatureRequestToJSON,
} from './CreateBlackBoxSignatureRequest';
import type { CreateCosmosMessageRequest } from './CreateCosmosMessageRequest';
import {
    instanceOfCreateCosmosMessageRequest,
    CreateCosmosMessageRequestFromJSON,
    CreateCosmosMessageRequestFromJSONTyped,
    CreateCosmosMessageRequestToJSON,
} from './CreateCosmosMessageRequest';
import type { CreateCosmosTransactionRequest } from './CreateCosmosTransactionRequest';
import {
    instanceOfCreateCosmosTransactionRequest,
    CreateCosmosTransactionRequestFromJSON,
    CreateCosmosTransactionRequestFromJSONTyped,
    CreateCosmosTransactionRequestToJSON,
} from './CreateCosmosTransactionRequest';
import type { CreateEvmMessageRequest } from './CreateEvmMessageRequest';
import {
    instanceOfCreateEvmMessageRequest,
    CreateEvmMessageRequestFromJSON,
    CreateEvmMessageRequestFromJSONTyped,
    CreateEvmMessageRequestToJSON,
} from './CreateEvmMessageRequest';
import type { CreateEvmTransactionRequest } from './CreateEvmTransactionRequest';
import {
    instanceOfCreateEvmTransactionRequest,
    CreateEvmTransactionRequestFromJSON,
    CreateEvmTransactionRequestFromJSONTyped,
    CreateEvmTransactionRequestToJSON,
} from './CreateEvmTransactionRequest';
import type { CreateExchangeTransactionRequest } from './CreateExchangeTransactionRequest';
import {
    instanceOfCreateExchangeTransactionRequest,
    CreateExchangeTransactionRequestFromJSON,
    CreateExchangeTransactionRequestFromJSONTyped,
    CreateExchangeTransactionRequestToJSON,
} from './CreateExchangeTransactionRequest';
import type { CreateSolanaMessageRequest } from './CreateSolanaMessageRequest';
import {
    instanceOfCreateSolanaMessageRequest,
    CreateSolanaMessageRequestFromJSON,
    CreateSolanaMessageRequestFromJSONTyped,
    CreateSolanaMessageRequestToJSON,
} from './CreateSolanaMessageRequest';
import type { CreateSolanaTransactionRequest } from './CreateSolanaTransactionRequest';
import {
    instanceOfCreateSolanaTransactionRequest,
    CreateSolanaTransactionRequestFromJSON,
    CreateSolanaTransactionRequestFromJSONTyped,
    CreateSolanaTransactionRequestToJSON,
} from './CreateSolanaTransactionRequest';
import type { CreateStacksTransactionRequest } from './CreateStacksTransactionRequest';
import {
    instanceOfCreateStacksTransactionRequest,
    CreateStacksTransactionRequestFromJSON,
    CreateStacksTransactionRequestFromJSONTyped,
    CreateStacksTransactionRequestToJSON,
} from './CreateStacksTransactionRequest';
import type { CreateStarknetMessageRequest } from './CreateStarknetMessageRequest';
import {
    instanceOfCreateStarknetMessageRequest,
    CreateStarknetMessageRequestFromJSON,
    CreateStarknetMessageRequestFromJSONTyped,
    CreateStarknetMessageRequestToJSON,
} from './CreateStarknetMessageRequest';
import type { CreateStarknetTransactionRequest } from './CreateStarknetTransactionRequest';
import {
    instanceOfCreateStarknetTransactionRequest,
    CreateStarknetTransactionRequestFromJSON,
    CreateStarknetTransactionRequestFromJSONTyped,
    CreateStarknetTransactionRequestToJSON,
} from './CreateStarknetTransactionRequest';
import type { CreateSuiMessageRequest } from './CreateSuiMessageRequest';
import {
    instanceOfCreateSuiMessageRequest,
    CreateSuiMessageRequestFromJSON,
    CreateSuiMessageRequestFromJSONTyped,
    CreateSuiMessageRequestToJSON,
} from './CreateSuiMessageRequest';
import type { CreateSuiTransactionRequest } from './CreateSuiTransactionRequest';
import {
    instanceOfCreateSuiTransactionRequest,
    CreateSuiTransactionRequestFromJSON,
    CreateSuiTransactionRequestFromJSONTyped,
    CreateSuiTransactionRequestToJSON,
} from './CreateSuiTransactionRequest';
import type { CreateTonMessageRequest } from './CreateTonMessageRequest';
import {
    instanceOfCreateTonMessageRequest,
    CreateTonMessageRequestFromJSON,
    CreateTonMessageRequestFromJSONTyped,
    CreateTonMessageRequestToJSON,
} from './CreateTonMessageRequest';
import type { CreateTonTransactionRequest } from './CreateTonTransactionRequest';
import {
    instanceOfCreateTonTransactionRequest,
    CreateTonTransactionRequestFromJSON,
    CreateTonTransactionRequestFromJSONTyped,
    CreateTonTransactionRequestToJSON,
} from './CreateTonTransactionRequest';
import type { CreateTronTransactionRequest } from './CreateTronTransactionRequest';
import {
    instanceOfCreateTronTransactionRequest,
    CreateTronTransactionRequestFromJSON,
    CreateTronTransactionRequestFromJSONTyped,
    CreateTronTransactionRequestToJSON,
} from './CreateTronTransactionRequest';
import type { CreateUtxoMessageRequest } from './CreateUtxoMessageRequest';
import {
    instanceOfCreateUtxoMessageRequest,
    CreateUtxoMessageRequestFromJSON,
    CreateUtxoMessageRequestFromJSONTyped,
    CreateUtxoMessageRequestToJSON,
} from './CreateUtxoMessageRequest';
import type { CreateUtxoTransactionRequest } from './CreateUtxoTransactionRequest';
import {
    instanceOfCreateUtxoTransactionRequest,
    CreateUtxoTransactionRequestFromJSON,
    CreateUtxoTransactionRequestFromJSONTyped,
    CreateUtxoTransactionRequestToJSON,
} from './CreateUtxoTransactionRequest';

/**
 * @type CreateTransactionRequest
 * 
 * @export
 */
export type CreateTransactionRequest = { type: 'aptos_message' } & CreateAptosMessageRequest | { type: 'aptos_transaction' } & CreateAptosTransactionRequest | { type: 'black_box_signature' } & CreateBlackBoxSignatureRequest | { type: 'cosmos_message' } & CreateCosmosMessageRequest | { type: 'cosmos_transaction' } & CreateCosmosTransactionRequest | { type: 'evm_message' } & CreateEvmMessageRequest | { type: 'evm_transaction' } & CreateEvmTransactionRequest | { type: 'exchange_transaction' } & CreateExchangeTransactionRequest | { type: 'solana_message' } & CreateSolanaMessageRequest | { type: 'solana_transaction' } & CreateSolanaTransactionRequest | { type: 'stacks_transaction' } & CreateStacksTransactionRequest | { type: 'starknet_message' } & CreateStarknetMessageRequest | { type: 'starknet_transaction' } & CreateStarknetTransactionRequest | { type: 'sui_message' } & CreateSuiMessageRequest | { type: 'sui_transaction' } & CreateSuiTransactionRequest | { type: 'ton_message' } & CreateTonMessageRequest | { type: 'ton_transaction' } & CreateTonTransactionRequest | { type: 'tron_transaction' } & CreateTronTransactionRequest | { type: 'utxo_message' } & CreateUtxoMessageRequest | { type: 'utxo_transaction' } & CreateUtxoTransactionRequest;

export function CreateTransactionRequestFromJSON(json: any): CreateTransactionRequest {
    return CreateTransactionRequestFromJSONTyped(json, false);
}

export function CreateTransactionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTransactionRequest {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'aptos_message':
            return Object.assign({}, CreateAptosMessageRequestFromJSONTyped(json, true), { type: 'aptos_message' } as const);
        case 'aptos_transaction':
            return Object.assign({}, CreateAptosTransactionRequestFromJSONTyped(json, true), { type: 'aptos_transaction' } as const);
        case 'black_box_signature':
            return Object.assign({}, CreateBlackBoxSignatureRequestFromJSONTyped(json, true), { type: 'black_box_signature' } as const);
        case 'cosmos_message':
            return Object.assign({}, CreateCosmosMessageRequestFromJSONTyped(json, true), { type: 'cosmos_message' } as const);
        case 'cosmos_transaction':
            return Object.assign({}, CreateCosmosTransactionRequestFromJSONTyped(json, true), { type: 'cosmos_transaction' } as const);
        case 'evm_message':
            return Object.assign({}, CreateEvmMessageRequestFromJSONTyped(json, true), { type: 'evm_message' } as const);
        case 'evm_transaction':
            return Object.assign({}, CreateEvmTransactionRequestFromJSONTyped(json, true), { type: 'evm_transaction' } as const);
        case 'exchange_transaction':
            return Object.assign({}, CreateExchangeTransactionRequestFromJSONTyped(json, true), { type: 'exchange_transaction' } as const);
        case 'solana_message':
            return Object.assign({}, CreateSolanaMessageRequestFromJSONTyped(json, true), { type: 'solana_message' } as const);
        case 'solana_transaction':
            return Object.assign({}, CreateSolanaTransactionRequestFromJSONTyped(json, true), { type: 'solana_transaction' } as const);
        case 'stacks_transaction':
            return Object.assign({}, CreateStacksTransactionRequestFromJSONTyped(json, true), { type: 'stacks_transaction' } as const);
        case 'starknet_message':
            return Object.assign({}, CreateStarknetMessageRequestFromJSONTyped(json, true), { type: 'starknet_message' } as const);
        case 'starknet_transaction':
            return Object.assign({}, CreateStarknetTransactionRequestFromJSONTyped(json, true), { type: 'starknet_transaction' } as const);
        case 'sui_message':
            return Object.assign({}, CreateSuiMessageRequestFromJSONTyped(json, true), { type: 'sui_message' } as const);
        case 'sui_transaction':
            return Object.assign({}, CreateSuiTransactionRequestFromJSONTyped(json, true), { type: 'sui_transaction' } as const);
        case 'ton_message':
            return Object.assign({}, CreateTonMessageRequestFromJSONTyped(json, true), { type: 'ton_message' } as const);
        case 'ton_transaction':
            return Object.assign({}, CreateTonTransactionRequestFromJSONTyped(json, true), { type: 'ton_transaction' } as const);
        case 'tron_transaction':
            return Object.assign({}, CreateTronTransactionRequestFromJSONTyped(json, true), { type: 'tron_transaction' } as const);
        case 'utxo_message':
            return Object.assign({}, CreateUtxoMessageRequestFromJSONTyped(json, true), { type: 'utxo_message' } as const);
        case 'utxo_transaction':
            return Object.assign({}, CreateUtxoTransactionRequestFromJSONTyped(json, true), { type: 'utxo_transaction' } as const);
        default:
            throw new Error(`No variant of CreateTransactionRequest exists with 'type=${json['type']}'`);
    }
}

export function CreateTransactionRequestToJSON(json: any): any {
    return CreateTransactionRequestToJSONTyped(json, false);
}

export function CreateTransactionRequestToJSONTyped(value?: CreateTransactionRequest | null, ignoreDiscriminator: boolean = false): any {
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

