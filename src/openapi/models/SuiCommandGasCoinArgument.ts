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
/**
 * 
 * @export
 * @interface SuiCommandGasCoinArgument
 */
export interface SuiCommandGasCoinArgument {
    /**
     * 
     * @type {string}
     * @memberof SuiCommandGasCoinArgument
     */
    type: SuiCommandGasCoinArgumentTypeEnum;
}


/**
 * @export
 */
export const SuiCommandGasCoinArgumentTypeEnum = {
    gasCoin: 'gas_coin'
} as const;
export type SuiCommandGasCoinArgumentTypeEnum = typeof SuiCommandGasCoinArgumentTypeEnum[keyof typeof SuiCommandGasCoinArgumentTypeEnum];


/**
 * Check if a given object implements the SuiCommandGasCoinArgument interface.
 */
export function instanceOfSuiCommandGasCoinArgument(value: object): value is SuiCommandGasCoinArgument {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function SuiCommandGasCoinArgumentFromJSON(json: any): SuiCommandGasCoinArgument {
    return SuiCommandGasCoinArgumentFromJSONTyped(json, false);
}

export function SuiCommandGasCoinArgumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiCommandGasCoinArgument {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function SuiCommandGasCoinArgumentToJSON(json: any): SuiCommandGasCoinArgument {
    return SuiCommandGasCoinArgumentToJSONTyped(json, false);
}

export function SuiCommandGasCoinArgumentToJSONTyped(value?: SuiCommandGasCoinArgument | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
    };
}

