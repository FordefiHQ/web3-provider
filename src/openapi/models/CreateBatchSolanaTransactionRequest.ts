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
import type { CreateBatchTransactionRequestDetails } from './CreateBatchTransactionRequestDetails';
import {
    CreateBatchTransactionRequestDetailsFromJSON,
    CreateBatchTransactionRequestDetailsFromJSONTyped,
    CreateBatchTransactionRequestDetailsToJSON,
} from './CreateBatchTransactionRequestDetails';
import type { SignMode } from './SignMode';
import {
    SignModeFromJSON,
    SignModeFromJSONTyped,
    SignModeToJSON,
} from './SignMode';
import type { SignerType } from './SignerType';
import {
    SignerTypeFromJSON,
    SignerTypeFromJSONTyped,
    SignerTypeToJSON,
} from './SignerType';

/**
 * 
 * @export
 * @interface CreateBatchSolanaTransactionRequest
 */
export interface CreateBatchSolanaTransactionRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateBatchSolanaTransactionRequest
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateBatchSolanaTransactionRequest
     */
    note?: string;
    /**
     * 
     * @type {SignerType}
     * @memberof CreateBatchSolanaTransactionRequest
     */
    signerType?: SignerType;
    /**
     * 
     * @type {SignMode}
     * @memberof CreateBatchSolanaTransactionRequest
     */
    signMode?: SignMode;
    /**
     * 
     * @type {string}
     * @memberof CreateBatchSolanaTransactionRequest
     */
    type: CreateBatchSolanaTransactionRequestTypeEnum;
    /**
     * 
     * @type {CreateBatchTransactionRequestDetails}
     * @memberof CreateBatchSolanaTransactionRequest
     */
    details: CreateBatchTransactionRequestDetails;
}


/**
 * @export
 */
export const CreateBatchSolanaTransactionRequestTypeEnum = {
    solanaTransaction: 'solana_transaction'
} as const;
export type CreateBatchSolanaTransactionRequestTypeEnum = typeof CreateBatchSolanaTransactionRequestTypeEnum[keyof typeof CreateBatchSolanaTransactionRequestTypeEnum];


/**
 * Check if a given object implements the CreateBatchSolanaTransactionRequest interface.
 */
export function instanceOfCreateBatchSolanaTransactionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "vaultId" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;

    return isInstance;
}

export function CreateBatchSolanaTransactionRequestFromJSON(json: any): CreateBatchSolanaTransactionRequest {
    return CreateBatchSolanaTransactionRequestFromJSONTyped(json, false);
}

export function CreateBatchSolanaTransactionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateBatchSolanaTransactionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'vaultId': json['vault_id'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'signerType': !exists(json, 'signer_type') ? undefined : SignerTypeFromJSON(json['signer_type']),
        'signMode': !exists(json, 'sign_mode') ? undefined : SignModeFromJSON(json['sign_mode']),
        'type': json['type'],
        'details': CreateBatchTransactionRequestDetailsFromJSON(json['details']),
    };
}

export function CreateBatchSolanaTransactionRequestToJSON(value?: CreateBatchSolanaTransactionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'vault_id': value.vaultId,
        'note': value.note,
        'signer_type': SignerTypeToJSON(value.signerType),
        'sign_mode': SignModeToJSON(value.signMode),
        'type': value.type,
        'details': CreateBatchTransactionRequestDetailsToJSON(value.details),
    };
}
