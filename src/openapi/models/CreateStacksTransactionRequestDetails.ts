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

import type { CreateStacksTransactionSerializedRequest } from './CreateStacksTransactionSerializedRequest';
import {
    instanceOfCreateStacksTransactionSerializedRequest,
    CreateStacksTransactionSerializedRequestFromJSON,
    CreateStacksTransactionSerializedRequestFromJSONTyped,
    CreateStacksTransactionSerializedRequestToJSON,
} from './CreateStacksTransactionSerializedRequest';
import type { CreateStacksTransferRequest } from './CreateStacksTransferRequest';
import {
    instanceOfCreateStacksTransferRequest,
    CreateStacksTransferRequestFromJSON,
    CreateStacksTransferRequestFromJSONTyped,
    CreateStacksTransferRequestToJSON,
} from './CreateStacksTransferRequest';

/**
 * @type CreateStacksTransactionRequestDetails
 * 
 * @export
 */
export type CreateStacksTransactionRequestDetails = { type: 'stacks_serialized_transaction' } & CreateStacksTransactionSerializedRequest | { type: 'stacks_transfer' } & CreateStacksTransferRequest;

export function CreateStacksTransactionRequestDetailsFromJSON(json: any): CreateStacksTransactionRequestDetails {
    return CreateStacksTransactionRequestDetailsFromJSONTyped(json, false);
}

export function CreateStacksTransactionRequestDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateStacksTransactionRequestDetails {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'stacks_serialized_transaction':
            return Object.assign({}, CreateStacksTransactionSerializedRequestFromJSONTyped(json, true), { type: 'stacks_serialized_transaction' } as const);
        case 'stacks_transfer':
            return Object.assign({}, CreateStacksTransferRequestFromJSONTyped(json, true), { type: 'stacks_transfer' } as const);
        default:
            throw new Error(`No variant of CreateStacksTransactionRequestDetails exists with 'type=${json['type']}'`);
    }
}

export function CreateStacksTransactionRequestDetailsToJSON(json: any): any {
    return CreateStacksTransactionRequestDetailsToJSONTyped(json, false);
}

export function CreateStacksTransactionRequestDetailsToJSONTyped(value?: CreateStacksTransactionRequestDetails | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'stacks_serialized_transaction':
            return Object.assign({}, CreateStacksTransactionSerializedRequestToJSON(value), { type: 'stacks_serialized_transaction' } as const);
        case 'stacks_transfer':
            return Object.assign({}, CreateStacksTransferRequestToJSON(value), { type: 'stacks_transfer' } as const);
        default:
            throw new Error(`No variant of CreateStacksTransactionRequestDetails exists with 'type=${value['type']}'`);
    }

}

