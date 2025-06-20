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

import type { EnrichedAddress } from './EnrichedAddress';
import {
    EnrichedAddressFromJSON,
} from './EnrichedAddress';
import type { PricedAsset } from './PricedAsset';
import {
    PricedAssetFromJSON,
} from './PricedAsset';
import type { EnrichedExchangeAddress } from './EnrichedExchangeAddress';
import {
    EnrichedExchangeAddressFromJSON,
} from './EnrichedExchangeAddress';

/**
 * 
 * @export
 * @interface ExchangeTransferEffect
 */
export interface ExchangeTransferEffect {
    /**
     * 
     * @type {PricedAsset}
     * @memberof ExchangeTransferEffect
     */
    pricedAsset: PricedAsset;
    /**
     * 
     * @type {string}
     * @memberof ExchangeTransferEffect
     */
    amount: string;
    /**
     * 
     * @type {EnrichedExchangeAddress}
     * @memberof ExchangeTransferEffect
     */
    from: EnrichedExchangeAddress;
    /**
     * 
     * @type {EnrichedAddress}
     * @memberof ExchangeTransferEffect
     */
    to: EnrichedAddress;
}

export function ExchangeTransferEffectFromJSON(json: any): ExchangeTransferEffect {
    return ExchangeTransferEffectFromJSONTyped(json, false);
}

function ExchangeTransferEffectFromJSONTyped(json: any, _ignoreDiscriminator: boolean): ExchangeTransferEffect {
    if (json == null) {
        return json;
    }
    return {
        
        'pricedAsset': PricedAssetFromJSON(json['priced_asset']),
        'amount': json['amount'],
        'from': EnrichedExchangeAddressFromJSON(json['from']),
        'to': EnrichedAddressFromJSON(json['to']),
    };
}

