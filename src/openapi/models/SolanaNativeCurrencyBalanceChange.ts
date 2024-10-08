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
import type { EnrichedSolanaAddress } from './EnrichedSolanaAddress';
import {
    EnrichedSolanaAddressFromJSON,
    EnrichedSolanaAddressFromJSONTyped,
    EnrichedSolanaAddressToJSON,
} from './EnrichedSolanaAddress';
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
 * @interface SolanaNativeCurrencyBalanceChange
 */
export interface SolanaNativeCurrencyBalanceChange {
    /**
     * 
     * @type {PricedAsset}
     * @memberof SolanaNativeCurrencyBalanceChange
     */
    pricedAsset: PricedAsset;
    /**
     * 
     * @type {string}
     * @memberof SolanaNativeCurrencyBalanceChange
     */
    diff: string;
    /**
     * 
     * @type {string}
     * @memberof SolanaNativeCurrencyBalanceChange
     */
    type: SolanaNativeCurrencyBalanceChangeTypeEnum;
    /**
     * 
     * @type {EnrichedSolanaAddress}
     * @memberof SolanaNativeCurrencyBalanceChange
     */
    address: EnrichedSolanaAddress;
    /**
     * 
     * @type {Price}
     * @memberof SolanaNativeCurrencyBalanceChange
     */
    price?: Price;
}


/**
 * @export
 */
export const SolanaNativeCurrencyBalanceChangeTypeEnum = {
    native: 'native'
} as const;
export type SolanaNativeCurrencyBalanceChangeTypeEnum = typeof SolanaNativeCurrencyBalanceChangeTypeEnum[keyof typeof SolanaNativeCurrencyBalanceChangeTypeEnum];


/**
 * Check if a given object implements the SolanaNativeCurrencyBalanceChange interface.
 */
export function instanceOfSolanaNativeCurrencyBalanceChange(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "pricedAsset" in value;
    isInstance = isInstance && "diff" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "address" in value;

    return isInstance;
}

export function SolanaNativeCurrencyBalanceChangeFromJSON(json: any): SolanaNativeCurrencyBalanceChange {
    return SolanaNativeCurrencyBalanceChangeFromJSONTyped(json, false);
}

export function SolanaNativeCurrencyBalanceChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolanaNativeCurrencyBalanceChange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pricedAsset': PricedAssetFromJSON(json['priced_asset']),
        'diff': json['diff'],
        'type': json['type'],
        'address': EnrichedSolanaAddressFromJSON(json['address']),
        'price': !exists(json, 'price') ? undefined : PriceFromJSON(json['price']),
    };
}

export function SolanaNativeCurrencyBalanceChangeToJSON(value?: SolanaNativeCurrencyBalanceChange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'priced_asset': PricedAssetToJSON(value.pricedAsset),
        'diff': value.diff,
        'type': value.type,
        'address': EnrichedSolanaAddressToJSON(value.address),
        'price': PriceToJSON(value.price),
    };
}

