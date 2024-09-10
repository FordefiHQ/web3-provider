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
 * @interface SuiCommandNestedResultArgument
 */
export interface SuiCommandNestedResultArgument {
    /**
     * 
     * @type {string}
     * @memberof SuiCommandNestedResultArgument
     */
    type: SuiCommandNestedResultArgumentTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof SuiCommandNestedResultArgument
     */
    index: number;
    /**
     * 
     * @type {number}
     * @memberof SuiCommandNestedResultArgument
     */
    resultIndex: number;
}


/**
 * @export
 */
export const SuiCommandNestedResultArgumentTypeEnum = {
    nestedResult: 'nested_result'
} as const;
export type SuiCommandNestedResultArgumentTypeEnum = typeof SuiCommandNestedResultArgumentTypeEnum[keyof typeof SuiCommandNestedResultArgumentTypeEnum];


/**
 * Check if a given object implements the SuiCommandNestedResultArgument interface.
 */
export function instanceOfSuiCommandNestedResultArgument(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "index" in value;
    isInstance = isInstance && "resultIndex" in value;

    return isInstance;
}

export function SuiCommandNestedResultArgumentFromJSON(json: any): SuiCommandNestedResultArgument {
    return SuiCommandNestedResultArgumentFromJSONTyped(json, false);
}

export function SuiCommandNestedResultArgumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiCommandNestedResultArgument {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'index': json['index'],
        'resultIndex': json['result_index'],
    };
}

export function SuiCommandNestedResultArgumentToJSON(value?: SuiCommandNestedResultArgument | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'index': value.index,
        'result_index': value.resultIndex,
    };
}

