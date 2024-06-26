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
import type { TransactionDetailsEvmMessageRequestDetails } from './TransactionDetailsEvmMessageRequestDetails';
import {
    TransactionDetailsEvmMessageRequestDetailsFromJSON,
    TransactionDetailsEvmMessageRequestDetailsFromJSONTyped,
    TransactionDetailsEvmMessageRequestDetailsToJSON,
} from './TransactionDetailsEvmMessageRequestDetails';

/**
 * 
 * @export
 * @interface TransactionDetailsEvmMessageRequest
 */
export interface TransactionDetailsEvmMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof TransactionDetailsEvmMessageRequest
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionDetailsEvmMessageRequest
     */
    type: TransactionDetailsEvmMessageRequestTypeEnum;
    /**
     * 
     * @type {TransactionDetailsEvmMessageRequestDetails}
     * @memberof TransactionDetailsEvmMessageRequest
     */
    details: TransactionDetailsEvmMessageRequestDetails;
}


/**
 * @export
 */
export const TransactionDetailsEvmMessageRequestTypeEnum = {
    evmMessage: 'evm_message'
} as const;
export type TransactionDetailsEvmMessageRequestTypeEnum = typeof TransactionDetailsEvmMessageRequestTypeEnum[keyof typeof TransactionDetailsEvmMessageRequestTypeEnum];


/**
 * Check if a given object implements the TransactionDetailsEvmMessageRequest interface.
 */
export function instanceOfTransactionDetailsEvmMessageRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "vaultId" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;

    return isInstance;
}

export function TransactionDetailsEvmMessageRequestFromJSON(json: any): TransactionDetailsEvmMessageRequest {
    return TransactionDetailsEvmMessageRequestFromJSONTyped(json, false);
}

export function TransactionDetailsEvmMessageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDetailsEvmMessageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'vaultId': json['vault_id'],
        'type': json['type'],
        'details': TransactionDetailsEvmMessageRequestDetailsFromJSON(json['details']),
    };
}

export function TransactionDetailsEvmMessageRequestToJSON(value?: TransactionDetailsEvmMessageRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'vault_id': value.vaultId,
        'type': value.type,
        'details': TransactionDetailsEvmMessageRequestDetailsToJSON(value.details),
    };
}

