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
export const UtxoAddressType = {
    legacy: 'legacy',
    p2sh: 'p2sh',
    segwit: 'segwit',
    taproot: 'taproot'
} as const;
export type UtxoAddressType = typeof UtxoAddressType[keyof typeof UtxoAddressType];


export function UtxoAddressTypeFromJSON(json: any): UtxoAddressType {
    return UtxoAddressTypeFromJSONTyped(json, false);
}

export function UtxoAddressTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UtxoAddressType {
    return json as UtxoAddressType;
}

export function UtxoAddressTypeToJSON(value?: UtxoAddressType | null): any {
    return value as any;
}

