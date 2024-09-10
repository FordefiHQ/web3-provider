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
import type { SuiPersonalMessageRequest } from './SuiPersonalMessageRequest';
import {
    SuiPersonalMessageRequestFromJSON,
    SuiPersonalMessageRequestFromJSONTyped,
    SuiPersonalMessageRequestToJSON,
} from './SuiPersonalMessageRequest';

/**
 * 
 * @export
 * @interface CreateSuiMessageRequest
 */
export interface CreateSuiMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateSuiMessageRequest
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSuiMessageRequest
     */
    note?: string;
    /**
     * 
     * @type {SignerType}
     * @memberof CreateSuiMessageRequest
     */
    signerType?: SignerType;
    /**
     * 
     * @type {SignMode}
     * @memberof CreateSuiMessageRequest
     */
    signMode?: SignMode;
    /**
     * 
     * @type {string}
     * @memberof CreateSuiMessageRequest
     */
    type: CreateSuiMessageRequestTypeEnum;
    /**
     * 
     * @type {SuiPersonalMessageRequest}
     * @memberof CreateSuiMessageRequest
     */
    details: SuiPersonalMessageRequest;
}


/**
 * @export
 */
export const CreateSuiMessageRequestTypeEnum = {
    suiMessage: 'sui_message'
} as const;
export type CreateSuiMessageRequestTypeEnum = typeof CreateSuiMessageRequestTypeEnum[keyof typeof CreateSuiMessageRequestTypeEnum];


/**
 * Check if a given object implements the CreateSuiMessageRequest interface.
 */
export function instanceOfCreateSuiMessageRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "vaultId" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;

    return isInstance;
}

export function CreateSuiMessageRequestFromJSON(json: any): CreateSuiMessageRequest {
    return CreateSuiMessageRequestFromJSONTyped(json, false);
}

export function CreateSuiMessageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSuiMessageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'vaultId': json['vault_id'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'signerType': !exists(json, 'signer_type') ? undefined : SignerTypeFromJSON(json['signer_type']),
        'signMode': !exists(json, 'sign_mode') ? undefined : SignModeFromJSON(json['sign_mode']),
        'type': json['type'],
        'details': SuiPersonalMessageRequestFromJSON(json['details']),
    };
}

export function CreateSuiMessageRequestToJSON(value?: CreateSuiMessageRequest | null): any {
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
        'details': SuiPersonalMessageRequestToJSON(value.details),
    };
}
