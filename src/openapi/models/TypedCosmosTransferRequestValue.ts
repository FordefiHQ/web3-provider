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

import {
    CreateCosmosTransferRequestExplicitValue,
    instanceOfCreateCosmosTransferRequestExplicitValue,
    CreateCosmosTransferRequestExplicitValueFromJSON,
    CreateCosmosTransferRequestExplicitValueFromJSONTyped,
    CreateCosmosTransferRequestExplicitValueToJSON,
} from './CreateCosmosTransferRequestExplicitValue';
import {
    CreateCosmosTransferRequestMaxValue,
    instanceOfCreateCosmosTransferRequestMaxValue,
    CreateCosmosTransferRequestMaxValueFromJSON,
    CreateCosmosTransferRequestMaxValueFromJSONTyped,
    CreateCosmosTransferRequestMaxValueToJSON,
} from './CreateCosmosTransferRequestMaxValue';

/**
 * @type TypedCosmosTransferRequestValue
 * 
 * @export
 */
export type TypedCosmosTransferRequestValue = { type: 'max' } & CreateCosmosTransferRequestMaxValue | { type: 'value' } & CreateCosmosTransferRequestExplicitValue;

export function TypedCosmosTransferRequestValueFromJSON(json: any): TypedCosmosTransferRequestValue {
    return TypedCosmosTransferRequestValueFromJSONTyped(json, false);
}

export function TypedCosmosTransferRequestValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypedCosmosTransferRequestValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'max':
            return {...CreateCosmosTransferRequestMaxValueFromJSONTyped(json, true), type: 'max'};
        case 'value':
            return {...CreateCosmosTransferRequestExplicitValueFromJSONTyped(json, true), type: 'value'};
        default:
            throw new Error(`No variant of TypedCosmosTransferRequestValue exists with 'type=${json['type']}'`);
    }
}

export function TypedCosmosTransferRequestValueToJSON(value?: TypedCosmosTransferRequestValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'max':
            return CreateCosmosTransferRequestMaxValueToJSON(value);
        case 'value':
            return CreateCosmosTransferRequestExplicitValueToJSON(value);
        default:
            throw new Error(`No variant of TypedCosmosTransferRequestValue exists with 'type=${value['type']}'`);
    }

}

