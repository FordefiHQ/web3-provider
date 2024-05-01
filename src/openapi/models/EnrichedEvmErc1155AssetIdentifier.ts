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
import type { EnrichedEvmAddress } from './EnrichedEvmAddress';
import {
    EnrichedEvmAddressFromJSON,
    EnrichedEvmAddressFromJSONTyped,
    EnrichedEvmAddressToJSON,
} from './EnrichedEvmAddress';
import type { EnrichedEvmChain } from './EnrichedEvmChain';
import {
    EnrichedEvmChainFromJSON,
    EnrichedEvmChainFromJSONTyped,
    EnrichedEvmChainToJSON,
} from './EnrichedEvmChain';

/**
 * 
 * @export
 * @interface EnrichedEvmErc1155AssetIdentifier
 */
export interface EnrichedEvmErc1155AssetIdentifier {
    /**
     * 
     * @type {EnrichedEvmChain}
     * @memberof EnrichedEvmErc1155AssetIdentifier
     */
    chain: EnrichedEvmChain;
    /**
     * 
     * @type {string}
     * @memberof EnrichedEvmErc1155AssetIdentifier
     */
    type: EnrichedEvmErc1155AssetIdentifierTypeEnum;
    /**
     * 
     * @type {EnrichedEvmAddress}
     * @memberof EnrichedEvmErc1155AssetIdentifier
     */
    token: EnrichedEvmAddress;
    /**
     * 
     * @type {string}
     * @memberof EnrichedEvmErc1155AssetIdentifier
     */
    tokenId: string;
}


/**
 * @export
 */
export const EnrichedEvmErc1155AssetIdentifierTypeEnum = {
    erc1155: 'erc1155'
} as const;
export type EnrichedEvmErc1155AssetIdentifierTypeEnum = typeof EnrichedEvmErc1155AssetIdentifierTypeEnum[keyof typeof EnrichedEvmErc1155AssetIdentifierTypeEnum];


/**
 * Check if a given object implements the EnrichedEvmErc1155AssetIdentifier interface.
 */
export function instanceOfEnrichedEvmErc1155AssetIdentifier(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "token" in value;
    isInstance = isInstance && "tokenId" in value;

    return isInstance;
}

export function EnrichedEvmErc1155AssetIdentifierFromJSON(json: any): EnrichedEvmErc1155AssetIdentifier {
    return EnrichedEvmErc1155AssetIdentifierFromJSONTyped(json, false);
}

export function EnrichedEvmErc1155AssetIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrichedEvmErc1155AssetIdentifier {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chain': EnrichedEvmChainFromJSON(json['chain']),
        'type': json['type'],
        'token': EnrichedEvmAddressFromJSON(json['token']),
        'tokenId': json['token_id'],
    };
}

export function EnrichedEvmErc1155AssetIdentifierToJSON(value?: EnrichedEvmErc1155AssetIdentifier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chain': EnrichedEvmChainToJSON(value.chain),
        'type': value.type,
        'token': EnrichedEvmAddressToJSON(value.token),
        'token_id': value.tokenId,
    };
}

