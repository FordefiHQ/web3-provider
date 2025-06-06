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

import { mapValues } from '../runtime';
import type { ChainWithAssets } from './ChainWithAssets';
import {
    ChainWithAssetsFromJSON,
    ChainWithAssetsFromJSONTyped,
    ChainWithAssetsToJSON,
    ChainWithAssetsToJSONTyped,
} from './ChainWithAssets';
import type { FiatValue } from './FiatValue';
import {
    FiatValueFromJSON,
    FiatValueFromJSONTyped,
    FiatValueToJSON,
    FiatValueToJSONTyped,
} from './FiatValue';
import type { OwnedAsset } from './OwnedAsset';
import {
    OwnedAssetFromJSON,
    OwnedAssetFromJSONTyped,
    OwnedAssetToJSON,
    OwnedAssetToJSONTyped,
} from './OwnedAsset';
import type { Vault } from './Vault';
import {
    VaultFromJSON,
    VaultFromJSONTyped,
    VaultToJSON,
    VaultToJSONTyped,
} from './Vault';

/**
 * 
 * @export
 * @interface VaultWithAssets
 */
export interface VaultWithAssets {
    /**
     * 
     * @type {Vault}
     * @memberof VaultWithAssets
     */
    vaultInfo: Vault;
    /**
     * 
     * @type {FiatValue}
     * @memberof VaultWithAssets
     */
    totalValue: FiatValue;
    /**
     * 
     * @type {boolean}
     * @memberof VaultWithAssets
     */
    hasMoreAssets: boolean;
    /**
     * 
     * @type {Array<OwnedAsset>}
     * @memberof VaultWithAssets
     */
    ownedAssets: Array<OwnedAsset>;
    /**
     * 
     * @type {Array<ChainWithAssets>}
     * @memberof VaultWithAssets
     */
    chainsWithAssets: Array<ChainWithAssets>;
    /**
     * 
     * @type {number}
     * @memberof VaultWithAssets
     */
    ownedAssetsCount: number;
}

/**
 * Check if a given object implements the VaultWithAssets interface.
 */
export function instanceOfVaultWithAssets(value: object): value is VaultWithAssets {
    if (!('vaultInfo' in value) || value['vaultInfo'] === undefined) return false;
    if (!('totalValue' in value) || value['totalValue'] === undefined) return false;
    if (!('hasMoreAssets' in value) || value['hasMoreAssets'] === undefined) return false;
    if (!('ownedAssets' in value) || value['ownedAssets'] === undefined) return false;
    if (!('chainsWithAssets' in value) || value['chainsWithAssets'] === undefined) return false;
    if (!('ownedAssetsCount' in value) || value['ownedAssetsCount'] === undefined) return false;
    return true;
}

export function VaultWithAssetsFromJSON(json: any): VaultWithAssets {
    return VaultWithAssetsFromJSONTyped(json, false);
}

export function VaultWithAssetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): VaultWithAssets {
    if (json == null) {
        return json;
    }
    return {
        
        'vaultInfo': VaultFromJSON(json['vault_info']),
        'totalValue': FiatValueFromJSON(json['total_value']),
        'hasMoreAssets': json['has_more_assets'],
        'ownedAssets': ((json['owned_assets'] as Array<any>).map(OwnedAssetFromJSON)),
        'chainsWithAssets': ((json['chains_with_assets'] as Array<any>).map(ChainWithAssetsFromJSON)),
        'ownedAssetsCount': json['owned_assets_count'],
    };
}

export function VaultWithAssetsToJSON(json: any): VaultWithAssets {
    return VaultWithAssetsToJSONTyped(json, false);
}

export function VaultWithAssetsToJSONTyped(value?: VaultWithAssets | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'vault_info': VaultToJSON(value['vaultInfo']),
        'total_value': FiatValueToJSON(value['totalValue']),
        'has_more_assets': value['hasMoreAssets'],
        'owned_assets': ((value['ownedAssets'] as Array<any>).map(OwnedAssetToJSON)),
        'chains_with_assets': ((value['chainsWithAssets'] as Array<any>).map(ChainWithAssetsToJSON)),
        'owned_assets_count': value['ownedAssetsCount'],
    };
}

