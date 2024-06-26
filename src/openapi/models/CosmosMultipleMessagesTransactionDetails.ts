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
import type { MessagesList } from './MessagesList';
import {
    MessagesListFromJSON,
    MessagesListFromJSONTyped,
    MessagesListToJSON,
} from './MessagesList';

/**
 * 
 * @export
 * @interface CosmosMultipleMessagesTransactionDetails
 */
export interface CosmosMultipleMessagesTransactionDetails {
    /**
     * 
     * @type {MessagesList}
     * @memberof CosmosMultipleMessagesTransactionDetails
     */
    transactionData: MessagesList;
    /**
     * 
     * @type {string}
     * @memberof CosmosMultipleMessagesTransactionDetails
     */
    type: CosmosMultipleMessagesTransactionDetailsTypeEnum;
}


/**
 * @export
 */
export const CosmosMultipleMessagesTransactionDetailsTypeEnum = {
    messages: 'messages'
} as const;
export type CosmosMultipleMessagesTransactionDetailsTypeEnum = typeof CosmosMultipleMessagesTransactionDetailsTypeEnum[keyof typeof CosmosMultipleMessagesTransactionDetailsTypeEnum];


/**
 * Check if a given object implements the CosmosMultipleMessagesTransactionDetails interface.
 */
export function instanceOfCosmosMultipleMessagesTransactionDetails(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "transactionData" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function CosmosMultipleMessagesTransactionDetailsFromJSON(json: any): CosmosMultipleMessagesTransactionDetails {
    return CosmosMultipleMessagesTransactionDetailsFromJSONTyped(json, false);
}

export function CosmosMultipleMessagesTransactionDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosMultipleMessagesTransactionDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transactionData': MessagesListFromJSON(json['transaction_data']),
        'type': json['type'],
    };
}

export function CosmosMultipleMessagesTransactionDetailsToJSON(value?: CosmosMultipleMessagesTransactionDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transaction_data': MessagesListToJSON(value.transactionData),
        'type': value.type,
    };
}

