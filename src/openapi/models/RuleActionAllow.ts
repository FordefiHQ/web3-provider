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
/**
 * 
 * @export
 * @interface RuleActionAllow
 */
export interface RuleActionAllow {
    /**
     * 
     * @type {string}
     * @memberof RuleActionAllow
     */
    type: RuleActionAllowTypeEnum;
}


/**
 * @export
 */
export const RuleActionAllowTypeEnum = {
    allow: 'allow'
} as const;
export type RuleActionAllowTypeEnum = typeof RuleActionAllowTypeEnum[keyof typeof RuleActionAllowTypeEnum];


/**
 * Check if a given object implements the RuleActionAllow interface.
 */
export function instanceOfRuleActionAllow(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function RuleActionAllowFromJSON(json: any): RuleActionAllow {
    return RuleActionAllowFromJSONTyped(json, false);
}

export function RuleActionAllowFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuleActionAllow {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function RuleActionAllowToJSON(value?: RuleActionAllow | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
    };
}

