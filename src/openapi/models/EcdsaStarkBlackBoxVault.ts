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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface EcdsaStarkBlackBoxVault
 */
export interface EcdsaStarkBlackBoxVault {
    /**
     * 
     * @type {string}
     * @memberof EcdsaStarkBlackBoxVault
     */
    type: EcdsaStarkBlackBoxVaultTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof EcdsaStarkBlackBoxVault
     * @deprecated
     */
    publicKey: string;
    /**
     * 
     * @type {string}
     * @memberof EcdsaStarkBlackBoxVault
     */
    starkKey: string;
}


/**
 * @export
 */
export const EcdsaStarkBlackBoxVaultTypeEnum = {
    ecdsaStark: 'ecdsa_stark'
} as const;
export type EcdsaStarkBlackBoxVaultTypeEnum = typeof EcdsaStarkBlackBoxVaultTypeEnum[keyof typeof EcdsaStarkBlackBoxVaultTypeEnum];


/**
 * Check if a given object implements the EcdsaStarkBlackBoxVault interface.
 */
export function instanceOfEcdsaStarkBlackBoxVault(value: object): value is EcdsaStarkBlackBoxVault {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('publicKey' in value) || value['publicKey'] === undefined) return false;
    if (!('starkKey' in value) || value['starkKey'] === undefined) return false;
    return true;
}

export function EcdsaStarkBlackBoxVaultFromJSON(json: any): EcdsaStarkBlackBoxVault {
    return EcdsaStarkBlackBoxVaultFromJSONTyped(json, false);
}

export function EcdsaStarkBlackBoxVaultFromJSONTyped(json: any, ignoreDiscriminator: boolean): EcdsaStarkBlackBoxVault {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'publicKey': json['public_key'],
        'starkKey': json['stark_key'],
    };
}

export function EcdsaStarkBlackBoxVaultToJSON(json: any): EcdsaStarkBlackBoxVault {
    return EcdsaStarkBlackBoxVaultToJSONTyped(json, false);
}

export function EcdsaStarkBlackBoxVaultToJSONTyped(value?: EcdsaStarkBlackBoxVault | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'public_key': value['publicKey'],
        'stark_key': value['starkKey'],
    };
}

