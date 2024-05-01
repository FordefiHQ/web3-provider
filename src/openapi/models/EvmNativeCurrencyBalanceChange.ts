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
import type { EnrichedEvmAddress } from './EnrichedEvmAddress';
import {
    EnrichedEvmAddressFromJSON,
    EnrichedEvmAddressFromJSONTyped,
    EnrichedEvmAddressToJSON,
} from './EnrichedEvmAddress';
import type { Price } from './Price';
import {
    PriceFromJSON,
    PriceFromJSONTyped,
    PriceToJSON,
} from './Price';

/**
 * 
 * @export
 * @interface EvmNativeCurrencyBalanceChange
 */
export interface EvmNativeCurrencyBalanceChange {
    /**
     * 
     * @type {string}
     * @memberof EvmNativeCurrencyBalanceChange
     */
    type: EvmNativeCurrencyBalanceChangeTypeEnum;
    /**
     * 
     * @type {EnrichedEvmAddress}
     * @memberof EvmNativeCurrencyBalanceChange
     */
    address: EnrichedEvmAddress;
    /**
     * 
     * @type {string}
     * @memberof EvmNativeCurrencyBalanceChange
     */
    diff: string;
    /**
     * 
     * @type {Price}
     * @memberof EvmNativeCurrencyBalanceChange
     */
    price?: Price;
}


/**
 * @export
 */
export const EvmNativeCurrencyBalanceChangeTypeEnum = {
    native: 'native'
} as const;
export type EvmNativeCurrencyBalanceChangeTypeEnum = typeof EvmNativeCurrencyBalanceChangeTypeEnum[keyof typeof EvmNativeCurrencyBalanceChangeTypeEnum];


/**
 * Check if a given object implements the EvmNativeCurrencyBalanceChange interface.
 */
export function instanceOfEvmNativeCurrencyBalanceChange(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "diff" in value;

    return isInstance;
}

export function EvmNativeCurrencyBalanceChangeFromJSON(json: any): EvmNativeCurrencyBalanceChange {
    return EvmNativeCurrencyBalanceChangeFromJSONTyped(json, false);
}

export function EvmNativeCurrencyBalanceChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvmNativeCurrencyBalanceChange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'address': EnrichedEvmAddressFromJSON(json['address']),
        'diff': json['diff'],
        'price': !exists(json, 'price') ? undefined : PriceFromJSON(json['price']),
    };
}

export function EvmNativeCurrencyBalanceChangeToJSON(value?: EvmNativeCurrencyBalanceChange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'address': EnrichedEvmAddressToJSON(value.address),
        'diff': value.diff,
        'price': PriceToJSON(value.price),
    };
}

