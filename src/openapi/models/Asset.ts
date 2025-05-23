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

import type { CosmosAsset } from './CosmosAsset';
import {
    instanceOfCosmosAsset,
    CosmosAssetFromJSON,
    CosmosAssetFromJSONTyped,
    CosmosAssetToJSON,
} from './CosmosAsset';
import type { EvmAsset } from './EvmAsset';
import {
    instanceOfEvmAsset,
    EvmAssetFromJSON,
    EvmAssetFromJSONTyped,
    EvmAssetToJSON,
} from './EvmAsset';
import type { SolanaAsset } from './SolanaAsset';
import {
    instanceOfSolanaAsset,
    SolanaAssetFromJSON,
    SolanaAssetFromJSONTyped,
    SolanaAssetToJSON,
} from './SolanaAsset';
import type { SuiAsset } from './SuiAsset';
import {
    instanceOfSuiAsset,
    SuiAssetFromJSON,
    SuiAssetFromJSONTyped,
    SuiAssetToJSON,
} from './SuiAsset';
import type { UtxoAsset } from './UtxoAsset';
import {
    instanceOfUtxoAsset,
    UtxoAssetFromJSON,
    UtxoAssetFromJSONTyped,
    UtxoAssetToJSON,
} from './UtxoAsset';

/**
 * @type Asset
 * 
 * @export
 */
export type Asset = { type: 'cosmos_asset' } & CosmosAsset | { type: 'evm_asset' } & EvmAsset | { type: 'solana_asset' } & SolanaAsset | { type: 'sui_asset' } & SuiAsset | { type: 'utxo_asset' } & UtxoAsset;

export function AssetFromJSON(json: any): Asset {
    return AssetFromJSONTyped(json, false);
}

export function AssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Asset {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'cosmos_asset':
            return Object.assign({}, CosmosAssetFromJSONTyped(json, true), { type: 'cosmos_asset' } as const);
        case 'evm_asset':
            return Object.assign({}, EvmAssetFromJSONTyped(json, true), { type: 'evm_asset' } as const);
        case 'solana_asset':
            return Object.assign({}, SolanaAssetFromJSONTyped(json, true), { type: 'solana_asset' } as const);
        case 'sui_asset':
            return Object.assign({}, SuiAssetFromJSONTyped(json, true), { type: 'sui_asset' } as const);
        case 'utxo_asset':
            return Object.assign({}, UtxoAssetFromJSONTyped(json, true), { type: 'utxo_asset' } as const);
        default:
            throw new Error(`No variant of Asset exists with 'type=${json['type']}'`);
    }
}

export function AssetToJSON(json: any): any {
    return AssetToJSONTyped(json, false);
}

export function AssetToJSONTyped(value?: Asset | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'cosmos_asset':
            return Object.assign({}, CosmosAssetToJSON(value), { type: 'cosmos_asset' } as const);
        case 'evm_asset':
            return Object.assign({}, EvmAssetToJSON(value), { type: 'evm_asset' } as const);
        case 'solana_asset':
            return Object.assign({}, SolanaAssetToJSON(value), { type: 'solana_asset' } as const);
        case 'sui_asset':
            return Object.assign({}, SuiAssetToJSON(value), { type: 'sui_asset' } as const);
        case 'utxo_asset':
            return Object.assign({}, UtxoAssetToJSON(value), { type: 'utxo_asset' } as const);
        default:
            throw new Error(`No variant of Asset exists with 'type=${value['type']}'`);
    }

}

