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
import type { TonChainUniqueId } from './TonChainUniqueId';
import {
    TonChainUniqueIdFromJSON,
    TonChainUniqueIdFromJSONTyped,
    TonChainUniqueIdToJSON,
} from './TonChainUniqueId';
import type { TonTransactionPayload } from './TonTransactionPayload';
import {
    TonTransactionPayloadFromJSON,
    TonTransactionPayloadFromJSONTyped,
    TonTransactionPayloadToJSON,
} from './TonTransactionPayload';

/**
 * 
 * @export
 * @interface CreateTonSerializedRawTransactionRequest
 */
export interface CreateTonSerializedRawTransactionRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateTonSerializedRawTransactionRequest
     */
    type: CreateTonSerializedRawTransactionRequestTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof CreateTonSerializedRawTransactionRequest
     */
    failOnPredictionFailure?: boolean;
    /**
     * 
     * @type {PushMode}
     * @memberof CreateTonSerializedRawTransactionRequest
     */
    pushMode?: PushMode;
    /**
     * 
     * @type {TonChainUniqueId}
     * @memberof CreateTonSerializedRawTransactionRequest
     */
    chain: TonChainUniqueId;
    /**
     * 
     * @type {TonTransactionPayload}
     * @memberof CreateTonSerializedRawTransactionRequest
     */
    transactionPayload: TonTransactionPayload;
    /**
     * 
     * @type {boolean}
     * @memberof CreateTonSerializedRawTransactionRequest
     */
    skipPrediction?: boolean;
}


/**
 * @export
 */
export const CreateTonSerializedRawTransactionRequestTypeEnum = {
    tonContractCallPayload: 'ton_contract_call_payload'
} as const;
export type CreateTonSerializedRawTransactionRequestTypeEnum = typeof CreateTonSerializedRawTransactionRequestTypeEnum[keyof typeof CreateTonSerializedRawTransactionRequestTypeEnum];


/**
 * Check if a given object implements the CreateTonSerializedRawTransactionRequest interface.
 */
export function instanceOfCreateTonSerializedRawTransactionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "transactionPayload" in value;

    return isInstance;
}

export function CreateTonSerializedRawTransactionRequestFromJSON(json: any): CreateTonSerializedRawTransactionRequest {
    return CreateTonSerializedRawTransactionRequestFromJSONTyped(json, false);
}

export function CreateTonSerializedRawTransactionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTonSerializedRawTransactionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'failOnPredictionFailure': !exists(json, 'fail_on_prediction_failure') ? undefined : json['fail_on_prediction_failure'],
        'pushMode': !exists(json, 'push_mode') ? undefined : PushModeFromJSON(json['push_mode']),
        'chain': TonChainUniqueIdFromJSON(json['chain']),
        'transactionPayload': TonTransactionPayloadFromJSON(json['transaction_payload']),
        'skipPrediction': !exists(json, 'skip_prediction') ? undefined : json['skip_prediction'],
    };
}

export function CreateTonSerializedRawTransactionRequestToJSON(value?: CreateTonSerializedRawTransactionRequest | null): any {
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
        'chain': TonChainUniqueIdToJSON(value.chain),
        'transaction_payload': TonTransactionPayloadToJSON(value.transactionPayload),
        'skip_prediction': value.skipPrediction,
    };
}

