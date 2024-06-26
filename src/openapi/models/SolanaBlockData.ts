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
/**
 * 
 * @export
 * @interface SolanaBlockData
 */
export interface SolanaBlockData {
    /**
     * 
     * @type {number}
     * @memberof SolanaBlockData
     */
    slot: number;
    /**
     * 
     * @type {string}
     * @memberof SolanaBlockData
     */
    hash: string;
    /**
     * 
     * @type {Date}
     * @memberof SolanaBlockData
     */
    minedAt: Date;
}

/**
 * Check if a given object implements the SolanaBlockData interface.
 */
export function instanceOfSolanaBlockData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "slot" in value;
    isInstance = isInstance && "hash" in value;
    isInstance = isInstance && "minedAt" in value;

    return isInstance;
}

export function SolanaBlockDataFromJSON(json: any): SolanaBlockData {
    return SolanaBlockDataFromJSONTyped(json, false);
}

export function SolanaBlockDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolanaBlockData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'slot': json['slot'],
        'hash': json['hash'],
        'minedAt': (new Date(json['mined_at'])),
    };
}

export function SolanaBlockDataToJSON(value?: SolanaBlockData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'slot': value.slot,
        'hash': value.hash,
        'mined_at': (value.minedAt.toISOString()),
    };
}

