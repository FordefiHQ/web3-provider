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
import type { AptosAssetIdentifierDetails } from './AptosAssetIdentifierDetails';
import {
    AptosAssetIdentifierDetailsFromJSON,
    AptosAssetIdentifierDetailsFromJSONTyped,
    AptosAssetIdentifierDetailsToJSON,
} from './AptosAssetIdentifierDetails';
import type { EnrichedAptosChain } from './EnrichedAptosChain';
import {
    EnrichedAptosChainFromJSON,
    EnrichedAptosChainFromJSONTyped,
    EnrichedAptosChainToJSON,
} from './EnrichedAptosChain';

/**
 * 
 * @export
 * @interface AptosAssetIdentifier
 */
export interface AptosAssetIdentifier {
    /**
     * 
     * @type {string}
     * @memberof AptosAssetIdentifier
     */
    type: AptosAssetIdentifierTypeEnum;
    /**
     * 
     * @type {AptosAssetIdentifierDetails}
     * @memberof AptosAssetIdentifier
     */
    details: AptosAssetIdentifierDetails;
    /**
     * 
     * @type {EnrichedAptosChain}
     * @memberof AptosAssetIdentifier
     */
    chain: EnrichedAptosChain;
}


/**
 * @export
 */
export const AptosAssetIdentifierTypeEnum = {
    aptos: 'aptos'
} as const;
export type AptosAssetIdentifierTypeEnum = typeof AptosAssetIdentifierTypeEnum[keyof typeof AptosAssetIdentifierTypeEnum];


/**
 * Check if a given object implements the AptosAssetIdentifier interface.
 */
export function instanceOfAptosAssetIdentifier(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;
    isInstance = isInstance && "chain" in value;

    return isInstance;
}

export function AptosAssetIdentifierFromJSON(json: any): AptosAssetIdentifier {
    return AptosAssetIdentifierFromJSONTyped(json, false);
}

export function AptosAssetIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): AptosAssetIdentifier {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'details': AptosAssetIdentifierDetailsFromJSON(json['details']),
        'chain': EnrichedAptosChainFromJSON(json['chain']),
    };
}

export function AptosAssetIdentifierToJSON(value?: AptosAssetIdentifier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'details': AptosAssetIdentifierDetailsToJSON(value.details),
        'chain': EnrichedAptosChainToJSON(value.chain),
    };
}
