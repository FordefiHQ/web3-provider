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

import type { MessagesList } from './MessagesList';
import {
    MessagesListFromJSON,
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
 * 
 */
const CosmosMultipleMessagesTransactionDetailsTypeEnum = {
    messages: 'messages'
} as const;
type CosmosMultipleMessagesTransactionDetailsTypeEnum = typeof CosmosMultipleMessagesTransactionDetailsTypeEnum[keyof typeof CosmosMultipleMessagesTransactionDetailsTypeEnum];

export function CosmosMultipleMessagesTransactionDetailsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): CosmosMultipleMessagesTransactionDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'transactionData': MessagesListFromJSON(json['transaction_data']),
        'type': json['type'],
    };
}
