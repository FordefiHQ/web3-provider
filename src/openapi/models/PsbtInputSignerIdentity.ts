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

import type { PsbtSignerIdentityAddress } from './PsbtSignerIdentityAddress';
import {
    PsbtSignerIdentityAddressToJSON,
} from './PsbtSignerIdentityAddress';
import type { PsbtSignerIdentityPublicKey } from './PsbtSignerIdentityPublicKey';
import {
    PsbtSignerIdentityPublicKeyToJSON,
} from './PsbtSignerIdentityPublicKey';

/**
 * 
 * @export
 * @type PsbtInputSignerIdentity
 */
export type PsbtInputSignerIdentity = { type: 'address' } & PsbtSignerIdentityAddress | { type: 'public_key' } & PsbtSignerIdentityPublicKey;

export function PsbtInputSignerIdentityToJSON(json: any): any {
    return PsbtInputSignerIdentityToJSONTyped(json, false);
}

function PsbtInputSignerIdentityToJSONTyped(value?: PsbtInputSignerIdentity | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'address':
            return Object.assign({}, PsbtSignerIdentityAddressToJSON(value), { type: 'address' } as const);
        case 'public_key':
            return Object.assign({}, PsbtSignerIdentityPublicKeyToJSON(value), { type: 'public_key' } as const);
        default:
            throw new Error(`No variant of PsbtInputSignerIdentity exists with 'type=${value['type']}'`);
    }

}

