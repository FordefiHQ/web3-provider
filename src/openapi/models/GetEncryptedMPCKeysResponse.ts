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
 * @interface GetEncryptedMPCKeysResponse
 */
export interface GetEncryptedMPCKeysResponse {
    /**
     * 
     * @type {string}
     * @memberof GetEncryptedMPCKeysResponse
     */
    encryptedMpcKey: string;
    /**
     * 
     * @type {string}
     * @memberof GetEncryptedMPCKeysResponse
     */
    encryptedShareEcdsa: string;
    /**
     * 
     * @type {string}
     * @memberof GetEncryptedMPCKeysResponse
     */
    encryptedShareEddsa: string;
    /**
     * 
     * @type {string}
     * @memberof GetEncryptedMPCKeysResponse
     */
    encryptedShareEcdsaStark: string;
}

/**
 * Check if a given object implements the GetEncryptedMPCKeysResponse interface.
 */
export function instanceOfGetEncryptedMPCKeysResponse(value: object): value is GetEncryptedMPCKeysResponse {
    if (!('encryptedMpcKey' in value) || value['encryptedMpcKey'] === undefined) return false;
    if (!('encryptedShareEcdsa' in value) || value['encryptedShareEcdsa'] === undefined) return false;
    if (!('encryptedShareEddsa' in value) || value['encryptedShareEddsa'] === undefined) return false;
    if (!('encryptedShareEcdsaStark' in value) || value['encryptedShareEcdsaStark'] === undefined) return false;
    return true;
}

export function GetEncryptedMPCKeysResponseFromJSON(json: any): GetEncryptedMPCKeysResponse {
    return GetEncryptedMPCKeysResponseFromJSONTyped(json, false);
}

export function GetEncryptedMPCKeysResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetEncryptedMPCKeysResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'encryptedMpcKey': json['encrypted_mpc_key'],
        'encryptedShareEcdsa': json['encrypted_share_ecdsa'],
        'encryptedShareEddsa': json['encrypted_share_eddsa'],
        'encryptedShareEcdsaStark': json['encrypted_share_ecdsa_stark'],
    };
}

export function GetEncryptedMPCKeysResponseToJSON(json: any): GetEncryptedMPCKeysResponse {
    return GetEncryptedMPCKeysResponseToJSONTyped(json, false);
}

export function GetEncryptedMPCKeysResponseToJSONTyped(value?: GetEncryptedMPCKeysResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'encrypted_mpc_key': value['encryptedMpcKey'],
        'encrypted_share_ecdsa': value['encryptedShareEcdsa'],
        'encrypted_share_eddsa': value['encryptedShareEddsa'],
        'encrypted_share_ecdsa_stark': value['encryptedShareEcdsaStark'],
    };
}

