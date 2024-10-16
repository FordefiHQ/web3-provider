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

import { exists, mapValues } from '../runtime';
import type { KeyType } from './KeyType';
import {
    KeyTypeFromJSON,
    KeyTypeFromJSONTyped,
    KeyTypeToJSON,
} from './KeyType';

/**
 * 
 * @export
 * @interface KeyDerivationArgs
 */
export interface KeyDerivationArgs {
    /**
     * 
     * @type {KeyType}
     * @memberof KeyDerivationArgs
     */
    keyType: KeyType;
    /**
     * 
     * @type {number}
     * @memberof KeyDerivationArgs
     * @deprecated
     */
    coinType: number;
    /**
     * 
     * @type {number}
     * @memberof KeyDerivationArgs
     * @deprecated
     */
    accountId: number;
    /**
     * 
     * @type {number}
     * @memberof KeyDerivationArgs
     * @deprecated
     */
    addressIndex: number;
    /**
     * 
     * @type {string}
     * @memberof KeyDerivationArgs
     */
    derivationPath: string;
    /**
     * 
     * @type {string}
     * @memberof KeyDerivationArgs
     */
    keysetId: string;
    /**
     * 
     * @type {string}
     * @memberof KeyDerivationArgs
     */
    adjustScalar?: string;
}

/**
 * Check if a given object implements the KeyDerivationArgs interface.
 */
export function instanceOfKeyDerivationArgs(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "keyType" in value;
    isInstance = isInstance && "coinType" in value;
    isInstance = isInstance && "accountId" in value;
    isInstance = isInstance && "addressIndex" in value;
    isInstance = isInstance && "derivationPath" in value;
    isInstance = isInstance && "keysetId" in value;

    return isInstance;
}

export function KeyDerivationArgsFromJSON(json: any): KeyDerivationArgs {
    return KeyDerivationArgsFromJSONTyped(json, false);
}

export function KeyDerivationArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeyDerivationArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'keyType': KeyTypeFromJSON(json['key_type']),
        'coinType': json['coin_type'],
        'accountId': json['account_id'],
        'addressIndex': json['address_index'],
        'derivationPath': json['derivation_path'],
        'keysetId': json['keyset_id'],
        'adjustScalar': !exists(json, 'adjust_scalar') ? undefined : json['adjust_scalar'],
    };
}

export function KeyDerivationArgsToJSON(value?: KeyDerivationArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key_type': KeyTypeToJSON(value.keyType),
        'coin_type': value.coinType,
        'account_id': value.accountId,
        'address_index': value.addressIndex,
        'derivation_path': value.derivationPath,
        'keyset_id': value.keysetId,
        'adjust_scalar': value.adjustScalar,
    };
}

