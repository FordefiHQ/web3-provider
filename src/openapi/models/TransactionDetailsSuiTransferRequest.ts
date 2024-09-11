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
 * @interface TransactionDetailsSuiTransferRequest
 */
export interface TransactionDetailsSuiTransferRequest {
    /**
     * 
     * @type {string}
     * @memberof TransactionDetailsSuiTransferRequest
     */
    type: TransactionDetailsSuiTransferRequestTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof TransactionDetailsSuiTransferRequest
     */
    failOnPredictionFailure?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TransactionDetailsSuiTransferRequest
     */
    skipSimulation?: boolean;
    /**
     * 
     * @type {CreateSuiTransferRequestTo}
     * @memberof TransactionDetailsSuiTransferRequest
     */
    to: CreateSuiTransferRequestTo;
    /**
     * 
     * @type {CreateSuiTransferRequestValue}
     * @memberof TransactionDetailsSuiTransferRequest
     */
    value: CreateSuiTransferRequestValue;
    /**
     * 
     * @type {SuiAssetIdentifierRequest}
     * @memberof TransactionDetailsSuiTransferRequest
     */
    assetIdentifier: SuiAssetIdentifierRequest;
    /**
     * 
     * @type {SuiGasConfig}
     * @memberof TransactionDetailsSuiTransferRequest
     */
    gasConfig: SuiGasConfig;
}


/**
 * @export
 */
export const TransactionDetailsSuiTransferRequestTypeEnum = {
    suiTransfer: 'sui_transfer'
} as const;
export type TransactionDetailsSuiTransferRequestTypeEnum = typeof TransactionDetailsSuiTransferRequestTypeEnum[keyof typeof TransactionDetailsSuiTransferRequestTypeEnum];


/**
 * Check if a given object implements the TransactionDetailsSuiTransferRequest interface.
 */
export function instanceOfTransactionDetailsSuiTransferRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "to" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "assetIdentifier" in value;
    isInstance = isInstance && "gasConfig" in value;

    return isInstance;
}

export function TransactionDetailsSuiTransferRequestFromJSON(json: any): TransactionDetailsSuiTransferRequest {
    return TransactionDetailsSuiTransferRequestFromJSONTyped(json, false);
}

export function TransactionDetailsSuiTransferRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDetailsSuiTransferRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'failOnPredictionFailure': !exists(json, 'fail_on_prediction_failure') ? undefined : json['fail_on_prediction_failure'],
        'skipSimulation': !exists(json, 'skip_simulation') ? undefined : json['skip_simulation'],
        'to': CreateSuiTransferRequestToFromJSON(json['to']),
        'value': CreateSuiTransferRequestValueFromJSON(json['value']),
        'assetIdentifier': SuiAssetIdentifierRequestFromJSON(json['asset_identifier']),
        'gasConfig': SuiGasConfigFromJSON(json['gas_config']),
    };
}

export function TransactionDetailsSuiTransferRequestToJSON(value?: TransactionDetailsSuiTransferRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'fail_on_prediction_failure': value.failOnPredictionFailure,
        'skip_simulation': value.skipSimulation,
        'to': CreateSuiTransferRequestToToJSON(value.to),
        'value': CreateSuiTransferRequestValueToJSON(value.value),
        'asset_identifier': SuiAssetIdentifierRequestToJSON(value.assetIdentifier),
        'gas_config': SuiGasConfigToJSON(value.gasConfig),
    };
}

