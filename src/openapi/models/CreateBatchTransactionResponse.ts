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

import { mapValues } from '../runtime';
import type { CreateBatchTransactionInstanceResponse } from './CreateBatchTransactionInstanceResponse';
import {
    CreateBatchTransactionInstanceResponseFromJSON,
    CreateBatchTransactionInstanceResponseFromJSONTyped,
    CreateBatchTransactionInstanceResponseToJSON,
    CreateBatchTransactionInstanceResponseToJSONTyped,
} from './CreateBatchTransactionInstanceResponse';

/**
 * 
 * @export
 * @interface CreateBatchTransactionResponse
 */
export interface CreateBatchTransactionResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateBatchTransactionResponse
     */
    batchId: string;
    /**
     * 
     * @type {Array<CreateBatchTransactionInstanceResponse>}
     * @memberof CreateBatchTransactionResponse
     */
    transactions: Array<CreateBatchTransactionInstanceResponse>;
}

/**
 * Check if a given object implements the CreateBatchTransactionResponse interface.
 */
export function instanceOfCreateBatchTransactionResponse(value: object): value is CreateBatchTransactionResponse {
    if (!('batchId' in value) || value['batchId'] === undefined) return false;
    if (!('transactions' in value) || value['transactions'] === undefined) return false;
    return true;
}

export function CreateBatchTransactionResponseFromJSON(json: any): CreateBatchTransactionResponse {
    return CreateBatchTransactionResponseFromJSONTyped(json, false);
}

export function CreateBatchTransactionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateBatchTransactionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'batchId': json['batch_id'],
        'transactions': ((json['transactions'] as Array<any>).map(CreateBatchTransactionInstanceResponseFromJSON)),
    };
}

export function CreateBatchTransactionResponseToJSON(json: any): CreateBatchTransactionResponse {
    return CreateBatchTransactionResponseToJSONTyped(json, false);
}

export function CreateBatchTransactionResponseToJSONTyped(value?: CreateBatchTransactionResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'batch_id': value['batchId'],
        'transactions': ((value['transactions'] as Array<any>).map(CreateBatchTransactionInstanceResponseToJSON)),
    };
}

