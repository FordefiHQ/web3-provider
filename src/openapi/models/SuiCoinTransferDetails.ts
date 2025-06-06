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

import { mapValues } from '../runtime';
import type { EnrichedSuiAddress } from './EnrichedSuiAddress';
import {
    EnrichedSuiAddressFromJSON,
    EnrichedSuiAddressFromJSONTyped,
    EnrichedSuiAddressToJSON,
    EnrichedSuiAddressToJSONTyped,
} from './EnrichedSuiAddress';

/**
 * 
 * @export
 * @interface SuiCoinTransferDetails
 */
export interface SuiCoinTransferDetails {
    /**
     * 
     * @type {string}
     * @memberof SuiCoinTransferDetails
     */
    type: SuiCoinTransferDetailsTypeEnum;
    /**
     * 
     * @type {EnrichedSuiAddress}
     * @memberof SuiCoinTransferDetails
     */
    sender: EnrichedSuiAddress;
    /**
     * 
     * @type {EnrichedSuiAddress}
     * @memberof SuiCoinTransferDetails
     */
    recipient: EnrichedSuiAddress;
    /**
     * 
     * @type {boolean}
     * @memberof SuiCoinTransferDetails
     */
    isInternal?: boolean;
}


/**
 * @export
 */
export const SuiCoinTransferDetailsTypeEnum = {
    coinTransfer: 'coin_transfer'
} as const;
export type SuiCoinTransferDetailsTypeEnum = typeof SuiCoinTransferDetailsTypeEnum[keyof typeof SuiCoinTransferDetailsTypeEnum];


/**
 * Check if a given object implements the SuiCoinTransferDetails interface.
 */
export function instanceOfSuiCoinTransferDetails(value: object): value is SuiCoinTransferDetails {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('sender' in value) || value['sender'] === undefined) return false;
    if (!('recipient' in value) || value['recipient'] === undefined) return false;
    return true;
}

export function SuiCoinTransferDetailsFromJSON(json: any): SuiCoinTransferDetails {
    return SuiCoinTransferDetailsFromJSONTyped(json, false);
}

export function SuiCoinTransferDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiCoinTransferDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'sender': EnrichedSuiAddressFromJSON(json['sender']),
        'recipient': EnrichedSuiAddressFromJSON(json['recipient']),
        'isInternal': json['is_internal'] == null ? undefined : json['is_internal'],
    };
}

export function SuiCoinTransferDetailsToJSON(json: any): SuiCoinTransferDetails {
    return SuiCoinTransferDetailsToJSONTyped(json, false);
}

export function SuiCoinTransferDetailsToJSONTyped(value?: SuiCoinTransferDetails | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'sender': EnrichedSuiAddressToJSON(value['sender']),
        'recipient': EnrichedSuiAddressToJSON(value['recipient']),
        'is_internal': value['isInternal'],
    };
}

