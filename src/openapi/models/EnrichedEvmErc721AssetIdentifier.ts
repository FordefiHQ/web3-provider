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
export function instanceOfEnrichedEvmErc721AssetIdentifier(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "token" in value;
    isInstance = isInstance && "tokenId" in value;

    return isInstance;
}

export function EnrichedEvmErc721AssetIdentifierFromJSON(json: any): EnrichedEvmErc721AssetIdentifier {
    return EnrichedEvmErc721AssetIdentifierFromJSONTyped(json, false);
}

export function EnrichedEvmErc721AssetIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrichedEvmErc721AssetIdentifier {
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

export function EnrichedEvmErc721AssetIdentifierToJSON(value?: EnrichedEvmErc721AssetIdentifier | null): any {
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

