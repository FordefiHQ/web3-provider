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
    TypedCosmosRawTransactionRequest,
    instanceOfTypedCosmosRawTransactionRequest,
    TypedCosmosRawTransactionRequestFromJSON,
    TypedCosmosRawTransactionRequestFromJSONTyped,
    TypedCosmosRawTransactionRequestToJSON,
} from './TypedCosmosRawTransactionRequest';
import {
    TypedCosmosTransferRequest,
    instanceOfTypedCosmosTransferRequest,
    TypedCosmosTransferRequestFromJSON,
    TypedCosmosTransferRequestFromJSONTyped,
    TypedCosmosTransferRequestToJSON,
} from './TypedCosmosTransferRequest';

/**
 * @type CreateCosmosTransactionRequestDetails
 * 
 * @export
 */
export type CreateCosmosTransactionRequestDetails = { type: 'cosmos_raw_transaction' } & TypedCosmosRawTransactionRequest | { type: 'cosmos_transfer' } & TypedCosmosTransferRequest;

export function CreateCosmosTransactionRequestDetailsFromJSON(json: any): CreateCosmosTransactionRequestDetails {
    return CreateCosmosTransactionRequestDetailsFromJSONTyped(json, false);
}

export function CreateCosmosTransactionRequestDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCosmosTransactionRequestDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'cosmos_raw_transaction':
            return {...TypedCosmosRawTransactionRequestFromJSONTyped(json, true), type: 'cosmos_raw_transaction'};
        case 'cosmos_transfer':
            return {...TypedCosmosTransferRequestFromJSONTyped(json, true), type: 'cosmos_transfer'};
        default:
            throw new Error(`No variant of CreateCosmosTransactionRequestDetails exists with 'type=${json['type']}'`);
    }
}

export function CreateCosmosTransactionRequestDetailsToJSON(value?: CreateCosmosTransactionRequestDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'cosmos_raw_transaction':
            return TypedCosmosRawTransactionRequestToJSON(value);
        case 'cosmos_transfer':
            return TypedCosmosTransferRequestToJSON(value);
        default:
            throw new Error(`No variant of CreateCosmosTransactionRequestDetails exists with 'type=${value['type']}'`);
    }

}

