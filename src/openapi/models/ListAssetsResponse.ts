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
import type { Asset } from './Asset';
import {
    AssetFromJSON,
    AssetFromJSONTyped,
    AssetToJSON,
} from './Asset';

/**
 * 
 * @export
 * @interface ListAssetsResponse
 */
export interface ListAssetsResponse {
    /**
     * 
     * @type {number}
     * @memberof ListAssetsResponse
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof ListAssetsResponse
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof ListAssetsResponse
     */
    size: number;
    /**
     * 
     * @type {Array<Asset>}
     * @memberof ListAssetsResponse
     */
    assets: Array<Asset>;
}

/**
 * Check if a given object implements the ListAssetsResponse interface.
 */
export function instanceOfListAssetsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "total" in value;
    isInstance = isInstance && "page" in value;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "assets" in value;

    return isInstance;
}

export function ListAssetsResponseFromJSON(json: any): ListAssetsResponse {
    return ListAssetsResponseFromJSONTyped(json, false);
}

export function ListAssetsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListAssetsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'total': json['total'],
        'page': json['page'],
        'size': json['size'],
        'assets': ((json['assets'] as Array<any>).map(AssetFromJSON)),
    };
}

export function ListAssetsResponseToJSON(value?: ListAssetsResponse | null): any {
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
        'assets': ((value.assets as Array<any>).map(AssetToJSON)),
    };
}

