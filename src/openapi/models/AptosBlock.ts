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
 * @interface AptosBlock
 */
export interface AptosBlock {
    /**
     * 
     * @type {number}
     * @memberof AptosBlock
     */
    height: number;
    /**
     * 
     * @type {string}
     * @memberof AptosBlock
     */
    hash: string;
    /**
     * 
     * @type {Date}
     * @memberof AptosBlock
     */
    minedAt: Date;
}

/**
 * Check if a given object implements the AptosBlock interface.
 */
export function instanceOfAptosBlock(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "hash" in value;
    isInstance = isInstance && "minedAt" in value;

    return isInstance;
}

export function AptosBlockFromJSON(json: any): AptosBlock {
    return AptosBlockFromJSONTyped(json, false);
}

export function AptosBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): AptosBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'height': json['height'],
        'hash': json['hash'],
        'minedAt': (new Date(json['mined_at'])),
    };
}

export function AptosBlockToJSON(value?: AptosBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'height': value.height,
        'hash': value.hash,
        'mined_at': (value.minedAt.toISOString()),
    };
}

