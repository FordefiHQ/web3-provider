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
import type { CosmosTokenInfo } from './CosmosTokenInfo';
import {
    CosmosTokenInfoFromJSON,
    CosmosTokenInfoFromJSONTyped,
    CosmosTokenInfoToJSON,
} from './CosmosTokenInfo';
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
 * @interface CosmosTokenBalanceChange
 */
export interface CosmosTokenBalanceChange {
    /**
     * 
     * @type {PricedAsset}
     * @memberof CosmosTokenBalanceChange
     */
    pricedAsset: PricedAsset;
    /**
     * 
     * @type {string}
     * @memberof CosmosTokenBalanceChange
     */
    diff: string;
    /**
     * 
     * @type {EnrichedCosmosBechAddress}
     * @memberof CosmosTokenBalanceChange
     */
    address: EnrichedCosmosBechAddress;
    /**
     * 
     * @type {EnrichedCosmosBechAddress}
     * @memberof CosmosTokenBalanceChange
     */
    owner: EnrichedCosmosBechAddress;
    /**
     * 
     * @type {Price}
     * @memberof CosmosTokenBalanceChange
     */
    price?: Price;
    /**
     * 
     * @type {string}
     * @memberof CosmosTokenBalanceChange
     */
    type: CosmosTokenBalanceChangeTypeEnum;
    /**
     * 
     * @type {CosmosTokenInfo}
     * @memberof CosmosTokenBalanceChange
     */
    coinInfo: CosmosTokenInfo;
}


/**
 * @export
 */
export const CosmosTokenBalanceChangeTypeEnum = {
    token: 'token'
} as const;
export type CosmosTokenBalanceChangeTypeEnum = typeof CosmosTokenBalanceChangeTypeEnum[keyof typeof CosmosTokenBalanceChangeTypeEnum];


/**
 * Check if a given object implements the CosmosTokenBalanceChange interface.
 */
export function instanceOfCosmosTokenBalanceChange(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "pricedAsset" in value;
    isInstance = isInstance && "diff" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "owner" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "coinInfo" in value;

    return isInstance;
}

export function CosmosTokenBalanceChangeFromJSON(json: any): CosmosTokenBalanceChange {
    return CosmosTokenBalanceChangeFromJSONTyped(json, false);
}

export function CosmosTokenBalanceChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosTokenBalanceChange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pricedAsset': PricedAssetFromJSON(json['priced_asset']),
        'diff': json['diff'],
        'address': EnrichedCosmosBechAddressFromJSON(json['address']),
        'owner': EnrichedCosmosBechAddressFromJSON(json['owner']),
        'price': !exists(json, 'price') ? undefined : PriceFromJSON(json['price']),
        'type': json['type'],
        'coinInfo': CosmosTokenInfoFromJSON(json['coin_info']),
    };
}

export function CosmosTokenBalanceChangeToJSON(value?: CosmosTokenBalanceChange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'priced_asset': PricedAssetToJSON(value.pricedAsset),
        'diff': value.diff,
        'address': EnrichedCosmosBechAddressToJSON(value.address),
        'owner': EnrichedCosmosBechAddressToJSON(value.owner),
        'price': PriceToJSON(value.price),
        'type': value.type,
        'coin_info': CosmosTokenInfoToJSON(value.coinInfo),
    };
}

