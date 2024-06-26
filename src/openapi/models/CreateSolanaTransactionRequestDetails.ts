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
    CreateSolanaRawTransactionRequest,
    instanceOfCreateSolanaRawTransactionRequest,
    CreateSolanaRawTransactionRequestFromJSON,
    CreateSolanaRawTransactionRequestFromJSONTyped,
    CreateSolanaRawTransactionRequestToJSON,
} from './CreateSolanaRawTransactionRequest';
import {
    CreateSolanaTransferRequest,
    instanceOfCreateSolanaTransferRequest,
    CreateSolanaTransferRequestFromJSON,
    CreateSolanaTransferRequestFromJSONTyped,
    CreateSolanaTransferRequestToJSON,
} from './CreateSolanaTransferRequest';

/**
 * @type CreateSolanaTransactionRequestDetails
 * 
 * @export
 */
export type CreateSolanaTransactionRequestDetails = { type: 'solana_raw_transaction' } & CreateSolanaRawTransactionRequest | { type: 'solana_transfer' } & CreateSolanaTransferRequest;

export function CreateSolanaTransactionRequestDetailsFromJSON(json: any): CreateSolanaTransactionRequestDetails {
    return CreateSolanaTransactionRequestDetailsFromJSONTyped(json, false);
}

export function CreateSolanaTransactionRequestDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSolanaTransactionRequestDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'solana_raw_transaction':
            return {...CreateSolanaRawTransactionRequestFromJSONTyped(json, true), type: 'solana_raw_transaction'};
        case 'solana_transfer':
            return {...CreateSolanaTransferRequestFromJSONTyped(json, true), type: 'solana_transfer'};
        default:
            throw new Error(`No variant of CreateSolanaTransactionRequestDetails exists with 'type=${json['type']}'`);
    }
}

export function CreateSolanaTransactionRequestDetailsToJSON(value?: CreateSolanaTransactionRequestDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'solana_raw_transaction':
            return CreateSolanaRawTransactionRequestToJSON(value);
        case 'solana_transfer':
            return CreateSolanaTransferRequestToJSON(value);
        default:
            throw new Error(`No variant of CreateSolanaTransactionRequestDetails exists with 'type=${value['type']}'`);
    }

}

