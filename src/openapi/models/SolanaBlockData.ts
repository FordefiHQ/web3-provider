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
export function instanceOfSolanaBlockData(value: object): value is SolanaBlockData {
    if (!('slot' in value) || value['slot'] === undefined) return false;
    if (!('hash' in value) || value['hash'] === undefined) return false;
    if (!('minedAt' in value) || value['minedAt'] === undefined) return false;
    return true;
}

export function SolanaBlockDataFromJSON(json: any): SolanaBlockData {
    return SolanaBlockDataFromJSONTyped(json, false);
}

export function SolanaBlockDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolanaBlockData {
    if (json == null) {
        return json;
    }
    return {
        
        'slot': json['slot'],
        'hash': json['hash'],
        'minedAt': (new Date(json['mined_at'])),
    };
}

export function SolanaBlockDataToJSON(json: any): SolanaBlockData {
    return SolanaBlockDataToJSONTyped(json, false);
}

export function SolanaBlockDataToJSONTyped(value?: SolanaBlockData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'slot': value['slot'],
        'hash': value['hash'],
        'mined_at': ((value['minedAt']).toISOString()),
    };
}

