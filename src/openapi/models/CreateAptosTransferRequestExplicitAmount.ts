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
 * @interface CreateAptosTransferRequestExplicitAmount
 */
export interface CreateAptosTransferRequestExplicitAmount {
    /**
     * 
     * @type {string}
     * @memberof CreateAptosTransferRequestExplicitAmount
     */
    type: CreateAptosTransferRequestExplicitAmountTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateAptosTransferRequestExplicitAmount
     */
    value: string;
}


/**
 * @export
 */
export const CreateAptosTransferRequestExplicitAmountTypeEnum = {
    value: 'value'
} as const;
export type CreateAptosTransferRequestExplicitAmountTypeEnum = typeof CreateAptosTransferRequestExplicitAmountTypeEnum[keyof typeof CreateAptosTransferRequestExplicitAmountTypeEnum];


/**
 * Check if a given object implements the CreateAptosTransferRequestExplicitAmount interface.
 */
export function instanceOfCreateAptosTransferRequestExplicitAmount(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function CreateAptosTransferRequestExplicitAmountFromJSON(json: any): CreateAptosTransferRequestExplicitAmount {
    return CreateAptosTransferRequestExplicitAmountFromJSONTyped(json, false);
}

export function CreateAptosTransferRequestExplicitAmountFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAptosTransferRequestExplicitAmount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'value': json['value'],
    };
}

export function CreateAptosTransferRequestExplicitAmountToJSON(value?: CreateAptosTransferRequestExplicitAmount | null): any {
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

