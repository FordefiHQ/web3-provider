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

import type { CreateAptosVaultRequest } from './CreateAptosVaultRequest';
import {
    instanceOfCreateAptosVaultRequest,
    CreateAptosVaultRequestFromJSON,
    CreateAptosVaultRequestFromJSONTyped,
    CreateAptosVaultRequestToJSON,
} from './CreateAptosVaultRequest';
import type { CreateBlackBoxVaultRequest } from './CreateBlackBoxVaultRequest';
import {
    instanceOfCreateBlackBoxVaultRequest,
    CreateBlackBoxVaultRequestFromJSON,
    CreateBlackBoxVaultRequestFromJSONTyped,
    CreateBlackBoxVaultRequestToJSON,
} from './CreateBlackBoxVaultRequest';
import type { CreateCosmosVaultRequest } from './CreateCosmosVaultRequest';
import {
    instanceOfCreateCosmosVaultRequest,
    CreateCosmosVaultRequestFromJSON,
    CreateCosmosVaultRequestFromJSONTyped,
    CreateCosmosVaultRequestToJSON,
} from './CreateCosmosVaultRequest';
import type { CreateEvmVaultRequest } from './CreateEvmVaultRequest';
import {
    instanceOfCreateEvmVaultRequest,
    CreateEvmVaultRequestFromJSON,
    CreateEvmVaultRequestFromJSONTyped,
    CreateEvmVaultRequestToJSON,
} from './CreateEvmVaultRequest';
import type { CreateSolanaVaultRequest } from './CreateSolanaVaultRequest';
import {
    instanceOfCreateSolanaVaultRequest,
    CreateSolanaVaultRequestFromJSON,
    CreateSolanaVaultRequestFromJSONTyped,
    CreateSolanaVaultRequestToJSON,
} from './CreateSolanaVaultRequest';
import type { CreateStacksVaultRequest } from './CreateStacksVaultRequest';
import {
    instanceOfCreateStacksVaultRequest,
    CreateStacksVaultRequestFromJSON,
    CreateStacksVaultRequestFromJSONTyped,
    CreateStacksVaultRequestToJSON,
} from './CreateStacksVaultRequest';
import type { CreateStarknetVaultRequest } from './CreateStarknetVaultRequest';
import {
    instanceOfCreateStarknetVaultRequest,
    CreateStarknetVaultRequestFromJSON,
    CreateStarknetVaultRequestFromJSONTyped,
    CreateStarknetVaultRequestToJSON,
} from './CreateStarknetVaultRequest';
import type { CreateSuiVaultRequest } from './CreateSuiVaultRequest';
import {
    instanceOfCreateSuiVaultRequest,
    CreateSuiVaultRequestFromJSON,
    CreateSuiVaultRequestFromJSONTyped,
    CreateSuiVaultRequestToJSON,
} from './CreateSuiVaultRequest';
import type { CreateTonVaultRequest } from './CreateTonVaultRequest';
import {
    instanceOfCreateTonVaultRequest,
    CreateTonVaultRequestFromJSON,
    CreateTonVaultRequestFromJSONTyped,
    CreateTonVaultRequestToJSON,
} from './CreateTonVaultRequest';
import type { CreateTronVaultRequest } from './CreateTronVaultRequest';
import {
    instanceOfCreateTronVaultRequest,
    CreateTronVaultRequestFromJSON,
    CreateTronVaultRequestFromJSONTyped,
    CreateTronVaultRequestToJSON,
} from './CreateTronVaultRequest';
import type { CreateUtxoVaultRequest } from './CreateUtxoVaultRequest';
import {
    instanceOfCreateUtxoVaultRequest,
    CreateUtxoVaultRequestFromJSON,
    CreateUtxoVaultRequestFromJSONTyped,
    CreateUtxoVaultRequestToJSON,
} from './CreateUtxoVaultRequest';

/**
 * @type CreateVaultRequest
 * 
 * @export
 */
export type CreateVaultRequest = { type: 'aptos' } & CreateAptosVaultRequest | { type: 'black_box' } & CreateBlackBoxVaultRequest | { type: 'cosmos' } & CreateCosmosVaultRequest | { type: 'evm' } & CreateEvmVaultRequest | { type: 'solana' } & CreateSolanaVaultRequest | { type: 'stacks' } & CreateStacksVaultRequest | { type: 'starknet' } & CreateStarknetVaultRequest | { type: 'sui' } & CreateSuiVaultRequest | { type: 'ton' } & CreateTonVaultRequest | { type: 'tron' } & CreateTronVaultRequest | { type: 'utxo' } & CreateUtxoVaultRequest;

export function CreateVaultRequestFromJSON(json: any): CreateVaultRequest {
    return CreateVaultRequestFromJSONTyped(json, false);
}

export function CreateVaultRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateVaultRequest {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'aptos':
            return Object.assign({}, CreateAptosVaultRequestFromJSONTyped(json, true), { type: 'aptos' } as const);
        case 'black_box':
            return Object.assign({}, CreateBlackBoxVaultRequestFromJSONTyped(json, true), { type: 'black_box' } as const);
        case 'cosmos':
            return Object.assign({}, CreateCosmosVaultRequestFromJSONTyped(json, true), { type: 'cosmos' } as const);
        case 'evm':
            return Object.assign({}, CreateEvmVaultRequestFromJSONTyped(json, true), { type: 'evm' } as const);
        case 'solana':
            return Object.assign({}, CreateSolanaVaultRequestFromJSONTyped(json, true), { type: 'solana' } as const);
        case 'stacks':
            return Object.assign({}, CreateStacksVaultRequestFromJSONTyped(json, true), { type: 'stacks' } as const);
        case 'starknet':
            return Object.assign({}, CreateStarknetVaultRequestFromJSONTyped(json, true), { type: 'starknet' } as const);
        case 'sui':
            return Object.assign({}, CreateSuiVaultRequestFromJSONTyped(json, true), { type: 'sui' } as const);
        case 'ton':
            return Object.assign({}, CreateTonVaultRequestFromJSONTyped(json, true), { type: 'ton' } as const);
        case 'tron':
            return Object.assign({}, CreateTronVaultRequestFromJSONTyped(json, true), { type: 'tron' } as const);
        case 'utxo':
            return Object.assign({}, CreateUtxoVaultRequestFromJSONTyped(json, true), { type: 'utxo' } as const);
        default:
            throw new Error(`No variant of CreateVaultRequest exists with 'type=${json['type']}'`);
    }
}

export function CreateVaultRequestToJSON(json: any): any {
    return CreateVaultRequestToJSONTyped(json, false);
}

export function CreateVaultRequestToJSONTyped(value?: CreateVaultRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'aptos':
            return Object.assign({}, CreateAptosVaultRequestToJSON(value), { type: 'aptos' } as const);
        case 'black_box':
            return Object.assign({}, CreateBlackBoxVaultRequestToJSON(value), { type: 'black_box' } as const);
        case 'cosmos':
            return Object.assign({}, CreateCosmosVaultRequestToJSON(value), { type: 'cosmos' } as const);
        case 'evm':
            return Object.assign({}, CreateEvmVaultRequestToJSON(value), { type: 'evm' } as const);
        case 'solana':
            return Object.assign({}, CreateSolanaVaultRequestToJSON(value), { type: 'solana' } as const);
        case 'stacks':
            return Object.assign({}, CreateStacksVaultRequestToJSON(value), { type: 'stacks' } as const);
        case 'starknet':
            return Object.assign({}, CreateStarknetVaultRequestToJSON(value), { type: 'starknet' } as const);
        case 'sui':
            return Object.assign({}, CreateSuiVaultRequestToJSON(value), { type: 'sui' } as const);
        case 'ton':
            return Object.assign({}, CreateTonVaultRequestToJSON(value), { type: 'ton' } as const);
        case 'tron':
            return Object.assign({}, CreateTronVaultRequestToJSON(value), { type: 'tron' } as const);
        case 'utxo':
            return Object.assign({}, CreateUtxoVaultRequestToJSON(value), { type: 'utxo' } as const);
        default:
            throw new Error(`No variant of CreateVaultRequest exists with 'type=${value['type']}'`);
    }

}

