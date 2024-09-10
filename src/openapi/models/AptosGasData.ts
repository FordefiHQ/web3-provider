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
import type { AptosGasPrice } from './AptosGasPrice';
import {
    AptosGasPriceFromJSON,
    AptosGasPriceFromJSONTyped,
    AptosGasPriceToJSON,
} from './AptosGasPrice';

/**
 * 
 * @export
 * @interface AptosGasData
 */
export interface AptosGasData {
    /**
     * 
     * @type {string}
     * @memberof AptosGasData
     */
    gasLimit: string;
    /**
     * 
     * @type {AptosGasPrice}
     * @memberof AptosGasData
     */
    price: AptosGasPrice;
}

/**
 * Check if a given object implements the AptosGasData interface.
 */
export function instanceOfAptosGasData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "gasLimit" in value;
    isInstance = isInstance && "price" in value;

    return isInstance;
}

export function AptosGasDataFromJSON(json: any): AptosGasData {
    return AptosGasDataFromJSONTyped(json, false);
}

export function AptosGasDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AptosGasData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gasLimit': json['gas_limit'],
        'price': AptosGasPriceFromJSON(json['price']),
    };
}

export function AptosGasDataToJSON(value?: AptosGasData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gas_limit': value.gasLimit,
        'price': AptosGasPriceToJSON(value.price),
    };
}
