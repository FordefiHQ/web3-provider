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
    EditAptosContactRequest,
    instanceOfEditAptosContactRequest,
    EditAptosContactRequestFromJSON,
    EditAptosContactRequestFromJSONTyped,
    EditAptosContactRequestToJSON,
} from './EditAptosContactRequest';
import {
    EditCosmosContactRequest,
    instanceOfEditCosmosContactRequest,
    EditCosmosContactRequestFromJSON,
    EditCosmosContactRequestFromJSONTyped,
    EditCosmosContactRequestToJSON,
} from './EditCosmosContactRequest';
import {
    EditEvmContactRequest,
    instanceOfEditEvmContactRequest,
    EditEvmContactRequestFromJSON,
    EditEvmContactRequestFromJSONTyped,
    EditEvmContactRequestToJSON,
} from './EditEvmContactRequest';
import {
    EditSolanaContactRequest,
    instanceOfEditSolanaContactRequest,
    EditSolanaContactRequestFromJSON,
    EditSolanaContactRequestFromJSONTyped,
    EditSolanaContactRequestToJSON,
} from './EditSolanaContactRequest';
import {
    EditSuiContactRequest,
    instanceOfEditSuiContactRequest,
    EditSuiContactRequestFromJSON,
    EditSuiContactRequestFromJSONTyped,
    EditSuiContactRequestToJSON,
} from './EditSuiContactRequest';
import {
    EditUtxoContactRequest,
    instanceOfEditUtxoContactRequest,
    EditUtxoContactRequestFromJSON,
    EditUtxoContactRequestFromJSONTyped,
    EditUtxoContactRequestToJSON,
} from './EditUtxoContactRequest';

/**
 * @type EditContactRequest
 * 
 * @export
 */
export type EditContactRequest = { type: 'aptos' } & EditAptosContactRequest | { type: 'cosmos' } & EditCosmosContactRequest | { type: 'evm' } & EditEvmContactRequest | { type: 'solana' } & EditSolanaContactRequest | { type: 'sui' } & EditSuiContactRequest | { type: 'utxo' } & EditUtxoContactRequest;

export function EditContactRequestFromJSON(json: any): EditContactRequest {
    return EditContactRequestFromJSONTyped(json, false);
}

export function EditContactRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EditContactRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'aptos':
            return {...EditAptosContactRequestFromJSONTyped(json, true), type: 'aptos'};
        case 'cosmos':
            return {...EditCosmosContactRequestFromJSONTyped(json, true), type: 'cosmos'};
        case 'evm':
            return {...EditEvmContactRequestFromJSONTyped(json, true), type: 'evm'};
        case 'solana':
            return {...EditSolanaContactRequestFromJSONTyped(json, true), type: 'solana'};
        case 'sui':
            return {...EditSuiContactRequestFromJSONTyped(json, true), type: 'sui'};
        case 'utxo':
            return {...EditUtxoContactRequestFromJSONTyped(json, true), type: 'utxo'};
        default:
            throw new Error(`No variant of EditContactRequest exists with 'type=${json['type']}'`);
    }
}

export function EditContactRequestToJSON(value?: EditContactRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'aptos':
            return EditAptosContactRequestToJSON(value);
        case 'cosmos':
            return EditCosmosContactRequestToJSON(value);
        case 'evm':
            return EditEvmContactRequestToJSON(value);
        case 'solana':
            return EditSolanaContactRequestToJSON(value);
        case 'sui':
            return EditSuiContactRequestToJSON(value);
        case 'utxo':
            return EditUtxoContactRequestToJSON(value);
        default:
            throw new Error(`No variant of EditContactRequest exists with 'type=${value['type']}'`);
    }

}

