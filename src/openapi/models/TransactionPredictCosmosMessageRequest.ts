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
import type { CosmosArbitraryMessageRequest } from './CosmosArbitraryMessageRequest';
import {
    CosmosArbitraryMessageRequestFromJSON,
    CosmosArbitraryMessageRequestFromJSONTyped,
    CosmosArbitraryMessageRequestToJSON,
    CosmosArbitraryMessageRequestToJSONTyped,
} from './CosmosArbitraryMessageRequest';

/**
 * 
 * @export
 * @interface TransactionPredictCosmosMessageRequest
 */
export interface TransactionPredictCosmosMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof TransactionPredictCosmosMessageRequest
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionPredictCosmosMessageRequest
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionPredictCosmosMessageRequest
     */
    type: TransactionPredictCosmosMessageRequestTypeEnum;
    /**
     * 
     * @type {CosmosArbitraryMessageRequest}
     * @memberof TransactionPredictCosmosMessageRequest
     */
    details: CosmosArbitraryMessageRequest;
}


/**
 * @export
 */
export const TransactionPredictCosmosMessageRequestTypeEnum = {
    cosmosMessage: 'cosmos_message'
} as const;
export type TransactionPredictCosmosMessageRequestTypeEnum = typeof TransactionPredictCosmosMessageRequestTypeEnum[keyof typeof TransactionPredictCosmosMessageRequestTypeEnum];


/**
 * Check if a given object implements the TransactionPredictCosmosMessageRequest interface.
 */
export function instanceOfTransactionPredictCosmosMessageRequest(value: object): value is TransactionPredictCosmosMessageRequest {
    if (!('vaultId' in value) || value['vaultId'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('details' in value) || value['details'] === undefined) return false;
    return true;
}

export function TransactionPredictCosmosMessageRequestFromJSON(json: any): TransactionPredictCosmosMessageRequest {
    return TransactionPredictCosmosMessageRequestFromJSONTyped(json, false);
}

export function TransactionPredictCosmosMessageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionPredictCosmosMessageRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'vaultId': json['vault_id'],
        'note': json['note'] == null ? undefined : json['note'],
        'type': json['type'],
        'details': CosmosArbitraryMessageRequestFromJSON(json['details']),
    };
}

export function TransactionPredictCosmosMessageRequestToJSON(json: any): TransactionPredictCosmosMessageRequest {
    return TransactionPredictCosmosMessageRequestToJSONTyped(json, false);
}

export function TransactionPredictCosmosMessageRequestToJSONTyped(value?: TransactionPredictCosmosMessageRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'vault_id': value['vaultId'],
        'note': value['note'],
        'type': value['type'],
        'details': CosmosArbitraryMessageRequestToJSON(value['details']),
    };
}

