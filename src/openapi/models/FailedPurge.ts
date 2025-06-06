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
 * @interface FailedPurge
 */
export interface FailedPurge {
    /**
     * 
     * @type {string}
     * @memberof FailedPurge
     */
    vaultId: string;
    /**
     * 
     * @type {string}
     * @memberof FailedPurge
     */
    error: string;
}

/**
 * Check if a given object implements the FailedPurge interface.
 */
export function instanceOfFailedPurge(value: object): value is FailedPurge {
    if (!('vaultId' in value) || value['vaultId'] === undefined) return false;
    if (!('error' in value) || value['error'] === undefined) return false;
    return true;
}

export function FailedPurgeFromJSON(json: any): FailedPurge {
    return FailedPurgeFromJSONTyped(json, false);
}

export function FailedPurgeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FailedPurge {
    if (json == null) {
        return json;
    }
    return {
        
        'vaultId': json['vault_id'],
        'error': json['error'],
    };
}

export function FailedPurgeToJSON(json: any): FailedPurge {
    return FailedPurgeToJSONTyped(json, false);
}

export function FailedPurgeToJSONTyped(value?: FailedPurge | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'vault_id': value['vaultId'],
        'error': value['error'],
    };
}

