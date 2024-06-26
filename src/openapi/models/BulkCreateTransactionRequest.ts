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
    BulkCreateSolanaTransactionRequest,
    instanceOfBulkCreateSolanaTransactionRequest,
    BulkCreateSolanaTransactionRequestFromJSON,
    BulkCreateSolanaTransactionRequestFromJSONTyped,
    BulkCreateSolanaTransactionRequestToJSON,
} from './BulkCreateSolanaTransactionRequest';

/**
 * @type BulkCreateTransactionRequest
 * 
 * @export
 */
export type BulkCreateTransactionRequest = { type: 'solana_transaction' } & BulkCreateSolanaTransactionRequest;

export function BulkCreateTransactionRequestFromJSON(json: any): BulkCreateTransactionRequest {
    return BulkCreateTransactionRequestFromJSONTyped(json, false);
}

export function BulkCreateTransactionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BulkCreateTransactionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'solana_transaction':
            return {...BulkCreateSolanaTransactionRequestFromJSONTyped(json, true), type: 'solana_transaction'};
        default:
            throw new Error(`No variant of BulkCreateTransactionRequest exists with 'type=${json['type']}'`);
    }
}

export function BulkCreateTransactionRequestToJSON(value?: BulkCreateTransactionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'solana_transaction':
            return BulkCreateSolanaTransactionRequestToJSON(value);
        default:
            throw new Error(`No variant of BulkCreateTransactionRequest exists with 'type=${value['type']}'`);
    }

}

