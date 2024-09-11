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
 * @interface SuiSuggestedFees
 */
export interface SuiSuggestedFees {
    /**
     * 
     * @type {string}
     * @memberof SuiSuggestedFees
     */
    type: SuiSuggestedFeesTypeEnum;
    /**
     * 
     * @type {SuiChainUniqueId}
     * @memberof SuiSuggestedFees
     */
    chainUniqueId: SuiChainUniqueId;
}


/**
 * @export
 */
export const SuiSuggestedFeesTypeEnum = {
    sui: 'sui'
} as const;
export type SuiSuggestedFeesTypeEnum = typeof SuiSuggestedFeesTypeEnum[keyof typeof SuiSuggestedFeesTypeEnum];


/**
 * Check if a given object implements the SuiSuggestedFees interface.
 */
export function instanceOfSuiSuggestedFees(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "chainUniqueId" in value;

    return isInstance;
}

export function SuiSuggestedFeesFromJSON(json: any): SuiSuggestedFees {
    return SuiSuggestedFeesFromJSONTyped(json, false);
}

export function SuiSuggestedFeesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiSuggestedFees {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'chainUniqueId': SuiChainUniqueIdFromJSON(json['chain_unique_id']),
    };
}

export function SuiSuggestedFeesToJSON(value?: SuiSuggestedFees | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'chain_unique_id': SuiChainUniqueIdToJSON(value.chainUniqueId),
    };
}

