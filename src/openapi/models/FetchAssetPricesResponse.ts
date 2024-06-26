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
import type { PricedAsset } from './PricedAsset';
import {
    PricedAssetFromJSON,
    PricedAssetFromJSONTyped,
    PricedAssetToJSON,
} from './PricedAsset';

/**
 * 
 * @export
 * @interface FetchAssetPricesResponse
 */
export interface FetchAssetPricesResponse {
    /**
     * 
     * @type {Array<PricedAsset>}
     * @memberof FetchAssetPricesResponse
     */
    pricedAssets: Array<PricedAsset>;
}

/**
 * Check if a given object implements the FetchAssetPricesResponse interface.
 */
export function instanceOfFetchAssetPricesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "pricedAssets" in value;

    return isInstance;
}

export function FetchAssetPricesResponseFromJSON(json: any): FetchAssetPricesResponse {
    return FetchAssetPricesResponseFromJSONTyped(json, false);
}

export function FetchAssetPricesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FetchAssetPricesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pricedAssets': ((json['priced_assets'] as Array<any>).map(PricedAssetFromJSON)),
    };
}

export function FetchAssetPricesResponseToJSON(value?: FetchAssetPricesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'priced_assets': ((value.pricedAssets as Array<any>).map(PricedAssetToJSON)),
    };
}

