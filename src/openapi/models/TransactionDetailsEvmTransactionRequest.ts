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
import type { TransactionDetailsEvmTransactionRequestDetails } from './TransactionDetailsEvmTransactionRequestDetails';
import {
    TransactionDetailsEvmTransactionRequestDetailsFromJSON,
    TransactionDetailsEvmTransactionRequestDetailsFromJSONTyped,
    TransactionDetailsEvmTransactionRequestDetailsToJSON,
} from './TransactionDetailsEvmTransactionRequestDetails';

/**
 * 
 * @export
 * @interface TransactionDetailsEvmTransactionRequest
 */
export interface TransactionDetailsEvmTransactionRequest {
    /**
     * 
     * @type {string}
     * @memberof TransactionDetailsEvmTransactionRequest
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionDetailsEvmTransactionRequest
     */
    type: TransactionDetailsEvmTransactionRequestTypeEnum;
    /**
     * 
     * @type {TransactionDetailsEvmTransactionRequestDetails}
     * @memberof TransactionDetailsEvmTransactionRequest
     */
    details: TransactionDetailsEvmTransactionRequestDetails;
}


/**
 * @export
 */
export const TransactionDetailsEvmTransactionRequestTypeEnum = {
    evmTransaction: 'evm_transaction'
} as const;
export type TransactionDetailsEvmTransactionRequestTypeEnum = typeof TransactionDetailsEvmTransactionRequestTypeEnum[keyof typeof TransactionDetailsEvmTransactionRequestTypeEnum];


/**
 * Check if a given object implements the TransactionDetailsEvmTransactionRequest interface.
 */
export function instanceOfTransactionDetailsEvmTransactionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "vaultId" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;

    return isInstance;
}

export function TransactionDetailsEvmTransactionRequestFromJSON(json: any): TransactionDetailsEvmTransactionRequest {
    return TransactionDetailsEvmTransactionRequestFromJSONTyped(json, false);
}

export function TransactionDetailsEvmTransactionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDetailsEvmTransactionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'vaultId': json['vault_id'],
        'type': json['type'],
        'details': TransactionDetailsEvmTransactionRequestDetailsFromJSON(json['details']),
    };
}

export function TransactionDetailsEvmTransactionRequestToJSON(value?: TransactionDetailsEvmTransactionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'vault_id': value.vaultId,
        'type': value.type,
        'details': TransactionDetailsEvmTransactionRequestDetailsToJSON(value.details),
    };
}

