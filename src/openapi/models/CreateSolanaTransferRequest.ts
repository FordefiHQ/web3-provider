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
import type { CreateSolanaTransferRequestTo } from './CreateSolanaTransferRequestTo';
import {
    CreateSolanaTransferRequestToFromJSON,
    CreateSolanaTransferRequestToFromJSONTyped,
    CreateSolanaTransferRequestToToJSON,
} from './CreateSolanaTransferRequestTo';
import type { CreateSolanaTransferRequestValue } from './CreateSolanaTransferRequestValue';
import {
    CreateSolanaTransferRequestValueFromJSON,
    CreateSolanaTransferRequestValueFromJSONTyped,
    CreateSolanaTransferRequestValueToJSON,
} from './CreateSolanaTransferRequestValue';
import type { PushMode } from './PushMode';
import {
    PushModeFromJSON,
    PushModeFromJSONTyped,
    PushModeToJSON,
} from './PushMode';
import type { SolanaAssetIdentifierRequest } from './SolanaAssetIdentifierRequest';
import {
    SolanaAssetIdentifierRequestFromJSON,
    SolanaAssetIdentifierRequestFromJSONTyped,
    SolanaAssetIdentifierRequestToJSON,
} from './SolanaAssetIdentifierRequest';

/**
 * 
 * @export
 * @interface CreateSolanaTransferRequest
 */
export interface CreateSolanaTransferRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateSolanaTransferRequest
     */
    type: CreateSolanaTransferRequestTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof CreateSolanaTransferRequest
     */
    failOnPredictionFailure?: boolean;
    /**
     * 
     * @type {PushMode}
     * @memberof CreateSolanaTransferRequest
     */
    pushMode?: PushMode;
    /**
     * 
     * @type {boolean}
     * @memberof CreateSolanaTransferRequest
     */
    skipPrediction?: boolean;
    /**
     * 
     * @type {CreateSolanaTransferRequestTo}
     * @memberof CreateSolanaTransferRequest
     */
    to: CreateSolanaTransferRequestTo;
    /**
     * 
     * @type {CreateSolanaTransferRequestValue}
     * @memberof CreateSolanaTransferRequest
     */
    value: CreateSolanaTransferRequestValue;
    /**
     * 
     * @type {SolanaAssetIdentifierRequest}
     * @memberof CreateSolanaTransferRequest
     */
    assetIdentifier: SolanaAssetIdentifierRequest;
}


/**
 * @export
 */
export const CreateSolanaTransferRequestTypeEnum = {
    solanaTransfer: 'solana_transfer'
} as const;
export type CreateSolanaTransferRequestTypeEnum = typeof CreateSolanaTransferRequestTypeEnum[keyof typeof CreateSolanaTransferRequestTypeEnum];


/**
 * Check if a given object implements the CreateSolanaTransferRequest interface.
 */
export function instanceOfCreateSolanaTransferRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "to" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "assetIdentifier" in value;

    return isInstance;
}

export function CreateSolanaTransferRequestFromJSON(json: any): CreateSolanaTransferRequest {
    return CreateSolanaTransferRequestFromJSONTyped(json, false);
}

export function CreateSolanaTransferRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSolanaTransferRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'failOnPredictionFailure': !exists(json, 'fail_on_prediction_failure') ? undefined : json['fail_on_prediction_failure'],
        'pushMode': !exists(json, 'push_mode') ? undefined : PushModeFromJSON(json['push_mode']),
        'skipPrediction': !exists(json, 'skip_prediction') ? undefined : json['skip_prediction'],
        'to': CreateSolanaTransferRequestToFromJSON(json['to']),
        'value': CreateSolanaTransferRequestValueFromJSON(json['value']),
        'assetIdentifier': SolanaAssetIdentifierRequestFromJSON(json['asset_identifier']),
    };
}

export function CreateSolanaTransferRequestToJSON(value?: CreateSolanaTransferRequest | null): any {
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
        'to': CreateSolanaTransferRequestToToJSON(value.to),
        'value': CreateSolanaTransferRequestValueToJSON(value.value),
        'asset_identifier': SolanaAssetIdentifierRequestToJSON(value.assetIdentifier),
    };
}

