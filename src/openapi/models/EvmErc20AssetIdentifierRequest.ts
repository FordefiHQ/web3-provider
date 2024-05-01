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
import type { EvmAddressRequest } from './EvmAddressRequest';
import {
    EvmAddressRequestFromJSON,
    EvmAddressRequestFromJSONTyped,
    EvmAddressRequestToJSON,
} from './EvmAddressRequest';

/**
 * 
 * @export
 * @interface EvmErc20AssetIdentifierRequest
 */
export interface EvmErc20AssetIdentifierRequest {
    /**
     * 
     * @type {string}
     * @memberof EvmErc20AssetIdentifierRequest
     */
    type: EvmErc20AssetIdentifierRequestTypeEnum;
    /**
     * 
     * @type {EvmAddressRequest}
     * @memberof EvmErc20AssetIdentifierRequest
     */
    token: EvmAddressRequest;
}


/**
 * @export
 */
export const EvmErc20AssetIdentifierRequestTypeEnum = {
    erc20: 'erc20'
} as const;
export type EvmErc20AssetIdentifierRequestTypeEnum = typeof EvmErc20AssetIdentifierRequestTypeEnum[keyof typeof EvmErc20AssetIdentifierRequestTypeEnum];


/**
 * Check if a given object implements the EvmErc20AssetIdentifierRequest interface.
 */
export function instanceOfEvmErc20AssetIdentifierRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "token" in value;

    return isInstance;
}

export function EvmErc20AssetIdentifierRequestFromJSON(json: any): EvmErc20AssetIdentifierRequest {
    return EvmErc20AssetIdentifierRequestFromJSONTyped(json, false);
}

export function EvmErc20AssetIdentifierRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvmErc20AssetIdentifierRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'token': EvmAddressRequestFromJSON(json['token']),
    };
}

export function EvmErc20AssetIdentifierRequestToJSON(value?: EvmErc20AssetIdentifierRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'token': EvmAddressRequestToJSON(value.token),
    };
}

