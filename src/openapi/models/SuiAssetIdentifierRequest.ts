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
import type { SuiAssetIdentifierDetails } from './SuiAssetIdentifierDetails';
import {
    SuiAssetIdentifierDetailsFromJSON,
    SuiAssetIdentifierDetailsFromJSONTyped,
    SuiAssetIdentifierDetailsToJSON,
} from './SuiAssetIdentifierDetails';

/**
 * 
 * @export
 * @interface SuiAssetIdentifierRequest
 */
export interface SuiAssetIdentifierRequest {
    /**
     * 
     * @type {string}
     * @memberof SuiAssetIdentifierRequest
     */
    type: SuiAssetIdentifierRequestTypeEnum;
    /**
     * 
     * @type {SuiAssetIdentifierDetails}
     * @memberof SuiAssetIdentifierRequest
     */
    details: SuiAssetIdentifierDetails;
}


/**
 * @export
 */
export const SuiAssetIdentifierRequestTypeEnum = {
    sui: 'sui'
} as const;
export type SuiAssetIdentifierRequestTypeEnum = typeof SuiAssetIdentifierRequestTypeEnum[keyof typeof SuiAssetIdentifierRequestTypeEnum];


/**
 * Check if a given object implements the SuiAssetIdentifierRequest interface.
 */
export function instanceOfSuiAssetIdentifierRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;

    return isInstance;
}

export function SuiAssetIdentifierRequestFromJSON(json: any): SuiAssetIdentifierRequest {
    return SuiAssetIdentifierRequestFromJSONTyped(json, false);
}

export function SuiAssetIdentifierRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiAssetIdentifierRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'details': SuiAssetIdentifierDetailsFromJSON(json['details']),
    };
}

export function SuiAssetIdentifierRequestToJSON(value?: SuiAssetIdentifierRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'details': SuiAssetIdentifierDetailsToJSON(value.details),
    };
}

