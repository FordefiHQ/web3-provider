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

import type { CosmosMultipleMessagesTransactionDetails } from './CosmosMultipleMessagesTransactionDetails';
import {
    CosmosMultipleMessagesTransactionDetailsFromJSONTyped,
} from './CosmosMultipleMessagesTransactionDetails';
import type { CosmosNativeTransferDetails } from './CosmosNativeTransferDetails';
import {
    CosmosNativeTransferDetailsFromJSONTyped,
} from './CosmosNativeTransferDetails';
import type { CosmosTokenTransferDetails } from './CosmosTokenTransferDetails';
import {
    CosmosTokenTransferDetailsFromJSONTyped,
} from './CosmosTokenTransferDetails';

/**
 * 
 * @export
 * @type CosmosTransactionTypeDetails
 */
export type CosmosTransactionTypeDetails = { type: 'messages' } & CosmosMultipleMessagesTransactionDetails | { type: 'native_transfer' } & CosmosNativeTransferDetails | { type: 'token_transfer' } & CosmosTokenTransferDetails;

export function CosmosTransactionTypeDetailsFromJSON(json: any): CosmosTransactionTypeDetails {
    return CosmosTransactionTypeDetailsFromJSONTyped(json, false);
}

function CosmosTransactionTypeDetailsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): CosmosTransactionTypeDetails {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'messages':
            return Object.assign({}, CosmosMultipleMessagesTransactionDetailsFromJSONTyped(json, true), { type: 'messages' } as const);
        case 'native_transfer':
            return Object.assign({}, CosmosNativeTransferDetailsFromJSONTyped(json, true), { type: 'native_transfer' } as const);
        case 'token_transfer':
            return Object.assign({}, CosmosTokenTransferDetailsFromJSONTyped(json, true), { type: 'token_transfer' } as const);
        default:
            throw new Error(`No variant of CosmosTransactionTypeDetails exists with 'type=${json['type']}'`);
    }
}

