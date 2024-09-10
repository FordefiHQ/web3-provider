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
import type { BaseSuiPureInputValue } from './BaseSuiPureInputValue';
import {
    BaseSuiPureInputValueFromJSON,
    BaseSuiPureInputValueFromJSONTyped,
    BaseSuiPureInputValueToJSON,
} from './BaseSuiPureInputValue';

/**
 * 
 * @export
 * @interface BaseSuiPureInput
 */
export interface BaseSuiPureInput {
    /**
     * 
     * @type {BaseSuiPureInputValue}
     * @memberof BaseSuiPureInput
     */
    value: BaseSuiPureInputValue;
}

/**
 * Check if a given object implements the BaseSuiPureInput interface.
 */
export function instanceOfBaseSuiPureInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function BaseSuiPureInputFromJSON(json: any): BaseSuiPureInput {
    return BaseSuiPureInputFromJSONTyped(json, false);
}

export function BaseSuiPureInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseSuiPureInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': BaseSuiPureInputValueFromJSON(json['value']),
    };
}

export function BaseSuiPureInputToJSON(value?: BaseSuiPureInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': BaseSuiPureInputValueToJSON(value.value),
    };
}
