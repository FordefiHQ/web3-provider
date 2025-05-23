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

import type { PredictedSolanaTransaction } from './PredictedSolanaTransaction';
import {
    instanceOfPredictedSolanaTransaction,
    PredictedSolanaTransactionFromJSON,
    PredictedSolanaTransactionFromJSONTyped,
    PredictedSolanaTransactionToJSON,
} from './PredictedSolanaTransaction';

/**
 * @type PredictBatchTransactionResponse
 * 
 * @export
 */
export type PredictBatchTransactionResponse = { type: 'solana_transaction' } & PredictedSolanaTransaction;

export function PredictBatchTransactionResponseFromJSON(json: any): PredictBatchTransactionResponse {
    return PredictBatchTransactionResponseFromJSONTyped(json, false);
}

export function PredictBatchTransactionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PredictBatchTransactionResponse {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'solana_transaction':
            return Object.assign({}, PredictedSolanaTransactionFromJSONTyped(json, true), { type: 'solana_transaction' } as const);
        default:
            throw new Error(`No variant of PredictBatchTransactionResponse exists with 'type=${json['type']}'`);
    }
}

export function PredictBatchTransactionResponseToJSON(json: any): any {
    return PredictBatchTransactionResponseToJSONTyped(json, false);
}

export function PredictBatchTransactionResponseToJSONTyped(value?: PredictBatchTransactionResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'solana_transaction':
            return Object.assign({}, PredictedSolanaTransactionToJSON(value), { type: 'solana_transaction' } as const);
        default:
            throw new Error(`No variant of PredictBatchTransactionResponse exists with 'type=${value['type']}'`);
    }

}

