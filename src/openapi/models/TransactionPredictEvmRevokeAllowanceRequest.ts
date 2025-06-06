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
import type { EvmChainRequest } from './EvmChainRequest';
import {
    EvmChainRequestFromJSON,
    EvmChainRequestFromJSONTyped,
    EvmChainRequestToJSON,
    EvmChainRequestToJSONTyped,
} from './EvmChainRequest';
import type { CreateEvmRawTransactionRequestGas } from './CreateEvmRawTransactionRequestGas';
import {
    CreateEvmRawTransactionRequestGasFromJSON,
    CreateEvmRawTransactionRequestGasFromJSONTyped,
    CreateEvmRawTransactionRequestGasToJSON,
    CreateEvmRawTransactionRequestGasToJSONTyped,
} from './CreateEvmRawTransactionRequestGas';

/**
 * 
 * @export
 * @interface TransactionPredictEvmRevokeAllowanceRequest
 */
export interface TransactionPredictEvmRevokeAllowanceRequest {
    /**
     * 
     * @type {string}
     * @memberof TransactionPredictEvmRevokeAllowanceRequest
     */
    type: TransactionPredictEvmRevokeAllowanceRequestTypeEnum;
    /**
     * 
     * @type {CreateEvmRawTransactionRequestGas}
     * @memberof TransactionPredictEvmRevokeAllowanceRequest
     */
    gas?: CreateEvmRawTransactionRequestGas;
    /**
     * 
     * @type {boolean}
     * @memberof TransactionPredictEvmRevokeAllowanceRequest
     */
    failOnPredictionFailure?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TransactionPredictEvmRevokeAllowanceRequest
     */
    skipSimulation?: boolean;
    /**
     * 
     * @type {EvmChainRequest}
     * @memberof TransactionPredictEvmRevokeAllowanceRequest
     */
    chain: EvmChainRequest;
    /**
     * 
     * @type {string}
     * @memberof TransactionPredictEvmRevokeAllowanceRequest
     */
    token: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionPredictEvmRevokeAllowanceRequest
     */
    spender: string;
}


/**
 * @export
 */
export const TransactionPredictEvmRevokeAllowanceRequestTypeEnum = {
    evmRevokeAllowance: 'evm_revoke_allowance'
} as const;
export type TransactionPredictEvmRevokeAllowanceRequestTypeEnum = typeof TransactionPredictEvmRevokeAllowanceRequestTypeEnum[keyof typeof TransactionPredictEvmRevokeAllowanceRequestTypeEnum];


/**
 * Check if a given object implements the TransactionPredictEvmRevokeAllowanceRequest interface.
 */
export function instanceOfTransactionPredictEvmRevokeAllowanceRequest(value: object): value is TransactionPredictEvmRevokeAllowanceRequest {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('chain' in value) || value['chain'] === undefined) return false;
    if (!('token' in value) || value['token'] === undefined) return false;
    if (!('spender' in value) || value['spender'] === undefined) return false;
    return true;
}

export function TransactionPredictEvmRevokeAllowanceRequestFromJSON(json: any): TransactionPredictEvmRevokeAllowanceRequest {
    return TransactionPredictEvmRevokeAllowanceRequestFromJSONTyped(json, false);
}

export function TransactionPredictEvmRevokeAllowanceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionPredictEvmRevokeAllowanceRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'gas': json['gas'] == null ? undefined : CreateEvmRawTransactionRequestGasFromJSON(json['gas']),
        'failOnPredictionFailure': json['fail_on_prediction_failure'] == null ? undefined : json['fail_on_prediction_failure'],
        'skipSimulation': json['skip_simulation'] == null ? undefined : json['skip_simulation'],
        'chain': EvmChainRequestFromJSON(json['chain']),
        'token': json['token'],
        'spender': json['spender'],
    };
}

export function TransactionPredictEvmRevokeAllowanceRequestToJSON(json: any): TransactionPredictEvmRevokeAllowanceRequest {
    return TransactionPredictEvmRevokeAllowanceRequestToJSONTyped(json, false);
}

export function TransactionPredictEvmRevokeAllowanceRequestToJSONTyped(value?: TransactionPredictEvmRevokeAllowanceRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'gas': CreateEvmRawTransactionRequestGasToJSON(value['gas']),
        'fail_on_prediction_failure': value['failOnPredictionFailure'],
        'skip_simulation': value['skipSimulation'],
        'chain': EvmChainRequestToJSON(value['chain']),
        'token': value['token'],
        'spender': value['spender'],
    };
}

