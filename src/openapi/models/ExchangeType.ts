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


/**
 * @export
 */
export const ExchangeType = {
    binance: 'binance',
    bybit: 'bybit',
    coinbaseInternational: 'coinbase_international',
    coinbaseUs: 'coinbase_us',
    okx: 'okx'
} as const;
export type ExchangeType = typeof ExchangeType[keyof typeof ExchangeType];

export function ExchangeTypeFromJSON(json: any): ExchangeType {
    return ExchangeTypeFromJSONTyped(json, false);
}

function ExchangeTypeFromJSONTyped(json: any, _ignoreDiscriminator: boolean): ExchangeType {
    return json as ExchangeType;
}

export function ExchangeTypeToJSON(value?: ExchangeType | null): any {
    return value as any;
}

