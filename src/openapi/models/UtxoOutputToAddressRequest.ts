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
 * @interface UtxoOutputToAddressRequest
 */
export interface UtxoOutputToAddressRequest {
    /**
     * 
     * @type {string}
     * @memberof UtxoOutputToAddressRequest
     */
    type: UtxoOutputToAddressRequestTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof UtxoOutputToAddressRequest
     */
    address: string;
}


/**
 * @export
 */
export const UtxoOutputToAddressRequestTypeEnum = {
    address: 'address'
} as const;
export type UtxoOutputToAddressRequestTypeEnum = typeof UtxoOutputToAddressRequestTypeEnum[keyof typeof UtxoOutputToAddressRequestTypeEnum];


/**
 * Check if a given object implements the UtxoOutputToAddressRequest interface.
 */
export function instanceOfUtxoOutputToAddressRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "address" in value;

    return isInstance;
}

export function UtxoOutputToAddressRequestFromJSON(json: any): UtxoOutputToAddressRequest {
    return UtxoOutputToAddressRequestFromJSONTyped(json, false);
}

export function UtxoOutputToAddressRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UtxoOutputToAddressRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'address': json['address'],
    };
}

export function UtxoOutputToAddressRequestToJSON(value?: UtxoOutputToAddressRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'address': value.address,
    };
}

