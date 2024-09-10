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
import type { EnrichedUtxoAddress } from './EnrichedUtxoAddress';
import {
    EnrichedUtxoAddressFromJSON,
    EnrichedUtxoAddressFromJSONTyped,
    EnrichedUtxoAddressToJSON,
} from './EnrichedUtxoAddress';
import type { Price } from './Price';
import {
    PriceFromJSON,
    PriceFromJSONTyped,
    PriceToJSON,
} from './Price';

/**
 * 
 * @export
 * @interface UtxoPsbtDescribeDetails
 */
export interface UtxoPsbtDescribeDetails {
    /**
     * 
     * @type {string}
     * @memberof UtxoPsbtDescribeDetails
     */
    type: UtxoPsbtDescribeDetailsTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof UtxoPsbtDescribeDetails
     */
    psbtRawData: string;
    /**
     * 
     * @type {string}
     * @memberof UtxoPsbtDescribeDetails
     */
    totalFees: string;
    /**
     * 
     * @type {Price}
     * @memberof UtxoPsbtDescribeDetails
     */
    fiatPrice?: Price;
    /**
     * 
     * @type {EnrichedUtxoAddress}
     * @memberof UtxoPsbtDescribeDetails
     */
    sender: EnrichedUtxoAddress;
}


/**
 * @export
 */
export const UtxoPsbtDescribeDetailsTypeEnum = {
    partiallySignedBitcoinTransaction: 'partially_signed_bitcoin_transaction'
} as const;
export type UtxoPsbtDescribeDetailsTypeEnum = typeof UtxoPsbtDescribeDetailsTypeEnum[keyof typeof UtxoPsbtDescribeDetailsTypeEnum];


/**
 * Check if a given object implements the UtxoPsbtDescribeDetails interface.
 */
export function instanceOfUtxoPsbtDescribeDetails(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "psbtRawData" in value;
    isInstance = isInstance && "totalFees" in value;
    isInstance = isInstance && "sender" in value;

    return isInstance;
}

export function UtxoPsbtDescribeDetailsFromJSON(json: any): UtxoPsbtDescribeDetails {
    return UtxoPsbtDescribeDetailsFromJSONTyped(json, false);
}

export function UtxoPsbtDescribeDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UtxoPsbtDescribeDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'psbtRawData': json['psbt_raw_data'],
        'totalFees': json['total_fees'],
        'fiatPrice': !exists(json, 'fiat_price') ? undefined : PriceFromJSON(json['fiat_price']),
        'sender': EnrichedUtxoAddressFromJSON(json['sender']),
    };
}

export function UtxoPsbtDescribeDetailsToJSON(value?: UtxoPsbtDescribeDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'psbt_raw_data': value.psbtRawData,
        'total_fees': value.totalFees,
        'fiat_price': PriceToJSON(value.fiatPrice),
        'sender': EnrichedUtxoAddressToJSON(value.sender),
    };
}

