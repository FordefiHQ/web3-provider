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
import type { StarknetChainUniqueId } from './StarknetChainUniqueId';
import {
    StarknetChainUniqueIdFromJSON,
    StarknetChainUniqueIdFromJSONTyped,
    StarknetChainUniqueIdToJSON,
    StarknetChainUniqueIdToJSONTyped,
} from './StarknetChainUniqueId';
import type { PushMode } from './PushMode';
import {
    PushModeFromJSON,
    PushModeFromJSONTyped,
    PushModeToJSON,
    PushModeToJSONTyped,
} from './PushMode';

/**
 * 
 * @export
 * @interface CreateStarknetContractDeploymentRequest
 */
export interface CreateStarknetContractDeploymentRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateStarknetContractDeploymentRequest
     */
    type: CreateStarknetContractDeploymentRequestTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof CreateStarknetContractDeploymentRequest
     */
    failOnPredictionFailure?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateStarknetContractDeploymentRequest
     */
    skipPrediction?: boolean;
    /**
     * 
     * @type {PushMode}
     * @memberof CreateStarknetContractDeploymentRequest
     */
    pushMode?: PushMode;
    /**
     * 
     * @type {StarknetChainUniqueId}
     * @memberof CreateStarknetContractDeploymentRequest
     */
    chain: StarknetChainUniqueId;
}


/**
 * @export
 */
export const CreateStarknetContractDeploymentRequestTypeEnum = {
    starknetContractDeployment: 'starknet_contract_deployment'
} as const;
export type CreateStarknetContractDeploymentRequestTypeEnum = typeof CreateStarknetContractDeploymentRequestTypeEnum[keyof typeof CreateStarknetContractDeploymentRequestTypeEnum];


/**
 * Check if a given object implements the CreateStarknetContractDeploymentRequest interface.
 */
export function instanceOfCreateStarknetContractDeploymentRequest(value: object): value is CreateStarknetContractDeploymentRequest {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('chain' in value) || value['chain'] === undefined) return false;
    return true;
}

export function CreateStarknetContractDeploymentRequestFromJSON(json: any): CreateStarknetContractDeploymentRequest {
    return CreateStarknetContractDeploymentRequestFromJSONTyped(json, false);
}

export function CreateStarknetContractDeploymentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateStarknetContractDeploymentRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'failOnPredictionFailure': json['fail_on_prediction_failure'] == null ? undefined : json['fail_on_prediction_failure'],
        'skipPrediction': json['skip_prediction'] == null ? undefined : json['skip_prediction'],
        'pushMode': json['push_mode'] == null ? undefined : PushModeFromJSON(json['push_mode']),
        'chain': StarknetChainUniqueIdFromJSON(json['chain']),
    };
}

export function CreateStarknetContractDeploymentRequestToJSON(json: any): CreateStarknetContractDeploymentRequest {
    return CreateStarknetContractDeploymentRequestToJSONTyped(json, false);
}

export function CreateStarknetContractDeploymentRequestToJSONTyped(value?: CreateStarknetContractDeploymentRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'fail_on_prediction_failure': value['failOnPredictionFailure'],
        'skip_prediction': value['skipPrediction'],
        'push_mode': PushModeToJSON(value['pushMode']),
        'chain': StarknetChainUniqueIdToJSON(value['chain']),
    };
}

