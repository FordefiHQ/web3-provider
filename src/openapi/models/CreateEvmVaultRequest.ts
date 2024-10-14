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
 * @interface CreateEvmVaultRequest
 */
export interface CreateEvmVaultRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateEvmVaultRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEvmVaultRequest
     * @deprecated
     */
    keysetId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEvmVaultRequest
     */
    endUserId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEvmVaultRequest
     */
    vaultGroupId?: string;
    /**
     * 
     * @type {ImportVaultOptions}
     * @memberof CreateEvmVaultRequest
     */
    importVault?: ImportVaultOptions;
    /**
     * 
     * @type {string}
     * @memberof CreateEvmVaultRequest
     */
    type: CreateEvmVaultRequestTypeEnum;
}


/**
 * @export
 */
export const CreateEvmVaultRequestTypeEnum = {
    evm: 'evm'
} as const;
export type CreateEvmVaultRequestTypeEnum = typeof CreateEvmVaultRequestTypeEnum[keyof typeof CreateEvmVaultRequestTypeEnum];


/**
 * Check if a given object implements the CreateEvmVaultRequest interface.
 */
export function instanceOfCreateEvmVaultRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function CreateEvmVaultRequestFromJSON(json: any): CreateEvmVaultRequest {
    return CreateEvmVaultRequestFromJSONTyped(json, false);
}

export function CreateEvmVaultRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEvmVaultRequest {
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

export function CreateEvmVaultRequestToJSON(value?: CreateEvmVaultRequest | null): any {
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

