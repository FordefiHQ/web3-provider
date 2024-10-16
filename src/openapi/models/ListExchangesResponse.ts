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
import type { Exchange } from './Exchange';
import {
    ExchangeFromJSON,
    ExchangeFromJSONTyped,
    ExchangeToJSON,
} from './Exchange';

/**
 * 
 * @export
 * @interface ListExchangesResponse
 */
export interface ListExchangesResponse {
    /**
     * 
     * @type {Array<Exchange>}
     * @memberof ListExchangesResponse
     */
    exchanges: Array<Exchange>;
}

/**
 * Check if a given object implements the ListExchangesResponse interface.
 */
export function instanceOfListExchangesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "exchanges" in value;

    return isInstance;
}

export function ListExchangesResponseFromJSON(json: any): ListExchangesResponse {
    return ListExchangesResponseFromJSONTyped(json, false);
}

export function ListExchangesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListExchangesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exchanges': ((json['exchanges'] as Array<any>).map(ExchangeFromJSON)),
    };
}

export function ListExchangesResponseToJSON(value?: ListExchangesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exchanges': ((value.exchanges as Array<any>).map(ExchangeToJSON)),
    };
}

