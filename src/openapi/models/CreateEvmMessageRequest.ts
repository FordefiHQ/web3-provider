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
import type { DappInfo } from './DappInfo';
import {
    DappInfoFromJSON,
    DappInfoFromJSONTyped,
    DappInfoToJSON,
    DappInfoToJSONTyped,
} from './DappInfo';
import type { CreateEvmMessageRequestDetails } from './CreateEvmMessageRequestDetails';
import {
    CreateEvmMessageRequestDetailsFromJSON,
    CreateEvmMessageRequestDetailsFromJSONTyped,
    CreateEvmMessageRequestDetailsToJSON,
    CreateEvmMessageRequestDetailsToJSONTyped,
} from './CreateEvmMessageRequestDetails';
import type { SignMode } from './SignMode';
import {
    SignModeFromJSON,
    SignModeFromJSONTyped,
    SignModeToJSON,
    SignModeToJSONTyped,
} from './SignMode';
import type { SignerType } from './SignerType';
import {
    SignerTypeFromJSON,
    SignerTypeFromJSONTyped,
    SignerTypeToJSON,
    SignerTypeToJSONTyped,
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
     * @type {DappInfo}
     * @memberof CreateEvmMessageRequest
     */
    dappInfo?: DappInfo;
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
export function instanceOfCreateEvmMessageRequest(value: object): value is CreateEvmMessageRequest {
    if (!('vaultId' in value) || value['vaultId'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('details' in value) || value['details'] === undefined) return false;
    return true;
}

export function CreateEvmMessageRequestFromJSON(json: any): CreateEvmMessageRequest {
    return CreateEvmMessageRequestFromJSONTyped(json, false);
}

export function CreateEvmMessageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEvmMessageRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'vaultId': json['vault_id'],
        'note': json['note'] == null ? undefined : json['note'],
        'signerType': json['signer_type'] == null ? undefined : SignerTypeFromJSON(json['signer_type']),
        'signMode': json['sign_mode'] == null ? undefined : SignModeFromJSON(json['sign_mode']),
        'dappInfo': json['dapp_info'] == null ? undefined : DappInfoFromJSON(json['dapp_info']),
        'type': json['type'],
        'details': CreateEvmMessageRequestDetailsFromJSON(json['details']),
    };
}

export function CreateEvmMessageRequestToJSON(json: any): CreateEvmMessageRequest {
    return CreateEvmMessageRequestToJSONTyped(json, false);
}

export function CreateEvmMessageRequestToJSONTyped(value?: CreateEvmMessageRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'vault_id': value['vaultId'],
        'note': value['note'],
        'signer_type': SignerTypeToJSON(value['signerType']),
        'sign_mode': SignModeToJSON(value['signMode']),
        'dapp_info': DappInfoToJSON(value['dappInfo']),
        'type': value['type'],
        'details': CreateEvmMessageRequestDetailsToJSON(value['details']),
    };
}

