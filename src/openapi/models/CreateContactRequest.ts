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
    CreateAptosContactRequest,
    instanceOfCreateAptosContactRequest,
    CreateAptosContactRequestFromJSON,
    CreateAptosContactRequestFromJSONTyped,
    CreateAptosContactRequestToJSON,
} from './CreateAptosContactRequest';
import {
    CreateCosmosContactRequest,
    instanceOfCreateCosmosContactRequest,
    CreateCosmosContactRequestFromJSON,
    CreateCosmosContactRequestFromJSONTyped,
    CreateCosmosContactRequestToJSON,
} from './CreateCosmosContactRequest';
import {
    CreateEVMContactRequest,
    instanceOfCreateEVMContactRequest,
    CreateEVMContactRequestFromJSON,
    CreateEVMContactRequestFromJSONTyped,
    CreateEVMContactRequestToJSON,
} from './CreateEVMContactRequest';
import {
    CreateSolanaContactRequest,
    instanceOfCreateSolanaContactRequest,
    CreateSolanaContactRequestFromJSON,
    CreateSolanaContactRequestFromJSONTyped,
    CreateSolanaContactRequestToJSON,
} from './CreateSolanaContactRequest';
import {
    CreateStarknetContactRequest,
    instanceOfCreateStarknetContactRequest,
    CreateStarknetContactRequestFromJSON,
    CreateStarknetContactRequestFromJSONTyped,
    CreateStarknetContactRequestToJSON,
} from './CreateStarknetContactRequest';
import {
    CreateSuiContactRequest,
    instanceOfCreateSuiContactRequest,
    CreateSuiContactRequestFromJSON,
    CreateSuiContactRequestFromJSONTyped,
    CreateSuiContactRequestToJSON,
} from './CreateSuiContactRequest';
import {
    CreateTonContactRequest,
    instanceOfCreateTonContactRequest,
    CreateTonContactRequestFromJSON,
    CreateTonContactRequestFromJSONTyped,
    CreateTonContactRequestToJSON,
} from './CreateTonContactRequest';
import {
    CreateUtxoContactRequest,
    instanceOfCreateUtxoContactRequest,
    CreateUtxoContactRequestFromJSON,
    CreateUtxoContactRequestFromJSONTyped,
    CreateUtxoContactRequestToJSON,
} from './CreateUtxoContactRequest';

/**
 * @type CreateContactRequest
 * 
 * @export
 */
export type CreateContactRequest = { type: 'aptos' } & CreateAptosContactRequest | { type: 'cosmos' } & CreateCosmosContactRequest | { type: 'evm' } & CreateEVMContactRequest | { type: 'solana' } & CreateSolanaContactRequest | { type: 'starknet' } & CreateStarknetContactRequest | { type: 'sui' } & CreateSuiContactRequest | { type: 'ton' } & CreateTonContactRequest | { type: 'utxo' } & CreateUtxoContactRequest;

export function CreateContactRequestFromJSON(json: any): CreateContactRequest {
    return CreateContactRequestFromJSONTyped(json, false);
}

export function CreateContactRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateContactRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'aptos':
            return {...CreateAptosContactRequestFromJSONTyped(json, true), type: 'aptos'};
        case 'cosmos':
            return {...CreateCosmosContactRequestFromJSONTyped(json, true), type: 'cosmos'};
        case 'evm':
            return {...CreateEVMContactRequestFromJSONTyped(json, true), type: 'evm'};
        case 'solana':
            return {...CreateSolanaContactRequestFromJSONTyped(json, true), type: 'solana'};
        case 'starknet':
            return {...CreateStarknetContactRequestFromJSONTyped(json, true), type: 'starknet'};
        case 'sui':
            return {...CreateSuiContactRequestFromJSONTyped(json, true), type: 'sui'};
        case 'ton':
            return {...CreateTonContactRequestFromJSONTyped(json, true), type: 'ton'};
        case 'utxo':
            return {...CreateUtxoContactRequestFromJSONTyped(json, true), type: 'utxo'};
        default:
            throw new Error(`No variant of CreateContactRequest exists with 'type=${json['type']}'`);
    }
}

export function CreateContactRequestToJSON(value?: CreateContactRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'aptos':
            return CreateAptosContactRequestToJSON(value);
        case 'cosmos':
            return CreateCosmosContactRequestToJSON(value);
        case 'evm':
            return CreateEVMContactRequestToJSON(value);
        case 'solana':
            return CreateSolanaContactRequestToJSON(value);
        case 'starknet':
            return CreateStarknetContactRequestToJSON(value);
        case 'sui':
            return CreateSuiContactRequestToJSON(value);
        case 'ton':
            return CreateTonContactRequestToJSON(value);
        case 'utxo':
            return CreateUtxoContactRequestToJSON(value);
        default:
            throw new Error(`No variant of CreateContactRequest exists with 'type=${value['type']}'`);
    }

}

