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
    AptosSuggestedFees,
    instanceOfAptosSuggestedFees,
    AptosSuggestedFeesFromJSON,
    AptosSuggestedFeesFromJSONTyped,
    AptosSuggestedFeesToJSON,
} from './AptosSuggestedFees';
import {
    CosmosSuggestedFees,
    instanceOfCosmosSuggestedFees,
    CosmosSuggestedFeesFromJSON,
    CosmosSuggestedFeesFromJSONTyped,
    CosmosSuggestedFeesToJSON,
} from './CosmosSuggestedFees';
import {
    EvmSuggestedFees,
    instanceOfEvmSuggestedFees,
    EvmSuggestedFeesFromJSON,
    EvmSuggestedFeesFromJSONTyped,
    EvmSuggestedFeesToJSON,
} from './EvmSuggestedFees';
import {
    SolanaSuggestedFees,
    instanceOfSolanaSuggestedFees,
    SolanaSuggestedFeesFromJSON,
    SolanaSuggestedFeesFromJSONTyped,
    SolanaSuggestedFeesToJSON,
} from './SolanaSuggestedFees';
import {
    SuiSuggestedFees,
    instanceOfSuiSuggestedFees,
    SuiSuggestedFeesFromJSON,
    SuiSuggestedFeesFromJSONTyped,
    SuiSuggestedFeesToJSON,
} from './SuiSuggestedFees';
import {
    TonSuggestedFees,
    instanceOfTonSuggestedFees,
    TonSuggestedFeesFromJSON,
    TonSuggestedFeesFromJSONTyped,
    TonSuggestedFeesToJSON,
} from './TonSuggestedFees';
import {
    UtxoSuggestedFees,
    instanceOfUtxoSuggestedFees,
    UtxoSuggestedFeesFromJSON,
    UtxoSuggestedFeesFromJSONTyped,
    UtxoSuggestedFeesToJSON,
} from './UtxoSuggestedFees';

/**
 * @type SuggestedFees
 * 
 * @export
 */
export type SuggestedFees = { type: 'aptos' } & AptosSuggestedFees | { type: 'cosmos' } & CosmosSuggestedFees | { type: 'evm' } & EvmSuggestedFees | { type: 'solana' } & SolanaSuggestedFees | { type: 'sui' } & SuiSuggestedFees | { type: 'ton' } & TonSuggestedFees | { type: 'utxo' } & UtxoSuggestedFees;

export function SuggestedFeesFromJSON(json: any): SuggestedFees {
    return SuggestedFeesFromJSONTyped(json, false);
}

export function SuggestedFeesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuggestedFees {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'aptos':
            return {...AptosSuggestedFeesFromJSONTyped(json, true), type: 'aptos'};
        case 'cosmos':
            return {...CosmosSuggestedFeesFromJSONTyped(json, true), type: 'cosmos'};
        case 'evm':
            return {...EvmSuggestedFeesFromJSONTyped(json, true), type: 'evm'};
        case 'solana':
            return {...SolanaSuggestedFeesFromJSONTyped(json, true), type: 'solana'};
        case 'sui':
            return {...SuiSuggestedFeesFromJSONTyped(json, true), type: 'sui'};
        case 'ton':
            return {...TonSuggestedFeesFromJSONTyped(json, true), type: 'ton'};
        case 'utxo':
            return {...UtxoSuggestedFeesFromJSONTyped(json, true), type: 'utxo'};
        default:
            throw new Error(`No variant of SuggestedFees exists with 'type=${json['type']}'`);
    }
}

export function SuggestedFeesToJSON(value?: SuggestedFees | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'aptos':
            return AptosSuggestedFeesToJSON(value);
        case 'cosmos':
            return CosmosSuggestedFeesToJSON(value);
        case 'evm':
            return EvmSuggestedFeesToJSON(value);
        case 'solana':
            return SolanaSuggestedFeesToJSON(value);
        case 'sui':
            return SuiSuggestedFeesToJSON(value);
        case 'ton':
            return TonSuggestedFeesToJSON(value);
        case 'utxo':
            return UtxoSuggestedFeesToJSON(value);
        default:
            throw new Error(`No variant of SuggestedFees exists with 'type=${value['type']}'`);
    }

}

