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
import type { EnrichedCosmosChain } from './EnrichedCosmosChain';
import {
    EnrichedCosmosChainFromJSON,
    EnrichedCosmosChainFromJSONTyped,
    EnrichedCosmosChainToJSON,
} from './EnrichedCosmosChain';

/**
 * 
 * @export
 * @interface CosmosTokenAsset
 */
export interface CosmosTokenAsset {
    /**
     * 
     * @type {EnrichedCosmosChain}
     * @memberof CosmosTokenAsset
     */
    chain: EnrichedCosmosChain;
    /**
     * 
     * @type {string}
     * @memberof CosmosTokenAsset
     */
    type: CosmosTokenAssetTypeEnum;
}


/**
 * @export
 */
export const CosmosTokenAssetTypeEnum = {
    cosmosTokenAsset: 'cosmos_token_asset'
} as const;
export type CosmosTokenAssetTypeEnum = typeof CosmosTokenAssetTypeEnum[keyof typeof CosmosTokenAssetTypeEnum];


/**
 * Check if a given object implements the CosmosTokenAsset interface.
 */
export function instanceOfCosmosTokenAsset(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function CosmosTokenAssetFromJSON(json: any): CosmosTokenAsset {
    return CosmosTokenAssetFromJSONTyped(json, false);
}

export function CosmosTokenAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosTokenAsset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chain': EnrichedCosmosChainFromJSON(json['chain']),
        'type': json['type'],
    };
}

export function CosmosTokenAssetToJSON(value?: CosmosTokenAsset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chain': EnrichedCosmosChainToJSON(value.chain),
        'type': value.type,
    };
}

