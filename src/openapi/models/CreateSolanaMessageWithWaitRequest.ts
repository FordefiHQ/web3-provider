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
import type { SolanaMessageState } from './SolanaMessageState';
import {
    SolanaMessageStateFromJSON,
    SolanaMessageStateFromJSONTyped,
    SolanaMessageStateToJSON,
} from './SolanaMessageState';
import type { SolanaPersonalMessageRequest } from './SolanaPersonalMessageRequest';
import {
    SolanaPersonalMessageRequestFromJSON,
    SolanaPersonalMessageRequestFromJSONTyped,
    SolanaPersonalMessageRequestToJSON,
} from './SolanaPersonalMessageRequest';

/**
 * 
 * @export
 * @interface CreateSolanaMessageWithWaitRequest
 */
export interface CreateSolanaMessageWithWaitRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateSolanaMessageWithWaitRequest
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSolanaMessageWithWaitRequest
     */
    note?: string;
    /**
     * 
     * @type {SignerType}
     * @memberof CreateSolanaMessageWithWaitRequest
     */
    signerType?: SignerType;
    /**
     * 
     * @type {SignMode}
     * @memberof CreateSolanaMessageWithWaitRequest
     */
    signMode?: SignMode;
    /**
     * 
     * @type {string}
     * @memberof CreateSolanaMessageWithWaitRequest
     */
    type: CreateSolanaMessageWithWaitRequestTypeEnum;
    /**
     * 
     * @type {SolanaPersonalMessageRequest}
     * @memberof CreateSolanaMessageWithWaitRequest
     */
    details: SolanaPersonalMessageRequest;
    /**
     * 
     * @type {number}
     * @memberof CreateSolanaMessageWithWaitRequest
     */
    timeout?: number;
    /**
     * 
     * @type {SolanaMessageState}
     * @memberof CreateSolanaMessageWithWaitRequest
     */
    waitForState: SolanaMessageState;
}


/**
 * @export
 */
export const CreateSolanaMessageWithWaitRequestTypeEnum = {
    solanaMessage: 'solana_message'
} as const;
export type CreateSolanaMessageWithWaitRequestTypeEnum = typeof CreateSolanaMessageWithWaitRequestTypeEnum[keyof typeof CreateSolanaMessageWithWaitRequestTypeEnum];


/**
 * Check if a given object implements the CreateSolanaMessageWithWaitRequest interface.
 */
export function instanceOfCreateSolanaMessageWithWaitRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "vaultId" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;
    isInstance = isInstance && "waitForState" in value;

    return isInstance;
}

export function CreateSolanaMessageWithWaitRequestFromJSON(json: any): CreateSolanaMessageWithWaitRequest {
    return CreateSolanaMessageWithWaitRequestFromJSONTyped(json, false);
}

export function CreateSolanaMessageWithWaitRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSolanaMessageWithWaitRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'vaultId': json['vault_id'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'signerType': !exists(json, 'signer_type') ? undefined : SignerTypeFromJSON(json['signer_type']),
        'signMode': !exists(json, 'sign_mode') ? undefined : SignModeFromJSON(json['sign_mode']),
        'type': json['type'],
        'details': SolanaPersonalMessageRequestFromJSON(json['details']),
        'timeout': !exists(json, 'timeout') ? undefined : json['timeout'],
        'waitForState': SolanaMessageStateFromJSON(json['wait_for_state']),
    };
}

export function CreateSolanaMessageWithWaitRequestToJSON(value?: CreateSolanaMessageWithWaitRequest | null): any {
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
        'details': SolanaPersonalMessageRequestToJSON(value.details),
        'timeout': value.timeout,
        'wait_for_state': SolanaMessageStateToJSON(value.waitForState),
    };
}

