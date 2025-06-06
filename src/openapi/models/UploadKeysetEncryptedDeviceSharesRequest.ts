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
 * @interface UploadKeysetEncryptedDeviceSharesRequest
 */
export interface UploadKeysetEncryptedDeviceSharesRequest {
    /**
     * 
     * @type {string}
     * @memberof UploadKeysetEncryptedDeviceSharesRequest
     */
    backupId: string;
    /**
     * 
     * @type {string}
     * @memberof UploadKeysetEncryptedDeviceSharesRequest
     */
    ecdsa?: string;
    /**
     * 
     * @type {string}
     * @memberof UploadKeysetEncryptedDeviceSharesRequest
     */
    ecdsaPublic?: string;
    /**
     * 
     * @type {string}
     * @memberof UploadKeysetEncryptedDeviceSharesRequest
     */
    eddsa?: string;
    /**
     * 
     * @type {string}
     * @memberof UploadKeysetEncryptedDeviceSharesRequest
     */
    eddsaPublic?: string;
    /**
     * 
     * @type {string}
     * @memberof UploadKeysetEncryptedDeviceSharesRequest
     */
    ecdsaStark?: string;
    /**
     * 
     * @type {string}
     * @memberof UploadKeysetEncryptedDeviceSharesRequest
     */
    ecdsaStarkPublic?: string;
    /**
     * 
     * @type {string}
     * @memberof UploadKeysetEncryptedDeviceSharesRequest
     */
    schnorrSecp256k1?: string;
    /**
     * 
     * @type {string}
     * @memberof UploadKeysetEncryptedDeviceSharesRequest
     */
    schnorrSecp256k1Public?: string;
    /**
     * 
     * @type {string}
     * @memberof UploadKeysetEncryptedDeviceSharesRequest
     */
    authKey?: string;
    /**
     * 
     * @type {string}
     * @memberof UploadKeysetEncryptedDeviceSharesRequest
     */
    authPublicKey?: string;
}

/**
 * Check if a given object implements the UploadKeysetEncryptedDeviceSharesRequest interface.
 */
export function instanceOfUploadKeysetEncryptedDeviceSharesRequest(value: object): value is UploadKeysetEncryptedDeviceSharesRequest {
    if (!('backupId' in value) || value['backupId'] === undefined) return false;
    return true;
}

export function UploadKeysetEncryptedDeviceSharesRequestFromJSON(json: any): UploadKeysetEncryptedDeviceSharesRequest {
    return UploadKeysetEncryptedDeviceSharesRequestFromJSONTyped(json, false);
}

export function UploadKeysetEncryptedDeviceSharesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadKeysetEncryptedDeviceSharesRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'backupId': json['backup_id'],
        'ecdsa': json['ecdsa'] == null ? undefined : json['ecdsa'],
        'ecdsaPublic': json['ecdsa_public'] == null ? undefined : json['ecdsa_public'],
        'eddsa': json['eddsa'] == null ? undefined : json['eddsa'],
        'eddsaPublic': json['eddsa_public'] == null ? undefined : json['eddsa_public'],
        'ecdsaStark': json['ecdsa_stark'] == null ? undefined : json['ecdsa_stark'],
        'ecdsaStarkPublic': json['ecdsa_stark_public'] == null ? undefined : json['ecdsa_stark_public'],
        'schnorrSecp256k1': json['schnorr_secp256k1'] == null ? undefined : json['schnorr_secp256k1'],
        'schnorrSecp256k1Public': json['schnorr_secp256k1_public'] == null ? undefined : json['schnorr_secp256k1_public'],
        'authKey': json['auth_key'] == null ? undefined : json['auth_key'],
        'authPublicKey': json['auth_public_key'] == null ? undefined : json['auth_public_key'],
    };
}

export function UploadKeysetEncryptedDeviceSharesRequestToJSON(json: any): UploadKeysetEncryptedDeviceSharesRequest {
    return UploadKeysetEncryptedDeviceSharesRequestToJSONTyped(json, false);
}

export function UploadKeysetEncryptedDeviceSharesRequestToJSONTyped(value?: UploadKeysetEncryptedDeviceSharesRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'backup_id': value['backupId'],
        'ecdsa': value['ecdsa'],
        'ecdsa_public': value['ecdsaPublic'],
        'eddsa': value['eddsa'],
        'eddsa_public': value['eddsaPublic'],
        'ecdsa_stark': value['ecdsaStark'],
        'ecdsa_stark_public': value['ecdsaStarkPublic'],
        'schnorr_secp256k1': value['schnorrSecp256k1'],
        'schnorr_secp256k1_public': value['schnorrSecp256k1Public'],
        'auth_key': value['authKey'],
        'auth_public_key': value['authPublicKey'],
    };
}

