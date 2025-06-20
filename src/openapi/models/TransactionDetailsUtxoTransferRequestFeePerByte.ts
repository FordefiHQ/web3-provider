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

import type { CustomFeeRequest } from './CustomFeeRequest';
import {
    CustomFeeRequestToJSON,
} from './CustomFeeRequest';
import type { FeePriorityRequest } from './FeePriorityRequest';
import {
    FeePriorityRequestToJSON,
} from './FeePriorityRequest';

/**
 * 
 * @export
 * @type TransactionDetailsUtxoTransferRequestFeePerByte
 */
export type TransactionDetailsUtxoTransferRequestFeePerByte = { type: 'custom' } & CustomFeeRequest | { type: 'priority' } & FeePriorityRequest;

export function TransactionDetailsUtxoTransferRequestFeePerByteToJSON(json: any): any {
    return TransactionDetailsUtxoTransferRequestFeePerByteToJSONTyped(json, false);
}

function TransactionDetailsUtxoTransferRequestFeePerByteToJSONTyped(value?: TransactionDetailsUtxoTransferRequestFeePerByte | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'custom':
            return Object.assign({}, CustomFeeRequestToJSON(value), { type: 'custom' } as const);
        case 'priority':
            return Object.assign({}, FeePriorityRequestToJSON(value), { type: 'priority' } as const);
        default:
            throw new Error(`No variant of TransactionDetailsUtxoTransferRequestFeePerByte exists with 'type=${value['type']}'`);
    }

}

