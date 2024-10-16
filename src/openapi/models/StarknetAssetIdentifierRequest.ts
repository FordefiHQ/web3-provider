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
import type { StarknetAssetIdentifierDetails } from './StarknetAssetIdentifierDetails';
import {
    StarknetAssetIdentifierDetailsFromJSON,
    StarknetAssetIdentifierDetailsFromJSONTyped,
    StarknetAssetIdentifierDetailsToJSON,
} from './StarknetAssetIdentifierDetails';

/**
 * 
 * @export
 * @interface StarknetAssetIdentifierRequest
 */
export interface StarknetAssetIdentifierRequest {
    /**
     * 
     * @type {string}
     * @memberof StarknetAssetIdentifierRequest
     */
    type: StarknetAssetIdentifierRequestTypeEnum;
    /**
     * 
     * @type {StarknetAssetIdentifierDetails}
     * @memberof StarknetAssetIdentifierRequest
     */
    details: StarknetAssetIdentifierDetails;
}


/**
 * @export
 */
export const StarknetAssetIdentifierRequestTypeEnum = {
    starknet: 'starknet'
} as const;
export type StarknetAssetIdentifierRequestTypeEnum = typeof StarknetAssetIdentifierRequestTypeEnum[keyof typeof StarknetAssetIdentifierRequestTypeEnum];


/**
 * Check if a given object implements the StarknetAssetIdentifierRequest interface.
 */
export function instanceOfStarknetAssetIdentifierRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;

    return isInstance;
}

export function StarknetAssetIdentifierRequestFromJSON(json: any): StarknetAssetIdentifierRequest {
    return StarknetAssetIdentifierRequestFromJSONTyped(json, false);
}

export function StarknetAssetIdentifierRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StarknetAssetIdentifierRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'details': StarknetAssetIdentifierDetailsFromJSON(json['details']),
    };
}

export function StarknetAssetIdentifierRequestToJSON(value?: StarknetAssetIdentifierRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'details': StarknetAssetIdentifierDetailsToJSON(value.details),
    };
}

