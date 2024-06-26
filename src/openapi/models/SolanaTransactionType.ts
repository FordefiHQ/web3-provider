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
export const SolanaTransactionType = {
    nativeTransfer: 'native_transfer',
    tokenTransfer: 'token_transfer',
    rawTransaction: 'raw_transaction'
} as const;
export type SolanaTransactionType = typeof SolanaTransactionType[keyof typeof SolanaTransactionType];


export function SolanaTransactionTypeFromJSON(json: any): SolanaTransactionType {
    return SolanaTransactionTypeFromJSONTyped(json, false);
}

export function SolanaTransactionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolanaTransactionType {
    return json as SolanaTransactionType;
}

export function SolanaTransactionTypeToJSON(value?: SolanaTransactionType | null): any {
    return value as any;
}

