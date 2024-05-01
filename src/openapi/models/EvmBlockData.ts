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
 * @interface EvmBlockData
 */
export interface EvmBlockData {
    /**
     * 
     * @type {number}
     * @memberof EvmBlockData
     */
    number: number;
    /**
     * 
     * @type {string}
     * @memberof EvmBlockData
     */
    hash: string;
    /**
     * 
     * @type {Date}
     * @memberof EvmBlockData
     */
    minedAt: Date;
}

/**
 * Check if a given object implements the EvmBlockData interface.
 */
export function instanceOfEvmBlockData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "number" in value;
    isInstance = isInstance && "hash" in value;
    isInstance = isInstance && "minedAt" in value;

    return isInstance;
}

export function EvmBlockDataFromJSON(json: any): EvmBlockData {
    return EvmBlockDataFromJSONTyped(json, false);
}

export function EvmBlockDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvmBlockData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'number': json['number'],
        'hash': json['hash'],
        'minedAt': (new Date(json['mined_at'])),
    };
}

export function EvmBlockDataToJSON(value?: EvmBlockData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'number': value.number,
        'hash': value.hash,
        'mined_at': (value.minedAt.toISOString()),
    };
}

