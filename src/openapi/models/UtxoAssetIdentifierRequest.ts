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
import type { UtxoNativeAssetIdentifierRequest } from './UtxoNativeAssetIdentifierRequest';
import {
    UtxoNativeAssetIdentifierRequestFromJSON,
    UtxoNativeAssetIdentifierRequestFromJSONTyped,
    UtxoNativeAssetIdentifierRequestToJSON,
} from './UtxoNativeAssetIdentifierRequest';

/**
 * 
 * @export
 * @interface UtxoAssetIdentifierRequest
 */
export interface UtxoAssetIdentifierRequest {
    /**
     * 
     * @type {string}
     * @memberof UtxoAssetIdentifierRequest
     */
    type: UtxoAssetIdentifierRequestTypeEnum;
    /**
     * 
     * @type {UtxoNativeAssetIdentifierRequest}
     * @memberof UtxoAssetIdentifierRequest
     */
    details: UtxoNativeAssetIdentifierRequest;
}


/**
 * @export
 */
export const UtxoAssetIdentifierRequestTypeEnum = {
    utxo: 'utxo'
} as const;
export type UtxoAssetIdentifierRequestTypeEnum = typeof UtxoAssetIdentifierRequestTypeEnum[keyof typeof UtxoAssetIdentifierRequestTypeEnum];


/**
 * Check if a given object implements the UtxoAssetIdentifierRequest interface.
 */
export function instanceOfUtxoAssetIdentifierRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;

    return isInstance;
}

export function UtxoAssetIdentifierRequestFromJSON(json: any): UtxoAssetIdentifierRequest {
    return UtxoAssetIdentifierRequestFromJSONTyped(json, false);
}

export function UtxoAssetIdentifierRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UtxoAssetIdentifierRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'details': UtxoNativeAssetIdentifierRequestFromJSON(json['details']),
    };
}

export function UtxoAssetIdentifierRequestToJSON(value?: UtxoAssetIdentifierRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'details': UtxoNativeAssetIdentifierRequestToJSON(value.details),
    };
}

