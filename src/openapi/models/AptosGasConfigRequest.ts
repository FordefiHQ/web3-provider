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

import type { AptosGasConfigRequestPrice } from './AptosGasConfigRequestPrice';
import {
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

export function AptosGasConfigRequestToJSON(json: any): AptosGasConfigRequest {
    return AptosGasConfigRequestToJSONTyped(json, false);
}

function AptosGasConfigRequestToJSONTyped(value?: AptosGasConfigRequest | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'max_gas': value['maxGas'],
        'price': AptosGasConfigRequestPriceToJSON(value['price']),
    };
}

