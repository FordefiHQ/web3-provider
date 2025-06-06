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

import type { AptosAddressBookContactAddress } from './AptosAddressBookContactAddress';
import {
    instanceOfAptosAddressBookContactAddress,
    AptosAddressBookContactAddressFromJSON,
    AptosAddressBookContactAddressFromJSONTyped,
    AptosAddressBookContactAddressToJSON,
} from './AptosAddressBookContactAddress';
import type { CosmosAddressBookContactAddress } from './CosmosAddressBookContactAddress';
import {
    instanceOfCosmosAddressBookContactAddress,
    CosmosAddressBookContactAddressFromJSON,
    CosmosAddressBookContactAddressFromJSONTyped,
    CosmosAddressBookContactAddressToJSON,
} from './CosmosAddressBookContactAddress';
import type { EVMAddressBookContactAddress } from './EVMAddressBookContactAddress';
import {
    instanceOfEVMAddressBookContactAddress,
    EVMAddressBookContactAddressFromJSON,
    EVMAddressBookContactAddressFromJSONTyped,
    EVMAddressBookContactAddressToJSON,
} from './EVMAddressBookContactAddress';
import type { SolanaAddressBookContactAddress } from './SolanaAddressBookContactAddress';
import {
    instanceOfSolanaAddressBookContactAddress,
    SolanaAddressBookContactAddressFromJSON,
    SolanaAddressBookContactAddressFromJSONTyped,
    SolanaAddressBookContactAddressToJSON,
} from './SolanaAddressBookContactAddress';
import type { StacksAddressBookContactAddress } from './StacksAddressBookContactAddress';
import {
    instanceOfStacksAddressBookContactAddress,
    StacksAddressBookContactAddressFromJSON,
    StacksAddressBookContactAddressFromJSONTyped,
    StacksAddressBookContactAddressToJSON,
} from './StacksAddressBookContactAddress';
import type { StarknetAddressBookContactAddress } from './StarknetAddressBookContactAddress';
import {
    instanceOfStarknetAddressBookContactAddress,
    StarknetAddressBookContactAddressFromJSON,
    StarknetAddressBookContactAddressFromJSONTyped,
    StarknetAddressBookContactAddressToJSON,
} from './StarknetAddressBookContactAddress';
import type { SuiAddressBookContactAddress } from './SuiAddressBookContactAddress';
import {
    instanceOfSuiAddressBookContactAddress,
    SuiAddressBookContactAddressFromJSON,
    SuiAddressBookContactAddressFromJSONTyped,
    SuiAddressBookContactAddressToJSON,
} from './SuiAddressBookContactAddress';
import type { TonAddressBookContactAddress } from './TonAddressBookContactAddress';
import {
    instanceOfTonAddressBookContactAddress,
    TonAddressBookContactAddressFromJSON,
    TonAddressBookContactAddressFromJSONTyped,
    TonAddressBookContactAddressToJSON,
} from './TonAddressBookContactAddress';
import type { TronAddressBookContactAddress } from './TronAddressBookContactAddress';
import {
    instanceOfTronAddressBookContactAddress,
    TronAddressBookContactAddressFromJSON,
    TronAddressBookContactAddressFromJSONTyped,
    TronAddressBookContactAddressToJSON,
} from './TronAddressBookContactAddress';
import type { UtxoAddressBookContactAddress } from './UtxoAddressBookContactAddress';
import {
    instanceOfUtxoAddressBookContactAddress,
    UtxoAddressBookContactAddressFromJSON,
    UtxoAddressBookContactAddressFromJSONTyped,
    UtxoAddressBookContactAddressToJSON,
} from './UtxoAddressBookContactAddress';

/**
 * @type AddressBookContactDetailsAddress
 * 
 * @export
 */
export type AddressBookContactDetailsAddress = { chainType: 'aptos' } & AptosAddressBookContactAddress | { chainType: 'cosmos' } & CosmosAddressBookContactAddress | { chainType: 'evm' } & EVMAddressBookContactAddress | { chainType: 'solana' } & SolanaAddressBookContactAddress | { chainType: 'stacks' } & StacksAddressBookContactAddress | { chainType: 'starknet' } & StarknetAddressBookContactAddress | { chainType: 'sui' } & SuiAddressBookContactAddress | { chainType: 'ton' } & TonAddressBookContactAddress | { chainType: 'tron' } & TronAddressBookContactAddress | { chainType: 'utxo' } & UtxoAddressBookContactAddress;

export function AddressBookContactDetailsAddressFromJSON(json: any): AddressBookContactDetailsAddress {
    return AddressBookContactDetailsAddressFromJSONTyped(json, false);
}

export function AddressBookContactDetailsAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressBookContactDetailsAddress {
    if (json == null) {
        return json;
    }
    switch (json['chain_type']) {
        case 'aptos':
            return Object.assign({}, AptosAddressBookContactAddressFromJSONTyped(json, true), { chainType: 'aptos' } as const);
        case 'cosmos':
            return Object.assign({}, CosmosAddressBookContactAddressFromJSONTyped(json, true), { chainType: 'cosmos' } as const);
        case 'evm':
            return Object.assign({}, EVMAddressBookContactAddressFromJSONTyped(json, true), { chainType: 'evm' } as const);
        case 'solana':
            return Object.assign({}, SolanaAddressBookContactAddressFromJSONTyped(json, true), { chainType: 'solana' } as const);
        case 'stacks':
            return Object.assign({}, StacksAddressBookContactAddressFromJSONTyped(json, true), { chainType: 'stacks' } as const);
        case 'starknet':
            return Object.assign({}, StarknetAddressBookContactAddressFromJSONTyped(json, true), { chainType: 'starknet' } as const);
        case 'sui':
            return Object.assign({}, SuiAddressBookContactAddressFromJSONTyped(json, true), { chainType: 'sui' } as const);
        case 'ton':
            return Object.assign({}, TonAddressBookContactAddressFromJSONTyped(json, true), { chainType: 'ton' } as const);
        case 'tron':
            return Object.assign({}, TronAddressBookContactAddressFromJSONTyped(json, true), { chainType: 'tron' } as const);
        case 'utxo':
            return Object.assign({}, UtxoAddressBookContactAddressFromJSONTyped(json, true), { chainType: 'utxo' } as const);
        default:
            throw new Error(`No variant of AddressBookContactDetailsAddress exists with 'chainType=${json['chainType']}'`);
    }
}

export function AddressBookContactDetailsAddressToJSON(json: any): any {
    return AddressBookContactDetailsAddressToJSONTyped(json, false);
}

export function AddressBookContactDetailsAddressToJSONTyped(value?: AddressBookContactDetailsAddress | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['chainType']) {
        case 'aptos':
            return Object.assign({}, AptosAddressBookContactAddressToJSON(value), { chainType: 'aptos' } as const);
        case 'cosmos':
            return Object.assign({}, CosmosAddressBookContactAddressToJSON(value), { chainType: 'cosmos' } as const);
        case 'evm':
            return Object.assign({}, EVMAddressBookContactAddressToJSON(value), { chainType: 'evm' } as const);
        case 'solana':
            return Object.assign({}, SolanaAddressBookContactAddressToJSON(value), { chainType: 'solana' } as const);
        case 'stacks':
            return Object.assign({}, StacksAddressBookContactAddressToJSON(value), { chainType: 'stacks' } as const);
        case 'starknet':
            return Object.assign({}, StarknetAddressBookContactAddressToJSON(value), { chainType: 'starknet' } as const);
        case 'sui':
            return Object.assign({}, SuiAddressBookContactAddressToJSON(value), { chainType: 'sui' } as const);
        case 'ton':
            return Object.assign({}, TonAddressBookContactAddressToJSON(value), { chainType: 'ton' } as const);
        case 'tron':
            return Object.assign({}, TronAddressBookContactAddressToJSON(value), { chainType: 'tron' } as const);
        case 'utxo':
            return Object.assign({}, UtxoAddressBookContactAddressToJSON(value), { chainType: 'utxo' } as const);
        default:
            throw new Error(`No variant of AddressBookContactDetailsAddress exists with 'chainType=${value['chainType']}'`);
    }

}

