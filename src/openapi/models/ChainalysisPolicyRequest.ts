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
import type { AmlRuleActionRequest } from './AmlRuleActionRequest';
import {
    AmlRuleActionRequestFromJSON,
    AmlRuleActionRequestFromJSONTyped,
    AmlRuleActionRequestToJSON,
    AmlRuleActionRequestToJSONTyped,
} from './AmlRuleActionRequest';
import type { ChainalysisRuleRequest } from './ChainalysisRuleRequest';
import {
    ChainalysisRuleRequestFromJSON,
    ChainalysisRuleRequestFromJSONTyped,
    ChainalysisRuleRequestToJSON,
    ChainalysisRuleRequestToJSONTyped,
} from './ChainalysisRuleRequest';

/**
 * 
 * @export
 * @interface ChainalysisPolicyRequest
 */
export interface ChainalysisPolicyRequest {
    /**
     * 
     * @type {AmlRuleActionRequest}
     * @memberof ChainalysisPolicyRequest
     */
    defaultAction: AmlRuleActionRequest;
    /**
     * 
     * @type {string}
     * @memberof ChainalysisPolicyRequest
     */
    type: ChainalysisPolicyRequestTypeEnum;
    /**
     * 
     * @type {Array<ChainalysisRuleRequest>}
     * @memberof ChainalysisPolicyRequest
     */
    rules: Array<ChainalysisRuleRequest>;
}


/**
 * @export
 */
export const ChainalysisPolicyRequestTypeEnum = {
    chainalysis: 'chainalysis'
} as const;
export type ChainalysisPolicyRequestTypeEnum = typeof ChainalysisPolicyRequestTypeEnum[keyof typeof ChainalysisPolicyRequestTypeEnum];


/**
 * Check if a given object implements the ChainalysisPolicyRequest interface.
 */
export function instanceOfChainalysisPolicyRequest(value: object): value is ChainalysisPolicyRequest {
    if (!('defaultAction' in value) || value['defaultAction'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('rules' in value) || value['rules'] === undefined) return false;
    return true;
}

export function ChainalysisPolicyRequestFromJSON(json: any): ChainalysisPolicyRequest {
    return ChainalysisPolicyRequestFromJSONTyped(json, false);
}

export function ChainalysisPolicyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChainalysisPolicyRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'defaultAction': AmlRuleActionRequestFromJSON(json['default_action']),
        'type': json['type'],
        'rules': ((json['rules'] as Array<any>).map(ChainalysisRuleRequestFromJSON)),
    };
}

export function ChainalysisPolicyRequestToJSON(json: any): ChainalysisPolicyRequest {
    return ChainalysisPolicyRequestToJSONTyped(json, false);
}

export function ChainalysisPolicyRequestToJSONTyped(value?: ChainalysisPolicyRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'default_action': AmlRuleActionRequestToJSON(value['defaultAction']),
        'type': value['type'],
        'rules': ((value['rules'] as Array<any>).map(ChainalysisRuleRequestToJSON)),
    };
}

