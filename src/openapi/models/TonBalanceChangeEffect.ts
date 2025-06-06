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
import type { EnrichedTonAddress } from './EnrichedTonAddress';
import {
    EnrichedTonAddressFromJSON,
    EnrichedTonAddressFromJSONTyped,
    EnrichedTonAddressToJSON,
    EnrichedTonAddressToJSONTyped,
} from './EnrichedTonAddress';
import type { PricedAsset } from './PricedAsset';
import {
    PricedAssetFromJSON,
    PricedAssetFromJSONTyped,
    PricedAssetToJSON,
    PricedAssetToJSONTyped,
} from './PricedAsset';

/**
 * 
 * @export
 * @interface TonBalanceChangeEffect
 */
export interface TonBalanceChangeEffect {
    /**
     * 
     * @type {PricedAsset}
     * @memberof TonBalanceChangeEffect
     */
    pricedAsset: PricedAsset;
    /**
     * 
     * @type {string}
     * @memberof TonBalanceChangeEffect
     */
    diff: string;
    /**
     * 
     * @type {EnrichedTonAddress}
     * @memberof TonBalanceChangeEffect
     */
    address: EnrichedTonAddress;
}

/**
 * Check if a given object implements the TonBalanceChangeEffect interface.
 */
export function instanceOfTonBalanceChangeEffect(value: object): value is TonBalanceChangeEffect {
    if (!('pricedAsset' in value) || value['pricedAsset'] === undefined) return false;
    if (!('diff' in value) || value['diff'] === undefined) return false;
    if (!('address' in value) || value['address'] === undefined) return false;
    return true;
}

export function TonBalanceChangeEffectFromJSON(json: any): TonBalanceChangeEffect {
    return TonBalanceChangeEffectFromJSONTyped(json, false);
}

export function TonBalanceChangeEffectFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonBalanceChangeEffect {
    if (json == null) {
        return json;
    }
    return {
        
        'pricedAsset': PricedAssetFromJSON(json['priced_asset']),
        'diff': json['diff'],
        'address': EnrichedTonAddressFromJSON(json['address']),
    };
}

export function TonBalanceChangeEffectToJSON(json: any): TonBalanceChangeEffect {
    return TonBalanceChangeEffectToJSONTyped(json, false);
}

export function TonBalanceChangeEffectToJSONTyped(value?: TonBalanceChangeEffect | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'priced_asset': PricedAssetToJSON(value['pricedAsset']),
        'diff': value['diff'],
        'address': EnrichedTonAddressToJSON(value['address']),
    };
}

