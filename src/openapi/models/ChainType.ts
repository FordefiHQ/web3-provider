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


/**
 * 
 * @export
 */
export const ChainType = {
    aptos: 'aptos',
    cosmos: 'cosmos',
    evm: 'evm',
    solana: 'solana',
    sui: 'sui',
    ton: 'ton',
    utxo: 'utxo'
} as const;
export type ChainType = typeof ChainType[keyof typeof ChainType];


export function ChainTypeFromJSON(json: any): ChainType {
    return ChainTypeFromJSONTyped(json, false);
}

export function ChainTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChainType {
    return json as ChainType;
}

export function ChainTypeToJSON(value?: ChainType | null): any {
    return value as any;
}

