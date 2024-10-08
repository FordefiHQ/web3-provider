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
import type { PsbtInput } from './PsbtInput';
import {
    PsbtInputFromJSON,
    PsbtInputFromJSONTyped,
    PsbtInputToJSON,
} from './PsbtInput';
import type { PushMode } from './PushMode';
import {
    PushModeFromJSON,
    PushModeFromJSONTyped,
    PushModeToJSON,
} from './PushMode';
import type { UtxoAddress } from './UtxoAddress';
import {
    UtxoAddressFromJSON,
    UtxoAddressFromJSONTyped,
    UtxoAddressToJSON,
} from './UtxoAddress';

/**
 * 
 * @export
 * @interface TransactionDetailsUtxoPsbtRequest
 */
export interface TransactionDetailsUtxoPsbtRequest {
    /**
     * 
     * @type {string}
     * @memberof TransactionDetailsUtxoPsbtRequest
     */
    type: TransactionDetailsUtxoPsbtRequestTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TransactionDetailsUtxoPsbtRequest
     */
    psbtRawData: string;
    /**
     * 
     * @type {boolean}
     * @memberof TransactionDetailsUtxoPsbtRequest
     */
    autoFinalize?: boolean;
    /**
     * 
     * @type {UtxoAddress}
     * @memberof TransactionDetailsUtxoPsbtRequest
     */
    sender: UtxoAddress;
    /**
     * 
     * @type {Array<PsbtInput>}
     * @memberof TransactionDetailsUtxoPsbtRequest
     */
    inputs?: Array<PsbtInput>;
    /**
     * 
     * @type {PushMode}
     * @memberof TransactionDetailsUtxoPsbtRequest
     */
    pushMode?: PushMode;
}


/**
 * @export
 */
export const TransactionDetailsUtxoPsbtRequestTypeEnum = {
    utxoPartiallySignedBitcoinTransaction: 'utxo_partially_signed_bitcoin_transaction'
} as const;
export type TransactionDetailsUtxoPsbtRequestTypeEnum = typeof TransactionDetailsUtxoPsbtRequestTypeEnum[keyof typeof TransactionDetailsUtxoPsbtRequestTypeEnum];


/**
 * Check if a given object implements the TransactionDetailsUtxoPsbtRequest interface.
 */
export function instanceOfTransactionDetailsUtxoPsbtRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "psbtRawData" in value;
    isInstance = isInstance && "sender" in value;

    return isInstance;
}

export function TransactionDetailsUtxoPsbtRequestFromJSON(json: any): TransactionDetailsUtxoPsbtRequest {
    return TransactionDetailsUtxoPsbtRequestFromJSONTyped(json, false);
}

export function TransactionDetailsUtxoPsbtRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionDetailsUtxoPsbtRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'psbtRawData': json['psbt_raw_data'],
        'autoFinalize': !exists(json, 'auto_finalize') ? undefined : json['auto_finalize'],
        'sender': UtxoAddressFromJSON(json['sender']),
        'inputs': !exists(json, 'inputs') ? undefined : ((json['inputs'] as Array<any>).map(PsbtInputFromJSON)),
        'pushMode': !exists(json, 'push_mode') ? undefined : PushModeFromJSON(json['push_mode']),
    };
}

export function TransactionDetailsUtxoPsbtRequestToJSON(value?: TransactionDetailsUtxoPsbtRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'psbt_raw_data': value.psbtRawData,
        'auto_finalize': value.autoFinalize,
        'sender': UtxoAddressToJSON(value.sender),
        'inputs': value.inputs === undefined ? undefined : ((value.inputs as Array<any>).map(PsbtInputToJSON)),
        'push_mode': PushModeToJSON(value.pushMode),
    };
}

