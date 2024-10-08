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
 * @interface CreateAssetInfoRequest
 */
export interface CreateAssetInfoRequest {
    /**
     * 
     * @type {AssetIdentifierRequest}
     * @memberof CreateAssetInfoRequest
     */
    assetIdentifier: AssetIdentifierRequest;
}

/**
 * Check if a given object implements the CreateAssetInfoRequest interface.
 */
export function instanceOfCreateAssetInfoRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "assetIdentifier" in value;

    return isInstance;
}

export function CreateAssetInfoRequestFromJSON(json: any): CreateAssetInfoRequest {
    return CreateAssetInfoRequestFromJSONTyped(json, false);
}

export function CreateAssetInfoRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAssetInfoRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'assetIdentifier': AssetIdentifierRequestFromJSON(json['asset_identifier']),
    };
}

export function CreateAssetInfoRequestToJSON(value?: CreateAssetInfoRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'asset_identifier': AssetIdentifierRequestToJSON(value.assetIdentifier),
    };
}

