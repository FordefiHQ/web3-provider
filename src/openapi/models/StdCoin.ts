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
/**
 * 
 * @export
 * @interface StdCoin
 */
export interface StdCoin {
    /**
     * 
     * @type {string}
     * @memberof StdCoin
     */
    denom: string;
    /**
     * 
     * @type {string}
     * @memberof StdCoin
     */
    amount: string;
}

/**
 * Check if a given object implements the StdCoin interface.
 */
export function instanceOfStdCoin(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "denom" in value;
    isInstance = isInstance && "amount" in value;

    return isInstance;
}

export function StdCoinFromJSON(json: any): StdCoin {
    return StdCoinFromJSONTyped(json, false);
}

export function StdCoinFromJSONTyped(json: any, ignoreDiscriminator: boolean): StdCoin {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'denom': json['denom'],
        'amount': json['amount'],
    };
}

export function StdCoinToJSON(value?: StdCoin | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'denom': value.denom,
        'amount': value.amount,
    };
}

