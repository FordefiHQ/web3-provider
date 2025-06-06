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
 * @interface ResetDeviceBackupPincodeRequest
 */
export interface ResetDeviceBackupPincodeRequest {
    /**
     * 
     * @type {string}
     * @memberof ResetDeviceBackupPincodeRequest
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof ResetDeviceBackupPincodeRequest
     */
    organizationId: string;
}

/**
 * Check if a given object implements the ResetDeviceBackupPincodeRequest interface.
 */
export function instanceOfResetDeviceBackupPincodeRequest(value: object): value is ResetDeviceBackupPincodeRequest {
    if (!('userId' in value) || value['userId'] === undefined) return false;
    if (!('organizationId' in value) || value['organizationId'] === undefined) return false;
    return true;
}

export function ResetDeviceBackupPincodeRequestFromJSON(json: any): ResetDeviceBackupPincodeRequest {
    return ResetDeviceBackupPincodeRequestFromJSONTyped(json, false);
}

export function ResetDeviceBackupPincodeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResetDeviceBackupPincodeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'userId': json['user_id'],
        'organizationId': json['organization_id'],
    };
}

export function ResetDeviceBackupPincodeRequestToJSON(json: any): ResetDeviceBackupPincodeRequest {
    return ResetDeviceBackupPincodeRequestToJSONTyped(json, false);
}

export function ResetDeviceBackupPincodeRequestToJSONTyped(value?: ResetDeviceBackupPincodeRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'user_id': value['userId'],
        'organization_id': value['organizationId'],
    };
}

