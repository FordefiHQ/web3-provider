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
import type { SuiChainUniqueId } from './SuiChainUniqueId';
import {
    SuiChainUniqueIdFromJSON,
    SuiChainUniqueIdFromJSONTyped,
    SuiChainUniqueIdToJSON,
} from './SuiChainUniqueId';

/**
 * 
 * @export
 * @interface SuiCoinTypeRequest
 */
export interface SuiCoinTypeRequest {
    /**
     * 
     * @type {SuiChainUniqueId}
     * @memberof SuiCoinTypeRequest
     */
    chain: SuiChainUniqueId;
    /**
     * 
     * @type {string}
     * @memberof SuiCoinTypeRequest
     */
    coinTypeStr: string;
}

/**
 * Check if a given object implements the SuiCoinTypeRequest interface.
 */
export function instanceOfSuiCoinTypeRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "coinTypeStr" in value;

    return isInstance;
}

export function SuiCoinTypeRequestFromJSON(json: any): SuiCoinTypeRequest {
    return SuiCoinTypeRequestFromJSONTyped(json, false);
}

export function SuiCoinTypeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiCoinTypeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chain': SuiChainUniqueIdFromJSON(json['chain']),
        'coinTypeStr': json['coin_type_str'],
    };
}

export function SuiCoinTypeRequestToJSON(value?: SuiCoinTypeRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chain': SuiChainUniqueIdToJSON(value.chain),
        'coin_type_str': value.coinTypeStr,
    };
}

