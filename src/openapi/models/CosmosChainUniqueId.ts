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
export const CosmosChainUniqueId = {
    akashnet2: 'cosmos_akashnet-2',
    archway1: 'cosmos_archway-1',
    axelarDojo1: 'cosmos_axelar-dojo-1',
    celestia: 'cosmos_celestia',
    cosmoshub4: 'cosmos_cosmoshub-4',
    dydxMainnet1: 'cosmos_dydx-mainnet-1',
    dydxTestnet4: 'cosmos_dydx-testnet-4',
    dymension11001: 'cosmos_dymension_1100-1',
    noble1: 'cosmos_noble-1',
    osmosis1: 'cosmos_osmosis-1',
    pacific1: 'cosmos_pacific-1',
    stride1: 'cosmos_stride-1'
} as const;
export type CosmosChainUniqueId = typeof CosmosChainUniqueId[keyof typeof CosmosChainUniqueId];


export function CosmosChainUniqueIdFromJSON(json: any): CosmosChainUniqueId {
    return CosmosChainUniqueIdFromJSONTyped(json, false);
}

export function CosmosChainUniqueIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosChainUniqueId {
    return json as CosmosChainUniqueId;
}

export function CosmosChainUniqueIdToJSON(value?: CosmosChainUniqueId | null): any {
    return value as any;
}

