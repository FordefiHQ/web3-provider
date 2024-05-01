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
import type { CosmosChainUniqueId } from './CosmosChainUniqueId';
import {
    CosmosChainUniqueIdFromJSON,
    CosmosChainUniqueIdFromJSONTyped,
    CosmosChainUniqueIdToJSON,
} from './CosmosChainUniqueId';

/**
 * 
 * @export
 * @interface CosmosTokenAssetIdentifierRequest
 */
export interface CosmosTokenAssetIdentifierRequest {
    /**
     * 
     * @type {string}
     * @memberof CosmosTokenAssetIdentifierRequest
     */
    type: CosmosTokenAssetIdentifierRequestTypeEnum;
    /**
     * 
     * @type {CosmosChainUniqueId}
     * @memberof CosmosTokenAssetIdentifierRequest
     */
    chain: CosmosChainUniqueId;
    /**
     * 
     * @type {string}
     * @memberof CosmosTokenAssetIdentifierRequest
     */
    denom: string;
}


/**
 * @export
 */
export const CosmosTokenAssetIdentifierRequestTypeEnum = {
    token: 'token'
} as const;
export type CosmosTokenAssetIdentifierRequestTypeEnum = typeof CosmosTokenAssetIdentifierRequestTypeEnum[keyof typeof CosmosTokenAssetIdentifierRequestTypeEnum];


/**
 * Check if a given object implements the CosmosTokenAssetIdentifierRequest interface.
 */
export function instanceOfCosmosTokenAssetIdentifierRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "denom" in value;

    return isInstance;
}

export function CosmosTokenAssetIdentifierRequestFromJSON(json: any): CosmosTokenAssetIdentifierRequest {
    return CosmosTokenAssetIdentifierRequestFromJSONTyped(json, false);
}

export function CosmosTokenAssetIdentifierRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosTokenAssetIdentifierRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'chain': CosmosChainUniqueIdFromJSON(json['chain']),
        'denom': json['denom'],
    };
}

export function CosmosTokenAssetIdentifierRequestToJSON(value?: CosmosTokenAssetIdentifierRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'chain': CosmosChainUniqueIdToJSON(value.chain),
        'denom': value.denom,
    };
}

