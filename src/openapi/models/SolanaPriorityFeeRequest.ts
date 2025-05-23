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
import type { FeePriorityLevelRequest } from './FeePriorityLevelRequest';
import {
    FeePriorityLevelRequestFromJSON,
    FeePriorityLevelRequestFromJSONTyped,
    FeePriorityLevelRequestToJSON,
    FeePriorityLevelRequestToJSONTyped,
} from './FeePriorityLevelRequest';

/**
 * 
 * @export
 * @interface SolanaPriorityFeeRequest
 */
export interface SolanaPriorityFeeRequest {
    /**
     * 
     * @type {string}
     * @memberof SolanaPriorityFeeRequest
     */
    type: SolanaPriorityFeeRequestTypeEnum;
    /**
     * 
     * @type {FeePriorityLevelRequest}
     * @memberof SolanaPriorityFeeRequest
     */
    priorityLevel: FeePriorityLevelRequest;
}


/**
 * @export
 */
export const SolanaPriorityFeeRequestTypeEnum = {
    priority: 'priority'
} as const;
export type SolanaPriorityFeeRequestTypeEnum = typeof SolanaPriorityFeeRequestTypeEnum[keyof typeof SolanaPriorityFeeRequestTypeEnum];


/**
 * Check if a given object implements the SolanaPriorityFeeRequest interface.
 */
export function instanceOfSolanaPriorityFeeRequest(value: object): value is SolanaPriorityFeeRequest {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('priorityLevel' in value) || value['priorityLevel'] === undefined) return false;
    return true;
}

export function SolanaPriorityFeeRequestFromJSON(json: any): SolanaPriorityFeeRequest {
    return SolanaPriorityFeeRequestFromJSONTyped(json, false);
}

export function SolanaPriorityFeeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolanaPriorityFeeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'priorityLevel': FeePriorityLevelRequestFromJSON(json['priority_level']),
    };
}

export function SolanaPriorityFeeRequestToJSON(json: any): SolanaPriorityFeeRequest {
    return SolanaPriorityFeeRequestToJSONTyped(json, false);
}

export function SolanaPriorityFeeRequestToJSONTyped(value?: SolanaPriorityFeeRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'priority_level': FeePriorityLevelRequestToJSON(value['priorityLevel']),
    };
}

