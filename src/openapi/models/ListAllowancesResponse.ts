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
import type { Allowance } from './Allowance';
import {
    AllowanceFromJSON,
    AllowanceFromJSONTyped,
    AllowanceToJSON,
} from './Allowance';

/**
 * 
 * @export
 * @interface ListAllowancesResponse
 */
export interface ListAllowancesResponse {
    /**
     * 
     * @type {number}
     * @memberof ListAllowancesResponse
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof ListAllowancesResponse
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof ListAllowancesResponse
     */
    size: number;
    /**
     * 
     * @type {Array<Allowance>}
     * @memberof ListAllowancesResponse
     */
    allowances: Array<Allowance>;
}

/**
 * Check if a given object implements the ListAllowancesResponse interface.
 */
export function instanceOfListAllowancesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "total" in value;
    isInstance = isInstance && "page" in value;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "allowances" in value;

    return isInstance;
}

export function ListAllowancesResponseFromJSON(json: any): ListAllowancesResponse {
    return ListAllowancesResponseFromJSONTyped(json, false);
}

export function ListAllowancesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListAllowancesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'total': json['total'],
        'page': json['page'],
        'size': json['size'],
        'allowances': ((json['allowances'] as Array<any>).map(AllowanceFromJSON)),
    };
}

export function ListAllowancesResponseToJSON(value?: ListAllowancesResponse | null): any {
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
        'allowances': ((value.allowances as Array<any>).map(AllowanceToJSON)),
    };
}

