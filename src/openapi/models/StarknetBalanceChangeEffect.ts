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
import type { EnrichedStarknetAddress } from './EnrichedStarknetAddress';
import {
    EnrichedStarknetAddressFromJSON,
    EnrichedStarknetAddressFromJSONTyped,
    EnrichedStarknetAddressToJSON,
} from './EnrichedStarknetAddress';
import type { PricedAsset } from './PricedAsset';
import {
    PricedAssetFromJSON,
    PricedAssetFromJSONTyped,
    PricedAssetToJSON,
} from './PricedAsset';

/**
 * 
 * @export
 * @interface StarknetBalanceChangeEffect
 */
export interface StarknetBalanceChangeEffect {
    /**
     * 
     * @type {PricedAsset}
     * @memberof StarknetBalanceChangeEffect
     */
    pricedAsset: PricedAsset;
    /**
     * 
     * @type {string}
     * @memberof StarknetBalanceChangeEffect
     */
    diff: string;
    /**
     * 
     * @type {EnrichedStarknetAddress}
     * @memberof StarknetBalanceChangeEffect
     */
    address: EnrichedStarknetAddress;
}

/**
 * Check if a given object implements the StarknetBalanceChangeEffect interface.
 */
export function instanceOfStarknetBalanceChangeEffect(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "pricedAsset" in value;
    isInstance = isInstance && "diff" in value;
    isInstance = isInstance && "address" in value;

    return isInstance;
}

export function StarknetBalanceChangeEffectFromJSON(json: any): StarknetBalanceChangeEffect {
    return StarknetBalanceChangeEffectFromJSONTyped(json, false);
}

export function StarknetBalanceChangeEffectFromJSONTyped(json: any, ignoreDiscriminator: boolean): StarknetBalanceChangeEffect {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pricedAsset': PricedAssetFromJSON(json['priced_asset']),
        'diff': json['diff'],
        'address': EnrichedStarknetAddressFromJSON(json['address']),
    };
}

export function StarknetBalanceChangeEffectToJSON(value?: StarknetBalanceChangeEffect | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'priced_asset': PricedAssetToJSON(value.pricedAsset),
        'diff': value.diff,
        'address': EnrichedStarknetAddressToJSON(value.address),
    };
}

