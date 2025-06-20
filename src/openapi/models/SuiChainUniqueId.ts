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
export const SuiChainUniqueId = {
    mainnet: 'sui_mainnet',
    testnet: 'sui_testnet'
} as const;
export type SuiChainUniqueId = typeof SuiChainUniqueId[keyof typeof SuiChainUniqueId];

export function SuiChainUniqueIdFromJSON(json: any): SuiChainUniqueId {
    return SuiChainUniqueIdFromJSONTyped(json, false);
}

function SuiChainUniqueIdFromJSONTyped(json: any, _ignoreDiscriminator: boolean): SuiChainUniqueId {
    return json as SuiChainUniqueId;
}

export function SuiChainUniqueIdToJSON(value?: SuiChainUniqueId | null): any {
    return value as any;
}

