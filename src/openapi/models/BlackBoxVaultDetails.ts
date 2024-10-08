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
    EcdsaSecp256k1BlackBoxVault,
    instanceOfEcdsaSecp256k1BlackBoxVault,
    EcdsaSecp256k1BlackBoxVaultFromJSON,
    EcdsaSecp256k1BlackBoxVaultFromJSONTyped,
    EcdsaSecp256k1BlackBoxVaultToJSON,
} from './EcdsaSecp256k1BlackBoxVault';
import {
    EcdsaStarkBlackBoxVault,
    instanceOfEcdsaStarkBlackBoxVault,
    EcdsaStarkBlackBoxVaultFromJSON,
    EcdsaStarkBlackBoxVaultFromJSONTyped,
    EcdsaStarkBlackBoxVaultToJSON,
} from './EcdsaStarkBlackBoxVault';
import {
    EddsaED25519BlackBoxVault,
    instanceOfEddsaED25519BlackBoxVault,
    EddsaED25519BlackBoxVaultFromJSON,
    EddsaED25519BlackBoxVaultFromJSONTyped,
    EddsaED25519BlackBoxVaultToJSON,
} from './EddsaED25519BlackBoxVault';
import {
    SchnorrSecp256k1BlackBoxValue,
    instanceOfSchnorrSecp256k1BlackBoxValue,
    SchnorrSecp256k1BlackBoxValueFromJSON,
    SchnorrSecp256k1BlackBoxValueFromJSONTyped,
    SchnorrSecp256k1BlackBoxValueToJSON,
} from './SchnorrSecp256k1BlackBoxValue';

/**
 * @type BlackBoxVaultDetails
 * 
 * @export
 */
export type BlackBoxVaultDetails = { type: 'ecdsa_secp256k1' } & EcdsaSecp256k1BlackBoxVault | { type: 'ecdsa_stark' } & EcdsaStarkBlackBoxVault | { type: 'eddsa_ed25519' } & EddsaED25519BlackBoxVault | { type: 'schnorr_secp256k1' } & SchnorrSecp256k1BlackBoxValue;

export function BlackBoxVaultDetailsFromJSON(json: any): BlackBoxVaultDetails {
    return BlackBoxVaultDetailsFromJSONTyped(json, false);
}

export function BlackBoxVaultDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlackBoxVaultDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'ecdsa_secp256k1':
            return {...EcdsaSecp256k1BlackBoxVaultFromJSONTyped(json, true), type: 'ecdsa_secp256k1'};
        case 'ecdsa_stark':
            return {...EcdsaStarkBlackBoxVaultFromJSONTyped(json, true), type: 'ecdsa_stark'};
        case 'eddsa_ed25519':
            return {...EddsaED25519BlackBoxVaultFromJSONTyped(json, true), type: 'eddsa_ed25519'};
        case 'schnorr_secp256k1':
            return {...SchnorrSecp256k1BlackBoxValueFromJSONTyped(json, true), type: 'schnorr_secp256k1'};
        default:
            throw new Error(`No variant of BlackBoxVaultDetails exists with 'type=${json['type']}'`);
    }
}

export function BlackBoxVaultDetailsToJSON(value?: BlackBoxVaultDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'ecdsa_secp256k1':
            return EcdsaSecp256k1BlackBoxVaultToJSON(value);
        case 'ecdsa_stark':
            return EcdsaStarkBlackBoxVaultToJSON(value);
        case 'eddsa_ed25519':
            return EddsaED25519BlackBoxVaultToJSON(value);
        case 'schnorr_secp256k1':
            return SchnorrSecp256k1BlackBoxValueToJSON(value);
        default:
            throw new Error(`No variant of BlackBoxVaultDetails exists with 'type=${value['type']}'`);
    }

}

