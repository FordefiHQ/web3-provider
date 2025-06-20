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

import type { TonBalanceChangeEffect } from './TonBalanceChangeEffect';
import {
    TonBalanceChangeEffectFromJSON,
} from './TonBalanceChangeEffect';
import type { TonTransferEffect } from './TonTransferEffect';
import {
    TonTransferEffectFromJSON,
} from './TonTransferEffect';

/**
 * 
 * @export
 * @interface TonEffects
 */
export interface TonEffects {
    /**
     * 
     * @type {Array<TonBalanceChangeEffect>}
     * @memberof TonEffects
     */
    balanceChanges: Array<TonBalanceChangeEffect>;
    /**
     * 
     * @type {Array<TonTransferEffect>}
     * @memberof TonEffects
     */
    transfers: Array<TonTransferEffect>;
}

export function TonEffectsFromJSON(json: any): TonEffects {
    return TonEffectsFromJSONTyped(json, false);
}

function TonEffectsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): TonEffects {
    if (json == null) {
        return json;
    }
    return {
        
        'balanceChanges': ((json['balance_changes'] as Array<any>).map(TonBalanceChangeEffectFromJSON)),
        'transfers': ((json['transfers'] as Array<any>).map(TonTransferEffectFromJSON)),
    };
}

