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

import {
    AptosCoinBalanceChange,
    instanceOfAptosCoinBalanceChange,
    AptosCoinBalanceChangeFromJSON,
    AptosCoinBalanceChangeFromJSONTyped,
    AptosCoinBalanceChangeToJSON,
} from './AptosCoinBalanceChange';
import {
    AptosNativeCurrencyBalanceChange,
    instanceOfAptosNativeCurrencyBalanceChange,
    AptosNativeCurrencyBalanceChangeFromJSON,
    AptosNativeCurrencyBalanceChangeFromJSONTyped,
    AptosNativeCurrencyBalanceChangeToJSON,
} from './AptosNativeCurrencyBalanceChange';

/**
 * @type AptosBalanceChangeEffect
 * 
 * @export
 */
export type AptosBalanceChangeEffect = { type: 'coin' } & AptosCoinBalanceChange | { type: 'native' } & AptosNativeCurrencyBalanceChange;

export function AptosBalanceChangeEffectFromJSON(json: any): AptosBalanceChangeEffect {
    return AptosBalanceChangeEffectFromJSONTyped(json, false);
}

export function AptosBalanceChangeEffectFromJSONTyped(json: any, ignoreDiscriminator: boolean): AptosBalanceChangeEffect {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'coin':
            return {...AptosCoinBalanceChangeFromJSONTyped(json, true), type: 'coin'};
        case 'native':
            return {...AptosNativeCurrencyBalanceChangeFromJSONTyped(json, true), type: 'native'};
        default:
            throw new Error(`No variant of AptosBalanceChangeEffect exists with 'type=${json['type']}'`);
    }
}

export function AptosBalanceChangeEffectToJSON(value?: AptosBalanceChangeEffect | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'coin':
            return AptosCoinBalanceChangeToJSON(value);
        case 'native':
            return AptosNativeCurrencyBalanceChangeToJSON(value);
        default:
            throw new Error(`No variant of AptosBalanceChangeEffect exists with 'type=${value['type']}'`);
    }

}

