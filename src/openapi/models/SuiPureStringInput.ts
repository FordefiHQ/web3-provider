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
 * @interface SuiPureStringInput
 */
export interface SuiPureStringInput {
    /**
     * 
     * @type {string}
     * @memberof SuiPureStringInput
     */
    type: SuiPureStringInputTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SuiPureStringInput
     */
    value: string;
}


/**
 * @export
 */
export const SuiPureStringInputTypeEnum = {
    stringPureInput: 'string_pure_input'
} as const;
export type SuiPureStringInputTypeEnum = typeof SuiPureStringInputTypeEnum[keyof typeof SuiPureStringInputTypeEnum];


/**
 * Check if a given object implements the SuiPureStringInput interface.
 */
export function instanceOfSuiPureStringInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function SuiPureStringInputFromJSON(json: any): SuiPureStringInput {
    return SuiPureStringInputFromJSONTyped(json, false);
}

export function SuiPureStringInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiPureStringInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'value': json['value'],
    };
}

export function SuiPureStringInputToJSON(value?: SuiPureStringInput | null): any {
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

