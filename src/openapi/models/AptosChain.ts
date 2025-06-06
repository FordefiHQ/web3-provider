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
import type { AptosChainUniqueId } from './AptosChainUniqueId';
import {
    AptosChainUniqueIdFromJSON,
    AptosChainUniqueIdFromJSONTyped,
    AptosChainUniqueIdToJSON,
    AptosChainUniqueIdToJSONTyped,
} from './AptosChainUniqueId';

/**
 * 
 * @export
 * @interface AptosChain
 */
export interface AptosChain {
    /**
     * 
     * @type {string}
     * @memberof AptosChain
     */
    chainType: AptosChainChainTypeEnum;
    /**
     * 
     * @type {AptosChainUniqueId}
     * @memberof AptosChain
     */
    uniqueId: AptosChainUniqueId;
}


/**
 * @export
 */
export const AptosChainChainTypeEnum = {
    aptos: 'aptos'
} as const;
export type AptosChainChainTypeEnum = typeof AptosChainChainTypeEnum[keyof typeof AptosChainChainTypeEnum];


/**
 * Check if a given object implements the AptosChain interface.
 */
export function instanceOfAptosChain(value: object): value is AptosChain {
    if (!('chainType' in value) || value['chainType'] === undefined) return false;
    if (!('uniqueId' in value) || value['uniqueId'] === undefined) return false;
    return true;
}

export function AptosChainFromJSON(json: any): AptosChain {
    return AptosChainFromJSONTyped(json, false);
}

export function AptosChainFromJSONTyped(json: any, ignoreDiscriminator: boolean): AptosChain {
    if (json == null) {
        return json;
    }
    return {
        
        'chainType': json['chain_type'],
        'uniqueId': AptosChainUniqueIdFromJSON(json['unique_id']),
    };
}

export function AptosChainToJSON(json: any): AptosChain {
    return AptosChainToJSONTyped(json, false);
}

export function AptosChainToJSONTyped(value?: AptosChain | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chain_type': value['chainType'],
        'unique_id': AptosChainUniqueIdToJSON(value['uniqueId']),
    };
}

