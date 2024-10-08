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
import type { FeePriority } from './FeePriority';
import {
    FeePriorityFromJSON,
    FeePriorityFromJSONTyped,
    FeePriorityToJSON,
} from './FeePriority';
import type { Price } from './Price';
import {
    PriceFromJSON,
    PriceFromJSONTyped,
    PriceToJSON,
} from './Price';

/**
 * 
 * @export
 * @interface AptosGasPrice
 */
export interface AptosGasPrice {
    /**
     * 
     * @type {FeePriority}
     * @memberof AptosGasPrice
     */
    priorityLevel: FeePriority;
    /**
     * 
     * @type {string}
     * @memberof AptosGasPrice
     */
    price: string;
    /**
     * 
     * @type {Price}
     * @memberof AptosGasPrice
     */
    fiatPrice?: Price;
}

/**
 * Check if a given object implements the AptosGasPrice interface.
 */
export function instanceOfAptosGasPrice(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "priorityLevel" in value;
    isInstance = isInstance && "price" in value;

    return isInstance;
}

export function AptosGasPriceFromJSON(json: any): AptosGasPrice {
    return AptosGasPriceFromJSONTyped(json, false);
}

export function AptosGasPriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AptosGasPrice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'priorityLevel': FeePriorityFromJSON(json['priority_level']),
        'price': json['price'],
        'fiatPrice': !exists(json, 'fiat_price') ? undefined : PriceFromJSON(json['fiat_price']),
    };
}

export function AptosGasPriceToJSON(value?: AptosGasPrice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'priority_level': FeePriorityToJSON(value.priorityLevel),
        'price': value.price,
        'fiat_price': PriceToJSON(value.fiatPrice),
    };
}

