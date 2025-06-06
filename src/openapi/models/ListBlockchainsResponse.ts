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
import type { EnrichedChain } from './EnrichedChain';
import {
    EnrichedChainFromJSON,
    EnrichedChainFromJSONTyped,
    EnrichedChainToJSON,
    EnrichedChainToJSONTyped,
} from './EnrichedChain';
import type { PartialErrorResponse } from './PartialErrorResponse';
import {
    PartialErrorResponseFromJSON,
    PartialErrorResponseFromJSONTyped,
    PartialErrorResponseToJSON,
    PartialErrorResponseToJSONTyped,
} from './PartialErrorResponse';

/**
 * 
 * @export
 * @interface ListBlockchainsResponse
 */
export interface ListBlockchainsResponse {
    /**
     * 
     * @type {PartialErrorResponse}
     * @memberof ListBlockchainsResponse
     */
    partialError?: PartialErrorResponse;
    /**
     * 
     * @type {number}
     * @memberof ListBlockchainsResponse
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof ListBlockchainsResponse
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof ListBlockchainsResponse
     */
    size: number;
    /**
     * 
     * @type {Array<EnrichedChain>}
     * @memberof ListBlockchainsResponse
     */
    chains: Array<EnrichedChain>;
}

/**
 * Check if a given object implements the ListBlockchainsResponse interface.
 */
export function instanceOfListBlockchainsResponse(value: object): value is ListBlockchainsResponse {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('page' in value) || value['page'] === undefined) return false;
    if (!('size' in value) || value['size'] === undefined) return false;
    if (!('chains' in value) || value['chains'] === undefined) return false;
    return true;
}

export function ListBlockchainsResponseFromJSON(json: any): ListBlockchainsResponse {
    return ListBlockchainsResponseFromJSONTyped(json, false);
}

export function ListBlockchainsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListBlockchainsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'partialError': json['partial_error'] == null ? undefined : PartialErrorResponseFromJSON(json['partial_error']),
        'total': json['total'],
        'page': json['page'],
        'size': json['size'],
        'chains': ((json['chains'] as Array<any>).map(EnrichedChainFromJSON)),
    };
}

export function ListBlockchainsResponseToJSON(json: any): ListBlockchainsResponse {
    return ListBlockchainsResponseToJSONTyped(json, false);
}

export function ListBlockchainsResponseToJSONTyped(value?: ListBlockchainsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'partial_error': PartialErrorResponseToJSON(value['partialError']),
        'total': value['total'],
        'page': value['page'],
        'size': value['size'],
        'chains': ((value['chains'] as Array<any>).map(EnrichedChainToJSON)),
    };
}

