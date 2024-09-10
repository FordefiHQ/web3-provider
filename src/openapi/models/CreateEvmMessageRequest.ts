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
import type { CreateEvmMessageRequestDetails } from './CreateEvmMessageRequestDetails';
import {
    CreateEvmMessageRequestDetailsFromJSON,
    CreateEvmMessageRequestDetailsFromJSONTyped,
    CreateEvmMessageRequestDetailsToJSON,
} from './CreateEvmMessageRequestDetails';
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
 * @interface CreateEvmMessageRequest
 */
export interface CreateEvmMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateEvmMessageRequest
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEvmMessageRequest
     */
    note?: string;
    /**
     * 
     * @type {SignerType}
     * @memberof CreateEvmMessageRequest
     */
    signerType?: SignerType;
    /**
     * 
     * @type {SignMode}
     * @memberof CreateEvmMessageRequest
     */
    signMode?: SignMode;
    /**
     * 
     * @type {string}
     * @memberof CreateEvmMessageRequest
     */
    type: CreateEvmMessageRequestTypeEnum;
    /**
     * 
     * @type {CreateEvmMessageRequestDetails}
     * @memberof CreateEvmMessageRequest
     */
    details: CreateEvmMessageRequestDetails;
}


/**
 * @export
 */
export const CreateEvmMessageRequestTypeEnum = {
    evmMessage: 'evm_message'
} as const;
export type CreateEvmMessageRequestTypeEnum = typeof CreateEvmMessageRequestTypeEnum[keyof typeof CreateEvmMessageRequestTypeEnum];


/**
 * Check if a given object implements the CreateEvmMessageRequest interface.
 */
export function instanceOfCreateEvmMessageRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "vaultId" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;

    return isInstance;
}

export function CreateEvmMessageRequestFromJSON(json: any): CreateEvmMessageRequest {
    return CreateEvmMessageRequestFromJSONTyped(json, false);
}

export function CreateEvmMessageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEvmMessageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'vaultId': json['vault_id'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'signerType': !exists(json, 'signer_type') ? undefined : SignerTypeFromJSON(json['signer_type']),
        'signMode': !exists(json, 'sign_mode') ? undefined : SignModeFromJSON(json['sign_mode']),
        'type': json['type'],
        'details': CreateEvmMessageRequestDetailsFromJSON(json['details']),
    };
}

export function CreateEvmMessageRequestToJSON(value?: CreateEvmMessageRequest | null): any {
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
        'details': CreateEvmMessageRequestDetailsToJSON(value.details),
    };
}

