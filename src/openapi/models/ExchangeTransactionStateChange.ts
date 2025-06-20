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

import type { ExchangeTransactionState } from './ExchangeTransactionState';
import {
    ExchangeTransactionStateFromJSON,
} from './ExchangeTransactionState';
import type { PricedAsset } from './PricedAsset';
import {
    PricedAssetFromJSON,
} from './PricedAsset';
import type { EvmPrices } from './EvmPrices';
import {
    EvmPricesFromJSON,
} from './EvmPrices';
import type { StateChangeReason } from './StateChangeReason';
import {
    StateChangeReasonFromJSON,
} from './StateChangeReason';

/**
 * 
 * @export
 * @interface ExchangeTransactionStateChange
 */
export interface ExchangeTransactionStateChange {
    /**
     * 
     * @type {Date}
     * @memberof ExchangeTransactionStateChange
     */
    changedAt: Date;
    /**
     * 
     * @type {StateChangeReason}
     * @memberof ExchangeTransactionStateChange
     */
    reason?: StateChangeReason;
    /**
     * 
     * @type {Array<PricedAsset>}
     * @memberof ExchangeTransactionStateChange
     * @deprecated
     */
    assetPrices?: Array<PricedAsset>;
    /**
     * 
     * @type {EvmPrices}
     * @memberof ExchangeTransactionStateChange
     */
    prices?: EvmPrices;
    /**
     * 
     * @type {ExchangeTransactionState}
     * @memberof ExchangeTransactionStateChange
     */
    previousState?: ExchangeTransactionState;
    /**
     * 
     * @type {ExchangeTransactionState}
     * @memberof ExchangeTransactionStateChange
     */
    newState: ExchangeTransactionState;
}

export function ExchangeTransactionStateChangeFromJSON(json: any): ExchangeTransactionStateChange {
    return ExchangeTransactionStateChangeFromJSONTyped(json, false);
}

function ExchangeTransactionStateChangeFromJSONTyped(json: any, _ignoreDiscriminator: boolean): ExchangeTransactionStateChange {
    if (json == null) {
        return json;
    }
    return {
        
        'changedAt': (new Date(json['changed_at'])),
        'reason': json['reason'] == null ? undefined : StateChangeReasonFromJSON(json['reason']),
        'assetPrices': json['asset_prices'] == null ? undefined : ((json['asset_prices'] as Array<any>).map(PricedAssetFromJSON)),
        'prices': json['prices'] == null ? undefined : EvmPricesFromJSON(json['prices']),
        'previousState': json['previous_state'] == null ? undefined : ExchangeTransactionStateFromJSON(json['previous_state']),
        'newState': ExchangeTransactionStateFromJSON(json['new_state']),
    };
}

