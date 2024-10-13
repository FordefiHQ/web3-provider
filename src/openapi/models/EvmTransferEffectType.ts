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
export const EvmTransferEffectType = {
    native: 'native',
    erc20: 'erc20',
    erc721: 'erc721',
    erc1155: 'erc1155'
} as const;
export type EvmTransferEffectType = typeof EvmTransferEffectType[keyof typeof EvmTransferEffectType];


export function EvmTransferEffectTypeFromJSON(json: any): EvmTransferEffectType {
    return EvmTransferEffectTypeFromJSONTyped(json, false);
}

export function EvmTransferEffectTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvmTransferEffectType {
    return json as EvmTransferEffectType;
}

export function EvmTransferEffectTypeToJSON(value?: EvmTransferEffectType | null): any {
    return value as any;
}

