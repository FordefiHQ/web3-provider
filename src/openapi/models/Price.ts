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
import type { FiatCurrency } from './FiatCurrency';
import {
    FiatCurrencyFromJSON,
    FiatCurrencyFromJSONTyped,
    FiatCurrencyToJSON,
} from './FiatCurrency';

/**
 * 
 * @export
 * @interface Price
 */
export interface Price {
    /**
     * 
     * @type {string}
     * @memberof Price
     */
    price: string;
    /**
     * 
     * @type {FiatCurrency}
     * @memberof Price
     */
    fiatCurrency: FiatCurrency;
}

/**
 * Check if a given object implements the Price interface.
 */
export function instanceOfPrice(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "price" in value;
    isInstance = isInstance && "fiatCurrency" in value;

    return isInstance;
}

export function PriceFromJSON(json: any): Price {
    return PriceFromJSONTyped(json, false);
}

export function PriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Price {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'price': json['price'],
        'fiatCurrency': FiatCurrencyFromJSON(json['fiat_currency']),
    };
}

export function PriceToJSON(value?: Price | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'price': value.price,
        'fiat_currency': FiatCurrencyToJSON(value.fiatCurrency),
    };
}

