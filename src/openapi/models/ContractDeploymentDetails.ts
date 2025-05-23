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
 * @interface ContractDeploymentDetails
 */
export interface ContractDeploymentDetails {
    /**
     * 
     * @type {string}
     * @memberof ContractDeploymentDetails
     */
    type: ContractDeploymentDetailsTypeEnum;
    /**
     * 
     * @type {EnrichedEvmAddress}
     * @memberof ContractDeploymentDetails
     */
    contractAddress: EnrichedEvmAddress;
}


/**
 * @export
 */
export const ContractDeploymentDetailsTypeEnum = {
    contractDeployment: 'contract_deployment'
} as const;
export type ContractDeploymentDetailsTypeEnum = typeof ContractDeploymentDetailsTypeEnum[keyof typeof ContractDeploymentDetailsTypeEnum];


/**
 * Check if a given object implements the ContractDeploymentDetails interface.
 */
export function instanceOfContractDeploymentDetails(value: object): value is ContractDeploymentDetails {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('contractAddress' in value) || value['contractAddress'] === undefined) return false;
    return true;
}

export function ContractDeploymentDetailsFromJSON(json: any): ContractDeploymentDetails {
    return ContractDeploymentDetailsFromJSONTyped(json, false);
}

export function ContractDeploymentDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContractDeploymentDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'contractAddress': EnrichedEvmAddressFromJSON(json['contract_address']),
    };
}

export function ContractDeploymentDetailsToJSON(json: any): ContractDeploymentDetails {
    return ContractDeploymentDetailsToJSONTyped(json, false);
}

export function ContractDeploymentDetailsToJSONTyped(value?: ContractDeploymentDetails | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'contract_address': EnrichedEvmAddressToJSON(value['contractAddress']),
    };
}

