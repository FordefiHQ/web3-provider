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
import type { ImportVaultOptions } from './ImportVaultOptions';
import {
    ImportVaultOptionsFromJSON,
    ImportVaultOptionsFromJSONTyped,
    ImportVaultOptionsToJSON,
} from './ImportVaultOptions';

/**
 * 
 * @export
 * @interface CreateSolanaVaultRequest
 */
export interface CreateSolanaVaultRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateSolanaVaultRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSolanaVaultRequest
     * @deprecated
     */
    keysetId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSolanaVaultRequest
     */
    endUserId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSolanaVaultRequest
     */
    vaultGroupId?: string;
    /**
     * 
     * @type {ImportVaultOptions}
     * @memberof CreateSolanaVaultRequest
     */
    importVault?: ImportVaultOptions;
    /**
     * 
     * @type {string}
     * @memberof CreateSolanaVaultRequest
     */
    type: CreateSolanaVaultRequestTypeEnum;
}


/**
 * @export
 */
export const CreateSolanaVaultRequestTypeEnum = {
    solana: 'solana'
} as const;
export type CreateSolanaVaultRequestTypeEnum = typeof CreateSolanaVaultRequestTypeEnum[keyof typeof CreateSolanaVaultRequestTypeEnum];


/**
 * Check if a given object implements the CreateSolanaVaultRequest interface.
 */
export function instanceOfCreateSolanaVaultRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function CreateSolanaVaultRequestFromJSON(json: any): CreateSolanaVaultRequest {
    return CreateSolanaVaultRequestFromJSONTyped(json, false);
}

export function CreateSolanaVaultRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSolanaVaultRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'keysetId': !exists(json, 'keyset_id') ? undefined : json['keyset_id'],
        'endUserId': !exists(json, 'end_user_id') ? undefined : json['end_user_id'],
        'vaultGroupId': !exists(json, 'vault_group_id') ? undefined : json['vault_group_id'],
        'importVault': !exists(json, 'import_vault') ? undefined : ImportVaultOptionsFromJSON(json['import_vault']),
        'type': json['type'],
    };
}

export function CreateSolanaVaultRequestToJSON(value?: CreateSolanaVaultRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'keyset_id': value.keysetId,
        'end_user_id': value.endUserId,
        'vault_group_id': value.vaultGroupId,
        'import_vault': ImportVaultOptionsToJSON(value.importVault),
        'type': value.type,
    };
}

