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
 * @interface CreateBackupEmailChangeRequest
 */
export interface CreateBackupEmailChangeRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateBackupEmailChangeRequest
     */
    backupEmail: string;
}

/**
 * Check if a given object implements the CreateBackupEmailChangeRequest interface.
 */
export function instanceOfCreateBackupEmailChangeRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "backupEmail" in value;

    return isInstance;
}

export function CreateBackupEmailChangeRequestFromJSON(json: any): CreateBackupEmailChangeRequest {
    return CreateBackupEmailChangeRequestFromJSONTyped(json, false);
}

export function CreateBackupEmailChangeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateBackupEmailChangeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'backupEmail': json['backup_email'],
    };
}

export function CreateBackupEmailChangeRequestToJSON(value?: CreateBackupEmailChangeRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'backup_email': value.backupEmail,
    };
}

