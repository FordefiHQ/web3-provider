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
 * @interface TonBlock
 */
export interface TonBlock {
    /**
     * 
     * @type {number}
     * @memberof TonBlock
     */
    sequence: number;
    /**
     * 
     * @type {string}
     * @memberof TonBlock
     */
    hash?: string;
    /**
     * 
     * @type {Date}
     * @memberof TonBlock
     */
    minedAt: Date;
}

/**
 * Check if a given object implements the TonBlock interface.
 */
export function instanceOfTonBlock(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sequence" in value;
    isInstance = isInstance && "minedAt" in value;

    return isInstance;
}

export function TonBlockFromJSON(json: any): TonBlock {
    return TonBlockFromJSONTyped(json, false);
}

export function TonBlockFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonBlock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sequence': json['sequence'],
        'hash': !exists(json, 'hash') ? undefined : json['hash'],
        'minedAt': (new Date(json['mined_at'])),
    };
}

export function TonBlockToJSON(value?: TonBlock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sequence': value.sequence,
        'hash': value.hash,
        'mined_at': (value.minedAt.toISOString()),
    };
}

