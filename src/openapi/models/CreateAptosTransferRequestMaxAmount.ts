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
 * @interface CreateAptosTransferRequestMaxAmount
 */
export interface CreateAptosTransferRequestMaxAmount {
    /**
     * 
     * @type {string}
     * @memberof CreateAptosTransferRequestMaxAmount
     */
    type: CreateAptosTransferRequestMaxAmountTypeEnum;
}


/**
 * @export
 */
export const CreateAptosTransferRequestMaxAmountTypeEnum = {
    max: 'max'
} as const;
export type CreateAptosTransferRequestMaxAmountTypeEnum = typeof CreateAptosTransferRequestMaxAmountTypeEnum[keyof typeof CreateAptosTransferRequestMaxAmountTypeEnum];


/**
 * Check if a given object implements the CreateAptosTransferRequestMaxAmount interface.
 */
export function instanceOfCreateAptosTransferRequestMaxAmount(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function CreateAptosTransferRequestMaxAmountFromJSON(json: any): CreateAptosTransferRequestMaxAmount {
    return CreateAptosTransferRequestMaxAmountFromJSONTyped(json, false);
}

export function CreateAptosTransferRequestMaxAmountFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAptosTransferRequestMaxAmount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function CreateAptosTransferRequestMaxAmountToJSON(value?: CreateAptosTransferRequestMaxAmount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
    };
}
