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
import type { OwnedAsset } from './OwnedAsset';
import {
    OwnedAssetFromJSON,
    OwnedAssetFromJSONTyped,
    OwnedAssetToJSON,
} from './OwnedAsset';

/**
 * 
 * @export
 * @interface ListOwnedAssetsResponse
 */
export interface ListOwnedAssetsResponse {
    /**
     * 
     * @type {number}
     * @memberof ListOwnedAssetsResponse
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof ListOwnedAssetsResponse
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof ListOwnedAssetsResponse
     */
    size: number;
    /**
     * 
     * @type {Array<OwnedAsset>}
     * @memberof ListOwnedAssetsResponse
     */
    ownedAssets: Array<OwnedAsset>;
}

/**
 * Check if a given object implements the ListOwnedAssetsResponse interface.
 */
export function instanceOfListOwnedAssetsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "total" in value;
    isInstance = isInstance && "page" in value;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "ownedAssets" in value;

    return isInstance;
}

export function ListOwnedAssetsResponseFromJSON(json: any): ListOwnedAssetsResponse {
    return ListOwnedAssetsResponseFromJSONTyped(json, false);
}

export function ListOwnedAssetsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListOwnedAssetsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'total': json['total'],
        'page': json['page'],
        'size': json['size'],
        'ownedAssets': ((json['owned_assets'] as Array<any>).map(OwnedAssetFromJSON)),
    };
}

export function ListOwnedAssetsResponseToJSON(value?: ListOwnedAssetsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'total': value.total,
        'page': value.page,
        'size': value.size,
        'owned_assets': ((value.ownedAssets as Array<any>).map(OwnedAssetToJSON)),
    };
}

