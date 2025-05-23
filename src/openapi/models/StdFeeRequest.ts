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
import type { StdCoin } from './StdCoin';
import {
    StdCoinFromJSON,
    StdCoinFromJSONTyped,
    StdCoinToJSON,
    StdCoinToJSONTyped,
} from './StdCoin';

/**
 * 
 * @export
 * @interface StdFeeRequest
 */
export interface StdFeeRequest {
    /**
     * 
     * @type {Array<StdCoin>}
     * @memberof StdFeeRequest
     */
    amount: Array<StdCoin>;
    /**
     * 
     * @type {string}
     * @memberof StdFeeRequest
     */
    gas: string;
    /**
     * 
     * @type {string}
     * @memberof StdFeeRequest
     */
    payer?: string;
    /**
     * 
     * @type {string}
     * @memberof StdFeeRequest
     */
    granter?: string;
    /**
     * 
     * @type {string}
     * @memberof StdFeeRequest
     */
    feePayer?: string;
}

/**
 * Check if a given object implements the StdFeeRequest interface.
 */
export function instanceOfStdFeeRequest(value: object): value is StdFeeRequest {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('gas' in value) || value['gas'] === undefined) return false;
    return true;
}

export function StdFeeRequestFromJSON(json: any): StdFeeRequest {
    return StdFeeRequestFromJSONTyped(json, false);
}

export function StdFeeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StdFeeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': ((json['amount'] as Array<any>).map(StdCoinFromJSON)),
        'gas': json['gas'],
        'payer': json['payer'] == null ? undefined : json['payer'],
        'granter': json['granter'] == null ? undefined : json['granter'],
        'feePayer': json['fee_payer'] == null ? undefined : json['fee_payer'],
    };
}

export function StdFeeRequestToJSON(json: any): StdFeeRequest {
    return StdFeeRequestToJSONTyped(json, false);
}

export function StdFeeRequestToJSONTyped(value?: StdFeeRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'amount': ((value['amount'] as Array<any>).map(StdCoinToJSON)),
        'gas': value['gas'],
        'payer': value['payer'],
        'granter': value['granter'],
        'fee_payer': value['feePayer'],
    };
}

