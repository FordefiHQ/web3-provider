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
import type { CosmosNativeAsset } from './CosmosNativeAsset';
import {
    CosmosNativeAssetFromJSON,
    CosmosNativeAssetFromJSONTyped,
    CosmosNativeAssetToJSON,
} from './CosmosNativeAsset';
import type { CosmosTokenAsset } from './CosmosTokenAsset';
import {
    CosmosTokenAssetFromJSON,
    CosmosTokenAssetFromJSONTyped,
    CosmosTokenAssetToJSON,
} from './CosmosTokenAsset';
import type { EnrichedCosmosChain } from './EnrichedCosmosChain';
import {
    EnrichedCosmosChainFromJSON,
    EnrichedCosmosChainFromJSONTyped,
    EnrichedCosmosChainToJSON,
} from './EnrichedCosmosChain';

/**
 * 
 * @export
 * @interface CosmosAssetDetails
 */
export interface CosmosAssetDetails {
    /**
     * 
     * @type {EnrichedCosmosChain}
     * @memberof CosmosAssetDetails
     */
    chain: EnrichedCosmosChain;
    /**
     * 
     * @type {string}
     * @memberof CosmosAssetDetails
     */
    type: CosmosAssetDetailsTypeEnum;
}


/**
 * @export
 */
export const CosmosAssetDetailsTypeEnum = {
    cosmosTokenAsset: 'cosmos_token_asset'
} as const;
export type CosmosAssetDetailsTypeEnum = typeof CosmosAssetDetailsTypeEnum[keyof typeof CosmosAssetDetailsTypeEnum];


/**
 * Check if a given object implements the CosmosAssetDetails interface.
 */
export function instanceOfCosmosAssetDetails(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function CosmosAssetDetailsFromJSON(json: any): CosmosAssetDetails {
    return CosmosAssetDetailsFromJSONTyped(json, false);
}

export function CosmosAssetDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosAssetDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chain': EnrichedCosmosChainFromJSON(json['chain']),
        'type': json['type'],
    };
}

export function CosmosAssetDetailsToJSON(value?: CosmosAssetDetails | null): any {
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

