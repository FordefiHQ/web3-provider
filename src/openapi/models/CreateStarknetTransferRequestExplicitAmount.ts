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
 * @interface CreateStarknetTransferRequestExplicitAmount
 */
export interface CreateStarknetTransferRequestExplicitAmount {
    /**
     * 
     * @type {string}
     * @memberof CreateStarknetTransferRequestExplicitAmount
     */
    type: CreateStarknetTransferRequestExplicitAmountTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateStarknetTransferRequestExplicitAmount
     */
    value: string;
}


/**
 * @export
 */
export const CreateStarknetTransferRequestExplicitAmountTypeEnum = {
    value: 'value'
} as const;
export type CreateStarknetTransferRequestExplicitAmountTypeEnum = typeof CreateStarknetTransferRequestExplicitAmountTypeEnum[keyof typeof CreateStarknetTransferRequestExplicitAmountTypeEnum];


/**
 * Check if a given object implements the CreateStarknetTransferRequestExplicitAmount interface.
 */
export function instanceOfCreateStarknetTransferRequestExplicitAmount(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function CreateStarknetTransferRequestExplicitAmountFromJSON(json: any): CreateStarknetTransferRequestExplicitAmount {
    return CreateStarknetTransferRequestExplicitAmountFromJSONTyped(json, false);
}

export function CreateStarknetTransferRequestExplicitAmountFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateStarknetTransferRequestExplicitAmount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'value': json['value'],
    };
}

export function CreateStarknetTransferRequestExplicitAmountToJSON(value?: CreateStarknetTransferRequestExplicitAmount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'value': value.value,
    };
}

