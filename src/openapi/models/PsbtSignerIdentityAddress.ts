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
 * @interface PsbtSignerIdentityAddress
 */
export interface PsbtSignerIdentityAddress {
    /**
     * 
     * @type {string}
     * @memberof PsbtSignerIdentityAddress
     */
    type: PsbtSignerIdentityAddressTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PsbtSignerIdentityAddress
     */
    address: string;
}


/**
 * @export
 */
export const PsbtSignerIdentityAddressTypeEnum = {
    address: 'address'
} as const;
export type PsbtSignerIdentityAddressTypeEnum = typeof PsbtSignerIdentityAddressTypeEnum[keyof typeof PsbtSignerIdentityAddressTypeEnum];


/**
 * Check if a given object implements the PsbtSignerIdentityAddress interface.
 */
export function instanceOfPsbtSignerIdentityAddress(value: object): value is PsbtSignerIdentityAddress {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('address' in value) || value['address'] === undefined) return false;
    return true;
}

export function PsbtSignerIdentityAddressFromJSON(json: any): PsbtSignerIdentityAddress {
    return PsbtSignerIdentityAddressFromJSONTyped(json, false);
}

export function PsbtSignerIdentityAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): PsbtSignerIdentityAddress {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'address': json['address'],
    };
}

export function PsbtSignerIdentityAddressToJSON(json: any): PsbtSignerIdentityAddress {
    return PsbtSignerIdentityAddressToJSONTyped(json, false);
}

export function PsbtSignerIdentityAddressToJSONTyped(value?: PsbtSignerIdentityAddress | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'address': value['address'],
    };
}

