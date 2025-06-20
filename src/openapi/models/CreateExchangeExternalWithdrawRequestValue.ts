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

import type { CreateExchangeExternalWithdrawRequestExplicitAmount } from './CreateExchangeExternalWithdrawRequestExplicitAmount';
import {
    CreateExchangeExternalWithdrawRequestExplicitAmountToJSON,
} from './CreateExchangeExternalWithdrawRequestExplicitAmount';
import type { CreateExchangeTransferRequestMaxAmount } from './CreateExchangeTransferRequestMaxAmount';
import {
    CreateExchangeTransferRequestMaxAmountToJSON,
} from './CreateExchangeTransferRequestMaxAmount';

/**
 * 
 * @export
 * @type CreateExchangeExternalWithdrawRequestValue
 */
export type CreateExchangeExternalWithdrawRequestValue = { type: 'max' } & CreateExchangeTransferRequestMaxAmount | { type: 'value' } & CreateExchangeExternalWithdrawRequestExplicitAmount;

export function CreateExchangeExternalWithdrawRequestValueToJSON(json: any): any {
    return CreateExchangeExternalWithdrawRequestValueToJSONTyped(json, false);
}

function CreateExchangeExternalWithdrawRequestValueToJSONTyped(value?: CreateExchangeExternalWithdrawRequestValue | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'max':
            return Object.assign({}, CreateExchangeTransferRequestMaxAmountToJSON(value), { type: 'max' } as const);
        case 'value':
            return Object.assign({}, CreateExchangeExternalWithdrawRequestExplicitAmountToJSON(value), { type: 'value' } as const);
        default:
            throw new Error(`No variant of CreateExchangeExternalWithdrawRequestValue exists with 'type=${value['type']}'`);
    }

}

