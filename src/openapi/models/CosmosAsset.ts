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
import type { CosmosAssetDetails } from './CosmosAssetDetails';
import {
    CosmosAssetDetailsFromJSON,
    CosmosAssetDetailsFromJSONTyped,
    CosmosAssetDetailsToJSON,
    CosmosAssetDetailsToJSONTyped,
} from './CosmosAssetDetails';
import type { Price } from './Price';
import {
    PriceFromJSON,
    PriceFromJSONTyped,
    PriceToJSON,
    PriceToJSONTyped,
} from './Price';
import type { EnrichedAssetIdentifier } from './EnrichedAssetIdentifier';
import {
    EnrichedAssetIdentifierFromJSON,
    EnrichedAssetIdentifierFromJSONTyped,
    EnrichedAssetIdentifierToJSON,
    EnrichedAssetIdentifierToJSONTyped,
} from './EnrichedAssetIdentifier';

/**
 * 
 * @export
 * @interface CosmosAsset
 */
export interface CosmosAsset {
    /**
     * 
     * @type {string}
     * @memberof CosmosAsset
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof CosmosAsset
     */
    decimals: number;
    /**
     * 
     * @type {Price}
     * @memberof CosmosAsset
     */
    price?: Price;
    /**
     * 
     * @type {string}
     * @memberof CosmosAsset
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CosmosAsset
     */
    symbol: string;
    /**
     * 
     * @type {boolean}
     * @memberof CosmosAsset
     */
    hidden: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CosmosAsset
     */
    verified: boolean;
    /**
     * 
     * @type {EnrichedAssetIdentifier}
     * @memberof CosmosAsset
     */
    assetIdentifier: EnrichedAssetIdentifier;
    /**
     * 
     * @type {string}
     * @memberof CosmosAsset
     */
    metadataUri?: string;
    /**
     * 
     * @type {string}
     * @memberof CosmosAsset
     * @deprecated
     */
    type: CosmosAssetTypeEnum;
    /**
     * 
     * @type {CosmosAssetDetails}
     * @memberof CosmosAsset
     * @deprecated
     */
    details: CosmosAssetDetails;
}


/**
 * @export
 */
export const CosmosAssetTypeEnum = {
    cosmosAsset: 'cosmos_asset'
} as const;
export type CosmosAssetTypeEnum = typeof CosmosAssetTypeEnum[keyof typeof CosmosAssetTypeEnum];


/**
 * Check if a given object implements the CosmosAsset interface.
 */
export function instanceOfCosmosAsset(value: object): value is CosmosAsset {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('decimals' in value) || value['decimals'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    if (!('hidden' in value) || value['hidden'] === undefined) return false;
    if (!('verified' in value) || value['verified'] === undefined) return false;
    if (!('assetIdentifier' in value) || value['assetIdentifier'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('details' in value) || value['details'] === undefined) return false;
    return true;
}

export function CosmosAssetFromJSON(json: any): CosmosAsset {
    return CosmosAssetFromJSONTyped(json, false);
}

export function CosmosAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosAsset {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'decimals': json['decimals'],
        'price': json['price'] == null ? undefined : PriceFromJSON(json['price']),
        'name': json['name'],
        'symbol': json['symbol'],
        'hidden': json['hidden'],
        'verified': json['verified'],
        'assetIdentifier': EnrichedAssetIdentifierFromJSON(json['asset_identifier']),
        'metadataUri': json['metadata_uri'] == null ? undefined : json['metadata_uri'],
        'type': json['type'],
        'details': CosmosAssetDetailsFromJSON(json['details']),
    };
}

export function CosmosAssetToJSON(json: any): CosmosAsset {
    return CosmosAssetToJSONTyped(json, false);
}

export function CosmosAssetToJSONTyped(value?: CosmosAsset | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'decimals': value['decimals'],
        'price': PriceToJSON(value['price']),
        'name': value['name'],
        'symbol': value['symbol'],
        'hidden': value['hidden'],
        'verified': value['verified'],
        'asset_identifier': EnrichedAssetIdentifierToJSON(value['assetIdentifier']),
        'metadata_uri': value['metadataUri'],
        'type': value['type'],
        'details': CosmosAssetDetailsToJSON(value['details']),
    };
}

