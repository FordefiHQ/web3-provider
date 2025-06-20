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
export const UtxoChainUniqueId = {
    mainnet: 'bitcoin_mainnet',
    testnet: 'bitcoin_testnet'
} as const;
export type UtxoChainUniqueId = typeof UtxoChainUniqueId[keyof typeof UtxoChainUniqueId];

export function UtxoChainUniqueIdFromJSON(json: any): UtxoChainUniqueId {
    return UtxoChainUniqueIdFromJSONTyped(json, false);
}

function UtxoChainUniqueIdFromJSONTyped(json: any, _ignoreDiscriminator: boolean): UtxoChainUniqueId {
    return json as UtxoChainUniqueId;
}

export function UtxoChainUniqueIdToJSON(value?: UtxoChainUniqueId | null): any {
    return value as any;
}

