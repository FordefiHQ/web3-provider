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
import type { ExchangeType } from './ExchangeType';
import {
    ExchangeTypeFromJSON,
    ExchangeTypeFromJSONTyped,
    ExchangeTypeToJSON,
} from './ExchangeType';

/**
 * 
 * @export
 * @interface Exchange
 */
export interface Exchange {
    /**
     * 
     * @type {ExchangeType}
     * @memberof Exchange
     */
    exchangeType: ExchangeType;
    /**
     * 
     * @type {boolean}
     * @memberof Exchange
     */
    hasPassphrase: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Exchange
     */
    hasAccounts: boolean;
}

/**
 * Check if a given object implements the Exchange interface.
 */
export function instanceOfExchange(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "exchangeType" in value;
    isInstance = isInstance && "hasPassphrase" in value;
    isInstance = isInstance && "hasAccounts" in value;

    return isInstance;
}

export function ExchangeFromJSON(json: any): Exchange {
    return ExchangeFromJSONTyped(json, false);
}

export function ExchangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Exchange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exchangeType': ExchangeTypeFromJSON(json['exchange_type']),
        'hasPassphrase': json['has_passphrase'],
        'hasAccounts': json['has_accounts'],
    };
}

export function ExchangeToJSON(value?: Exchange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exchange_type': ExchangeTypeToJSON(value.exchangeType),
        'has_passphrase': value.hasPassphrase,
        'has_accounts': value.hasAccounts,
    };
}

