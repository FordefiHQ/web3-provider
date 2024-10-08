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
import type { TransactionDetailsSuiTransactionRequestDetails } from './TransactionDetailsSuiTransactionRequestDetails';
import {
    TransactionDetailsSuiTransactionRequestDetailsFromJSON,
    TransactionDetailsSuiTransactionRequestDetailsFromJSONTyped,
    TransactionDetailsSuiTransactionRequestDetailsToJSON,
} from './TransactionDetailsSuiTransactionRequestDetails';

/**
 * 
 * @export
 * @interface TransactionDetailsSuiTransactionRequest
 */
export interface TransactionDetailsSuiTransactionRequest {
    /**
     * 
     * @type {string}
     * @memberof TransactionDetailsSuiTransactionRequest
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionDetailsSuiTransactionRequest
     */
    type: TransactionDetailsSuiTransactionRequestTypeEnum;
    /**
     * 
     * @type {TransactionDetailsSuiTransactionRequestDetails}
     * @memberof TransactionDetailsSuiTransactionRequest
     */
    details: TransactionDetailsSuiTransactionRequestDetails;
}


/**
 * @export
 */
export const TransactionDetailsSuiTransactionRequestTypeEnum = {
    suiTransaction: 'sui_transaction'
} as const;
export type TransactionDetailsSuiTransactionRequestTypeEnum = typeof TransactionDetailsSuiTransactionRequestTypeEnum[keyof typeof TransactionDetailsSuiTransactionRequestTypeEnum];


/**
 * Check if a given object implements the TransactionDetailsSuiTransactionRequest interface.
 */
export function instanceOfTransactionDetailsSuiTransactionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "vaultId" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;

    return isInstance;
}

export function TransactionDetailsSuiTransactionRequestFromJSON(json: any): TransactionDetailsSuiTransactionRequest {
    return TransactionDetailsSuiTransactionRequestFromJSONTyped(json, false);
}

export function TransactionDetailsSuiTransactionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDetailsSuiTransactionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'vaultId': json['vault_id'],
        'type': json['type'],
        'details': TransactionDetailsSuiTransactionRequestDetailsFromJSON(json['details']),
    };
}

export function TransactionDetailsSuiTransactionRequestToJSON(value?: TransactionDetailsSuiTransactionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'vault_id': value.vaultId,
        'type': value.type,
        'details': TransactionDetailsSuiTransactionRequestDetailsToJSON(value.details),
    };
}

