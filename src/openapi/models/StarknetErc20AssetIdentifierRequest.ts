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
import type { StarknetAddressRequest } from './StarknetAddressRequest';
import {
    StarknetAddressRequestFromJSON,
    StarknetAddressRequestFromJSONTyped,
    StarknetAddressRequestToJSON,
} from './StarknetAddressRequest';

/**
 * 
 * @export
 * @interface StarknetErc20AssetIdentifierRequest
 */
export interface StarknetErc20AssetIdentifierRequest {
    /**
     * 
     * @type {string}
     * @memberof StarknetErc20AssetIdentifierRequest
     */
    type: StarknetErc20AssetIdentifierRequestTypeEnum;
    /**
     * 
     * @type {StarknetAddressRequest}
     * @memberof StarknetErc20AssetIdentifierRequest
     */
    erc20: StarknetAddressRequest;
}


/**
 * @export
 */
export const StarknetErc20AssetIdentifierRequestTypeEnum = {
    erc20: 'erc20'
} as const;
export type StarknetErc20AssetIdentifierRequestTypeEnum = typeof StarknetErc20AssetIdentifierRequestTypeEnum[keyof typeof StarknetErc20AssetIdentifierRequestTypeEnum];


/**
 * Check if a given object implements the StarknetErc20AssetIdentifierRequest interface.
 */
export function instanceOfStarknetErc20AssetIdentifierRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "erc20" in value;

    return isInstance;
}

export function StarknetErc20AssetIdentifierRequestFromJSON(json: any): StarknetErc20AssetIdentifierRequest {
    return StarknetErc20AssetIdentifierRequestFromJSONTyped(json, false);
}

export function StarknetErc20AssetIdentifierRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StarknetErc20AssetIdentifierRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'erc20': StarknetAddressRequestFromJSON(json['erc20']),
    };
}

export function StarknetErc20AssetIdentifierRequestToJSON(value?: StarknetErc20AssetIdentifierRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'erc20': StarknetAddressRequestToJSON(value.erc20),
    };
}

