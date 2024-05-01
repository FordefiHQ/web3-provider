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
import type { ReleaseType } from './ReleaseType';
import {
    ReleaseTypeFromJSON,
    ReleaseTypeFromJSONTyped,
    ReleaseTypeToJSON,
} from './ReleaseType';
import type { SignerType } from './SignerType';
import {
    SignerTypeFromJSON,
    SignerTypeFromJSONTyped,
    SignerTypeToJSON,
} from './SignerType';

/**
 * 
 * @export
 * @interface ReleaseEvmTransactionRequest
 */
export interface ReleaseEvmTransactionRequest {
    /**
     * 
     * @type {string}
     * @memberof ReleaseEvmTransactionRequest
     */
    type: ReleaseEvmTransactionRequestTypeEnum;
    /**
     * 
     * @type {ReleaseType}
     * @memberof ReleaseEvmTransactionRequest
     */
    releaseType: ReleaseType;
    /**
     * 
     * @type {SignerType}
     * @memberof ReleaseEvmTransactionRequest
     */
    signerType?: SignerType;
    /**
     * 
     * @type {boolean}
     * @memberof ReleaseEvmTransactionRequest
     */
    failOnPredictionFailure?: boolean;
}


/**
 * @export
 */
export const ReleaseEvmTransactionRequestTypeEnum = {
    evmTransaction: 'evm_transaction'
} as const;
export type ReleaseEvmTransactionRequestTypeEnum = typeof ReleaseEvmTransactionRequestTypeEnum[keyof typeof ReleaseEvmTransactionRequestTypeEnum];


/**
 * Check if a given object implements the ReleaseEvmTransactionRequest interface.
 */
export function instanceOfReleaseEvmTransactionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "releaseType" in value;

    return isInstance;
}

export function ReleaseEvmTransactionRequestFromJSON(json: any): ReleaseEvmTransactionRequest {
    return ReleaseEvmTransactionRequestFromJSONTyped(json, false);
}

export function ReleaseEvmTransactionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReleaseEvmTransactionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'releaseType': ReleaseTypeFromJSON(json['release_type']),
        'signerType': !exists(json, 'signer_type') ? undefined : SignerTypeFromJSON(json['signer_type']),
        'failOnPredictionFailure': !exists(json, 'fail_on_prediction_failure') ? undefined : json['fail_on_prediction_failure'],
    };
}

export function ReleaseEvmTransactionRequestToJSON(value?: ReleaseEvmTransactionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'release_type': ReleaseTypeToJSON(value.releaseType),
        'signer_type': SignerTypeToJSON(value.signerType),
        'fail_on_prediction_failure': value.failOnPredictionFailure,
    };
}

