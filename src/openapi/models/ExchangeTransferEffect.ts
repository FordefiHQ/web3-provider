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

import { mapValues } from '../runtime';
import type { EnrichedAddress } from './EnrichedAddress';
import {
    EnrichedAddressFromJSON,
    EnrichedAddressFromJSONTyped,
    EnrichedAddressToJSON,
    EnrichedAddressToJSONTyped,
} from './EnrichedAddress';
import type { PricedAsset } from './PricedAsset';
import {
    PricedAssetFromJSON,
    PricedAssetFromJSONTyped,
    PricedAssetToJSON,
    PricedAssetToJSONTyped,
} from './PricedAsset';
import type { EnrichedExchangeAddress } from './EnrichedExchangeAddress';
import {
    EnrichedExchangeAddressFromJSON,
    EnrichedExchangeAddressFromJSONTyped,
    EnrichedExchangeAddressToJSON,
    EnrichedExchangeAddressToJSONTyped,
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

/**
 * Check if a given object implements the ExchangeTransferEffect interface.
 */
export function instanceOfExchangeTransferEffect(value: object): value is ExchangeTransferEffect {
    if (!('pricedAsset' in value) || value['pricedAsset'] === undefined) return false;
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('from' in value) || value['from'] === undefined) return false;
    if (!('to' in value) || value['to'] === undefined) return false;
    return true;
}

export function ExchangeTransferEffectFromJSON(json: any): ExchangeTransferEffect {
    return ExchangeTransferEffectFromJSONTyped(json, false);
}

export function ExchangeTransferEffectFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExchangeTransferEffect {
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

export function ExchangeTransferEffectToJSON(json: any): ExchangeTransferEffect {
    return ExchangeTransferEffectToJSONTyped(json, false);
}

export function ExchangeTransferEffectToJSONTyped(value?: ExchangeTransferEffect | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'priced_asset': PricedAssetToJSON(value['pricedAsset']),
        'amount': value['amount'],
        'from': EnrichedExchangeAddressToJSON(value['from']),
        'to': EnrichedAddressToJSON(value['to']),
    };
}

