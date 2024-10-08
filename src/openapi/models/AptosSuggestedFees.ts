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
import type { AptosChainUniqueId } from './AptosChainUniqueId';
import {
    AptosChainUniqueIdFromJSON,
    AptosChainUniqueIdFromJSONTyped,
    AptosChainUniqueIdToJSON,
} from './AptosChainUniqueId';

/**
 * 
 * @export
 * @interface AptosSuggestedFees
 */
export interface AptosSuggestedFees {
    /**
     * 
     * @type {string}
     * @memberof AptosSuggestedFees
     */
    type: AptosSuggestedFeesTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AptosSuggestedFees
     */
    low: string;
    /**
     * 
     * @type {string}
     * @memberof AptosSuggestedFees
     */
    medium: string;
    /**
     * 
     * @type {string}
     * @memberof AptosSuggestedFees
     */
    high: string;
    /**
     * 
     * @type {AptosChainUniqueId}
     * @memberof AptosSuggestedFees
     */
    chainUniqueId: AptosChainUniqueId;
}


/**
 * @export
 */
export const AptosSuggestedFeesTypeEnum = {
    aptos: 'aptos'
} as const;
export type AptosSuggestedFeesTypeEnum = typeof AptosSuggestedFeesTypeEnum[keyof typeof AptosSuggestedFeesTypeEnum];


/**
 * Check if a given object implements the AptosSuggestedFees interface.
 */
export function instanceOfAptosSuggestedFees(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "low" in value;
    isInstance = isInstance && "medium" in value;
    isInstance = isInstance && "high" in value;
    isInstance = isInstance && "chainUniqueId" in value;

    return isInstance;
}

export function AptosSuggestedFeesFromJSON(json: any): AptosSuggestedFees {
    return AptosSuggestedFeesFromJSONTyped(json, false);
}

export function AptosSuggestedFeesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AptosSuggestedFees {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'low': json['low'],
        'medium': json['medium'],
        'high': json['high'],
        'chainUniqueId': AptosChainUniqueIdFromJSON(json['chain_unique_id']),
    };
}

export function AptosSuggestedFeesToJSON(value?: AptosSuggestedFees | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'low': value.low,
        'medium': value.medium,
        'high': value.high,
        'chain_unique_id': AptosChainUniqueIdToJSON(value.chainUniqueId),
    };
}

