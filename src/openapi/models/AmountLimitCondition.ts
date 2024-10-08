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
import type { AmountLimitCurrencyCondition } from './AmountLimitCurrencyCondition';
import {
    AmountLimitCurrencyConditionFromJSON,
    AmountLimitCurrencyConditionFromJSONTyped,
    AmountLimitCurrencyConditionToJSON,
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
export function instanceOfAmountLimitCondition(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "currency" in value;
    isInstance = isInstance && "isNetAmount" in value;

    return isInstance;
}

export function AmountLimitConditionFromJSON(json: any): AmountLimitCondition {
    return AmountLimitConditionFromJSONTyped(json, false);
}

export function AmountLimitConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AmountLimitCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'currency': AmountLimitCurrencyConditionFromJSON(json['currency']),
        'isNetAmount': json['is_net_amount'],
    };
}

export function AmountLimitConditionToJSON(value?: AmountLimitCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'currency': AmountLimitCurrencyConditionToJSON(value.currency),
        'is_net_amount': value.isNetAmount,
    };
}

