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
 * @interface CreateTonVaultRequest
 */
export interface CreateTonVaultRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateTonVaultRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTonVaultRequest
     * @deprecated
     */
    keysetId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTonVaultRequest
     */
    endUserId?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTonVaultRequest
     */
    vaultGroupId?: string;
    /**
     * 
     * @type {ImportVaultOptions}
     * @memberof CreateTonVaultRequest
     */
    importVault?: ImportVaultOptions;
    /**
     * 
     * @type {string}
     * @memberof CreateTonVaultRequest
     */
    type: CreateTonVaultRequestTypeEnum;
}


/**
 * @export
 */
export const CreateTonVaultRequestTypeEnum = {
    ton: 'ton'
} as const;
export type CreateTonVaultRequestTypeEnum = typeof CreateTonVaultRequestTypeEnum[keyof typeof CreateTonVaultRequestTypeEnum];


/**
 * Check if a given object implements the CreateTonVaultRequest interface.
 */
export function instanceOfCreateTonVaultRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function CreateTonVaultRequestFromJSON(json: any): CreateTonVaultRequest {
    return CreateTonVaultRequestFromJSONTyped(json, false);
}

export function CreateTonVaultRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTonVaultRequest {
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

export function CreateTonVaultRequestToJSON(value?: CreateTonVaultRequest | null): any {
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

