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
import type { EnrichedCosmosAssetIdentifierDetails } from './EnrichedCosmosAssetIdentifierDetails';
import {
    EnrichedCosmosAssetIdentifierDetailsFromJSON,
    EnrichedCosmosAssetIdentifierDetailsFromJSONTyped,
    EnrichedCosmosAssetIdentifierDetailsToJSON,
    EnrichedCosmosAssetIdentifierDetailsToJSONTyped,
} from './EnrichedCosmosAssetIdentifierDetails';

/**
 * 
 * @export
 * @interface EnrichedCosmosAssetIdentifier
 */
export interface EnrichedCosmosAssetIdentifier {
    /**
     * 
     * @type {string}
     * @memberof EnrichedCosmosAssetIdentifier
     */
    type: EnrichedCosmosAssetIdentifierTypeEnum;
    /**
     * 
     * @type {EnrichedCosmosAssetIdentifierDetails}
     * @memberof EnrichedCosmosAssetIdentifier
     */
    details: EnrichedCosmosAssetIdentifierDetails;
}


/**
 * @export
 */
export const EnrichedCosmosAssetIdentifierTypeEnum = {
    cosmos: 'cosmos'
} as const;
export type EnrichedCosmosAssetIdentifierTypeEnum = typeof EnrichedCosmosAssetIdentifierTypeEnum[keyof typeof EnrichedCosmosAssetIdentifierTypeEnum];


/**
 * Check if a given object implements the EnrichedCosmosAssetIdentifier interface.
 */
export function instanceOfEnrichedCosmosAssetIdentifier(value: object): value is EnrichedCosmosAssetIdentifier {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('details' in value) || value['details'] === undefined) return false;
    return true;
}

export function EnrichedCosmosAssetIdentifierFromJSON(json: any): EnrichedCosmosAssetIdentifier {
    return EnrichedCosmosAssetIdentifierFromJSONTyped(json, false);
}

export function EnrichedCosmosAssetIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrichedCosmosAssetIdentifier {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'details': EnrichedCosmosAssetIdentifierDetailsFromJSON(json['details']),
    };
}

export function EnrichedCosmosAssetIdentifierToJSON(json: any): EnrichedCosmosAssetIdentifier {
    return EnrichedCosmosAssetIdentifierToJSONTyped(json, false);
}

export function EnrichedCosmosAssetIdentifierToJSONTyped(value?: EnrichedCosmosAssetIdentifier | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'details': EnrichedCosmosAssetIdentifierDetailsToJSON(value['details']),
    };
}

