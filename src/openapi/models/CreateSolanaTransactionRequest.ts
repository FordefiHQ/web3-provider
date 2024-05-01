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
import type { CreateSolanaTransactionRequestDetails } from './CreateSolanaTransactionRequestDetails';
import {
    CreateSolanaTransactionRequestDetailsFromJSON,
    CreateSolanaTransactionRequestDetailsFromJSONTyped,
    CreateSolanaTransactionRequestDetailsToJSON,
} from './CreateSolanaTransactionRequestDetails';
import type { PushMode } from './PushMode';
import {
    PushModeFromJSON,
    PushModeFromJSONTyped,
    PushModeToJSON,
} from './PushMode';
import type { SignerType } from './SignerType';
import {
    SignerTypeFromJSON,
    SignerTypeFromJSONTyped,
    SignerTypeToJSON,
} from './SignerType';

/**
 * 
 * @export
 * @interface CreateSolanaTransactionRequest
 */
export interface CreateSolanaTransactionRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateSolanaTransactionRequest
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSolanaTransactionRequest
     */
    note?: string;
    /**
     * 
     * @type {SignerType}
     * @memberof CreateSolanaTransactionRequest
     */
    signerType?: SignerType;
    /**
     * 
     * @type {string}
     * @memberof CreateSolanaTransactionRequest
     */
    type: CreateSolanaTransactionRequestTypeEnum;
    /**
     * 
     * @type {PushMode}
     * @memberof CreateSolanaTransactionRequest
     */
    pushMode?: PushMode;
    /**
     * 
     * @type {CreateSolanaTransactionRequestDetails}
     * @memberof CreateSolanaTransactionRequest
     */
    details: CreateSolanaTransactionRequestDetails;
}


/**
 * @export
 */
export const CreateSolanaTransactionRequestTypeEnum = {
    solanaTransaction: 'solana_transaction'
} as const;
export type CreateSolanaTransactionRequestTypeEnum = typeof CreateSolanaTransactionRequestTypeEnum[keyof typeof CreateSolanaTransactionRequestTypeEnum];


/**
 * Check if a given object implements the CreateSolanaTransactionRequest interface.
 */
export function instanceOfCreateSolanaTransactionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "vaultId" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;

    return isInstance;
}

export function CreateSolanaTransactionRequestFromJSON(json: any): CreateSolanaTransactionRequest {
    return CreateSolanaTransactionRequestFromJSONTyped(json, false);
}

export function CreateSolanaTransactionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSolanaTransactionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'vaultId': json['vault_id'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'signerType': !exists(json, 'signer_type') ? undefined : SignerTypeFromJSON(json['signer_type']),
        'type': json['type'],
        'pushMode': !exists(json, 'push_mode') ? undefined : PushModeFromJSON(json['push_mode']),
        'details': CreateSolanaTransactionRequestDetailsFromJSON(json['details']),
    };
}

export function CreateSolanaTransactionRequestToJSON(value?: CreateSolanaTransactionRequest | null): any {
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
        'type': value.type,
        'push_mode': PushModeToJSON(value.pushMode),
        'details': CreateSolanaTransactionRequestDetailsToJSON(value.details),
    };
}

