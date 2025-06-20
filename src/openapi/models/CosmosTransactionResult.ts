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

import type { CosmosGasDebit } from './CosmosGasDebit';
import {
    CosmosGasDebitFromJSON,
} from './CosmosGasDebit';
import type { CosmosEffects } from './CosmosEffects';
import {
    CosmosEffectsFromJSON,
} from './CosmosEffects';

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

export function CosmosTransactionResultFromJSON(json: any): CosmosTransactionResult {
    return CosmosTransactionResultFromJSONTyped(json, false);
}

function CosmosTransactionResultFromJSONTyped(json: any, _ignoreDiscriminator: boolean): CosmosTransactionResult {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'gasDebit': CosmosGasDebitFromJSON(json['gas_debit']),
        'effects': CosmosEffectsFromJSON(json['effects']),
    };
}

