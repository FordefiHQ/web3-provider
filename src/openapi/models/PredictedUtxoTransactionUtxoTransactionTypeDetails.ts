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

import {
    UtxoNativeTransferDetails,
    instanceOfUtxoNativeTransferDetails,
    UtxoNativeTransferDetailsFromJSON,
    UtxoNativeTransferDetailsFromJSONTyped,
    UtxoNativeTransferDetailsToJSON,
} from './UtxoNativeTransferDetails';
import {
    UtxoPsbtDetails,
    instanceOfUtxoPsbtDetails,
    UtxoPsbtDetailsFromJSON,
    UtxoPsbtDetailsFromJSONTyped,
    UtxoPsbtDetailsToJSON,
} from './UtxoPsbtDetails';

/**
 * @type PredictedUtxoTransactionUtxoTransactionTypeDetails
 * 
 * @export
 */
export type PredictedUtxoTransactionUtxoTransactionTypeDetails = { type: 'native_transfer' } & UtxoNativeTransferDetails | { type: 'partially_signed_bitcoin_transaction' } & UtxoPsbtDetails;

export function PredictedUtxoTransactionUtxoTransactionTypeDetailsFromJSON(json: any): PredictedUtxoTransactionUtxoTransactionTypeDetails {
    return PredictedUtxoTransactionUtxoTransactionTypeDetailsFromJSONTyped(json, false);
}

export function PredictedUtxoTransactionUtxoTransactionTypeDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PredictedUtxoTransactionUtxoTransactionTypeDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'native_transfer':
            return {...UtxoNativeTransferDetailsFromJSONTyped(json, true), type: 'native_transfer'};
        case 'partially_signed_bitcoin_transaction':
            return {...UtxoPsbtDetailsFromJSONTyped(json, true), type: 'partially_signed_bitcoin_transaction'};
        default:
            throw new Error(`No variant of PredictedUtxoTransactionUtxoTransactionTypeDetails exists with 'type=${json['type']}'`);
    }
}

export function PredictedUtxoTransactionUtxoTransactionTypeDetailsToJSON(value?: PredictedUtxoTransactionUtxoTransactionTypeDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'native_transfer':
            return UtxoNativeTransferDetailsToJSON(value);
        case 'partially_signed_bitcoin_transaction':
            return UtxoPsbtDetailsToJSON(value);
        default:
            throw new Error(`No variant of PredictedUtxoTransactionUtxoTransactionTypeDetails exists with 'type=${value['type']}'`);
    }

}
