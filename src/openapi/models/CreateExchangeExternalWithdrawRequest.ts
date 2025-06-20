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

import type { CreateExchangeExternalWithdrawRequestValue } from './CreateExchangeExternalWithdrawRequestValue';
import {
    CreateExchangeExternalWithdrawRequestValueToJSON,
} from './CreateExchangeExternalWithdrawRequestValue';
import type { ExchangeAssetIdentifierRequest } from './ExchangeAssetIdentifierRequest';
import {
    ExchangeAssetIdentifierRequestToJSON,
} from './ExchangeAssetIdentifierRequest';
import type { CreateExchangeExternalWithdrawRequestTo } from './CreateExchangeExternalWithdrawRequestTo';
import {
    CreateExchangeExternalWithdrawRequestToToJSON,
} from './CreateExchangeExternalWithdrawRequestTo';

/**
 * 
 * @export
 * @interface CreateExchangeExternalWithdrawRequest
 */
export interface CreateExchangeExternalWithdrawRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateExchangeExternalWithdrawRequest
     */
    type: CreateExchangeExternalWithdrawRequestTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof CreateExchangeExternalWithdrawRequest
     */
    failOnPredictionFailure?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateExchangeExternalWithdrawRequest
     */
    skipPrediction?: boolean;
    /**
     * 
     * @type {ExchangeAssetIdentifierRequest}
     * @memberof CreateExchangeExternalWithdrawRequest
     */
    assetIdentifier: ExchangeAssetIdentifierRequest;
    /**
     * 
     * @type {string}
     * @memberof CreateExchangeExternalWithdrawRequest
     */
    chain: string;
    /**
     * 
     * @type {CreateExchangeExternalWithdrawRequestTo}
     * @memberof CreateExchangeExternalWithdrawRequest
     */
    to: CreateExchangeExternalWithdrawRequestTo;
    /**
     * 
     * @type {CreateExchangeExternalWithdrawRequestValue}
     * @memberof CreateExchangeExternalWithdrawRequest
     */
    value: CreateExchangeExternalWithdrawRequestValue;
    /**
     * 
     * @type {string}
     * @memberof CreateExchangeExternalWithdrawRequest
     */
    memo?: string;
}


/**
 * 
 */
const CreateExchangeExternalWithdrawRequestTypeEnum = {
    externalWithdraw: 'external_withdraw'
} as const;
type CreateExchangeExternalWithdrawRequestTypeEnum = typeof CreateExchangeExternalWithdrawRequestTypeEnum[keyof typeof CreateExchangeExternalWithdrawRequestTypeEnum];

export function CreateExchangeExternalWithdrawRequestToJSON(json: any): CreateExchangeExternalWithdrawRequest {
    return CreateExchangeExternalWithdrawRequestToJSONTyped(json, false);
}

function CreateExchangeExternalWithdrawRequestToJSONTyped(value?: CreateExchangeExternalWithdrawRequest | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'fail_on_prediction_failure': value['failOnPredictionFailure'],
        'skip_prediction': value['skipPrediction'],
        'asset_identifier': ExchangeAssetIdentifierRequestToJSON(value['assetIdentifier']),
        'chain': value['chain'],
        'to': CreateExchangeExternalWithdrawRequestToToJSON(value['to']),
        'value': CreateExchangeExternalWithdrawRequestValueToJSON(value['value']),
        'memo': value['memo'],
    };
}
