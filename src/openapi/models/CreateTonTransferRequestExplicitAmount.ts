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
 * @interface CreateTonTransferRequestExplicitAmount
 */
export interface CreateTonTransferRequestExplicitAmount {
    /**
     * 
     * @type {string}
     * @memberof CreateTonTransferRequestExplicitAmount
     */
    type: CreateTonTransferRequestExplicitAmountTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateTonTransferRequestExplicitAmount
     */
    value: string;
}


/**
 * @export
 */
export const CreateTonTransferRequestExplicitAmountTypeEnum = {
    value: 'value'
} as const;
export type CreateTonTransferRequestExplicitAmountTypeEnum = typeof CreateTonTransferRequestExplicitAmountTypeEnum[keyof typeof CreateTonTransferRequestExplicitAmountTypeEnum];


/**
 * Check if a given object implements the CreateTonTransferRequestExplicitAmount interface.
 */
export function instanceOfCreateTonTransferRequestExplicitAmount(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function CreateTonTransferRequestExplicitAmountFromJSON(json: any): CreateTonTransferRequestExplicitAmount {
    return CreateTonTransferRequestExplicitAmountFromJSONTyped(json, false);
}

export function CreateTonTransferRequestExplicitAmountFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTonTransferRequestExplicitAmount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'value': json['value'],
    };
}

export function CreateTonTransferRequestExplicitAmountToJSON(value?: CreateTonTransferRequestExplicitAmount | null): any {
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

