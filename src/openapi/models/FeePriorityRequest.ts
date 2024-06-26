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
import type { FeePriorityLevelRequest } from './FeePriorityLevelRequest';
import {
    FeePriorityLevelRequestFromJSON,
    FeePriorityLevelRequestFromJSONTyped,
    FeePriorityLevelRequestToJSON,
} from './FeePriorityLevelRequest';

/**
 * 
 * @export
 * @interface FeePriorityRequest
 */
export interface FeePriorityRequest {
    /**
     * 
     * @type {string}
     * @memberof FeePriorityRequest
     */
    type: FeePriorityRequestTypeEnum;
    /**
     * 
     * @type {FeePriorityLevelRequest}
     * @memberof FeePriorityRequest
     */
    priorityLevel: FeePriorityLevelRequest;
}


/**
 * @export
 */
export const FeePriorityRequestTypeEnum = {
    priority: 'priority'
} as const;
export type FeePriorityRequestTypeEnum = typeof FeePriorityRequestTypeEnum[keyof typeof FeePriorityRequestTypeEnum];


/**
 * Check if a given object implements the FeePriorityRequest interface.
 */
export function instanceOfFeePriorityRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "priorityLevel" in value;

    return isInstance;
}

export function FeePriorityRequestFromJSON(json: any): FeePriorityRequest {
    return FeePriorityRequestFromJSONTyped(json, false);
}

export function FeePriorityRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeePriorityRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'priorityLevel': FeePriorityLevelRequestFromJSON(json['priority_level']),
    };
}

export function FeePriorityRequestToJSON(value?: FeePriorityRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'priority_level': FeePriorityLevelRequestToJSON(value.priorityLevel),
    };
}

