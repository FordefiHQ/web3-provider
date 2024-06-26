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
    eddsa?: string;
    /**
     * 
     * @type {string}
     * @memberof UploadKeysetEncryptedDeviceSharesRequest
     */
    ecdsaStark?: string;
}

/**
 * Check if a given object implements the UploadKeysetEncryptedDeviceSharesRequest interface.
 */
export function instanceOfUploadKeysetEncryptedDeviceSharesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "backupId" in value;

    return isInstance;
}

export function UploadKeysetEncryptedDeviceSharesRequestFromJSON(json: any): UploadKeysetEncryptedDeviceSharesRequest {
    return UploadKeysetEncryptedDeviceSharesRequestFromJSONTyped(json, false);
}

export function UploadKeysetEncryptedDeviceSharesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadKeysetEncryptedDeviceSharesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'backupId': json['backup_id'],
        'ecdsa': !exists(json, 'ecdsa') ? undefined : json['ecdsa'],
        'eddsa': !exists(json, 'eddsa') ? undefined : json['eddsa'],
        'ecdsaStark': !exists(json, 'ecdsa_stark') ? undefined : json['ecdsa_stark'],
    };
}

export function UploadKeysetEncryptedDeviceSharesRequestToJSON(value?: UploadKeysetEncryptedDeviceSharesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'backup_id': value.backupId,
        'ecdsa': value.ecdsa,
        'eddsa': value.eddsa,
        'ecdsa_stark': value.ecdsaStark,
    };
}

