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

import {
    TransactionDetailsEvmPersonalMessageRequest,
    instanceOfTransactionDetailsEvmPersonalMessageRequest,
    TransactionDetailsEvmPersonalMessageRequestFromJSON,
    TransactionDetailsEvmPersonalMessageRequestFromJSONTyped,
    TransactionDetailsEvmPersonalMessageRequestToJSON,
} from './TransactionDetailsEvmPersonalMessageRequest';
import {
    TransactionDetailsEvmTypedMessageRequest,
    instanceOfTransactionDetailsEvmTypedMessageRequest,
    TransactionDetailsEvmTypedMessageRequestFromJSON,
    TransactionDetailsEvmTypedMessageRequestFromJSONTyped,
    TransactionDetailsEvmTypedMessageRequestToJSON,
} from './TransactionDetailsEvmTypedMessageRequest';

/**
 * @type TransactionDetailsEvmMessageRequestDetails
 * 
 * @export
 */
export type TransactionDetailsEvmMessageRequestDetails = { type: 'personal_message_type' } & TransactionDetailsEvmPersonalMessageRequest | { type: 'typed_message_type' } & TransactionDetailsEvmTypedMessageRequest;

export function TransactionDetailsEvmMessageRequestDetailsFromJSON(json: any): TransactionDetailsEvmMessageRequestDetails {
    return TransactionDetailsEvmMessageRequestDetailsFromJSONTyped(json, false);
}

export function TransactionDetailsEvmMessageRequestDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDetailsEvmMessageRequestDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'personal_message_type':
            return {...TransactionDetailsEvmPersonalMessageRequestFromJSONTyped(json, true), type: 'personal_message_type'};
        case 'typed_message_type':
            return {...TransactionDetailsEvmTypedMessageRequestFromJSONTyped(json, true), type: 'typed_message_type'};
        default:
            throw new Error(`No variant of TransactionDetailsEvmMessageRequestDetails exists with 'type=${json['type']}'`);
    }
}

export function TransactionDetailsEvmMessageRequestDetailsToJSON(value?: TransactionDetailsEvmMessageRequestDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'personal_message_type':
            return TransactionDetailsEvmPersonalMessageRequestToJSON(value);
        case 'typed_message_type':
            return TransactionDetailsEvmTypedMessageRequestToJSON(value);
        default:
            throw new Error(`No variant of TransactionDetailsEvmMessageRequestDetails exists with 'type=${value['type']}'`);
    }

}

