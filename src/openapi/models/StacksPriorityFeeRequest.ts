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
 * @interface StacksPriorityFeeRequest
 */
export interface StacksPriorityFeeRequest {
    /**
     * 
     * @type {string}
     * @memberof StacksPriorityFeeRequest
     */
    type: StacksPriorityFeeRequestTypeEnum;
    /**
     * 
     * @type {FeePriorityLevelRequest}
     * @memberof StacksPriorityFeeRequest
     */
    priorityLevel: FeePriorityLevelRequest;
}


/**
 * @export
 */
export const StacksPriorityFeeRequestTypeEnum = {
    priority: 'priority'
} as const;
export type StacksPriorityFeeRequestTypeEnum = typeof StacksPriorityFeeRequestTypeEnum[keyof typeof StacksPriorityFeeRequestTypeEnum];


/**
 * Check if a given object implements the StacksPriorityFeeRequest interface.
 */
export function instanceOfStacksPriorityFeeRequest(value: object): value is StacksPriorityFeeRequest {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('priorityLevel' in value) || value['priorityLevel'] === undefined) return false;
    return true;
}

export function StacksPriorityFeeRequestFromJSON(json: any): StacksPriorityFeeRequest {
    return StacksPriorityFeeRequestFromJSONTyped(json, false);
}

export function StacksPriorityFeeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StacksPriorityFeeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'priorityLevel': FeePriorityLevelRequestFromJSON(json['priority_level']),
    };
}

export function StacksPriorityFeeRequestToJSON(json: any): StacksPriorityFeeRequest {
    return StacksPriorityFeeRequestToJSONTyped(json, false);
}

export function StacksPriorityFeeRequestToJSONTyped(value?: StacksPriorityFeeRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'priority_level': FeePriorityLevelRequestToJSON(value['priorityLevel']),
    };
}

