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
export const SolanaChainUniqueId = {
    mainnet: 'solana_mainnet',
    devnet: 'solana_devnet'
} as const;
export type SolanaChainUniqueId = typeof SolanaChainUniqueId[keyof typeof SolanaChainUniqueId];


export function SolanaChainUniqueIdFromJSON(json: any): SolanaChainUniqueId {
    return SolanaChainUniqueIdFromJSONTyped(json, false);
}

export function SolanaChainUniqueIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolanaChainUniqueId {
    return json as SolanaChainUniqueId;
}

export function SolanaChainUniqueIdToJSON(value?: SolanaChainUniqueId | null): any {
    return value as any;
}

