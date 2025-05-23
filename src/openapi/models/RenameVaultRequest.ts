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
 * @interface RenameVaultRequest
 */
export interface RenameVaultRequest {
    /**
     * 
     * @type {string}
     * @memberof RenameVaultRequest
     */
    name: string;
}

/**
 * Check if a given object implements the RenameVaultRequest interface.
 */
export function instanceOfRenameVaultRequest(value: object): value is RenameVaultRequest {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function RenameVaultRequestFromJSON(json: any): RenameVaultRequest {
    return RenameVaultRequestFromJSONTyped(json, false);
}

export function RenameVaultRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RenameVaultRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function RenameVaultRequestToJSON(json: any): RenameVaultRequest {
    return RenameVaultRequestToJSONTyped(json, false);
}

export function RenameVaultRequestToJSONTyped(value?: RenameVaultRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
    };
}

