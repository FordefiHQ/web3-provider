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
import type { AptosGasConfigRequestPrice } from './AptosGasConfigRequestPrice';
import {
    AptosGasConfigRequestPriceFromJSON,
    AptosGasConfigRequestPriceFromJSONTyped,
    AptosGasConfigRequestPriceToJSON,
} from './AptosGasConfigRequestPrice';

/**
 * 
 * @export
 * @interface AptosGasConfigRequest
 */
export interface AptosGasConfigRequest {
    /**
     * 
     * @type {string}
     * @memberof AptosGasConfigRequest
     */
    maxGas?: string;
    /**
     * 
     * @type {AptosGasConfigRequestPrice}
     * @memberof AptosGasConfigRequest
     */
    price: AptosGasConfigRequestPrice;
}

/**
 * Check if a given object implements the AptosGasConfigRequest interface.
 */
export function instanceOfAptosGasConfigRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "price" in value;

    return isInstance;
}

export function AptosGasConfigRequestFromJSON(json: any): AptosGasConfigRequest {
    return AptosGasConfigRequestFromJSONTyped(json, false);
}

export function AptosGasConfigRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AptosGasConfigRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'maxGas': !exists(json, 'max_gas') ? undefined : json['max_gas'],
        'price': AptosGasConfigRequestPriceFromJSON(json['price']),
    };
}

export function AptosGasConfigRequestToJSON(value?: AptosGasConfigRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'max_gas': value.maxGas,
        'price': AptosGasConfigRequestPriceToJSON(value.price),
    };
}

