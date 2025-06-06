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
import type { CreateSuiTransactionRequestDetails } from './CreateSuiTransactionRequestDetails';
import {
    CreateSuiTransactionRequestDetailsFromJSON,
    CreateSuiTransactionRequestDetailsFromJSONTyped,
    CreateSuiTransactionRequestDetailsToJSON,
    CreateSuiTransactionRequestDetailsToJSONTyped,
} from './CreateSuiTransactionRequestDetails';

/**
 * 
 * @export
 * @interface CreateSuiTransactionRequest
 */
export interface CreateSuiTransactionRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateSuiTransactionRequest
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSuiTransactionRequest
     */
    note?: string;
    /**
     * 
     * @type {SignerType}
     * @memberof CreateSuiTransactionRequest
     */
    signerType?: SignerType;
    /**
     * 
     * @type {SignMode}
     * @memberof CreateSuiTransactionRequest
     */
    signMode?: SignMode;
    /**
     * 
     * @type {DappInfo}
     * @memberof CreateSuiTransactionRequest
     */
    dappInfo?: DappInfo;
    /**
     * 
     * @type {string}
     * @memberof CreateSuiTransactionRequest
     */
    type: CreateSuiTransactionRequestTypeEnum;
    /**
     * 
     * @type {CreateSuiTransactionRequestDetails}
     * @memberof CreateSuiTransactionRequest
     */
    details: CreateSuiTransactionRequestDetails;
}


/**
 * @export
 */
export const CreateSuiTransactionRequestTypeEnum = {
    suiTransaction: 'sui_transaction'
} as const;
export type CreateSuiTransactionRequestTypeEnum = typeof CreateSuiTransactionRequestTypeEnum[keyof typeof CreateSuiTransactionRequestTypeEnum];


/**
 * Check if a given object implements the CreateSuiTransactionRequest interface.
 */
export function instanceOfCreateSuiTransactionRequest(value: object): value is CreateSuiTransactionRequest {
    if (!('vaultId' in value) || value['vaultId'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('details' in value) || value['details'] === undefined) return false;
    return true;
}

export function CreateSuiTransactionRequestFromJSON(json: any): CreateSuiTransactionRequest {
    return CreateSuiTransactionRequestFromJSONTyped(json, false);
}

export function CreateSuiTransactionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSuiTransactionRequest {
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
        'details': CreateSuiTransactionRequestDetailsFromJSON(json['details']),
    };
}

export function CreateSuiTransactionRequestToJSON(json: any): CreateSuiTransactionRequest {
    return CreateSuiTransactionRequestToJSONTyped(json, false);
}

export function CreateSuiTransactionRequestToJSONTyped(value?: CreateSuiTransactionRequest | null, ignoreDiscriminator: boolean = false): any {
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
        'details': CreateSuiTransactionRequestDetailsToJSON(value['details']),
    };
}

