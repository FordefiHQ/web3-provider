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
import type { LegacyGasFields } from './LegacyGasFields';
import {
    LegacyGasFieldsFromJSON,
    LegacyGasFieldsFromJSONTyped,
    LegacyGasFieldsToJSON,
} from './LegacyGasFields';

/**
 * 
 * @export
 * @interface EvmLegacySuggestedFees
 */
export interface EvmLegacySuggestedFees {
    /**
     * 
     * @type {string}
     * @memberof EvmLegacySuggestedFees
     */
    type: EvmLegacySuggestedFeesTypeEnum;
    /**
     * 
     * @type {LegacyGasFields}
     * @memberof EvmLegacySuggestedFees
     */
    low: LegacyGasFields;
    /**
     * 
     * @type {LegacyGasFields}
     * @memberof EvmLegacySuggestedFees
     */
    medium: LegacyGasFields;
    /**
     * 
     * @type {LegacyGasFields}
     * @memberof EvmLegacySuggestedFees
     */
    high: LegacyGasFields;
}


/**
 * @export
 */
export const EvmLegacySuggestedFeesTypeEnum = {
    legacy: 'legacy'
} as const;
export type EvmLegacySuggestedFeesTypeEnum = typeof EvmLegacySuggestedFeesTypeEnum[keyof typeof EvmLegacySuggestedFeesTypeEnum];


/**
 * Check if a given object implements the EvmLegacySuggestedFees interface.
 */
export function instanceOfEvmLegacySuggestedFees(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "low" in value;
    isInstance = isInstance && "medium" in value;
    isInstance = isInstance && "high" in value;

    return isInstance;
}

export function EvmLegacySuggestedFeesFromJSON(json: any): EvmLegacySuggestedFees {
    return EvmLegacySuggestedFeesFromJSONTyped(json, false);
}

export function EvmLegacySuggestedFeesFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvmLegacySuggestedFees {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'low': LegacyGasFieldsFromJSON(json['low']),
        'medium': LegacyGasFieldsFromJSON(json['medium']),
        'high': LegacyGasFieldsFromJSON(json['high']),
    };
}

export function EvmLegacySuggestedFeesToJSON(value?: EvmLegacySuggestedFees | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'low': LegacyGasFieldsToJSON(value.low),
        'medium': LegacyGasFieldsToJSON(value.medium),
        'high': LegacyGasFieldsToJSON(value.high),
    };
}

