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
/**
 * 
 * @export
 * @interface UpdateEvmChainRequest
 */
export interface UpdateEvmChainRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateEvmChainRequest
     */
    chainType: UpdateEvmChainRequestChainTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof UpdateEvmChainRequest
     */
    chainId: number;
    /**
     * 
     * @type {string}
     * @memberof UpdateEvmChainRequest
     */
    chainName: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateEvmChainRequest
     */
    rpcUrl: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateEvmChainRequest
     */
    blockchainExplorerUrl?: string;
}


/**
 * @export
 */
export const UpdateEvmChainRequestChainTypeEnum = {
    evm: 'evm'
} as const;
export type UpdateEvmChainRequestChainTypeEnum = typeof UpdateEvmChainRequestChainTypeEnum[keyof typeof UpdateEvmChainRequestChainTypeEnum];


/**
 * Check if a given object implements the UpdateEvmChainRequest interface.
 */
export function instanceOfUpdateEvmChainRequest(value: object): value is UpdateEvmChainRequest {
    if (!('chainType' in value) || value['chainType'] === undefined) return false;
    if (!('chainId' in value) || value['chainId'] === undefined) return false;
    if (!('chainName' in value) || value['chainName'] === undefined) return false;
    if (!('rpcUrl' in value) || value['rpcUrl'] === undefined) return false;
    return true;
}

export function UpdateEvmChainRequestFromJSON(json: any): UpdateEvmChainRequest {
    return UpdateEvmChainRequestFromJSONTyped(json, false);
}

export function UpdateEvmChainRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateEvmChainRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'chainType': json['chain_type'],
        'chainId': json['chain_id'],
        'chainName': json['chain_name'],
        'rpcUrl': json['rpc_url'],
        'blockchainExplorerUrl': json['blockchain_explorer_url'] == null ? undefined : json['blockchain_explorer_url'],
    };
}

export function UpdateEvmChainRequestToJSON(json: any): UpdateEvmChainRequest {
    return UpdateEvmChainRequestToJSONTyped(json, false);
}

export function UpdateEvmChainRequestToJSONTyped(value?: UpdateEvmChainRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chain_type': value['chainType'],
        'chain_id': value['chainId'],
        'chain_name': value['chainName'],
        'rpc_url': value['rpcUrl'],
        'blockchain_explorer_url': value['blockchainExplorerUrl'],
    };
}

