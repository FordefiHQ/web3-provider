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
/**
 * 
 * @export
 * @interface TestEvmChainRequest
 */
export interface TestEvmChainRequest {
    /**
     * 
     * @type {string}
     * @memberof TestEvmChainRequest
     */
    rpcUrl: string;
    /**
     * 
     * @type {string}
     * @memberof TestEvmChainRequest
     */
    chainType: TestEvmChainRequestChainTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof TestEvmChainRequest
     */
    chainId: number;
}


/**
 * @export
 */
export const TestEvmChainRequestChainTypeEnum = {
    evm: 'evm'
} as const;
export type TestEvmChainRequestChainTypeEnum = typeof TestEvmChainRequestChainTypeEnum[keyof typeof TestEvmChainRequestChainTypeEnum];

/**
 * @export
 */
export const TestEvmChainRequestChainIdEnum = {
    NUMBER_1: 1,
    NUMBER_5: 5,
    NUMBER_10: 10,
    NUMBER_16: 16,
    NUMBER_56: 56,
    NUMBER_100: 100,
    NUMBER_137: 137,
    NUMBER_169: 169,
    NUMBER_250: 250,
    NUMBER_324: 324,
    NUMBER_1030: 1030,
    NUMBER_1100: 1100,
    NUMBER_1101: 1101,
    NUMBER_1329: 1329,
    NUMBER_1729: 1729,
    NUMBER_2222: 2222,
    NUMBER_4200: 4200,
    NUMBER_5000: 5000,
    NUMBER_7000: 7000,
    NUMBER_7700: 7700,
    NUMBER_8453: 8453,
    NUMBER_17000: 17000,
    NUMBER_80001: 80001,
    NUMBER_42161: 42161,
    NUMBER_43114: 43114,
    NUMBER_59144: 59144,
    NUMBER_81457: 81457,
    NUMBER_421614: 421614,
    NUMBER_534352: 534352,
    NUMBER_660279: 660279,
    NUMBER_810180: 810180,
    NUMBER_11155111: 11155111
} as const;
export type TestEvmChainRequestChainIdEnum = typeof TestEvmChainRequestChainIdEnum[keyof typeof TestEvmChainRequestChainIdEnum];


/**
 * Check if a given object implements the TestEvmChainRequest interface.
 */
export function instanceOfTestEvmChainRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "rpcUrl" in value;
    isInstance = isInstance && "chainType" in value;
    isInstance = isInstance && "chainId" in value;

    return isInstance;
}

export function TestEvmChainRequestFromJSON(json: any): TestEvmChainRequest {
    return TestEvmChainRequestFromJSONTyped(json, false);
}

export function TestEvmChainRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TestEvmChainRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rpcUrl': json['rpc_url'],
        'chainType': json['chain_type'],
        'chainId': json['chain_id'],
    };
}

export function TestEvmChainRequestToJSON(value?: TestEvmChainRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rpc_url': value.rpcUrl,
        'chain_type': value.chainType,
        'chain_id': value.chainId,
    };
}

