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
import type { AssetIdentifierRequest } from './AssetIdentifierRequest';
import {
    AssetIdentifierRequestFromJSON,
    AssetIdentifierRequestFromJSONTyped,
    AssetIdentifierRequestToJSON,
} from './AssetIdentifierRequest';

/**
 * 
 * @export
 * @interface InvalidAssetRequest
 */
export interface InvalidAssetRequest {
    /**
     * 
     * @type {string}
     * @memberof InvalidAssetRequest
     */
    type: InvalidAssetRequestTypeEnum;
    /**
     * 
     * @type {AssetIdentifierRequest}
     * @memberof InvalidAssetRequest
     */
    assetIdentifierRequest: AssetIdentifierRequest;
    /**
     * 
     * @type {string}
     * @memberof InvalidAssetRequest
     */
    error: string;
}


/**
 * @export
 */
export const InvalidAssetRequestTypeEnum = {
    invalidAsset: 'invalid_asset'
} as const;
export type InvalidAssetRequestTypeEnum = typeof InvalidAssetRequestTypeEnum[keyof typeof InvalidAssetRequestTypeEnum];


/**
 * Check if a given object implements the InvalidAssetRequest interface.
 */
export function instanceOfInvalidAssetRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "assetIdentifierRequest" in value;
    isInstance = isInstance && "error" in value;

    return isInstance;
}

export function InvalidAssetRequestFromJSON(json: any): InvalidAssetRequest {
    return InvalidAssetRequestFromJSONTyped(json, false);
}

export function InvalidAssetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvalidAssetRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'assetIdentifierRequest': AssetIdentifierRequestFromJSON(json['asset_identifier_request']),
        'error': json['error'],
    };
}

export function InvalidAssetRequestToJSON(value?: InvalidAssetRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'asset_identifier_request': AssetIdentifierRequestToJSON(value.assetIdentifierRequest),
        'error': value.error,
    };
}

