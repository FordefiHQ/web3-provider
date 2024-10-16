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
    SolanaNativeTransferDetails,
    instanceOfSolanaNativeTransferDetails,
    SolanaNativeTransferDetailsFromJSON,
    SolanaNativeTransferDetailsFromJSONTyped,
    SolanaNativeTransferDetailsToJSON,
} from './SolanaNativeTransferDetails';
import {
    SolanaRawTransactionDetails,
    instanceOfSolanaRawTransactionDetails,
    SolanaRawTransactionDetailsFromJSON,
    SolanaRawTransactionDetailsFromJSONTyped,
    SolanaRawTransactionDetailsToJSON,
} from './SolanaRawTransactionDetails';
import {
    SolanaTokenTransferDetails,
    instanceOfSolanaTokenTransferDetails,
    SolanaTokenTransferDetailsFromJSON,
    SolanaTokenTransferDetailsFromJSONTyped,
    SolanaTokenTransferDetailsToJSON,
} from './SolanaTokenTransferDetails';

/**
 * @type PredictedSolanaTransactionSolanaTransactionTypeDetails
 * 
 * @export
 */
export type PredictedSolanaTransactionSolanaTransactionTypeDetails = { type: 'native_transfer' } & SolanaNativeTransferDetails | { type: 'raw_transaction' } & SolanaRawTransactionDetails | { type: 'token_transfer' } & SolanaTokenTransferDetails;

export function PredictedSolanaTransactionSolanaTransactionTypeDetailsFromJSON(json: any): PredictedSolanaTransactionSolanaTransactionTypeDetails {
    return PredictedSolanaTransactionSolanaTransactionTypeDetailsFromJSONTyped(json, false);
}

export function PredictedSolanaTransactionSolanaTransactionTypeDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PredictedSolanaTransactionSolanaTransactionTypeDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'native_transfer':
            return {...SolanaNativeTransferDetailsFromJSONTyped(json, true), type: 'native_transfer'};
        case 'raw_transaction':
            return {...SolanaRawTransactionDetailsFromJSONTyped(json, true), type: 'raw_transaction'};
        case 'token_transfer':
            return {...SolanaTokenTransferDetailsFromJSONTyped(json, true), type: 'token_transfer'};
        default:
            throw new Error(`No variant of PredictedSolanaTransactionSolanaTransactionTypeDetails exists with 'type=${json['type']}'`);
    }
}

export function PredictedSolanaTransactionSolanaTransactionTypeDetailsToJSON(value?: PredictedSolanaTransactionSolanaTransactionTypeDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'native_transfer':
            return SolanaNativeTransferDetailsToJSON(value);
        case 'raw_transaction':
            return SolanaRawTransactionDetailsToJSON(value);
        case 'token_transfer':
            return SolanaTokenTransferDetailsToJSON(value);
        default:
            throw new Error(`No variant of PredictedSolanaTransactionSolanaTransactionTypeDetails exists with 'type=${value['type']}'`);
    }

}

