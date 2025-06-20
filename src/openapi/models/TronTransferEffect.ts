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

import type { PricedAsset } from './PricedAsset';
import {
    PricedAssetFromJSON,
} from './PricedAsset';
import type { EnrichedTronAddress } from './EnrichedTronAddress';
import {
    EnrichedTronAddressFromJSON,
} from './EnrichedTronAddress';

/**
 * 
 * @export
 * @interface TronTransferEffect
 */
export interface TronTransferEffect {
    /**
     * 
     * @type {PricedAsset}
     * @memberof TronTransferEffect
     */
    pricedAsset: PricedAsset;
    /**
     * 
     * @type {string}
     * @memberof TronTransferEffect
     */
    amount: string;
    /**
     * 
     * @type {EnrichedTronAddress}
     * @memberof TronTransferEffect
     */
    from: EnrichedTronAddress;
    /**
     * 
     * @type {EnrichedTronAddress}
     * @memberof TronTransferEffect
     */
    to: EnrichedTronAddress;
}

export function TronTransferEffectFromJSON(json: any): TronTransferEffect {
    return TronTransferEffectFromJSONTyped(json, false);
}

function TronTransferEffectFromJSONTyped(json: any, _ignoreDiscriminator: boolean): TronTransferEffect {
    if (json == null) {
        return json;
    }
    return {
        
        'pricedAsset': PricedAssetFromJSON(json['priced_asset']),
        'amount': json['amount'],
        'from': EnrichedTronAddressFromJSON(json['from']),
        'to': EnrichedTronAddressFromJSON(json['to']),
    };
}

