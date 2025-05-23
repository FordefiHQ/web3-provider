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
import type { AmountLimitCurrencyCondition } from './AmountLimitCurrencyCondition';
import {
    AmountLimitCurrencyConditionFromJSON,
    AmountLimitCurrencyConditionFromJSONTyped,
    AmountLimitCurrencyConditionToJSON,
    AmountLimitCurrencyConditionToJSONTyped,
} from './AmountLimitCurrencyCondition';

/**
 * 
 * @export
 * @interface AmountLimitCondition
 */
export interface AmountLimitCondition {
    /**
     * 
     * @type {string}
     * @memberof AmountLimitCondition
     */
    amount?: string;
    /**
     * 
     * @type {AmountLimitCurrencyCondition}
     * @memberof AmountLimitCondition
     */
    currency: AmountLimitCurrencyCondition;
    /**
     * 
     * @type {boolean}
     * @memberof AmountLimitCondition
     */
    isNetAmount: boolean;
}



/**
 * Check if a given object implements the AmountLimitCondition interface.
 */
export function instanceOfAmountLimitCondition(value: object): value is AmountLimitCondition {
    if (!('currency' in value) || value['currency'] === undefined) return false;
    if (!('isNetAmount' in value) || value['isNetAmount'] === undefined) return false;
    return true;
}

export function AmountLimitConditionFromJSON(json: any): AmountLimitCondition {
    return AmountLimitConditionFromJSONTyped(json, false);
}

export function AmountLimitConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AmountLimitCondition {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'] == null ? undefined : json['amount'],
        'currency': AmountLimitCurrencyConditionFromJSON(json['currency']),
        'isNetAmount': json['is_net_amount'],
    };
}

export function AmountLimitConditionToJSON(json: any): AmountLimitCondition {
    return AmountLimitConditionToJSONTyped(json, false);
}

export function AmountLimitConditionToJSONTyped(value?: AmountLimitCondition | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'amount': value['amount'],
        'currency': AmountLimitCurrencyConditionToJSON(value['currency']),
        'is_net_amount': value['isNetAmount'],
    };
}

