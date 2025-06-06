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
import type { EvmSuggestedFeesFees } from './EvmSuggestedFeesFees';
import {
    EvmSuggestedFeesFeesFromJSON,
    EvmSuggestedFeesFeesFromJSONTyped,
    EvmSuggestedFeesFeesToJSON,
    EvmSuggestedFeesFeesToJSONTyped,
} from './EvmSuggestedFeesFees';

/**
 * 
 * @export
 * @interface EvmSuggestedFees
 */
export interface EvmSuggestedFees {
    /**
     * 
     * @type {string}
     * @memberof EvmSuggestedFees
     */
    type: EvmSuggestedFeesTypeEnum;
    /**
     * 
     * @type {EvmSuggestedFeesFees}
     * @memberof EvmSuggestedFees
     */
    fees: EvmSuggestedFeesFees;
    /**
     * 
     * @type {string}
     * @memberof EvmSuggestedFees
     */
    chainUniqueId: string;
}


/**
 * @export
 */
export const EvmSuggestedFeesTypeEnum = {
    evm: 'evm'
} as const;
export type EvmSuggestedFeesTypeEnum = typeof EvmSuggestedFeesTypeEnum[keyof typeof EvmSuggestedFeesTypeEnum];


/**
 * Check if a given object implements the EvmSuggestedFees interface.
 */
export function instanceOfEvmSuggestedFees(value: object): value is EvmSuggestedFees {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('fees' in value) || value['fees'] === undefined) return false;
    if (!('chainUniqueId' in value) || value['chainUniqueId'] === undefined) return false;
    return true;
}

export function EvmSuggestedFeesFromJSON(json: any): EvmSuggestedFees {
    return EvmSuggestedFeesFromJSONTyped(json, false);
}

export function EvmSuggestedFeesFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvmSuggestedFees {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'fees': EvmSuggestedFeesFeesFromJSON(json['fees']),
        'chainUniqueId': json['chain_unique_id'],
    };
}

export function EvmSuggestedFeesToJSON(json: any): EvmSuggestedFees {
    return EvmSuggestedFeesToJSONTyped(json, false);
}

export function EvmSuggestedFeesToJSONTyped(value?: EvmSuggestedFees | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'fees': EvmSuggestedFeesFeesToJSON(value['fees']),
        'chain_unique_id': value['chainUniqueId'],
    };
}

