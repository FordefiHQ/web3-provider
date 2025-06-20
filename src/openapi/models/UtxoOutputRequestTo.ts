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
    UtxoOutputToAddressRequestToJSON,
} from './UtxoOutputToAddressRequest';
import type { UtxoOutputToVaultAddressIdRequest } from './UtxoOutputToVaultAddressIdRequest';
import {
    UtxoOutputToVaultAddressIdRequestToJSON,
} from './UtxoOutputToVaultAddressIdRequest';
import type { UtxoOutputToVaultIdRequest } from './UtxoOutputToVaultIdRequest';
import {
    UtxoOutputToVaultIdRequestToJSON,
} from './UtxoOutputToVaultIdRequest';

/**
 * 
 * @export
 * @type UtxoOutputRequestTo
 */
export type UtxoOutputRequestTo = { type: 'address' } & UtxoOutputToAddressRequest | { type: 'vault_address_id' } & UtxoOutputToVaultAddressIdRequest | { type: 'vault_id' } & UtxoOutputToVaultIdRequest;

export function UtxoOutputRequestToToJSON(json: any): any {
    return UtxoOutputRequestToToJSONTyped(json, false);
}

function UtxoOutputRequestToToJSONTyped(value?: UtxoOutputRequestTo | null, _ignoreDiscriminator: boolean = false): any {
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

