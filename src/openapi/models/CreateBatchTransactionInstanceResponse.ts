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
    SolanaTransaction,
    instanceOfSolanaTransaction,
    SolanaTransactionFromJSON,
    SolanaTransactionFromJSONTyped,
    SolanaTransactionToJSON,
} from './SolanaTransaction';

/**
 * @type CreateBatchTransactionInstanceResponse
 * 
 * @export
 */
export type CreateBatchTransactionInstanceResponse = { type: 'solana_transaction' } & SolanaTransaction;

export function CreateBatchTransactionInstanceResponseFromJSON(json: any): CreateBatchTransactionInstanceResponse {
    return CreateBatchTransactionInstanceResponseFromJSONTyped(json, false);
}

export function CreateBatchTransactionInstanceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateBatchTransactionInstanceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'solana_transaction':
            return {...SolanaTransactionFromJSONTyped(json, true), type: 'solana_transaction'};
        default:
            throw new Error(`No variant of CreateBatchTransactionInstanceResponse exists with 'type=${json['type']}'`);
    }
}

export function CreateBatchTransactionInstanceResponseToJSON(value?: CreateBatchTransactionInstanceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'solana_transaction':
            return SolanaTransactionToJSON(value);
        default:
            throw new Error(`No variant of CreateBatchTransactionInstanceResponse exists with 'type=${value['type']}'`);
    }

}

