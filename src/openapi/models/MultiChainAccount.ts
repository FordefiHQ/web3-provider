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
    AptosAccountRepr,
    instanceOfAptosAccountRepr,
    AptosAccountReprFromJSON,
    AptosAccountReprFromJSONTyped,
    AptosAccountReprToJSON,
} from './AptosAccountRepr';
import {
    CosmosAccountRepr,
    instanceOfCosmosAccountRepr,
    CosmosAccountReprFromJSON,
    CosmosAccountReprFromJSONTyped,
    CosmosAccountReprToJSON,
} from './CosmosAccountRepr';
import {
    EvmAccountRepr,
    instanceOfEvmAccountRepr,
    EvmAccountReprFromJSON,
    EvmAccountReprFromJSONTyped,
    EvmAccountReprToJSON,
} from './EvmAccountRepr';
import {
    SolanaAccountRepr,
    instanceOfSolanaAccountRepr,
    SolanaAccountReprFromJSON,
    SolanaAccountReprFromJSONTyped,
    SolanaAccountReprToJSON,
} from './SolanaAccountRepr';
import {
    SuiAccountRepr,
    instanceOfSuiAccountRepr,
    SuiAccountReprFromJSON,
    SuiAccountReprFromJSONTyped,
    SuiAccountReprToJSON,
} from './SuiAccountRepr';
import {
    UtxoAccountRepr,
    instanceOfUtxoAccountRepr,
    UtxoAccountReprFromJSON,
    UtxoAccountReprFromJSONTyped,
    UtxoAccountReprToJSON,
} from './UtxoAccountRepr';

/**
 * @type MultiChainAccount
 * 
 * @export
 */
export type MultiChainAccount = { chainType: 'aptos' } & AptosAccountRepr | { chainType: 'cosmos' } & CosmosAccountRepr | { chainType: 'evm' } & EvmAccountRepr | { chainType: 'solana' } & SolanaAccountRepr | { chainType: 'sui' } & SuiAccountRepr | { chainType: 'utxo' } & UtxoAccountRepr;

export function MultiChainAccountFromJSON(json: any): MultiChainAccount {
    return MultiChainAccountFromJSONTyped(json, false);
}

export function MultiChainAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultiChainAccount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['chain_type']) {
        case 'aptos':
            return {...AptosAccountReprFromJSONTyped(json, true), chainType: 'aptos'};
        case 'cosmos':
            return {...CosmosAccountReprFromJSONTyped(json, true), chainType: 'cosmos'};
        case 'evm':
            return {...EvmAccountReprFromJSONTyped(json, true), chainType: 'evm'};
        case 'solana':
            return {...SolanaAccountReprFromJSONTyped(json, true), chainType: 'solana'};
        case 'sui':
            return {...SuiAccountReprFromJSONTyped(json, true), chainType: 'sui'};
        case 'utxo':
            return {...UtxoAccountReprFromJSONTyped(json, true), chainType: 'utxo'};
        default:
            throw new Error(`No variant of MultiChainAccount exists with 'chainType=${json['chainType']}'`);
    }
}

export function MultiChainAccountToJSON(value?: MultiChainAccount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['chainType']) {
        case 'aptos':
            return AptosAccountReprToJSON(value);
        case 'cosmos':
            return CosmosAccountReprToJSON(value);
        case 'evm':
            return EvmAccountReprToJSON(value);
        case 'solana':
            return SolanaAccountReprToJSON(value);
        case 'sui':
            return SuiAccountReprToJSON(value);
        case 'utxo':
            return UtxoAccountReprToJSON(value);
        default:
            throw new Error(`No variant of MultiChainAccount exists with 'chainType=${value['chainType']}'`);
    }

}

