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
 * @interface CreateEvmTransferRequestExplicitValue
 */
export interface CreateEvmTransferRequestExplicitValue {
    /**
     * 
     * @type {string}
     * @memberof CreateEvmTransferRequestExplicitValue
     */
    type: CreateEvmTransferRequestExplicitValueTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateEvmTransferRequestExplicitValue
     */
    value: string;
}


/**
 * @export
 */
export const CreateEvmTransferRequestExplicitValueTypeEnum = {
    value: 'value'
} as const;
export type CreateEvmTransferRequestExplicitValueTypeEnum = typeof CreateEvmTransferRequestExplicitValueTypeEnum[keyof typeof CreateEvmTransferRequestExplicitValueTypeEnum];


/**
 * Check if a given object implements the CreateEvmTransferRequestExplicitValue interface.
 */
export function instanceOfCreateEvmTransferRequestExplicitValue(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function CreateEvmTransferRequestExplicitValueFromJSON(json: any): CreateEvmTransferRequestExplicitValue {
    return CreateEvmTransferRequestExplicitValueFromJSONTyped(json, false);
}

export function CreateEvmTransferRequestExplicitValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEvmTransferRequestExplicitValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'value': json['value'],
    };
}

export function CreateEvmTransferRequestExplicitValueToJSON(value?: CreateEvmTransferRequestExplicitValue | null): any {
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

