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
import type { Transaction } from './Transaction';
import {
    TransactionFromJSON,
    TransactionFromJSONTyped,
    TransactionToJSON,
} from './Transaction';

/**
 * 
 * @export
 * @interface ListTransactionResponse
 */
export interface ListTransactionResponse {
    /**
     * 
     * @type {number}
     * @memberof ListTransactionResponse
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof ListTransactionResponse
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof ListTransactionResponse
     */
    size: number;
    /**
     * 
     * @type {Array<Transaction>}
     * @memberof ListTransactionResponse
     */
    transactions: Array<Transaction>;
}

/**
 * Check if a given object implements the ListTransactionResponse interface.
 */
export function instanceOfListTransactionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "total" in value;
    isInstance = isInstance && "page" in value;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "transactions" in value;

    return isInstance;
}

export function ListTransactionResponseFromJSON(json: any): ListTransactionResponse {
    return ListTransactionResponseFromJSONTyped(json, false);
}

export function ListTransactionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListTransactionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'total': json['total'],
        'page': json['page'],
        'size': json['size'],
        'transactions': ((json['transactions'] as Array<any>).map(TransactionFromJSON)),
    };
}

export function ListTransactionResponseToJSON(value?: ListTransactionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'total': value.total,
        'page': value.page,
        'size': value.size,
        'transactions': ((value.transactions as Array<any>).map(TransactionToJSON)),
    };
}

