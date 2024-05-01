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
import type { CosmosNativeCoin } from './CosmosNativeCoin';
import {
    CosmosNativeCoinFromJSON,
    CosmosNativeCoinFromJSONTyped,
    CosmosNativeCoinToJSON,
} from './CosmosNativeCoin';

/**
 * 
 * @export
 * @interface CosmosNativeCoinInfo
 */
export interface CosmosNativeCoinInfo {
    /**
     * 
     * @type {boolean}
     * @memberof CosmosNativeCoinInfo
     */
    isVerified: boolean;
    /**
     * 
     * @type {CosmosNativeCoin}
     * @memberof CosmosNativeCoinInfo
     */
    coin: CosmosNativeCoin;
}

/**
 * Check if a given object implements the CosmosNativeCoinInfo interface.
 */
export function instanceOfCosmosNativeCoinInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "isVerified" in value;
    isInstance = isInstance && "coin" in value;

    return isInstance;
}

export function CosmosNativeCoinInfoFromJSON(json: any): CosmosNativeCoinInfo {
    return CosmosNativeCoinInfoFromJSONTyped(json, false);
}

export function CosmosNativeCoinInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosNativeCoinInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isVerified': json['is_verified'],
        'coin': CosmosNativeCoinFromJSON(json['coin']),
    };
}

export function CosmosNativeCoinInfoToJSON(value?: CosmosNativeCoinInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'is_verified': value.isVerified,
        'coin': CosmosNativeCoinToJSON(value.coin),
    };
}

