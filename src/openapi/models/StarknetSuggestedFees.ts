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
import type { StarknetChainUniqueId } from './StarknetChainUniqueId';
import {
    StarknetChainUniqueIdFromJSON,
    StarknetChainUniqueIdFromJSONTyped,
    StarknetChainUniqueIdToJSON,
    StarknetChainUniqueIdToJSONTyped,
} from './StarknetChainUniqueId';

/**
 * 
 * @export
 * @interface StarknetSuggestedFees
 */
export interface StarknetSuggestedFees {
    /**
     * 
     * @type {string}
     * @memberof StarknetSuggestedFees
     */
    type: StarknetSuggestedFeesTypeEnum;
    /**
     * 
     * @type {StarknetChainUniqueId}
     * @memberof StarknetSuggestedFees
     */
    chainUniqueId: StarknetChainUniqueId;
    /**
     * 
     * @type {string}
     * @memberof StarknetSuggestedFees
     */
    gasPrice: string;
}


/**
 * @export
 */
export const StarknetSuggestedFeesTypeEnum = {
    starknet: 'starknet'
} as const;
export type StarknetSuggestedFeesTypeEnum = typeof StarknetSuggestedFeesTypeEnum[keyof typeof StarknetSuggestedFeesTypeEnum];


/**
 * Check if a given object implements the StarknetSuggestedFees interface.
 */
export function instanceOfStarknetSuggestedFees(value: object): value is StarknetSuggestedFees {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('chainUniqueId' in value) || value['chainUniqueId'] === undefined) return false;
    if (!('gasPrice' in value) || value['gasPrice'] === undefined) return false;
    return true;
}

export function StarknetSuggestedFeesFromJSON(json: any): StarknetSuggestedFees {
    return StarknetSuggestedFeesFromJSONTyped(json, false);
}

export function StarknetSuggestedFeesFromJSONTyped(json: any, ignoreDiscriminator: boolean): StarknetSuggestedFees {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'chainUniqueId': StarknetChainUniqueIdFromJSON(json['chain_unique_id']),
        'gasPrice': json['gas_price'],
    };
}

export function StarknetSuggestedFeesToJSON(json: any): StarknetSuggestedFees {
    return StarknetSuggestedFeesToJSONTyped(json, false);
}

export function StarknetSuggestedFeesToJSONTyped(value?: StarknetSuggestedFees | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'chain_unique_id': StarknetChainUniqueIdToJSON(value['chainUniqueId']),
        'gas_price': value['gasPrice'],
    };
}

