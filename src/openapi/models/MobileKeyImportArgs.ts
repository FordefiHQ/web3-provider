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
 * @interface MobileKeyImportArgs
 */
export interface MobileKeyImportArgs {
    /**
     * 
     * @type {string}
     * @memberof MobileKeyImportArgs
     */
    keyId: string;
    /**
     * 
     * @type {KeyType}
     * @memberof MobileKeyImportArgs
     */
    keyType: KeyType;
    /**
     * 
     * @type {string}
     * @memberof MobileKeyImportArgs
     */
    encryptedAdditiveShare: string;
    /**
     * 
     * @type {string}
     * @memberof MobileKeyImportArgs
     */
    coefficient: string;
    /**
     * 
     * @type {string}
     * @memberof MobileKeyImportArgs
     */
    chainCode: string;
    /**
     * 
     * @type {string}
     * @memberof MobileKeyImportArgs
     */
    publicKey: string;
}



/**
 * Check if a given object implements the MobileKeyImportArgs interface.
 */
export function instanceOfMobileKeyImportArgs(value: object): value is MobileKeyImportArgs {
    if (!('keyId' in value) || value['keyId'] === undefined) return false;
    if (!('keyType' in value) || value['keyType'] === undefined) return false;
    if (!('encryptedAdditiveShare' in value) || value['encryptedAdditiveShare'] === undefined) return false;
    if (!('coefficient' in value) || value['coefficient'] === undefined) return false;
    if (!('chainCode' in value) || value['chainCode'] === undefined) return false;
    if (!('publicKey' in value) || value['publicKey'] === undefined) return false;
    return true;
}

export function MobileKeyImportArgsFromJSON(json: any): MobileKeyImportArgs {
    return MobileKeyImportArgsFromJSONTyped(json, false);
}

export function MobileKeyImportArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MobileKeyImportArgs {
    if (json == null) {
        return json;
    }
    return {
        
        'keyId': json['key_id'],
        'keyType': KeyTypeFromJSON(json['key_type']),
        'encryptedAdditiveShare': json['encrypted_additive_share'],
        'coefficient': json['coefficient'],
        'chainCode': json['chain_code'],
        'publicKey': json['public_key'],
    };
}

export function MobileKeyImportArgsToJSON(json: any): MobileKeyImportArgs {
    return MobileKeyImportArgsToJSONTyped(json, false);
}

export function MobileKeyImportArgsToJSONTyped(value?: MobileKeyImportArgs | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'key_id': value['keyId'],
        'key_type': KeyTypeToJSON(value['keyType']),
        'encrypted_additive_share': value['encryptedAdditiveShare'],
        'coefficient': value['coefficient'],
        'chain_code': value['chainCode'],
        'public_key': value['publicKey'],
    };
}

