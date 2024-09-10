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
import type { EnrichedUtxoChain } from './EnrichedUtxoChain';
import {
    EnrichedUtxoChainFromJSON,
    EnrichedUtxoChainFromJSONTyped,
    EnrichedUtxoChainToJSON,
} from './EnrichedUtxoChain';
import type { UtxoNativeAssetIdentifierRequest } from './UtxoNativeAssetIdentifierRequest';
import {
    UtxoNativeAssetIdentifierRequestFromJSON,
    UtxoNativeAssetIdentifierRequestFromJSONTyped,
    UtxoNativeAssetIdentifierRequestToJSON,
} from './UtxoNativeAssetIdentifierRequest';

/**
 * 
 * @export
 * @interface UtxoAssetIdentifier
 */
export interface UtxoAssetIdentifier {
    /**
     * 
     * @type {string}
     * @memberof UtxoAssetIdentifier
     */
    type: UtxoAssetIdentifierTypeEnum;
    /**
     * 
     * @type {UtxoNativeAssetIdentifierRequest}
     * @memberof UtxoAssetIdentifier
     */
    details: UtxoNativeAssetIdentifierRequest;
    /**
     * 
     * @type {EnrichedUtxoChain}
     * @memberof UtxoAssetIdentifier
     */
    chain: EnrichedUtxoChain;
}


/**
 * @export
 */
export const UtxoAssetIdentifierTypeEnum = {
    utxo: 'utxo'
} as const;
export type UtxoAssetIdentifierTypeEnum = typeof UtxoAssetIdentifierTypeEnum[keyof typeof UtxoAssetIdentifierTypeEnum];


/**
 * Check if a given object implements the UtxoAssetIdentifier interface.
 */
export function instanceOfUtxoAssetIdentifier(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;
    isInstance = isInstance && "chain" in value;

    return isInstance;
}

export function UtxoAssetIdentifierFromJSON(json: any): UtxoAssetIdentifier {
    return UtxoAssetIdentifierFromJSONTyped(json, false);
}

export function UtxoAssetIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): UtxoAssetIdentifier {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'details': UtxoNativeAssetIdentifierRequestFromJSON(json['details']),
        'chain': EnrichedUtxoChainFromJSON(json['chain']),
    };
}

export function UtxoAssetIdentifierToJSON(value?: UtxoAssetIdentifier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'details': UtxoNativeAssetIdentifierRequestToJSON(value.details),
        'chain': EnrichedUtxoChainToJSON(value.chain),
    };
}

