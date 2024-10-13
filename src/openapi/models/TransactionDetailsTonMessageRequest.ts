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
import type { TonProofMessageRequest } from './TonProofMessageRequest';
import {
    TonProofMessageRequestFromJSON,
    TonProofMessageRequestFromJSONTyped,
    TonProofMessageRequestToJSON,
} from './TonProofMessageRequest';

/**
 * 
 * @export
 * @interface TransactionDetailsTonMessageRequest
 */
export interface TransactionDetailsTonMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof TransactionDetailsTonMessageRequest
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionDetailsTonMessageRequest
     */
    type: TransactionDetailsTonMessageRequestTypeEnum;
    /**
     * 
     * @type {TonProofMessageRequest}
     * @memberof TransactionDetailsTonMessageRequest
     */
    details: TonProofMessageRequest;
}


/**
 * @export
 */
export const TransactionDetailsTonMessageRequestTypeEnum = {
    tonMessage: 'ton_message'
} as const;
export type TransactionDetailsTonMessageRequestTypeEnum = typeof TransactionDetailsTonMessageRequestTypeEnum[keyof typeof TransactionDetailsTonMessageRequestTypeEnum];


/**
 * Check if a given object implements the TransactionDetailsTonMessageRequest interface.
 */
export function instanceOfTransactionDetailsTonMessageRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "vaultId" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;

    return isInstance;
}

export function TransactionDetailsTonMessageRequestFromJSON(json: any): TransactionDetailsTonMessageRequest {
    return TransactionDetailsTonMessageRequestFromJSONTyped(json, false);
}

export function TransactionDetailsTonMessageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDetailsTonMessageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'vaultId': json['vault_id'],
        'type': json['type'],
        'details': TonProofMessageRequestFromJSON(json['details']),
    };
}

export function TransactionDetailsTonMessageRequestToJSON(value?: TransactionDetailsTonMessageRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'vault_id': value.vaultId,
        'type': value.type,
        'details': TonProofMessageRequestToJSON(value.details),
    };
}

