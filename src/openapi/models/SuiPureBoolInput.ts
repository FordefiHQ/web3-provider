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
 * @interface SuiPureBoolInput
 */
export interface SuiPureBoolInput {
    /**
     * 
     * @type {string}
     * @memberof SuiPureBoolInput
     */
    type: SuiPureBoolInputTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof SuiPureBoolInput
     */
    value: boolean;
}


/**
 * @export
 */
export const SuiPureBoolInputTypeEnum = {
    boolPureInput: 'bool_pure_input'
} as const;
export type SuiPureBoolInputTypeEnum = typeof SuiPureBoolInputTypeEnum[keyof typeof SuiPureBoolInputTypeEnum];


/**
 * Check if a given object implements the SuiPureBoolInput interface.
 */
export function instanceOfSuiPureBoolInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function SuiPureBoolInputFromJSON(json: any): SuiPureBoolInput {
    return SuiPureBoolInputFromJSONTyped(json, false);
}

export function SuiPureBoolInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiPureBoolInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'value': json['value'],
    };
}

export function SuiPureBoolInputToJSON(value?: SuiPureBoolInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'value': value.value,
    };
}

