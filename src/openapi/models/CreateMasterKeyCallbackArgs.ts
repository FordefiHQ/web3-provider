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
 * @interface CreateMasterKeyCallbackArgs
 */
export interface CreateMasterKeyCallbackArgs {
    /**
     * 
     * @type {string}
     * @memberof CreateMasterKeyCallbackArgs
     */
    type: CreateMasterKeyCallbackArgsTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateMasterKeyCallbackArgs
     */
    encryptedShare: string;
    /**
     * 
     * @type {string}
     * @memberof CreateMasterKeyCallbackArgs
     */
    signature: string;
    /**
     * 
     * @type {KeyType}
     * @memberof CreateMasterKeyCallbackArgs
     */
    keyType: KeyType;
}


/**
 * @export
 */
export const CreateMasterKeyCallbackArgsTypeEnum = {
    createMasterKey: 'create_master_key'
} as const;
export type CreateMasterKeyCallbackArgsTypeEnum = typeof CreateMasterKeyCallbackArgsTypeEnum[keyof typeof CreateMasterKeyCallbackArgsTypeEnum];


/**
 * Check if a given object implements the CreateMasterKeyCallbackArgs interface.
 */
export function instanceOfCreateMasterKeyCallbackArgs(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "encryptedShare" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "keyType" in value;

    return isInstance;
}

export function CreateMasterKeyCallbackArgsFromJSON(json: any): CreateMasterKeyCallbackArgs {
    return CreateMasterKeyCallbackArgsFromJSONTyped(json, false);
}

export function CreateMasterKeyCallbackArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateMasterKeyCallbackArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'encryptedShare': json['encrypted_share'],
        'signature': json['signature'],
        'keyType': KeyTypeFromJSON(json['key_type']),
    };
}

export function CreateMasterKeyCallbackArgsToJSON(value?: CreateMasterKeyCallbackArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'encrypted_share': value.encryptedShare,
        'signature': value.signature,
        'key_type': KeyTypeToJSON(value.keyType),
    };
}
