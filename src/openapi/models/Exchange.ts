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
import type { ExchangeType } from './ExchangeType';
import {
    ExchangeTypeFromJSON,
    ExchangeTypeFromJSONTyped,
    ExchangeTypeToJSON,
    ExchangeTypeToJSONTyped,
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
    /**
     * 
     * @type {string}
     * @memberof Exchange
     */
    logoUrl: string;
}



/**
 * Check if a given object implements the Exchange interface.
 */
export function instanceOfExchange(value: object): value is Exchange {
    if (!('exchangeType' in value) || value['exchangeType'] === undefined) return false;
    if (!('hasPassphrase' in value) || value['hasPassphrase'] === undefined) return false;
    if (!('hasAccounts' in value) || value['hasAccounts'] === undefined) return false;
    if (!('logoUrl' in value) || value['logoUrl'] === undefined) return false;
    return true;
}

export function ExchangeFromJSON(json: any): Exchange {
    return ExchangeFromJSONTyped(json, false);
}

export function ExchangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Exchange {
    if (json == null) {
        return json;
    }
    return {
        
        'exchangeType': ExchangeTypeFromJSON(json['exchange_type']),
        'hasPassphrase': json['has_passphrase'],
        'hasAccounts': json['has_accounts'],
        'logoUrl': json['logo_url'],
    };
}

export function ExchangeToJSON(json: any): Exchange {
    return ExchangeToJSONTyped(json, false);
}

export function ExchangeToJSONTyped(value?: Exchange | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'exchange_type': ExchangeTypeToJSON(value['exchangeType']),
        'has_passphrase': value['hasPassphrase'],
        'has_accounts': value['hasAccounts'],
        'logo_url': value['logoUrl'],
    };
}

