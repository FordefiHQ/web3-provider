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

import type { DynamicGas } from './DynamicGas';
import {
    instanceOfDynamicGas,
    DynamicGasFromJSON,
    DynamicGasFromJSONTyped,
    DynamicGasToJSON,
} from './DynamicGas';
import type { LegacyGas } from './LegacyGas';
import {
    instanceOfLegacyGas,
    LegacyGasFromJSON,
    LegacyGasFromJSONTyped,
    LegacyGasToJSON,
} from './LegacyGas';

/**
 * @type EvmTransactionGasSubmitted
 * 
 * @export
 */
export type EvmTransactionGasSubmitted = { type: 'dynamic' } & DynamicGas | { type: 'legacy' } & LegacyGas;

export function EvmTransactionGasSubmittedFromJSON(json: any): EvmTransactionGasSubmitted {
    return EvmTransactionGasSubmittedFromJSONTyped(json, false);
}

export function EvmTransactionGasSubmittedFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvmTransactionGasSubmitted {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'dynamic':
            return Object.assign({}, DynamicGasFromJSONTyped(json, true), { type: 'dynamic' } as const);
        case 'legacy':
            return Object.assign({}, LegacyGasFromJSONTyped(json, true), { type: 'legacy' } as const);
        default:
            throw new Error(`No variant of EvmTransactionGasSubmitted exists with 'type=${json['type']}'`);
    }
}

export function EvmTransactionGasSubmittedToJSON(json: any): any {
    return EvmTransactionGasSubmittedToJSONTyped(json, false);
}

export function EvmTransactionGasSubmittedToJSONTyped(value?: EvmTransactionGasSubmitted | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'dynamic':
            return Object.assign({}, DynamicGasToJSON(value), { type: 'dynamic' } as const);
        case 'legacy':
            return Object.assign({}, LegacyGasToJSON(value), { type: 'legacy' } as const);
        default:
            throw new Error(`No variant of EvmTransactionGasSubmitted exists with 'type=${value['type']}'`);
    }

}

