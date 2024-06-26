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
import type { CreateTransactionResponse } from './CreateTransactionResponse';
import {
    CreateTransactionResponseFromJSON,
    CreateTransactionResponseFromJSONTyped,
    CreateTransactionResponseToJSON,
} from './CreateTransactionResponse';

/**
 * 
 * @export
 * @interface BulkCreateTransactionResponse
 */
export interface BulkCreateTransactionResponse {
    /**
     * 
     * @type {Array<CreateTransactionResponse>}
     * @memberof BulkCreateTransactionResponse
     */
    transactions: Array<CreateTransactionResponse>;
}

/**
 * Check if a given object implements the BulkCreateTransactionResponse interface.
 */
export function instanceOfBulkCreateTransactionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "transactions" in value;

    return isInstance;
}

export function BulkCreateTransactionResponseFromJSON(json: any): BulkCreateTransactionResponse {
    return BulkCreateTransactionResponseFromJSONTyped(json, false);
}

export function BulkCreateTransactionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BulkCreateTransactionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transactions': ((json['transactions'] as Array<any>).map(CreateTransactionResponseFromJSON)),
    };
}

export function BulkCreateTransactionResponseToJSON(value?: BulkCreateTransactionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transactions': ((value.transactions as Array<any>).map(CreateTransactionResponseToJSON)),
    };
}

