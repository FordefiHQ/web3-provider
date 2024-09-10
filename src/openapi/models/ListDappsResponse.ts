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
import type { EnrichedDapp } from './EnrichedDapp';
import {
    EnrichedDappFromJSON,
    EnrichedDappFromJSONTyped,
    EnrichedDappToJSON,
} from './EnrichedDapp';

/**
 * 
 * @export
 * @interface ListDappsResponse
 */
export interface ListDappsResponse {
    /**
     * 
     * @type {number}
     * @memberof ListDappsResponse
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof ListDappsResponse
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof ListDappsResponse
     */
    size: number;
    /**
     * 
     * @type {Array<EnrichedDapp>}
     * @memberof ListDappsResponse
     */
    dapps: Array<EnrichedDapp>;
}

/**
 * Check if a given object implements the ListDappsResponse interface.
 */
export function instanceOfListDappsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "total" in value;
    isInstance = isInstance && "page" in value;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "dapps" in value;

    return isInstance;
}

export function ListDappsResponseFromJSON(json: any): ListDappsResponse {
    return ListDappsResponseFromJSONTyped(json, false);
}

export function ListDappsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListDappsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'total': json['total'],
        'page': json['page'],
        'size': json['size'],
        'dapps': ((json['dapps'] as Array<any>).map(EnrichedDappFromJSON)),
    };
}

export function ListDappsResponseToJSON(value?: ListDappsResponse | null): any {
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
        'dapps': ((value.dapps as Array<any>).map(EnrichedDappToJSON)),
    };
}
