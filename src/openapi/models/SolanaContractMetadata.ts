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
import type { Dapp } from './Dapp';
import {
    DappFromJSON,
    DappFromJSONTyped,
    DappToJSON,
} from './Dapp';
import type { SplToken } from './SplToken';
import {
    SplTokenFromJSON,
    SplTokenFromJSONTyped,
    SplTokenToJSON,
} from './SplToken';

/**
 * 
 * @export
 * @interface SolanaContractMetadata
 */
export interface SolanaContractMetadata {
    /**
     * 
     * @type {string}
     * @memberof SolanaContractMetadata
     */
    name?: string;
    /**
     * 
     * @type {Dapp}
     * @memberof SolanaContractMetadata
     */
    dapp?: Dapp;
    /**
     * 
     * @type {boolean}
     * @memberof SolanaContractMetadata
     */
    isVerified: boolean;
    /**
     * 
     * @type {SplToken}
     * @memberof SolanaContractMetadata
     */
    token?: SplToken;
}

/**
 * Check if a given object implements the SolanaContractMetadata interface.
 */
export function instanceOfSolanaContractMetadata(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "isVerified" in value;

    return isInstance;
}

export function SolanaContractMetadataFromJSON(json: any): SolanaContractMetadata {
    return SolanaContractMetadataFromJSONTyped(json, false);
}

export function SolanaContractMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolanaContractMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'dapp': !exists(json, 'dapp') ? undefined : DappFromJSON(json['dapp']),
        'isVerified': json['is_verified'],
        'token': !exists(json, 'token') ? undefined : SplTokenFromJSON(json['token']),
    };
}

export function SolanaContractMetadataToJSON(value?: SolanaContractMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'dapp': DappToJSON(value.dapp),
        'is_verified': value.isVerified,
        'token': SplTokenToJSON(value.token),
    };
}

