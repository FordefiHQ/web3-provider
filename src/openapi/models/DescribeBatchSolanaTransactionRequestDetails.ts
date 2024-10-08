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
    BatchSolanaTransactionRequestDetails,
    instanceOfBatchSolanaTransactionRequestDetails,
    BatchSolanaTransactionRequestDetailsFromJSON,
    BatchSolanaTransactionRequestDetailsFromJSONTyped,
    BatchSolanaTransactionRequestDetailsToJSON,
} from './BatchSolanaTransactionRequestDetails';

/**
 * @type DescribeBatchSolanaTransactionRequestDetails
 * 
 * @export
 */
export type DescribeBatchSolanaTransactionRequestDetails = { type: 'solana_raw_transaction' } & BatchSolanaTransactionRequestDetails;

export function DescribeBatchSolanaTransactionRequestDetailsFromJSON(json: any): DescribeBatchSolanaTransactionRequestDetails {
    return DescribeBatchSolanaTransactionRequestDetailsFromJSONTyped(json, false);
}

export function DescribeBatchSolanaTransactionRequestDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DescribeBatchSolanaTransactionRequestDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'solana_raw_transaction':
            return {...BatchSolanaTransactionRequestDetailsFromJSONTyped(json, true), type: 'solana_raw_transaction'};
        default:
            throw new Error(`No variant of DescribeBatchSolanaTransactionRequestDetails exists with 'type=${json['type']}'`);
    }
}

export function DescribeBatchSolanaTransactionRequestDetailsToJSON(value?: DescribeBatchSolanaTransactionRequestDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'solana_raw_transaction':
            return BatchSolanaTransactionRequestDetailsToJSON(value);
        default:
            throw new Error(`No variant of DescribeBatchSolanaTransactionRequestDetails exists with 'type=${value['type']}'`);
    }

}

