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
import type { EncryptedDeviceSharesBackup } from './EncryptedDeviceSharesBackup';
import {
    EncryptedDeviceSharesBackupFromJSON,
    EncryptedDeviceSharesBackupFromJSONTyped,
    EncryptedDeviceSharesBackupToJSON,
} from './EncryptedDeviceSharesBackup';
import type { KeyType } from './KeyType';
import {
    KeyTypeFromJSON,
    KeyTypeFromJSONTyped,
    KeyTypeToJSON,
} from './KeyType';
import type { KeysetKey } from './KeysetKey';
import {
    KeysetKeyFromJSON,
    KeysetKeyFromJSONTyped,
    KeysetKeyToJSON,
} from './KeysetKey';

/**
 * 
 * @export
 * @interface EndUserLoginResponse
 */
export interface EndUserLoginResponse {
    /**
     * 
     * @type {string}
     * @memberof EndUserLoginResponse
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof EndUserLoginResponse
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof EndUserLoginResponse
     */
    modifiedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof EndUserLoginResponse
     */
    externalId: string;
    /**
     * 
     * @type {Date}
     * @memberof EndUserLoginResponse
     */
    lastLoginAt: Date;
    /**
     * 
     * @type {Array<KeyType>}
     * @memberof EndUserLoginResponse
     */
    desiredKeyTypes?: Array<KeyType>;
    /**
     * 
     * @type {string}
     * @memberof EndUserLoginResponse
     */
    keysetId: string;
    /**
     * 
     * @type {KeysetKey}
     * @memberof EndUserLoginResponse
     */
    ecdsa?: KeysetKey;
    /**
     * 
     * @type {KeysetKey}
     * @memberof EndUserLoginResponse
     */
    eddsa?: KeysetKey;
    /**
     * 
     * @type {KeysetKey}
     * @memberof EndUserLoginResponse
     */
    ecdsaStark?: KeysetKey;
    /**
     * 
     * @type {KeysetKey}
     * @memberof EndUserLoginResponse
     */
    schnorrSecp256k1?: KeysetKey;
    /**
     * 
     * @type {string}
     * @memberof EndUserLoginResponse
     */
    authPublicKey?: string;
    /**
     * 
     * @type {string}
     * @memberof EndUserLoginResponse
     * @deprecated
     */
    encryptedDeviceAuthKey?: string;
    /**
     * 
     * @type {Array<EncryptedDeviceSharesBackup>}
     * @memberof EndUserLoginResponse
     */
    encryptedDeviceSharesBackups?: Array<EncryptedDeviceSharesBackup>;
    /**
     * 
     * @type {Date}
     * @memberof EndUserLoginResponse
     */
    lastBackupAt: Date;
    /**
     * 
     * @type {boolean}
     * @memberof EndUserLoginResponse
     */
    exportAllowed: boolean;
    /**
     * 
     * @type {Date}
     * @memberof EndUserLoginResponse
     */
    lastExportAt: Date;
}

/**
 * Check if a given object implements the EndUserLoginResponse interface.
 */
export function instanceOfEndUserLoginResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "modifiedAt" in value;
    isInstance = isInstance && "externalId" in value;
    isInstance = isInstance && "lastLoginAt" in value;
    isInstance = isInstance && "keysetId" in value;
    isInstance = isInstance && "lastBackupAt" in value;
    isInstance = isInstance && "exportAllowed" in value;
    isInstance = isInstance && "lastExportAt" in value;

    return isInstance;
}

export function EndUserLoginResponseFromJSON(json: any): EndUserLoginResponse {
    return EndUserLoginResponseFromJSONTyped(json, false);
}

export function EndUserLoginResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUserLoginResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['created_at'])),
        'modifiedAt': (new Date(json['modified_at'])),
        'externalId': json['external_id'],
        'lastLoginAt': (new Date(json['last_login_at'])),
        'desiredKeyTypes': !exists(json, 'desired_key_types') ? undefined : ((json['desired_key_types'] as Array<any>).map(KeyTypeFromJSON)),
        'keysetId': json['keyset_id'],
        'ecdsa': !exists(json, 'ecdsa') ? undefined : KeysetKeyFromJSON(json['ecdsa']),
        'eddsa': !exists(json, 'eddsa') ? undefined : KeysetKeyFromJSON(json['eddsa']),
        'ecdsaStark': !exists(json, 'ecdsa_stark') ? undefined : KeysetKeyFromJSON(json['ecdsa_stark']),
        'schnorrSecp256k1': !exists(json, 'schnorr_secp256k1') ? undefined : KeysetKeyFromJSON(json['schnorr_secp256k1']),
        'authPublicKey': !exists(json, 'auth_public_key') ? undefined : json['auth_public_key'],
        'encryptedDeviceAuthKey': !exists(json, 'encrypted_device_auth_key') ? undefined : json['encrypted_device_auth_key'],
        'encryptedDeviceSharesBackups': !exists(json, 'encrypted_device_shares_backups') ? undefined : ((json['encrypted_device_shares_backups'] as Array<any>).map(EncryptedDeviceSharesBackupFromJSON)),
        'lastBackupAt': (new Date(json['last_backup_at'])),
        'exportAllowed': json['export_allowed'],
        'lastExportAt': (new Date(json['last_export_at'])),
    };
}

export function EndUserLoginResponseToJSON(value?: EndUserLoginResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'created_at': (value.createdAt.toISOString()),
        'modified_at': (value.modifiedAt.toISOString()),
        'external_id': value.externalId,
        'last_login_at': (value.lastLoginAt.toISOString()),
        'desired_key_types': value.desiredKeyTypes === undefined ? undefined : ((value.desiredKeyTypes as Array<any>).map(KeyTypeToJSON)),
        'keyset_id': value.keysetId,
        'ecdsa': KeysetKeyToJSON(value.ecdsa),
        'eddsa': KeysetKeyToJSON(value.eddsa),
        'ecdsa_stark': KeysetKeyToJSON(value.ecdsaStark),
        'schnorr_secp256k1': KeysetKeyToJSON(value.schnorrSecp256k1),
        'auth_public_key': value.authPublicKey,
        'encrypted_device_auth_key': value.encryptedDeviceAuthKey,
        'encrypted_device_shares_backups': value.encryptedDeviceSharesBackups === undefined ? undefined : ((value.encryptedDeviceSharesBackups as Array<any>).map(EncryptedDeviceSharesBackupToJSON)),
        'last_backup_at': (value.lastBackupAt.toISOString()),
        'export_allowed': value.exportAllowed,
        'last_export_at': (value.lastExportAt.toISOString()),
    };
}

