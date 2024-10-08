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
import type { CreateSuiTransferRequestTo } from './CreateSuiTransferRequestTo';
import {
    CreateSuiTransferRequestToFromJSON,
    CreateSuiTransferRequestToFromJSONTyped,
    CreateSuiTransferRequestToToJSON,
} from './CreateSuiTransferRequestTo';
import type { CreateSuiTransferRequestValue } from './CreateSuiTransferRequestValue';
import {
    CreateSuiTransferRequestValueFromJSON,
    CreateSuiTransferRequestValueFromJSONTyped,
    CreateSuiTransferRequestValueToJSON,
} from './CreateSuiTransferRequestValue';
import type { PushMode } from './PushMode';
import {
    PushModeFromJSON,
    PushModeFromJSONTyped,
    PushModeToJSON,
} from './PushMode';
import type { SuiAssetIdentifierRequest } from './SuiAssetIdentifierRequest';
import {
    SuiAssetIdentifierRequestFromJSON,
    SuiAssetIdentifierRequestFromJSONTyped,
    SuiAssetIdentifierRequestToJSON,
} from './SuiAssetIdentifierRequest';
import type { SuiGasConfig } from './SuiGasConfig';
import {
    SuiGasConfigFromJSON,
    SuiGasConfigFromJSONTyped,
    SuiGasConfigToJSON,
} from './SuiGasConfig';

/**
 * 
 * @export
 * @interface CreateSuiTransferRequest
 */
export interface CreateSuiTransferRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateSuiTransferRequest
     */
    type: CreateSuiTransferRequestTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof CreateSuiTransferRequest
     */
    failOnPredictionFailure?: boolean;
    /**
     * 
     * @type {PushMode}
     * @memberof CreateSuiTransferRequest
     */
    pushMode?: PushMode;
    /**
     * 
     * @type {boolean}
     * @memberof CreateSuiTransferRequest
     */
    skipPrediction?: boolean;
    /**
     * 
     * @type {CreateSuiTransferRequestTo}
     * @memberof CreateSuiTransferRequest
     */
    to: CreateSuiTransferRequestTo;
    /**
     * 
     * @type {SuiGasConfig}
     * @memberof CreateSuiTransferRequest
     */
    gasConfig: SuiGasConfig;
    /**
     * 
     * @type {CreateSuiTransferRequestValue}
     * @memberof CreateSuiTransferRequest
     */
    value: CreateSuiTransferRequestValue;
    /**
     * 
     * @type {SuiAssetIdentifierRequest}
     * @memberof CreateSuiTransferRequest
     */
    assetIdentifier: SuiAssetIdentifierRequest;
}


/**
 * @export
 */
export const CreateSuiTransferRequestTypeEnum = {
    suiTransfer: 'sui_transfer'
} as const;
export type CreateSuiTransferRequestTypeEnum = typeof CreateSuiTransferRequestTypeEnum[keyof typeof CreateSuiTransferRequestTypeEnum];


/**
 * Check if a given object implements the CreateSuiTransferRequest interface.
 */
export function instanceOfCreateSuiTransferRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "to" in value;
    isInstance = isInstance && "gasConfig" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "assetIdentifier" in value;

    return isInstance;
}

export function CreateSuiTransferRequestFromJSON(json: any): CreateSuiTransferRequest {
    return CreateSuiTransferRequestFromJSONTyped(json, false);
}

export function CreateSuiTransferRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSuiTransferRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'failOnPredictionFailure': !exists(json, 'fail_on_prediction_failure') ? undefined : json['fail_on_prediction_failure'],
        'pushMode': !exists(json, 'push_mode') ? undefined : PushModeFromJSON(json['push_mode']),
        'skipPrediction': !exists(json, 'skip_prediction') ? undefined : json['skip_prediction'],
        'to': CreateSuiTransferRequestToFromJSON(json['to']),
        'gasConfig': SuiGasConfigFromJSON(json['gas_config']),
        'value': CreateSuiTransferRequestValueFromJSON(json['value']),
        'assetIdentifier': SuiAssetIdentifierRequestFromJSON(json['asset_identifier']),
    };
}

export function CreateSuiTransferRequestToJSON(value?: CreateSuiTransferRequest | null): any {
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
        'to': CreateSuiTransferRequestToToJSON(value.to),
        'gas_config': SuiGasConfigToJSON(value.gasConfig),
        'value': CreateSuiTransferRequestValueToJSON(value.value),
        'asset_identifier': SuiAssetIdentifierRequestToJSON(value.assetIdentifier),
    };
}

