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

import { exists, mapValues } from '../runtime';
import type { EnrichedAssetIdentifier } from './EnrichedAssetIdentifier';
import {
    EnrichedAssetIdentifierFromJSON,
    EnrichedAssetIdentifierFromJSONTyped,
    EnrichedAssetIdentifierToJSON,
} from './EnrichedAssetIdentifier';
import type { Price } from './Price';
import {
    PriceFromJSON,
    PriceFromJSONTyped,
    PriceToJSON,
} from './Price';
import type { SuiAssetDetails } from './SuiAssetDetails';
import {
    SuiAssetDetailsFromJSON,
    SuiAssetDetailsFromJSONTyped,
    SuiAssetDetailsToJSON,
} from './SuiAssetDetails';

/**
 * 
 * @export
 * @interface SuiAsset
 */
export interface SuiAsset {
    /**
     * 
     * @type {string}
     * @memberof SuiAsset
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof SuiAsset
     */
    decimals: number;
    /**
     * 
     * @type {Price}
     * @memberof SuiAsset
     */
    price?: Price;
    /**
     * 
     * @type {string}
     * @memberof SuiAsset
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SuiAsset
     */
    symbol: string;
    /**
     * 
     * @type {boolean}
     * @memberof SuiAsset
     */
    hidden: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SuiAsset
     */
    verified: boolean;
    /**
     * 
     * @type {EnrichedAssetIdentifier}
     * @memberof SuiAsset
     */
    assetIdentifier: EnrichedAssetIdentifier;
    /**
     * 
     * @type {string}
     * @memberof SuiAsset
     */
    metadataUri?: string;
    /**
     * 
     * @type {string}
     * @memberof SuiAsset
     * @deprecated
     */
    type: SuiAssetTypeEnum;
    /**
     * 
     * @type {SuiAssetDetails}
     * @memberof SuiAsset
     * @deprecated
     */
    details: SuiAssetDetails;
}


/**
 * @export
 */
export const SuiAssetTypeEnum = {
    suiAsset: 'sui_asset'
} as const;
export type SuiAssetTypeEnum = typeof SuiAssetTypeEnum[keyof typeof SuiAssetTypeEnum];


/**
 * Check if a given object implements the SuiAsset interface.
 */
export function instanceOfSuiAsset(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "decimals" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "symbol" in value;
    isInstance = isInstance && "hidden" in value;
    isInstance = isInstance && "verified" in value;
    isInstance = isInstance && "assetIdentifier" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;

    return isInstance;
}

export function SuiAssetFromJSON(json: any): SuiAsset {
    return SuiAssetFromJSONTyped(json, false);
}

export function SuiAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiAsset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'decimals': json['decimals'],
        'price': !exists(json, 'price') ? undefined : PriceFromJSON(json['price']),
        'name': json['name'],
        'symbol': json['symbol'],
        'hidden': json['hidden'],
        'verified': json['verified'],
        'assetIdentifier': EnrichedAssetIdentifierFromJSON(json['asset_identifier']),
        'metadataUri': !exists(json, 'metadata_uri') ? undefined : json['metadata_uri'],
        'type': json['type'],
        'details': SuiAssetDetailsFromJSON(json['details']),
    };
}

export function SuiAssetToJSON(value?: SuiAsset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'decimals': value.decimals,
        'price': PriceToJSON(value.price),
        'name': value.name,
        'symbol': value.symbol,
        'hidden': value.hidden,
        'verified': value.verified,
        'asset_identifier': EnrichedAssetIdentifierToJSON(value.assetIdentifier),
        'metadata_uri': value.metadataUri,
        'type': value.type,
        'details': SuiAssetDetailsToJSON(value.details),
    };
}

