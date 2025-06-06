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
import type { SolanaAssetIdentifierDetails } from './SolanaAssetIdentifierDetails';
import {
    SolanaAssetIdentifierDetailsFromJSON,
    SolanaAssetIdentifierDetailsFromJSONTyped,
    SolanaAssetIdentifierDetailsToJSON,
    SolanaAssetIdentifierDetailsToJSONTyped,
} from './SolanaAssetIdentifierDetails';
import type { EnrichedSolanaChain } from './EnrichedSolanaChain';
import {
    EnrichedSolanaChainFromJSON,
    EnrichedSolanaChainFromJSONTyped,
    EnrichedSolanaChainToJSON,
    EnrichedSolanaChainToJSONTyped,
} from './EnrichedSolanaChain';

/**
 * 
 * @export
 * @interface SolanaAssetIdentifier
 */
export interface SolanaAssetIdentifier {
    /**
     * 
     * @type {string}
     * @memberof SolanaAssetIdentifier
     */
    type: SolanaAssetIdentifierTypeEnum;
    /**
     * 
     * @type {SolanaAssetIdentifierDetails}
     * @memberof SolanaAssetIdentifier
     */
    details: SolanaAssetIdentifierDetails;
    /**
     * 
     * @type {EnrichedSolanaChain}
     * @memberof SolanaAssetIdentifier
     */
    chain: EnrichedSolanaChain;
}


/**
 * @export
 */
export const SolanaAssetIdentifierTypeEnum = {
    solana: 'solana'
} as const;
export type SolanaAssetIdentifierTypeEnum = typeof SolanaAssetIdentifierTypeEnum[keyof typeof SolanaAssetIdentifierTypeEnum];


/**
 * Check if a given object implements the SolanaAssetIdentifier interface.
 */
export function instanceOfSolanaAssetIdentifier(value: object): value is SolanaAssetIdentifier {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('details' in value) || value['details'] === undefined) return false;
    if (!('chain' in value) || value['chain'] === undefined) return false;
    return true;
}

export function SolanaAssetIdentifierFromJSON(json: any): SolanaAssetIdentifier {
    return SolanaAssetIdentifierFromJSONTyped(json, false);
}

export function SolanaAssetIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolanaAssetIdentifier {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'details': SolanaAssetIdentifierDetailsFromJSON(json['details']),
        'chain': EnrichedSolanaChainFromJSON(json['chain']),
    };
}

export function SolanaAssetIdentifierToJSON(json: any): SolanaAssetIdentifier {
    return SolanaAssetIdentifierToJSONTyped(json, false);
}

export function SolanaAssetIdentifierToJSONTyped(value?: SolanaAssetIdentifier | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'details': SolanaAssetIdentifierDetailsToJSON(value['details']),
        'chain': EnrichedSolanaChainToJSON(value['chain']),
    };
}

