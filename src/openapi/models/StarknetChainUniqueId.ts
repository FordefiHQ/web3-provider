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
export const StarknetChainUniqueId = {
    starknetMainnet: 'starknet_mainnet'
} as const;
export type StarknetChainUniqueId = typeof StarknetChainUniqueId[keyof typeof StarknetChainUniqueId];

export function StarknetChainUniqueIdFromJSON(json: any): StarknetChainUniqueId {
    return StarknetChainUniqueIdFromJSONTyped(json, false);
}

function StarknetChainUniqueIdFromJSONTyped(json: any, _ignoreDiscriminator: boolean): StarknetChainUniqueId {
    return json as StarknetChainUniqueId;
}

export function StarknetChainUniqueIdToJSON(value?: StarknetChainUniqueId | null): any {
    return value as any;
}

