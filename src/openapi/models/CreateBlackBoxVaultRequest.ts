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
/**
 * 
 * @export
 * @interface CreateBlackBoxVaultRequest
 */
export interface CreateBlackBoxVaultRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateBlackBoxVaultRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateBlackBoxVaultRequest
     */
    keysetId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateBlackBoxVaultRequest
     */
    vaultGroupId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateBlackBoxVaultRequest
     */
    type: CreateBlackBoxVaultRequestTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateBlackBoxVaultRequest
     */
    keyType: CreateBlackBoxVaultRequestKeyTypeEnum;
}


/**
 * @export
 */
export const CreateBlackBoxVaultRequestTypeEnum = {
    blackBox: 'black_box'
} as const;
export type CreateBlackBoxVaultRequestTypeEnum = typeof CreateBlackBoxVaultRequestTypeEnum[keyof typeof CreateBlackBoxVaultRequestTypeEnum];

/**
 * @export
 */
export const CreateBlackBoxVaultRequestKeyTypeEnum = {
    stark: 'ecdsa_stark',
    secp256k1: 'ecdsa_secp256k1'
} as const;
export type CreateBlackBoxVaultRequestKeyTypeEnum = typeof CreateBlackBoxVaultRequestKeyTypeEnum[keyof typeof CreateBlackBoxVaultRequestKeyTypeEnum];


/**
 * Check if a given object implements the CreateBlackBoxVaultRequest interface.
 */
export function instanceOfCreateBlackBoxVaultRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "keyType" in value;

    return isInstance;
}

export function CreateBlackBoxVaultRequestFromJSON(json: any): CreateBlackBoxVaultRequest {
    return CreateBlackBoxVaultRequestFromJSONTyped(json, false);
}

export function CreateBlackBoxVaultRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateBlackBoxVaultRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'keysetId': !exists(json, 'keyset_id') ? undefined : json['keyset_id'],
        'vaultGroupId': !exists(json, 'vault_group_id') ? undefined : json['vault_group_id'],
        'type': json['type'],
        'keyType': json['key_type'],
    };
}

export function CreateBlackBoxVaultRequestToJSON(value?: CreateBlackBoxVaultRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'keyset_id': value.keysetId,
        'vault_group_id': value.vaultGroupId,
        'type': value.type,
        'key_type': value.keyType,
    };
}

