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

import type { UtxoOutputToAddressRequest } from './UtxoOutputToAddressRequest';
import {
    instanceOfUtxoOutputToAddressRequest,
    UtxoOutputToAddressRequestFromJSON,
    UtxoOutputToAddressRequestFromJSONTyped,
    UtxoOutputToAddressRequestToJSON,
} from './UtxoOutputToAddressRequest';
import type { UtxoOutputToVaultAddressIdRequest } from './UtxoOutputToVaultAddressIdRequest';
import {
    instanceOfUtxoOutputToVaultAddressIdRequest,
    UtxoOutputToVaultAddressIdRequestFromJSON,
    UtxoOutputToVaultAddressIdRequestFromJSONTyped,
    UtxoOutputToVaultAddressIdRequestToJSON,
} from './UtxoOutputToVaultAddressIdRequest';
import type { UtxoOutputToVaultIdRequest } from './UtxoOutputToVaultIdRequest';
import {
    instanceOfUtxoOutputToVaultIdRequest,
    UtxoOutputToVaultIdRequestFromJSON,
    UtxoOutputToVaultIdRequestFromJSONTyped,
    UtxoOutputToVaultIdRequestToJSON,
} from './UtxoOutputToVaultIdRequest';

/**
 * @type UtxoOutputRequestTo
 * 
 * @export
 */
export type UtxoOutputRequestTo = { type: 'address' } & UtxoOutputToAddressRequest | { type: 'vault_address_id' } & UtxoOutputToVaultAddressIdRequest | { type: 'vault_id' } & UtxoOutputToVaultIdRequest;

export function UtxoOutputRequestToFromJSON(json: any): UtxoOutputRequestTo {
    return UtxoOutputRequestToFromJSONTyped(json, false);
}

export function UtxoOutputRequestToFromJSONTyped(json: any, ignoreDiscriminator: boolean): UtxoOutputRequestTo {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'address':
            return Object.assign({}, UtxoOutputToAddressRequestFromJSONTyped(json, true), { type: 'address' } as const);
        case 'vault_address_id':
            return Object.assign({}, UtxoOutputToVaultAddressIdRequestFromJSONTyped(json, true), { type: 'vault_address_id' } as const);
        case 'vault_id':
            return Object.assign({}, UtxoOutputToVaultIdRequestFromJSONTyped(json, true), { type: 'vault_id' } as const);
        default:
            throw new Error(`No variant of UtxoOutputRequestTo exists with 'type=${json['type']}'`);
    }
}

export function UtxoOutputRequestToToJSON(json: any): any {
    return UtxoOutputRequestToToJSONTyped(json, false);
}

export function UtxoOutputRequestToToJSONTyped(value?: UtxoOutputRequestTo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'address':
            return Object.assign({}, UtxoOutputToAddressRequestToJSON(value), { type: 'address' } as const);
        case 'vault_address_id':
            return Object.assign({}, UtxoOutputToVaultAddressIdRequestToJSON(value), { type: 'vault_address_id' } as const);
        case 'vault_id':
            return Object.assign({}, UtxoOutputToVaultIdRequestToJSON(value), { type: 'vault_id' } as const);
        default:
            throw new Error(`No variant of UtxoOutputRequestTo exists with 'type=${value['type']}'`);
    }

}

