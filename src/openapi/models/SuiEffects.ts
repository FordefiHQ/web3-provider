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

import type { SuiBalanceChangeEffect } from './SuiBalanceChangeEffect';
import {
    SuiBalanceChangeEffectFromJSON,
} from './SuiBalanceChangeEffect';
import type { SuiTransferEffect } from './SuiTransferEffect';
import {
    SuiTransferEffectFromJSON,
} from './SuiTransferEffect';

/**
 * 
 * @export
 * @interface SuiEffects
 */
export interface SuiEffects {
    /**
     * 
     * @type {Array<SuiBalanceChangeEffect>}
     * @memberof SuiEffects
     */
    balanceChanges: Array<SuiBalanceChangeEffect>;
    /**
     * 
     * @type {Array<SuiTransferEffect>}
     * @memberof SuiEffects
     */
    transfers: Array<SuiTransferEffect>;
}

export function SuiEffectsFromJSON(json: any): SuiEffects {
    return SuiEffectsFromJSONTyped(json, false);
}

function SuiEffectsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): SuiEffects {
    if (json == null) {
        return json;
    }
    return {
        
        'balanceChanges': ((json['balance_changes'] as Array<any>).map(SuiBalanceChangeEffectFromJSON)),
        'transfers': ((json['transfers'] as Array<any>).map(SuiTransferEffectFromJSON)),
    };
}

