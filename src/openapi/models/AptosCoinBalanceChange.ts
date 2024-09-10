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
 * @interface AptosCoinBalanceChange
 */
export interface AptosCoinBalanceChange {
    /**
     * 
     * @type {PricedAsset}
     * @memberof AptosCoinBalanceChange
     */
    pricedAsset: PricedAsset;
    /**
     * 
     * @type {string}
     * @memberof AptosCoinBalanceChange
     */
    diff: string;
    /**
     * 
     * @type {string}
     * @memberof AptosCoinBalanceChange
     */
    type: AptosCoinBalanceChangeTypeEnum;
    /**
     * 
     * @type {EnrichedAptosAddress}
     * @memberof AptosCoinBalanceChange
     */
    address: EnrichedAptosAddress;
    /**
     * 
     * @type {EnrichedAptosAddress}
     * @memberof AptosCoinBalanceChange
     */
    owner: EnrichedAptosAddress;
}


/**
 * @export
 */
export const AptosCoinBalanceChangeTypeEnum = {
    coin: 'coin'
} as const;
export type AptosCoinBalanceChangeTypeEnum = typeof AptosCoinBalanceChangeTypeEnum[keyof typeof AptosCoinBalanceChangeTypeEnum];


/**
 * Check if a given object implements the AptosCoinBalanceChange interface.
 */
export function instanceOfAptosCoinBalanceChange(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "pricedAsset" in value;
    isInstance = isInstance && "diff" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "owner" in value;

    return isInstance;
}

export function AptosCoinBalanceChangeFromJSON(json: any): AptosCoinBalanceChange {
    return AptosCoinBalanceChangeFromJSONTyped(json, false);
}

export function AptosCoinBalanceChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AptosCoinBalanceChange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pricedAsset': PricedAssetFromJSON(json['priced_asset']),
        'diff': json['diff'],
        'type': json['type'],
        'address': EnrichedAptosAddressFromJSON(json['address']),
        'owner': EnrichedAptosAddressFromJSON(json['owner']),
    };
}

export function AptosCoinBalanceChangeToJSON(value?: AptosCoinBalanceChange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'priced_asset': PricedAssetToJSON(value.pricedAsset),
        'diff': value.diff,
        'type': value.type,
        'address': EnrichedAptosAddressToJSON(value.address),
        'owner': EnrichedAptosAddressToJSON(value.owner),
    };
}
