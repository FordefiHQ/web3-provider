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

import type { EvmErc1155Asset } from './EvmErc1155Asset';
import {
    instanceOfEvmErc1155Asset,
    EvmErc1155AssetFromJSON,
    EvmErc1155AssetFromJSONTyped,
    EvmErc1155AssetToJSON,
} from './EvmErc1155Asset';
import type { EvmErc20Asset } from './EvmErc20Asset';
import {
    instanceOfEvmErc20Asset,
    EvmErc20AssetFromJSON,
    EvmErc20AssetFromJSONTyped,
    EvmErc20AssetToJSON,
} from './EvmErc20Asset';
import type { EvmErc721Asset } from './EvmErc721Asset';
import {
    instanceOfEvmErc721Asset,
    EvmErc721AssetFromJSON,
    EvmErc721AssetFromJSONTyped,
    EvmErc721AssetToJSON,
} from './EvmErc721Asset';
import type { EvmHyperLiquidAsset } from './EvmHyperLiquidAsset';
import {
    instanceOfEvmHyperLiquidAsset,
    EvmHyperLiquidAssetFromJSON,
    EvmHyperLiquidAssetFromJSONTyped,
    EvmHyperLiquidAssetToJSON,
} from './EvmHyperLiquidAsset';
import type { EvmNativeAsset } from './EvmNativeAsset';
import {
    instanceOfEvmNativeAsset,
    EvmNativeAssetFromJSON,
    EvmNativeAssetFromJSONTyped,
    EvmNativeAssetToJSON,
} from './EvmNativeAsset';

/**
 * @type EvmAssetDetails
 * 
 * @export
 */
export type EvmAssetDetails = { type: 'evm_erc1155_asset' } & EvmErc1155Asset | { type: 'evm_erc20_asset' } & EvmErc20Asset | { type: 'evm_erc721_asset' } & EvmErc721Asset | { type: 'evm_hyperliquid_asset' } & EvmHyperLiquidAsset | { type: 'evm_native_asset' } & EvmNativeAsset;

export function EvmAssetDetailsFromJSON(json: any): EvmAssetDetails {
    return EvmAssetDetailsFromJSONTyped(json, false);
}

export function EvmAssetDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvmAssetDetails {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'evm_erc1155_asset':
            return Object.assign({}, EvmErc1155AssetFromJSONTyped(json, true), { type: 'evm_erc1155_asset' } as const);
        case 'evm_erc20_asset':
            return Object.assign({}, EvmErc20AssetFromJSONTyped(json, true), { type: 'evm_erc20_asset' } as const);
        case 'evm_erc721_asset':
            return Object.assign({}, EvmErc721AssetFromJSONTyped(json, true), { type: 'evm_erc721_asset' } as const);
        case 'evm_hyperliquid_asset':
            return Object.assign({}, EvmHyperLiquidAssetFromJSONTyped(json, true), { type: 'evm_hyperliquid_asset' } as const);
        case 'evm_native_asset':
            return Object.assign({}, EvmNativeAssetFromJSONTyped(json, true), { type: 'evm_native_asset' } as const);
        default:
            throw new Error(`No variant of EvmAssetDetails exists with 'type=${json['type']}'`);
    }
}

export function EvmAssetDetailsToJSON(json: any): any {
    return EvmAssetDetailsToJSONTyped(json, false);
}

export function EvmAssetDetailsToJSONTyped(value?: EvmAssetDetails | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'evm_erc1155_asset':
            return Object.assign({}, EvmErc1155AssetToJSON(value), { type: 'evm_erc1155_asset' } as const);
        case 'evm_erc20_asset':
            return Object.assign({}, EvmErc20AssetToJSON(value), { type: 'evm_erc20_asset' } as const);
        case 'evm_erc721_asset':
            return Object.assign({}, EvmErc721AssetToJSON(value), { type: 'evm_erc721_asset' } as const);
        case 'evm_hyperliquid_asset':
            return Object.assign({}, EvmHyperLiquidAssetToJSON(value), { type: 'evm_hyperliquid_asset' } as const);
        case 'evm_native_asset':
            return Object.assign({}, EvmNativeAssetToJSON(value), { type: 'evm_native_asset' } as const);
        default:
            throw new Error(`No variant of EvmAssetDetails exists with 'type=${value['type']}'`);
    }

}

