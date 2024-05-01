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

import { exists, mapValues } from '../runtime';
import type { TransactionDetailsUtxoTransferRequest } from './TransactionDetailsUtxoTransferRequest';
import {
    TransactionDetailsUtxoTransferRequestFromJSON,
    TransactionDetailsUtxoTransferRequestFromJSONTyped,
    TransactionDetailsUtxoTransferRequestToJSON,
} from './TransactionDetailsUtxoTransferRequest';

/**
 * 
 * @export
 * @interface TransactionDetailsUtxoTransactionRequest
 */
export interface TransactionDetailsUtxoTransactionRequest {
    /**
     * 
     * @type {string}
     * @memberof TransactionDetailsUtxoTransactionRequest
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionDetailsUtxoTransactionRequest
     */
    type: TransactionDetailsUtxoTransactionRequestTypeEnum;
    /**
     * 
     * @type {TransactionDetailsUtxoTransferRequest}
     * @memberof TransactionDetailsUtxoTransactionRequest
     */
    details: TransactionDetailsUtxoTransferRequest;
}


/**
 * @export
 */
export const TransactionDetailsUtxoTransactionRequestTypeEnum = {
    utxoTransaction: 'utxo_transaction'
} as const;
export type TransactionDetailsUtxoTransactionRequestTypeEnum = typeof TransactionDetailsUtxoTransactionRequestTypeEnum[keyof typeof TransactionDetailsUtxoTransactionRequestTypeEnum];


/**
 * Check if a given object implements the TransactionDetailsUtxoTransactionRequest interface.
 */
export function instanceOfTransactionDetailsUtxoTransactionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "vaultId" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;

    return isInstance;
}

export function TransactionDetailsUtxoTransactionRequestFromJSON(json: any): TransactionDetailsUtxoTransactionRequest {
    return TransactionDetailsUtxoTransactionRequestFromJSONTyped(json, false);
}

export function TransactionDetailsUtxoTransactionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDetailsUtxoTransactionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'vaultId': json['vault_id'],
        'type': json['type'],
        'details': TransactionDetailsUtxoTransferRequestFromJSON(json['details']),
    };
}

export function TransactionDetailsUtxoTransactionRequestToJSON(value?: TransactionDetailsUtxoTransactionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'vault_id': value.vaultId,
        'type': value.type,
        'details': TransactionDetailsUtxoTransferRequestToJSON(value.details),
    };
}

