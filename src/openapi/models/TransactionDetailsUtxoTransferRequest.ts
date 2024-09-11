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
import type { TransactionDetailsUtxoTransferRequestFeePerByte } from './TransactionDetailsUtxoTransferRequestFeePerByte';
import {
    TransactionDetailsUtxoTransferRequestFeePerByteFromJSON,
    TransactionDetailsUtxoTransferRequestFeePerByteFromJSONTyped,
    TransactionDetailsUtxoTransferRequestFeePerByteToJSON,
} from './TransactionDetailsUtxoTransferRequestFeePerByte';
import type { UtxoOutputRequest } from './UtxoOutputRequest';
import {
    UtxoOutputRequestFromJSON,
    UtxoOutputRequestFromJSONTyped,
    UtxoOutputRequestToJSON,
} from './UtxoOutputRequest';

/**
 * 
 * @export
 * @interface TransactionDetailsUtxoTransferRequest
 */
export interface TransactionDetailsUtxoTransferRequest {
    /**
     * 
     * @type {string}
     * @memberof TransactionDetailsUtxoTransferRequest
     */
    type: TransactionDetailsUtxoTransferRequestTypeEnum;
    /**
     * 
     * @type {Array<UtxoOutputRequest>}
     * @memberof TransactionDetailsUtxoTransferRequest
     */
    outputs: Array<UtxoOutputRequest>;
    /**
     * 
     * @type {TransactionDetailsUtxoTransferRequestFeePerByte}
     * @memberof TransactionDetailsUtxoTransferRequest
     */
    feePerByte: TransactionDetailsUtxoTransferRequestFeePerByte;
    /**
     * 
     * @type {PushMode}
     * @memberof TransactionDetailsUtxoTransferRequest
     */
    pushMode?: PushMode;
}


/**
 * @export
 */
export const TransactionDetailsUtxoTransferRequestTypeEnum = {
    utxoTransfer: 'utxo_transfer'
} as const;
export type TransactionDetailsUtxoTransferRequestTypeEnum = typeof TransactionDetailsUtxoTransferRequestTypeEnum[keyof typeof TransactionDetailsUtxoTransferRequestTypeEnum];


/**
 * Check if a given object implements the TransactionDetailsUtxoTransferRequest interface.
 */
export function instanceOfTransactionDetailsUtxoTransferRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "outputs" in value;
    isInstance = isInstance && "feePerByte" in value;

    return isInstance;
}

export function TransactionDetailsUtxoTransferRequestFromJSON(json: any): TransactionDetailsUtxoTransferRequest {
    return TransactionDetailsUtxoTransferRequestFromJSONTyped(json, false);
}

export function TransactionDetailsUtxoTransferRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDetailsUtxoTransferRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'outputs': ((json['outputs'] as Array<any>).map(UtxoOutputRequestFromJSON)),
        'feePerByte': TransactionDetailsUtxoTransferRequestFeePerByteFromJSON(json['fee_per_byte']),
        'pushMode': !exists(json, 'push_mode') ? undefined : PushModeFromJSON(json['push_mode']),
    };
}

export function TransactionDetailsUtxoTransferRequestToJSON(value?: TransactionDetailsUtxoTransferRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'outputs': ((value.outputs as Array<any>).map(UtxoOutputRequestToJSON)),
        'fee_per_byte': TransactionDetailsUtxoTransferRequestFeePerByteToJSON(value.feePerByte),
        'push_mode': PushModeToJSON(value.pushMode),
    };
}

