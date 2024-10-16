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
import type { CreateStarknetTransactionRequestDetails } from './CreateStarknetTransactionRequestDetails';
import {
    CreateStarknetTransactionRequestDetailsFromJSON,
    CreateStarknetTransactionRequestDetailsFromJSONTyped,
    CreateStarknetTransactionRequestDetailsToJSON,
} from './CreateStarknetTransactionRequestDetails';

/**
 * 
 * @export
 * @interface PredictStarknetTransactionRequest
 */
export interface PredictStarknetTransactionRequest {
    /**
     * 
     * @type {string}
     * @memberof PredictStarknetTransactionRequest
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof PredictStarknetTransactionRequest
     */
    type: PredictStarknetTransactionRequestTypeEnum;
    /**
     * 
     * @type {CreateStarknetTransactionRequestDetails}
     * @memberof PredictStarknetTransactionRequest
     */
    details: CreateStarknetTransactionRequestDetails;
}


/**
 * @export
 */
export const PredictStarknetTransactionRequestTypeEnum = {
    starknetTransaction: 'starknet_transaction'
} as const;
export type PredictStarknetTransactionRequestTypeEnum = typeof PredictStarknetTransactionRequestTypeEnum[keyof typeof PredictStarknetTransactionRequestTypeEnum];


/**
 * Check if a given object implements the PredictStarknetTransactionRequest interface.
 */
export function instanceOfPredictStarknetTransactionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "vaultId" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;

    return isInstance;
}

export function PredictStarknetTransactionRequestFromJSON(json: any): PredictStarknetTransactionRequest {
    return PredictStarknetTransactionRequestFromJSONTyped(json, false);
}

export function PredictStarknetTransactionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PredictStarknetTransactionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'vaultId': json['vault_id'],
        'type': json['type'],
        'details': CreateStarknetTransactionRequestDetailsFromJSON(json['details']),
    };
}

export function PredictStarknetTransactionRequestToJSON(value?: PredictStarknetTransactionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'vault_id': value.vaultId,
        'type': value.type,
        'details': CreateStarknetTransactionRequestDetailsToJSON(value.details),
    };
}

