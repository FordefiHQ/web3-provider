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
import type { CosmosCoinWithAmount } from './CosmosCoinWithAmount';
import {
    CosmosCoinWithAmountFromJSON,
    CosmosCoinWithAmountFromJSONTyped,
    CosmosCoinWithAmountToJSON,
} from './CosmosCoinWithAmount';
import type { Price } from './Price';
import {
    PriceFromJSON,
    PriceFromJSONTyped,
    PriceToJSON,
} from './Price';

/**
 * 
 * @export
 * @interface CosmosGasDebit
 */
export interface CosmosGasDebit {
    /**
     * 
     * @type {string}
     * @memberof CosmosGasDebit
     */
    gasUsed: string;
    /**
     * 
     * @type {Array<CosmosCoinWithAmount>}
     * @memberof CosmosGasDebit
     */
    totalFee: Array<CosmosCoinWithAmount>;
    /**
     * 
     * @type {Array<Price>}
     * @memberof CosmosGasDebit
     */
    fiatPrices: Array<Price>;
}

/**
 * Check if a given object implements the CosmosGasDebit interface.
 */
export function instanceOfCosmosGasDebit(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "gasUsed" in value;
    isInstance = isInstance && "totalFee" in value;
    isInstance = isInstance && "fiatPrices" in value;

    return isInstance;
}

export function CosmosGasDebitFromJSON(json: any): CosmosGasDebit {
    return CosmosGasDebitFromJSONTyped(json, false);
}

export function CosmosGasDebitFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosGasDebit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gasUsed': json['gas_used'],
        'totalFee': ((json['total_fee'] as Array<any>).map(CosmosCoinWithAmountFromJSON)),
        'fiatPrices': ((json['fiat_prices'] as Array<any>).map(PriceFromJSON)),
    };
}

export function CosmosGasDebitToJSON(value?: CosmosGasDebit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gas_used': value.gasUsed,
        'total_fee': ((value.totalFee as Array<any>).map(CosmosCoinWithAmountToJSON)),
        'fiat_prices': ((value.fiatPrices as Array<any>).map(PriceToJSON)),
    };
}

