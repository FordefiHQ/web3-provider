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

import type { AminoRequestData } from './AminoRequestData';
import {
    instanceOfAminoRequestData,
    AminoRequestDataFromJSON,
    AminoRequestDataFromJSONTyped,
    AminoRequestDataToJSON,
} from './AminoRequestData';
import type { DirectRequestData } from './DirectRequestData';
import {
    instanceOfDirectRequestData,
    DirectRequestDataFromJSON,
    DirectRequestDataFromJSONTyped,
    DirectRequestDataToJSON,
} from './DirectRequestData';

/**
 * @type TypedCosmosRawTransactionRequestRequestData
 * 
 * @export
 */
export type TypedCosmosRawTransactionRequestRequestData = { format: 'amino' } & AminoRequestData | { format: 'direct' } & DirectRequestData;

export function TypedCosmosRawTransactionRequestRequestDataFromJSON(json: any): TypedCosmosRawTransactionRequestRequestData {
    return TypedCosmosRawTransactionRequestRequestDataFromJSONTyped(json, false);
}

export function TypedCosmosRawTransactionRequestRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypedCosmosRawTransactionRequestRequestData {
    if (json == null) {
        return json;
    }
    switch (json['format']) {
        case 'amino':
            return Object.assign({}, AminoRequestDataFromJSONTyped(json, true), { format: 'amino' } as const);
        case 'direct':
            return Object.assign({}, DirectRequestDataFromJSONTyped(json, true), { format: 'direct' } as const);
        default:
            throw new Error(`No variant of TypedCosmosRawTransactionRequestRequestData exists with 'format=${json['format']}'`);
    }
}

export function TypedCosmosRawTransactionRequestRequestDataToJSON(json: any): any {
    return TypedCosmosRawTransactionRequestRequestDataToJSONTyped(json, false);
}

export function TypedCosmosRawTransactionRequestRequestDataToJSONTyped(value?: TypedCosmosRawTransactionRequestRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['format']) {
        case 'amino':
            return Object.assign({}, AminoRequestDataToJSON(value), { format: 'amino' } as const);
        case 'direct':
            return Object.assign({}, DirectRequestDataToJSON(value), { format: 'direct' } as const);
        default:
            throw new Error(`No variant of TypedCosmosRawTransactionRequestRequestData exists with 'format=${value['format']}'`);
    }

}

