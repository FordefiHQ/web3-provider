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
import type { CosmosArbitraryMessageRequest } from './CosmosArbitraryMessageRequest';
import {
    CosmosArbitraryMessageRequestFromJSON,
    CosmosArbitraryMessageRequestFromJSONTyped,
    CosmosArbitraryMessageRequestToJSON,
} from './CosmosArbitraryMessageRequest';
import type { CosmosMessageState } from './CosmosMessageState';
import {
    CosmosMessageStateFromJSON,
    CosmosMessageStateFromJSONTyped,
    CosmosMessageStateToJSON,
} from './CosmosMessageState';
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
 * @interface CreateCosmosMessageWithWaitRequest
 */
export interface CreateCosmosMessageWithWaitRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateCosmosMessageWithWaitRequest
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCosmosMessageWithWaitRequest
     */
    note?: string;
    /**
     * 
     * @type {SignerType}
     * @memberof CreateCosmosMessageWithWaitRequest
     */
    signerType?: SignerType;
    /**
     * 
     * @type {SignMode}
     * @memberof CreateCosmosMessageWithWaitRequest
     */
    signMode?: SignMode;
    /**
     * 
     * @type {string}
     * @memberof CreateCosmosMessageWithWaitRequest
     */
    type: CreateCosmosMessageWithWaitRequestTypeEnum;
    /**
     * 
     * @type {CosmosArbitraryMessageRequest}
     * @memberof CreateCosmosMessageWithWaitRequest
     */
    details: CosmosArbitraryMessageRequest;
    /**
     * 
     * @type {number}
     * @memberof CreateCosmosMessageWithWaitRequest
     */
    timeout?: number;
    /**
     * 
     * @type {CosmosMessageState}
     * @memberof CreateCosmosMessageWithWaitRequest
     */
    waitForState: CosmosMessageState;
}


/**
 * @export
 */
export const CreateCosmosMessageWithWaitRequestTypeEnum = {
    cosmosMessage: 'cosmos_message'
} as const;
export type CreateCosmosMessageWithWaitRequestTypeEnum = typeof CreateCosmosMessageWithWaitRequestTypeEnum[keyof typeof CreateCosmosMessageWithWaitRequestTypeEnum];


/**
 * Check if a given object implements the CreateCosmosMessageWithWaitRequest interface.
 */
export function instanceOfCreateCosmosMessageWithWaitRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "vaultId" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;
    isInstance = isInstance && "waitForState" in value;

    return isInstance;
}

export function CreateCosmosMessageWithWaitRequestFromJSON(json: any): CreateCosmosMessageWithWaitRequest {
    return CreateCosmosMessageWithWaitRequestFromJSONTyped(json, false);
}

export function CreateCosmosMessageWithWaitRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCosmosMessageWithWaitRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'vaultId': json['vault_id'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'signerType': !exists(json, 'signer_type') ? undefined : SignerTypeFromJSON(json['signer_type']),
        'signMode': !exists(json, 'sign_mode') ? undefined : SignModeFromJSON(json['sign_mode']),
        'type': json['type'],
        'details': CosmosArbitraryMessageRequestFromJSON(json['details']),
        'timeout': !exists(json, 'timeout') ? undefined : json['timeout'],
        'waitForState': CosmosMessageStateFromJSON(json['wait_for_state']),
    };
}

export function CreateCosmosMessageWithWaitRequestToJSON(value?: CreateCosmosMessageWithWaitRequest | null): any {
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
        'details': CosmosArbitraryMessageRequestToJSON(value.details),
        'timeout': value.timeout,
        'wait_for_state': CosmosMessageStateToJSON(value.waitForState),
    };
}
