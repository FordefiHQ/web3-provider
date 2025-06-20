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

import type { ExchangeTransferEffect } from './ExchangeTransferEffect';
import {
    ExchangeTransferEffectFromJSON,
} from './ExchangeTransferEffect';
import type { ExchangeBalanceChangeEffect } from './ExchangeBalanceChangeEffect';
import {
    ExchangeBalanceChangeEffectFromJSON,
} from './ExchangeBalanceChangeEffect';

/**
 * 
 * @export
 * @interface ExchangeEffects
 */
export interface ExchangeEffects {
    /**
     * 
     * @type {Array<ExchangeBalanceChangeEffect>}
     * @memberof ExchangeEffects
     */
    balanceChanges: Array<ExchangeBalanceChangeEffect>;
    /**
     * 
     * @type {Array<ExchangeTransferEffect>}
     * @memberof ExchangeEffects
     */
    transfers: Array<ExchangeTransferEffect>;
}

export function ExchangeEffectsFromJSON(json: any): ExchangeEffects {
    return ExchangeEffectsFromJSONTyped(json, false);
}

function ExchangeEffectsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): ExchangeEffects {
    if (json == null) {
        return json;
    }
    return {
        
        'balanceChanges': ((json['balance_changes'] as Array<any>).map(ExchangeBalanceChangeEffectFromJSON)),
        'transfers': ((json['transfers'] as Array<any>).map(ExchangeTransferEffectFromJSON)),
    };
}

