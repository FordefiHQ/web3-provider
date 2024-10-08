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
import type { PushMode } from './PushMode';
import {
    PushModeFromJSON,
    PushModeFromJSONTyped,
    PushModeToJSON,
} from './PushMode';
import type { SolanaChainUniqueId } from './SolanaChainUniqueId';
import {
    SolanaChainUniqueIdFromJSON,
    SolanaChainUniqueIdFromJSONTyped,
    SolanaChainUniqueIdToJSON,
} from './SolanaChainUniqueId';
import type { SolanaSecretKeyRequest } from './SolanaSecretKeyRequest';
import {
    SolanaSecretKeyRequestFromJSON,
    SolanaSecretKeyRequestFromJSONTyped,
    SolanaSecretKeyRequestToJSON,
} from './SolanaSecretKeyRequest';
import type { SolanaTransactionSignaturesRequest } from './SolanaTransactionSignaturesRequest';
import {
    SolanaTransactionSignaturesRequestFromJSON,
    SolanaTransactionSignaturesRequestFromJSONTyped,
    SolanaTransactionSignaturesRequestToJSON,
} from './SolanaTransactionSignaturesRequest';

/**
 * 
 * @export
 * @interface CreateSolanaSerializedTransactionMessageRequest
 */
export interface CreateSolanaSerializedTransactionMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateSolanaSerializedTransactionMessageRequest
     */
    type: CreateSolanaSerializedTransactionMessageRequestTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof CreateSolanaSerializedTransactionMessageRequest
     */
    failOnPredictionFailure?: boolean;
    /**
     * 
     * @type {PushMode}
     * @memberof CreateSolanaSerializedTransactionMessageRequest
     */
    pushMode?: PushMode;
    /**
     * 
     * @type {boolean}
     * @memberof CreateSolanaSerializedTransactionMessageRequest
     */
    skipPrediction?: boolean;
    /**
     * 
     * @type {SolanaChainUniqueId}
     * @memberof CreateSolanaSerializedTransactionMessageRequest
     */
    chain: SolanaChainUniqueId;
    /**
     * 
     * @type {string}
     * @memberof CreateSolanaSerializedTransactionMessageRequest
     */
    data: string;
    /**
     * 
     * @type {Array<SolanaTransactionSignaturesRequest>}
     * @memberof CreateSolanaSerializedTransactionMessageRequest
     */
    signatures?: Array<SolanaTransactionSignaturesRequest>;
    /**
     * 
     * @type {Array<SolanaSecretKeyRequest>}
     * @memberof CreateSolanaSerializedTransactionMessageRequest
     */
    ephemeralKeys?: Array<SolanaSecretKeyRequest>;
}


/**
 * @export
 */
export const CreateSolanaSerializedTransactionMessageRequestTypeEnum = {
    solanaSerializedTransactionMessage: 'solana_serialized_transaction_message'
} as const;
export type CreateSolanaSerializedTransactionMessageRequestTypeEnum = typeof CreateSolanaSerializedTransactionMessageRequestTypeEnum[keyof typeof CreateSolanaSerializedTransactionMessageRequestTypeEnum];


/**
 * Check if a given object implements the CreateSolanaSerializedTransactionMessageRequest interface.
 */
export function instanceOfCreateSolanaSerializedTransactionMessageRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function CreateSolanaSerializedTransactionMessageRequestFromJSON(json: any): CreateSolanaSerializedTransactionMessageRequest {
    return CreateSolanaSerializedTransactionMessageRequestFromJSONTyped(json, false);
}

export function CreateSolanaSerializedTransactionMessageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSolanaSerializedTransactionMessageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'failOnPredictionFailure': !exists(json, 'fail_on_prediction_failure') ? undefined : json['fail_on_prediction_failure'],
        'pushMode': !exists(json, 'push_mode') ? undefined : PushModeFromJSON(json['push_mode']),
        'skipPrediction': !exists(json, 'skip_prediction') ? undefined : json['skip_prediction'],
        'chain': SolanaChainUniqueIdFromJSON(json['chain']),
        'data': json['data'],
        'signatures': !exists(json, 'signatures') ? undefined : ((json['signatures'] as Array<any>).map(SolanaTransactionSignaturesRequestFromJSON)),
        'ephemeralKeys': !exists(json, 'ephemeral_keys') ? undefined : ((json['ephemeral_keys'] as Array<any>).map(SolanaSecretKeyRequestFromJSON)),
    };
}

export function CreateSolanaSerializedTransactionMessageRequestToJSON(value?: CreateSolanaSerializedTransactionMessageRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'fail_on_prediction_failure': value.failOnPredictionFailure,
        'push_mode': PushModeToJSON(value.pushMode),
        'skip_prediction': value.skipPrediction,
        'chain': SolanaChainUniqueIdToJSON(value.chain),
        'data': value.data,
        'signatures': value.signatures === undefined ? undefined : ((value.signatures as Array<any>).map(SolanaTransactionSignaturesRequestToJSON)),
        'ephemeral_keys': value.ephemeralKeys === undefined ? undefined : ((value.ephemeralKeys as Array<any>).map(SolanaSecretKeyRequestToJSON)),
    };
}

