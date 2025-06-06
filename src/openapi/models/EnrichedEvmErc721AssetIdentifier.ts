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
import type { EnrichedEvmChain } from './EnrichedEvmChain';
import {
    EnrichedEvmChainFromJSON,
    EnrichedEvmChainFromJSONTyped,
    EnrichedEvmChainToJSON,
    EnrichedEvmChainToJSONTyped,
} from './EnrichedEvmChain';
import type { EnrichedEvmAddress } from './EnrichedEvmAddress';
import {
    EnrichedEvmAddressFromJSON,
    EnrichedEvmAddressFromJSONTyped,
    EnrichedEvmAddressToJSON,
    EnrichedEvmAddressToJSONTyped,
} from './EnrichedEvmAddress';

/**
 * 
 * @export
 * @interface EnrichedEvmErc721AssetIdentifier
 */
export interface EnrichedEvmErc721AssetIdentifier {
    /**
     * 
     * @type {EnrichedEvmChain}
     * @memberof EnrichedEvmErc721AssetIdentifier
     */
    chain: EnrichedEvmChain;
    /**
     * 
     * @type {string}
     * @memberof EnrichedEvmErc721AssetIdentifier
     */
    type: EnrichedEvmErc721AssetIdentifierTypeEnum;
    /**
     * 
     * @type {EnrichedEvmAddress}
     * @memberof EnrichedEvmErc721AssetIdentifier
     */
    token: EnrichedEvmAddress;
    /**
     * 
     * @type {string}
     * @memberof EnrichedEvmErc721AssetIdentifier
     */
    tokenId: string;
}


/**
 * @export
 */
export const EnrichedEvmErc721AssetIdentifierTypeEnum = {
    erc721: 'erc721'
} as const;
export type EnrichedEvmErc721AssetIdentifierTypeEnum = typeof EnrichedEvmErc721AssetIdentifierTypeEnum[keyof typeof EnrichedEvmErc721AssetIdentifierTypeEnum];


/**
 * Check if a given object implements the EnrichedEvmErc721AssetIdentifier interface.
 */
export function instanceOfEnrichedEvmErc721AssetIdentifier(value: object): value is EnrichedEvmErc721AssetIdentifier {
    if (!('chain' in value) || value['chain'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('token' in value) || value['token'] === undefined) return false;
    if (!('tokenId' in value) || value['tokenId'] === undefined) return false;
    return true;
}

export function EnrichedEvmErc721AssetIdentifierFromJSON(json: any): EnrichedEvmErc721AssetIdentifier {
    return EnrichedEvmErc721AssetIdentifierFromJSONTyped(json, false);
}

export function EnrichedEvmErc721AssetIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrichedEvmErc721AssetIdentifier {
    if (json == null) {
        return json;
    }
    return {
        
        'chain': EnrichedEvmChainFromJSON(json['chain']),
        'type': json['type'],
        'token': EnrichedEvmAddressFromJSON(json['token']),
        'tokenId': json['token_id'],
    };
}

export function EnrichedEvmErc721AssetIdentifierToJSON(json: any): EnrichedEvmErc721AssetIdentifier {
    return EnrichedEvmErc721AssetIdentifierToJSONTyped(json, false);
}

export function EnrichedEvmErc721AssetIdentifierToJSONTyped(value?: EnrichedEvmErc721AssetIdentifier | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chain': EnrichedEvmChainToJSON(value['chain']),
        'type': value['type'],
        'token': EnrichedEvmAddressToJSON(value['token']),
        'token_id': value['tokenId'],
    };
}

