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
import type { PricedAsset } from './PricedAsset';
import {
    PricedAssetFromJSON,
    PricedAssetFromJSONTyped,
    PricedAssetToJSON,
} from './PricedAsset';

/**
 * 
 * @export
 * @interface EvmNativeCurrencyTransfer
 */
export interface EvmNativeCurrencyTransfer {
    /**
     * 
     * @type {PricedAsset}
     * @memberof EvmNativeCurrencyTransfer
     */
    pricedAsset: PricedAsset;
    /**
     * 
     * @type {string}
     * @memberof EvmNativeCurrencyTransfer
     */
    amount: string;
    /**
     * 
     * @type {string}
     * @memberof EvmNativeCurrencyTransfer
     */
    type: EvmNativeCurrencyTransferTypeEnum;
    /**
     * 
     * @type {EnrichedEvmAddress}
     * @memberof EvmNativeCurrencyTransfer
     */
    from: EnrichedEvmAddress;
    /**
     * 
     * @type {EnrichedEvmAddress}
     * @memberof EvmNativeCurrencyTransfer
     */
    to: EnrichedEvmAddress;
    /**
     * 
     * @type {Price}
     * @memberof EvmNativeCurrencyTransfer
     */
    price?: Price;
}


/**
 * @export
 */
export const EvmNativeCurrencyTransferTypeEnum = {
    native: 'native'
} as const;
export type EvmNativeCurrencyTransferTypeEnum = typeof EvmNativeCurrencyTransferTypeEnum[keyof typeof EvmNativeCurrencyTransferTypeEnum];


/**
 * Check if a given object implements the EvmNativeCurrencyTransfer interface.
 */
export function instanceOfEvmNativeCurrencyTransfer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "pricedAsset" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "from" in value;
    isInstance = isInstance && "to" in value;

    return isInstance;
}

export function EvmNativeCurrencyTransferFromJSON(json: any): EvmNativeCurrencyTransfer {
    return EvmNativeCurrencyTransferFromJSONTyped(json, false);
}

export function EvmNativeCurrencyTransferFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvmNativeCurrencyTransfer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pricedAsset': PricedAssetFromJSON(json['priced_asset']),
        'amount': json['amount'],
        'type': json['type'],
        'from': EnrichedEvmAddressFromJSON(json['from']),
        'to': EnrichedEvmAddressFromJSON(json['to']),
        'price': !exists(json, 'price') ? undefined : PriceFromJSON(json['price']),
    };
}

export function EvmNativeCurrencyTransferToJSON(value?: EvmNativeCurrencyTransfer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'priced_asset': PricedAssetToJSON(value.pricedAsset),
        'amount': value.amount,
        'type': value.type,
        'from': EnrichedEvmAddressToJSON(value.from),
        'to': EnrichedEvmAddressToJSON(value.to),
        'price': PriceToJSON(value.price),
    };
}

