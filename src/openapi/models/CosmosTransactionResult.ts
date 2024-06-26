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

import { exists, mapValues } from '../runtime';
import type { CosmosEffects } from './CosmosEffects';
import {
    CosmosEffectsFromJSON,
    CosmosEffectsFromJSONTyped,
    CosmosEffectsToJSON,
} from './CosmosEffects';
import type { CosmosGasDebit } from './CosmosGasDebit';
import {
    CosmosGasDebitFromJSON,
    CosmosGasDebitFromJSONTyped,
    CosmosGasDebitToJSON,
} from './CosmosGasDebit';

/**
 * 
 * @export
 * @interface CosmosTransactionResult
 */
export interface CosmosTransactionResult {
    /**
     * 
     * @type {string}
     * @memberof CosmosTransactionResult
     */
    message?: string;
    /**
     * 
     * @type {CosmosGasDebit}
     * @memberof CosmosTransactionResult
     */
    gasDebit: CosmosGasDebit;
    /**
     * 
     * @type {CosmosEffects}
     * @memberof CosmosTransactionResult
     */
    effects: CosmosEffects;
}

/**
 * Check if a given object implements the CosmosTransactionResult interface.
 */
export function instanceOfCosmosTransactionResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "gasDebit" in value;
    isInstance = isInstance && "effects" in value;

    return isInstance;
}

export function CosmosTransactionResultFromJSON(json: any): CosmosTransactionResult {
    return CosmosTransactionResultFromJSONTyped(json, false);
}

export function CosmosTransactionResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosTransactionResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'gasDebit': CosmosGasDebitFromJSON(json['gas_debit']),
        'effects': CosmosEffectsFromJSON(json['effects']),
    };
}

export function CosmosTransactionResultToJSON(value?: CosmosTransactionResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'gas_debit': CosmosGasDebitToJSON(value.gasDebit),
        'effects': CosmosEffectsToJSON(value.effects),
    };
}

