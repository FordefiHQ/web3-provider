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
import type { RuleAction } from './RuleAction';
import {
    RuleActionFromJSON,
    RuleActionFromJSONTyped,
    RuleActionToJSON,
    RuleActionToJSONTyped,
} from './RuleAction';
import type { DefaultActionDiff } from './DefaultActionDiff';
import {
    DefaultActionDiffFromJSON,
    DefaultActionDiffFromJSONTyped,
    DefaultActionDiffToJSON,
    DefaultActionDiffToJSONTyped,
} from './DefaultActionDiff';

/**
 * 
 * @export
 * @interface ProposedDefaultAction
 */
export interface ProposedDefaultAction {
    /**
     * 
     * @type {RuleAction}
     * @memberof ProposedDefaultAction
     */
    action: RuleAction;
    /**
     * 
     * @type {DefaultActionDiff}
     * @memberof ProposedDefaultAction
     */
    diff: DefaultActionDiff;
}



/**
 * Check if a given object implements the ProposedDefaultAction interface.
 */
export function instanceOfProposedDefaultAction(value: object): value is ProposedDefaultAction {
    if (!('action' in value) || value['action'] === undefined) return false;
    if (!('diff' in value) || value['diff'] === undefined) return false;
    return true;
}

export function ProposedDefaultActionFromJSON(json: any): ProposedDefaultAction {
    return ProposedDefaultActionFromJSONTyped(json, false);
}

export function ProposedDefaultActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProposedDefaultAction {
    if (json == null) {
        return json;
    }
    return {
        
        'action': RuleActionFromJSON(json['action']),
        'diff': DefaultActionDiffFromJSON(json['diff']),
    };
}

export function ProposedDefaultActionToJSON(json: any): ProposedDefaultAction {
    return ProposedDefaultActionToJSONTyped(json, false);
}

export function ProposedDefaultActionToJSONTyped(value?: ProposedDefaultAction | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'action': RuleActionToJSON(value['action']),
        'diff': DefaultActionDiffToJSON(value['diff']),
    };
}

