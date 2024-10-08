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
import type { AptosPersonalMessageRequest } from './AptosPersonalMessageRequest';
import {
    AptosPersonalMessageRequestFromJSON,
    AptosPersonalMessageRequestFromJSONTyped,
    AptosPersonalMessageRequestToJSON,
} from './AptosPersonalMessageRequest';
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
 * @interface CreateAptosMessageRequest
 */
export interface CreateAptosMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateAptosMessageRequest
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAptosMessageRequest
     */
    note?: string;
    /**
     * 
     * @type {SignerType}
     * @memberof CreateAptosMessageRequest
     */
    signerType?: SignerType;
    /**
     * 
     * @type {SignMode}
     * @memberof CreateAptosMessageRequest
     */
    signMode?: SignMode;
    /**
     * 
     * @type {string}
     * @memberof CreateAptosMessageRequest
     */
    type: CreateAptosMessageRequestTypeEnum;
    /**
     * 
     * @type {AptosPersonalMessageRequest}
     * @memberof CreateAptosMessageRequest
     */
    details: AptosPersonalMessageRequest;
}


/**
 * @export
 */
export const CreateAptosMessageRequestTypeEnum = {
    aptosMessage: 'aptos_message'
} as const;
export type CreateAptosMessageRequestTypeEnum = typeof CreateAptosMessageRequestTypeEnum[keyof typeof CreateAptosMessageRequestTypeEnum];


/**
 * Check if a given object implements the CreateAptosMessageRequest interface.
 */
export function instanceOfCreateAptosMessageRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "vaultId" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;

    return isInstance;
}

export function CreateAptosMessageRequestFromJSON(json: any): CreateAptosMessageRequest {
    return CreateAptosMessageRequestFromJSONTyped(json, false);
}

export function CreateAptosMessageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAptosMessageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'vaultId': json['vault_id'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'signerType': !exists(json, 'signer_type') ? undefined : SignerTypeFromJSON(json['signer_type']),
        'signMode': !exists(json, 'sign_mode') ? undefined : SignModeFromJSON(json['sign_mode']),
        'type': json['type'],
        'details': AptosPersonalMessageRequestFromJSON(json['details']),
    };
}

export function CreateAptosMessageRequestToJSON(value?: CreateAptosMessageRequest | null): any {
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
        'details': AptosPersonalMessageRequestToJSON(value.details),
    };
}

