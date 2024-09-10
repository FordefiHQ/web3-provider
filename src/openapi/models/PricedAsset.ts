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
import type { AssetInfo } from './AssetInfo';
import {
    AssetInfoFromJSON,
    AssetInfoFromJSONTyped,
    AssetInfoToJSON,
} from './AssetInfo';
import type { EnrichedAssetIdentifier } from './EnrichedAssetIdentifier';
import {
    EnrichedAssetIdentifierFromJSON,
    EnrichedAssetIdentifierFromJSONTyped,
    EnrichedAssetIdentifierToJSON,
} from './EnrichedAssetIdentifier';
import type { Price } from './Price';
import {
    PriceFromJSON,
    PriceFromJSONTyped,
    PriceToJSON,
} from './Price';

/**
 * 
 * @export
 * @interface PricedAsset
 */
export interface PricedAsset {
    /**
     * 
     * @type {string}
     * @memberof PricedAsset
     */
    type: PricedAssetTypeEnum;
    /**
     * 
     * @type {EnrichedAssetIdentifier}
     * @memberof PricedAsset
     */
    assetIdentifier?: EnrichedAssetIdentifier;
    /**
     * 
     * @type {AssetInfo}
     * @memberof PricedAsset
     */
    assetInfo: AssetInfo;
    /**
     * 
     * @type {Price}
     * @memberof PricedAsset
     */
    price?: Price;
}


/**
 * @export
 */
export const PricedAssetTypeEnum = {
    assetPrice: 'asset_price'
} as const;
export type PricedAssetTypeEnum = typeof PricedAssetTypeEnum[keyof typeof PricedAssetTypeEnum];


/**
 * Check if a given object implements the PricedAsset interface.
 */
export function instanceOfPricedAsset(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "assetInfo" in value;

    return isInstance;
}

export function PricedAssetFromJSON(json: any): PricedAsset {
    return PricedAssetFromJSONTyped(json, false);
}

export function PricedAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): PricedAsset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'assetIdentifier': !exists(json, 'asset_identifier') ? undefined : EnrichedAssetIdentifierFromJSON(json['asset_identifier']),
        'assetInfo': AssetInfoFromJSON(json['asset_info']),
        'price': !exists(json, 'price') ? undefined : PriceFromJSON(json['price']),
    };
}

export function PricedAssetToJSON(value?: PricedAsset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'asset_identifier': EnrichedAssetIdentifierToJSON(value.assetIdentifier),
        'asset_info': AssetInfoToJSON(value.assetInfo),
        'price': PriceToJSON(value.price),
    };
}

