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
import type { CosmosBalanceChangeEffectCoinInfo } from './CosmosBalanceChangeEffectCoinInfo';
import {
    CosmosBalanceChangeEffectCoinInfoFromJSON,
    CosmosBalanceChangeEffectCoinInfoFromJSONTyped,
    CosmosBalanceChangeEffectCoinInfoToJSON,
} from './CosmosBalanceChangeEffectCoinInfo';
import type { CosmosBalanceChangeEffectType } from './CosmosBalanceChangeEffectType';
import {
    CosmosBalanceChangeEffectTypeFromJSON,
    CosmosBalanceChangeEffectTypeFromJSONTyped,
    CosmosBalanceChangeEffectTypeToJSON,
} from './CosmosBalanceChangeEffectType';
import type { EnrichedCosmosBechAddress } from './EnrichedCosmosBechAddress';
import {
    EnrichedCosmosBechAddressFromJSON,
    EnrichedCosmosBechAddressFromJSONTyped,
    EnrichedCosmosBechAddressToJSON,
} from './EnrichedCosmosBechAddress';
import type { Price } from './Price';
import {
    PriceFromJSON,
    PriceFromJSONTyped,
    PriceToJSON,
} from './Price';
import type { PricedAsset } from './PricedAsset';
import {
    PricedAssetFromJSON,
    PricedAssetFromJSONTyped,
    PricedAssetToJSON,
} from './PricedAsset';

/**
 * 
 * @export
 * @interface CosmosBalanceChangeEffect
 */
export interface CosmosBalanceChangeEffect {
    /**
     * 
     * @type {PricedAsset}
     * @memberof CosmosBalanceChangeEffect
     */
    pricedAsset: PricedAsset;
    /**
     * 
     * @type {string}
     * @memberof CosmosBalanceChangeEffect
     */
    diff: string;
    /**
     * 
     * @type {CosmosBalanceChangeEffectType}
     * @memberof CosmosBalanceChangeEffect
     */
    type: CosmosBalanceChangeEffectType;
    /**
     * 
     * @type {CosmosBalanceChangeEffectCoinInfo}
     * @memberof CosmosBalanceChangeEffect
     * @deprecated
     */
    coinInfo: CosmosBalanceChangeEffectCoinInfo;
    /**
     * 
     * @type {EnrichedCosmosBechAddress}
     * @memberof CosmosBalanceChangeEffect
     */
    address: EnrichedCosmosBechAddress;
    /**
     * 
     * @type {EnrichedCosmosBechAddress}
     * @memberof CosmosBalanceChangeEffect
     */
    owner?: EnrichedCosmosBechAddress;
    /**
     * 
     * @type {Price}
     * @memberof CosmosBalanceChangeEffect
     */
    price?: Price;
}

/**
 * Check if a given object implements the CosmosBalanceChangeEffect interface.
 */
export function instanceOfCosmosBalanceChangeEffect(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "pricedAsset" in value;
    isInstance = isInstance && "diff" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "coinInfo" in value;
    isInstance = isInstance && "address" in value;

    return isInstance;
}

export function CosmosBalanceChangeEffectFromJSON(json: any): CosmosBalanceChangeEffect {
    return CosmosBalanceChangeEffectFromJSONTyped(json, false);
}

export function CosmosBalanceChangeEffectFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosBalanceChangeEffect {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pricedAsset': PricedAssetFromJSON(json['priced_asset']),
        'diff': json['diff'],
        'type': CosmosBalanceChangeEffectTypeFromJSON(json['type']),
        'coinInfo': CosmosBalanceChangeEffectCoinInfoFromJSON(json['coin_info']),
        'address': EnrichedCosmosBechAddressFromJSON(json['address']),
        'owner': !exists(json, 'owner') ? undefined : EnrichedCosmosBechAddressFromJSON(json['owner']),
        'price': !exists(json, 'price') ? undefined : PriceFromJSON(json['price']),
    };
}

export function CosmosBalanceChangeEffectToJSON(value?: CosmosBalanceChangeEffect | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'priced_asset': PricedAssetToJSON(value.pricedAsset),
        'diff': value.diff,
        'type': CosmosBalanceChangeEffectTypeToJSON(value.type),
        'coin_info': CosmosBalanceChangeEffectCoinInfoToJSON(value.coinInfo),
        'address': EnrichedCosmosBechAddressToJSON(value.address),
        'owner': EnrichedCosmosBechAddressToJSON(value.owner),
        'price': PriceToJSON(value.price),
    };
}

