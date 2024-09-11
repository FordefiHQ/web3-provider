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
import type { EnrichedSuiAssetIdentifierDetails } from './EnrichedSuiAssetIdentifierDetails';
import {
    EnrichedSuiAssetIdentifierDetailsFromJSON,
    EnrichedSuiAssetIdentifierDetailsFromJSONTyped,
    EnrichedSuiAssetIdentifierDetailsToJSON,
} from './EnrichedSuiAssetIdentifierDetails';

/**
 * 
 * @export
 * @interface EnrichedSuiAssetIdentifier
 */
export interface EnrichedSuiAssetIdentifier {
    /**
     * 
     * @type {string}
     * @memberof EnrichedSuiAssetIdentifier
     */
    type: EnrichedSuiAssetIdentifierTypeEnum;
    /**
     * 
     * @type {EnrichedSuiAssetIdentifierDetails}
     * @memberof EnrichedSuiAssetIdentifier
     */
    details: EnrichedSuiAssetIdentifierDetails;
}


/**
 * @export
 */
export const EnrichedSuiAssetIdentifierTypeEnum = {
    sui: 'sui'
} as const;
export type EnrichedSuiAssetIdentifierTypeEnum = typeof EnrichedSuiAssetIdentifierTypeEnum[keyof typeof EnrichedSuiAssetIdentifierTypeEnum];


/**
 * Check if a given object implements the EnrichedSuiAssetIdentifier interface.
 */
export function instanceOfEnrichedSuiAssetIdentifier(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "details" in value;

    return isInstance;
}

export function EnrichedSuiAssetIdentifierFromJSON(json: any): EnrichedSuiAssetIdentifier {
    return EnrichedSuiAssetIdentifierFromJSONTyped(json, false);
}

export function EnrichedSuiAssetIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrichedSuiAssetIdentifier {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'details': EnrichedSuiAssetIdentifierDetailsFromJSON(json['details']),
    };
}

export function EnrichedSuiAssetIdentifierToJSON(value?: EnrichedSuiAssetIdentifier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'details': EnrichedSuiAssetIdentifierDetailsToJSON(value.details),
    };
}

