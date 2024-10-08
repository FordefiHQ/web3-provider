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
 * @interface SuiCommandResultArgument
 */
export interface SuiCommandResultArgument {
    /**
     * 
     * @type {string}
     * @memberof SuiCommandResultArgument
     */
    type: SuiCommandResultArgumentTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof SuiCommandResultArgument
     */
    index: number;
}


/**
 * @export
 */
export const SuiCommandResultArgumentTypeEnum = {
    result: 'result'
} as const;
export type SuiCommandResultArgumentTypeEnum = typeof SuiCommandResultArgumentTypeEnum[keyof typeof SuiCommandResultArgumentTypeEnum];


/**
 * Check if a given object implements the SuiCommandResultArgument interface.
 */
export function instanceOfSuiCommandResultArgument(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "index" in value;

    return isInstance;
}

export function SuiCommandResultArgumentFromJSON(json: any): SuiCommandResultArgument {
    return SuiCommandResultArgumentFromJSONTyped(json, false);
}

export function SuiCommandResultArgumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiCommandResultArgument {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'index': json['index'],
    };
}

export function SuiCommandResultArgumentToJSON(value?: SuiCommandResultArgument | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'index': value.index,
    };
}

