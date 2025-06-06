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
 * @interface UtxoOutputToVaultAddressIdRequest
 */
export interface UtxoOutputToVaultAddressIdRequest {
    /**
     * 
     * @type {string}
     * @memberof UtxoOutputToVaultAddressIdRequest
     */
    type: UtxoOutputToVaultAddressIdRequestTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof UtxoOutputToVaultAddressIdRequest
     */
    vaultAddressId: string;
}


/**
 * @export
 */
export const UtxoOutputToVaultAddressIdRequestTypeEnum = {
    vaultAddressId: 'vault_address_id'
} as const;
export type UtxoOutputToVaultAddressIdRequestTypeEnum = typeof UtxoOutputToVaultAddressIdRequestTypeEnum[keyof typeof UtxoOutputToVaultAddressIdRequestTypeEnum];


/**
 * Check if a given object implements the UtxoOutputToVaultAddressIdRequest interface.
 */
export function instanceOfUtxoOutputToVaultAddressIdRequest(value: object): value is UtxoOutputToVaultAddressIdRequest {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('vaultAddressId' in value) || value['vaultAddressId'] === undefined) return false;
    return true;
}

export function UtxoOutputToVaultAddressIdRequestFromJSON(json: any): UtxoOutputToVaultAddressIdRequest {
    return UtxoOutputToVaultAddressIdRequestFromJSONTyped(json, false);
}

export function UtxoOutputToVaultAddressIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UtxoOutputToVaultAddressIdRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'vaultAddressId': json['vault_address_id'],
    };
}

export function UtxoOutputToVaultAddressIdRequestToJSON(json: any): UtxoOutputToVaultAddressIdRequest {
    return UtxoOutputToVaultAddressIdRequestToJSONTyped(json, false);
}

export function UtxoOutputToVaultAddressIdRequestToJSONTyped(value?: UtxoOutputToVaultAddressIdRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'vault_address_id': value['vaultAddressId'],
    };
}

