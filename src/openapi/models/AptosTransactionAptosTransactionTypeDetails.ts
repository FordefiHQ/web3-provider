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
    AptosCoinTransferDetails,
    instanceOfAptosCoinTransferDetails,
    AptosCoinTransferDetailsFromJSON,
    AptosCoinTransferDetailsFromJSONTyped,
    AptosCoinTransferDetailsToJSON,
} from './AptosCoinTransferDetails';
import {
    AptosEntryPointDetails,
    instanceOfAptosEntryPointDetails,
    AptosEntryPointDetailsFromJSON,
    AptosEntryPointDetailsFromJSONTyped,
    AptosEntryPointDetailsToJSON,
} from './AptosEntryPointDetails';
import {
    AptosNativeTransferDetails,
    instanceOfAptosNativeTransferDetails,
    AptosNativeTransferDetailsFromJSON,
    AptosNativeTransferDetailsFromJSONTyped,
    AptosNativeTransferDetailsToJSON,
} from './AptosNativeTransferDetails';
import {
    AptosScriptDetails,
    instanceOfAptosScriptDetails,
    AptosScriptDetailsFromJSON,
    AptosScriptDetailsFromJSONTyped,
    AptosScriptDetailsToJSON,
} from './AptosScriptDetails';

/**
 * @type AptosTransactionAptosTransactionTypeDetails
 * 
 * @export
 */
export type AptosTransactionAptosTransactionTypeDetails = { type: 'coin_transfer' } & AptosCoinTransferDetails | { type: 'entry_point' } & AptosEntryPointDetails | { type: 'native_transfer' } & AptosNativeTransferDetails | { type: 'script' } & AptosScriptDetails;

export function AptosTransactionAptosTransactionTypeDetailsFromJSON(json: any): AptosTransactionAptosTransactionTypeDetails {
    return AptosTransactionAptosTransactionTypeDetailsFromJSONTyped(json, false);
}

export function AptosTransactionAptosTransactionTypeDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AptosTransactionAptosTransactionTypeDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'coin_transfer':
            return {...AptosCoinTransferDetailsFromJSONTyped(json, true), type: 'coin_transfer'};
        case 'entry_point':
            return {...AptosEntryPointDetailsFromJSONTyped(json, true), type: 'entry_point'};
        case 'native_transfer':
            return {...AptosNativeTransferDetailsFromJSONTyped(json, true), type: 'native_transfer'};
        case 'script':
            return {...AptosScriptDetailsFromJSONTyped(json, true), type: 'script'};
        default:
            throw new Error(`No variant of AptosTransactionAptosTransactionTypeDetails exists with 'type=${json['type']}'`);
    }
}

export function AptosTransactionAptosTransactionTypeDetailsToJSON(value?: AptosTransactionAptosTransactionTypeDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'coin_transfer':
            return AptosCoinTransferDetailsToJSON(value);
        case 'entry_point':
            return AptosEntryPointDetailsToJSON(value);
        case 'native_transfer':
            return AptosNativeTransferDetailsToJSON(value);
        case 'script':
            return AptosScriptDetailsToJSON(value);
        default:
            throw new Error(`No variant of AptosTransactionAptosTransactionTypeDetails exists with 'type=${value['type']}'`);
    }

}
