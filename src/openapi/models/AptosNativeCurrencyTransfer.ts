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
import type { EnrichedAptosAddress } from './EnrichedAptosAddress';
import {
    EnrichedAptosAddressFromJSON,
    EnrichedAptosAddressFromJSONTyped,
    EnrichedAptosAddressToJSON,
} from './EnrichedAptosAddress';
import type { PricedAsset } from './PricedAsset';
import {
    PricedAssetFromJSON,
    PricedAssetFromJSONTyped,
    PricedAssetToJSON,
} from './PricedAsset';

/**
 * 
 * @export
 * @interface AptosNativeCurrencyTransfer
 */
export interface AptosNativeCurrencyTransfer {
    /**
     * 
     * @type {PricedAsset}
     * @memberof AptosNativeCurrencyTransfer
     */
    pricedAsset: PricedAsset;
    /**
     * 
     * @type {string}
     * @memberof AptosNativeCurrencyTransfer
     */
    amount: string;
    /**
     * 
     * @type {EnrichedAptosAddress}
     * @memberof AptosNativeCurrencyTransfer
     */
    from: EnrichedAptosAddress;
    /**
     * 
     * @type {EnrichedAptosAddress}
     * @memberof AptosNativeCurrencyTransfer
     */
    to: EnrichedAptosAddress;
    /**
     * 
     * @type {string}
     * @memberof AptosNativeCurrencyTransfer
     */
    type: AptosNativeCurrencyTransferTypeEnum;
}


/**
 * @export
 */
export const AptosNativeCurrencyTransferTypeEnum = {
    native: 'native'
} as const;
export type AptosNativeCurrencyTransferTypeEnum = typeof AptosNativeCurrencyTransferTypeEnum[keyof typeof AptosNativeCurrencyTransferTypeEnum];


/**
 * Check if a given object implements the AptosNativeCurrencyTransfer interface.
 */
export function instanceOfAptosNativeCurrencyTransfer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "pricedAsset" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "from" in value;
    isInstance = isInstance && "to" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function AptosNativeCurrencyTransferFromJSON(json: any): AptosNativeCurrencyTransfer {
    return AptosNativeCurrencyTransferFromJSONTyped(json, false);
}

export function AptosNativeCurrencyTransferFromJSONTyped(json: any, ignoreDiscriminator: boolean): AptosNativeCurrencyTransfer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pricedAsset': PricedAssetFromJSON(json['priced_asset']),
        'amount': json['amount'],
        'from': EnrichedAptosAddressFromJSON(json['from']),
        'to': EnrichedAptosAddressFromJSON(json['to']),
        'type': json['type'],
    };
}

export function AptosNativeCurrencyTransferToJSON(value?: AptosNativeCurrencyTransfer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'priced_asset': PricedAssetToJSON(value.pricedAsset),
        'amount': value.amount,
        'from': EnrichedAptosAddressToJSON(value.from),
        'to': EnrichedAptosAddressToJSON(value.to),
        'type': value.type,
    };
}

