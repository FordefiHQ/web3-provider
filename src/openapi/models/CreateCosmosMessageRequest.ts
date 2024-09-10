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
 * @interface CreateCosmosMessageRequest
 */
export interface CreateCosmosMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateCosmosMessageRequest
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCosmosMessageRequest
     */
    note?: string;
    /**
     * 
     * @type {SignerType}
     * @memberof CreateCosmosMessageRequest
     */
    signerType?: SignerType;
    /**
     * 
     * @type {SignMode}
     * @memberof CreateCosmosMessageRequest
     */
    signMode?: SignMode;
    /**
     * 
     * @type {string}
     * @memberof CreateCosmosMessageRequest
     */
    type: CreateCosmosMessageRequestTypeEnum;
    /**
     * 
     * @type {CosmosArbitraryMessageRequest}
     * @memberof CreateCosmosMessageRequest
     */
    details: CosmosArbitraryMessageRequest;
}


/**
 * @export
 */
export const CreateCosmosMessageRequestTypeEnum = {
    cosmosMessage: 'cosmos_message'
} as const;
export type CreateCosmosMessageRequestTypeEnum = typeof CreateCosmosMessageRequestTypeEnum[keyof typeof CreateCosmosMessageRequestTypeEnum];


/**
 * Check if a given object implements the CreateCosmosMessageRequest interface.
 */
export function instanceOfCreateCosmosMessageRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "vaultId" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;

    return isInstance;
}

export function CreateCosmosMessageRequestFromJSON(json: any): CreateCosmosMessageRequest {
    return CreateCosmosMessageRequestFromJSONTyped(json, false);
}

export function CreateCosmosMessageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCosmosMessageRequest {
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
    };
}

export function CreateCosmosMessageRequestToJSON(value?: CreateCosmosMessageRequest | null): any {
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
    };
}
