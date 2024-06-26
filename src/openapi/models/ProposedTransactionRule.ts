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
import type { RuleAction } from './RuleAction';
import {
    RuleActionFromJSON,
    RuleActionFromJSONTyped,
    RuleActionToJSON,
} from './RuleAction';
import type { TransactionRuleConditions } from './TransactionRuleConditions';
import {
    TransactionRuleConditionsFromJSON,
    TransactionRuleConditionsFromJSONTyped,
    TransactionRuleConditionsToJSON,
} from './TransactionRuleConditions';
import type { TransactionRuleDiff } from './TransactionRuleDiff';
import {
    TransactionRuleDiffFromJSON,
    TransactionRuleDiffFromJSONTyped,
    TransactionRuleDiffToJSON,
} from './TransactionRuleDiff';
import type { UserRef } from './UserRef';
import {
    UserRefFromJSON,
    UserRefFromJSONTyped,
    UserRefToJSON,
} from './UserRef';

/**
 * 
 * @export
 * @interface ProposedTransactionRule
 */
export interface ProposedTransactionRule {
    /**
     * 
     * @type {string}
     * @memberof ProposedTransactionRule
     */
    name: string;
    /**
     * 
     * @type {TransactionRuleConditions}
     * @memberof ProposedTransactionRule
     */
    ruleConditions: TransactionRuleConditions;
    /**
     * 
     * @type {RuleAction}
     * @memberof ProposedTransactionRule
     */
    ruleAction: RuleAction;
    /**
     * 
     * @type {UserRef}
     * @memberof ProposedTransactionRule
     */
    modifiedBy: UserRef;
    /**
     * 
     * @type {TransactionRuleDiff}
     * @memberof ProposedTransactionRule
     */
    diff: TransactionRuleDiff;
}

/**
 * Check if a given object implements the ProposedTransactionRule interface.
 */
export function instanceOfProposedTransactionRule(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "ruleConditions" in value;
    isInstance = isInstance && "ruleAction" in value;
    isInstance = isInstance && "modifiedBy" in value;
    isInstance = isInstance && "diff" in value;

    return isInstance;
}

export function ProposedTransactionRuleFromJSON(json: any): ProposedTransactionRule {
    return ProposedTransactionRuleFromJSONTyped(json, false);
}

export function ProposedTransactionRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProposedTransactionRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'ruleConditions': TransactionRuleConditionsFromJSON(json['rule_conditions']),
        'ruleAction': RuleActionFromJSON(json['rule_action']),
        'modifiedBy': UserRefFromJSON(json['modified_by']),
        'diff': TransactionRuleDiffFromJSON(json['diff']),
    };
}

export function ProposedTransactionRuleToJSON(value?: ProposedTransactionRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'rule_conditions': TransactionRuleConditionsToJSON(value.ruleConditions),
        'rule_action': RuleActionToJSON(value.ruleAction),
        'modified_by': UserRefToJSON(value.modifiedBy),
        'diff': TransactionRuleDiffToJSON(value.diff),
    };
}

