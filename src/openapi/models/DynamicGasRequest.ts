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
 * @interface DynamicGasRequest
 */
export interface DynamicGasRequest {
    /**
     * 
     * @type {string}
     * @memberof DynamicGasRequest
     */
    type: DynamicGasRequestTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof DynamicGasRequest
     */
    maxPriorityFeePerGas: string;
    /**
     * 
     * @type {string}
     * @memberof DynamicGasRequest
     */
    maxFeePerGas: string;
}


/**
 * @export
 */
export const DynamicGasRequestTypeEnum = {
    dynamic: 'dynamic'
} as const;
export type DynamicGasRequestTypeEnum = typeof DynamicGasRequestTypeEnum[keyof typeof DynamicGasRequestTypeEnum];


/**
 * Check if a given object implements the DynamicGasRequest interface.
 */
export function instanceOfDynamicGasRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxPriorityFeePerGas" in value;
    isInstance = isInstance && "maxFeePerGas" in value;

    return isInstance;
}

export function DynamicGasRequestFromJSON(json: any): DynamicGasRequest {
    return DynamicGasRequestFromJSONTyped(json, false);
}

export function DynamicGasRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DynamicGasRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'maxPriorityFeePerGas': json['max_priority_fee_per_gas'],
        'maxFeePerGas': json['max_fee_per_gas'],
    };
}

export function DynamicGasRequestToJSON(value?: DynamicGasRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'max_priority_fee_per_gas': value.maxPriorityFeePerGas,
        'max_fee_per_gas': value.maxFeePerGas,
    };
}

