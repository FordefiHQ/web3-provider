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
import type { EvmMessageState } from './EvmMessageState';
import {
    EvmMessageStateFromJSON,
    EvmMessageStateFromJSONTyped,
    EvmMessageStateToJSON,
} from './EvmMessageState';
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
 * @interface CreateEvmMessageWithWaitRequest
 */
export interface CreateEvmMessageWithWaitRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateEvmMessageWithWaitRequest
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEvmMessageWithWaitRequest
     */
    note?: string;
    /**
     * 
     * @type {SignerType}
     * @memberof CreateEvmMessageWithWaitRequest
     */
    signerType?: SignerType;
    /**
     * 
     * @type {SignMode}
     * @memberof CreateEvmMessageWithWaitRequest
     */
    signMode?: SignMode;
    /**
     * 
     * @type {string}
     * @memberof CreateEvmMessageWithWaitRequest
     */
    type: CreateEvmMessageWithWaitRequestTypeEnum;
    /**
     * 
     * @type {CreateEvmMessageRequestDetails}
     * @memberof CreateEvmMessageWithWaitRequest
     */
    details: CreateEvmMessageRequestDetails;
    /**
     * 
     * @type {number}
     * @memberof CreateEvmMessageWithWaitRequest
     */
    timeout?: number;
    /**
     * 
     * @type {EvmMessageState}
     * @memberof CreateEvmMessageWithWaitRequest
     */
    waitForState: EvmMessageState;
}


/**
 * @export
 */
export const CreateEvmMessageWithWaitRequestTypeEnum = {
    evmMessage: 'evm_message'
} as const;
export type CreateEvmMessageWithWaitRequestTypeEnum = typeof CreateEvmMessageWithWaitRequestTypeEnum[keyof typeof CreateEvmMessageWithWaitRequestTypeEnum];


/**
 * Check if a given object implements the CreateEvmMessageWithWaitRequest interface.
 */
export function instanceOfCreateEvmMessageWithWaitRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "vaultId" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;
    isInstance = isInstance && "waitForState" in value;

    return isInstance;
}

export function CreateEvmMessageWithWaitRequestFromJSON(json: any): CreateEvmMessageWithWaitRequest {
    return CreateEvmMessageWithWaitRequestFromJSONTyped(json, false);
}

export function CreateEvmMessageWithWaitRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEvmMessageWithWaitRequest {
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
        'timeout': !exists(json, 'timeout') ? undefined : json['timeout'],
        'waitForState': EvmMessageStateFromJSON(json['wait_for_state']),
    };
}

export function CreateEvmMessageWithWaitRequestToJSON(value?: CreateEvmMessageWithWaitRequest | null): any {
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
        'timeout': value.timeout,
        'wait_for_state': EvmMessageStateToJSON(value.waitForState),
    };
}

