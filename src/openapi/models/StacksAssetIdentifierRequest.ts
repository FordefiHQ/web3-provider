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
import type { StacksAssetIdentifierDetails } from './StacksAssetIdentifierDetails';
import {
    StacksAssetIdentifierDetailsFromJSON,
    StacksAssetIdentifierDetailsFromJSONTyped,
    StacksAssetIdentifierDetailsToJSON,
    StacksAssetIdentifierDetailsToJSONTyped,
} from './StacksAssetIdentifierDetails';

/**
 * 
 * @export
 * @interface StacksAssetIdentifierRequest
 */
export interface StacksAssetIdentifierRequest {
    /**
     * 
     * @type {string}
     * @memberof StacksAssetIdentifierRequest
     */
    type: StacksAssetIdentifierRequestTypeEnum;
    /**
     * 
     * @type {StacksAssetIdentifierDetails}
     * @memberof StacksAssetIdentifierRequest
     */
    details: StacksAssetIdentifierDetails;
}


/**
 * @export
 */
export const StacksAssetIdentifierRequestTypeEnum = {
    stacks: 'stacks'
} as const;
export type StacksAssetIdentifierRequestTypeEnum = typeof StacksAssetIdentifierRequestTypeEnum[keyof typeof StacksAssetIdentifierRequestTypeEnum];


/**
 * Check if a given object implements the StacksAssetIdentifierRequest interface.
 */
export function instanceOfStacksAssetIdentifierRequest(value: object): value is StacksAssetIdentifierRequest {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('details' in value) || value['details'] === undefined) return false;
    return true;
}

export function StacksAssetIdentifierRequestFromJSON(json: any): StacksAssetIdentifierRequest {
    return StacksAssetIdentifierRequestFromJSONTyped(json, false);
}

export function StacksAssetIdentifierRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StacksAssetIdentifierRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'details': StacksAssetIdentifierDetailsFromJSON(json['details']),
    };
}

export function StacksAssetIdentifierRequestToJSON(json: any): StacksAssetIdentifierRequest {
    return StacksAssetIdentifierRequestToJSONTyped(json, false);
}

export function StacksAssetIdentifierRequestToJSONTyped(value?: StacksAssetIdentifierRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'details': StacksAssetIdentifierDetailsToJSON(value['details']),
    };
}

