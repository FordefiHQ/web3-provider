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
 * @interface SuiCommandInputArgument
 */
export interface SuiCommandInputArgument {
    /**
     * 
     * @type {string}
     * @memberof SuiCommandInputArgument
     */
    type: SuiCommandInputArgumentTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof SuiCommandInputArgument
     */
    index: number;
}


/**
 * @export
 */
export const SuiCommandInputArgumentTypeEnum = {
    input: 'input'
} as const;
export type SuiCommandInputArgumentTypeEnum = typeof SuiCommandInputArgumentTypeEnum[keyof typeof SuiCommandInputArgumentTypeEnum];


/**
 * Check if a given object implements the SuiCommandInputArgument interface.
 */
export function instanceOfSuiCommandInputArgument(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "index" in value;

    return isInstance;
}

export function SuiCommandInputArgumentFromJSON(json: any): SuiCommandInputArgument {
    return SuiCommandInputArgumentFromJSONTyped(json, false);
}

export function SuiCommandInputArgumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiCommandInputArgument {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'index': json['index'],
    };
}

export function SuiCommandInputArgumentToJSON(value?: SuiCommandInputArgument | null): any {
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

