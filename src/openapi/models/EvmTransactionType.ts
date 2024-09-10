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
export const EvmTransactionType = {
    nativeTransfer: 'native_transfer',
    tokenTransfer: 'token_transfer',
    allowance: 'allowance',
    contractCall: 'contract_call',
    crossChainBridge: 'cross_chain_bridge',
    contractCreation: 'contract_creation'
} as const;
export type EvmTransactionType = typeof EvmTransactionType[keyof typeof EvmTransactionType];


export function EvmTransactionTypeFromJSON(json: any): EvmTransactionType {
    return EvmTransactionTypeFromJSONTyped(json, false);
}

export function EvmTransactionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvmTransactionType {
    return json as EvmTransactionType;
}

export function EvmTransactionTypeToJSON(value?: EvmTransactionType | null): any {
    return value as any;
}

