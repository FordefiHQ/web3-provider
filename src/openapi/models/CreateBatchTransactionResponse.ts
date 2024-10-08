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
import type { CreateBatchTransactionInstanceResponse } from './CreateBatchTransactionInstanceResponse';
import {
    CreateBatchTransactionInstanceResponseFromJSON,
    CreateBatchTransactionInstanceResponseFromJSONTyped,
    CreateBatchTransactionInstanceResponseToJSON,
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
export function instanceOfCreateBatchTransactionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "batchId" in value;
    isInstance = isInstance && "transactions" in value;

    return isInstance;
}

export function CreateBatchTransactionResponseFromJSON(json: any): CreateBatchTransactionResponse {
    return CreateBatchTransactionResponseFromJSONTyped(json, false);
}

export function CreateBatchTransactionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateBatchTransactionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'batchId': json['batch_id'],
        'transactions': ((json['transactions'] as Array<any>).map(CreateBatchTransactionInstanceResponseFromJSON)),
    };
}

export function CreateBatchTransactionResponseToJSON(value?: CreateBatchTransactionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'batch_id': value.batchId,
        'transactions': ((value.transactions as Array<any>).map(CreateBatchTransactionInstanceResponseToJSON)),
    };
}

