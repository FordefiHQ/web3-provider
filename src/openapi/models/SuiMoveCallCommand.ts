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

import type { SuiCommandArgument } from './SuiCommandArgument';
import {
    SuiCommandArgumentFromJSON,
    SuiCommandArgumentToJSON,
} from './SuiCommandArgument';

/**
 * 
 * @export
 * @interface SuiMoveCallCommand
 */
export interface SuiMoveCallCommand {
    /**
     * 
     * @type {string}
     * @memberof SuiMoveCallCommand
     */
    type: SuiMoveCallCommandTypeEnum;
    /**
     * 
     * @type {Array<SuiCommandArgument>}
     * @memberof SuiMoveCallCommand
     */
    arguments: Array<SuiCommandArgument>;
    /**
     * 
     * @type {string}
     * @memberof SuiMoveCallCommand
     */
    target: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SuiMoveCallCommand
     */
    typeArguments: Array<string>;
}


/**
 * 
 */
const SuiMoveCallCommandTypeEnum = {
    moveCall: 'move_call'
} as const;
type SuiMoveCallCommandTypeEnum = typeof SuiMoveCallCommandTypeEnum[keyof typeof SuiMoveCallCommandTypeEnum];

export function SuiMoveCallCommandFromJSONTyped(json: any, _ignoreDiscriminator: boolean): SuiMoveCallCommand {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'arguments': ((json['arguments'] as Array<any>).map(SuiCommandArgumentFromJSON)),
        'target': json['target'],
        'typeArguments': json['type_arguments'],
    };
}

export function SuiMoveCallCommandToJSON(json: any): SuiMoveCallCommand {
    return SuiMoveCallCommandToJSONTyped(json, false);
}

function SuiMoveCallCommandToJSONTyped(value?: SuiMoveCallCommand | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'arguments': ((value['arguments'] as Array<any>).map(SuiCommandArgumentToJSON)),
        'target': value['target'],
        'type_arguments': value['typeArguments'],
    };
}
