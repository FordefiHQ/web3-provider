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
import type { EvmContractMetadataToken } from './EvmContractMetadataToken';
import {
    EvmContractMetadataTokenFromJSON,
    EvmContractMetadataTokenFromJSONTyped,
    EvmContractMetadataTokenToJSON,
} from './EvmContractMetadataToken';

/**
 * 
 * @export
 * @interface EvmContractMetadata
 */
export interface EvmContractMetadata {
    /**
     * 
     * @type {string}
     * @memberof EvmContractMetadata
     */
    name?: string;
    /**
     * 
     * @type {Dapp}
     * @memberof EvmContractMetadata
     */
    dapp?: Dapp;
    /**
     * 
     * @type {boolean}
     * @memberof EvmContractMetadata
     */
    isVerified: boolean;
    /**
     * 
     * @type {EvmContractMetadataToken}
     * @memberof EvmContractMetadata
     */
    token?: EvmContractMetadataToken;
}

/**
 * Check if a given object implements the EvmContractMetadata interface.
 */
export function instanceOfEvmContractMetadata(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "isVerified" in value;

    return isInstance;
}

export function EvmContractMetadataFromJSON(json: any): EvmContractMetadata {
    return EvmContractMetadataFromJSONTyped(json, false);
}

export function EvmContractMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvmContractMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'dapp': !exists(json, 'dapp') ? undefined : DappFromJSON(json['dapp']),
        'isVerified': json['is_verified'],
        'token': !exists(json, 'token') ? undefined : EvmContractMetadataTokenFromJSON(json['token']),
    };
}

export function EvmContractMetadataToJSON(value?: EvmContractMetadata | null): any {
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
        'token': EvmContractMetadataTokenToJSON(value.token),
    };
}

