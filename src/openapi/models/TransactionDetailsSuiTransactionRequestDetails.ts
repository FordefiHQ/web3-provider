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
    TransactionDetailsSuiProgrammableTransactionBlockRequest,
    instanceOfTransactionDetailsSuiProgrammableTransactionBlockRequest,
    TransactionDetailsSuiProgrammableTransactionBlockRequestFromJSON,
    TransactionDetailsSuiProgrammableTransactionBlockRequestFromJSONTyped,
    TransactionDetailsSuiProgrammableTransactionBlockRequestToJSON,
} from './TransactionDetailsSuiProgrammableTransactionBlockRequest';
import {
    TransactionDetailsSuiTransferRequest,
    instanceOfTransactionDetailsSuiTransferRequest,
    TransactionDetailsSuiTransferRequestFromJSON,
    TransactionDetailsSuiTransferRequestFromJSONTyped,
    TransactionDetailsSuiTransferRequestToJSON,
} from './TransactionDetailsSuiTransferRequest';

/**
 * @type TransactionDetailsSuiTransactionRequestDetails
 * 
 * @export
 */
export type TransactionDetailsSuiTransactionRequestDetails = { type: 'sui_programmable_transaction_block' } & TransactionDetailsSuiProgrammableTransactionBlockRequest | { type: 'sui_transfer' } & TransactionDetailsSuiTransferRequest;

export function TransactionDetailsSuiTransactionRequestDetailsFromJSON(json: any): TransactionDetailsSuiTransactionRequestDetails {
    return TransactionDetailsSuiTransactionRequestDetailsFromJSONTyped(json, false);
}

export function TransactionDetailsSuiTransactionRequestDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDetailsSuiTransactionRequestDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'sui_programmable_transaction_block':
            return {...TransactionDetailsSuiProgrammableTransactionBlockRequestFromJSONTyped(json, true), type: 'sui_programmable_transaction_block'};
        case 'sui_transfer':
            return {...TransactionDetailsSuiTransferRequestFromJSONTyped(json, true), type: 'sui_transfer'};
        default:
            throw new Error(`No variant of TransactionDetailsSuiTransactionRequestDetails exists with 'type=${json['type']}'`);
    }
}

export function TransactionDetailsSuiTransactionRequestDetailsToJSON(value?: TransactionDetailsSuiTransactionRequestDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'sui_programmable_transaction_block':
            return TransactionDetailsSuiProgrammableTransactionBlockRequestToJSON(value);
        case 'sui_transfer':
            return TransactionDetailsSuiTransferRequestToJSON(value);
        default:
            throw new Error(`No variant of TransactionDetailsSuiTransactionRequestDetails exists with 'type=${value['type']}'`);
    }

}

