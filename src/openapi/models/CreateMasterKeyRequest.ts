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
import type { KeyType } from './KeyType';
import {
    KeyTypeFromJSON,
    KeyTypeFromJSONTyped,
    KeyTypeToJSON,
    KeyTypeToJSONTyped,
} from './KeyType';

/**
 * 
 * @export
 * @interface CreateMasterKeyRequest
 */
export interface CreateMasterKeyRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateMasterKeyRequest
     */
    encryptedShare: string;
    /**
     * 
     * @type {string}
     * @memberof CreateMasterKeyRequest
     */
    signature: string;
    /**
     * 
     * @type {KeyType}
     * @memberof CreateMasterKeyRequest
     */
    keyType: KeyType;
}



/**
 * Check if a given object implements the CreateMasterKeyRequest interface.
 */
export function instanceOfCreateMasterKeyRequest(value: object): value is CreateMasterKeyRequest {
    if (!('encryptedShare' in value) || value['encryptedShare'] === undefined) return false;
    if (!('signature' in value) || value['signature'] === undefined) return false;
    if (!('keyType' in value) || value['keyType'] === undefined) return false;
    return true;
}

export function CreateMasterKeyRequestFromJSON(json: any): CreateMasterKeyRequest {
    return CreateMasterKeyRequestFromJSONTyped(json, false);
}

export function CreateMasterKeyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateMasterKeyRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'encryptedShare': json['encrypted_share'],
        'signature': json['signature'],
        'keyType': KeyTypeFromJSON(json['key_type']),
    };
}

export function CreateMasterKeyRequestToJSON(json: any): CreateMasterKeyRequest {
    return CreateMasterKeyRequestToJSONTyped(json, false);
}

export function CreateMasterKeyRequestToJSONTyped(value?: CreateMasterKeyRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'encrypted_share': value['encryptedShare'],
        'signature': value['signature'],
        'key_type': KeyTypeToJSON(value['keyType']),
    };
}

