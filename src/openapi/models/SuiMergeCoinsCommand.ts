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
 * @interface SuiMergeCoinsCommand
 */
export interface SuiMergeCoinsCommand {
    /**
     * 
     * @type {string}
     * @memberof SuiMergeCoinsCommand
     */
    type: SuiMergeCoinsCommandTypeEnum;
    /**
     * 
     * @type {Array<SuiCommandArgument>}
     * @memberof SuiMergeCoinsCommand
     */
    sourceCoinObjects: Array<SuiCommandArgument>;
    /**
     * 
     * @type {SuiCommandArgument}
     * @memberof SuiMergeCoinsCommand
     */
    destinationCoinObject: SuiCommandArgument;
}


/**
 * 
 */
const SuiMergeCoinsCommandTypeEnum = {
    mergeCoins: 'merge_coins'
} as const;
type SuiMergeCoinsCommandTypeEnum = typeof SuiMergeCoinsCommandTypeEnum[keyof typeof SuiMergeCoinsCommandTypeEnum];

export function SuiMergeCoinsCommandFromJSONTyped(json: any, _ignoreDiscriminator: boolean): SuiMergeCoinsCommand {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'sourceCoinObjects': ((json['source_coin_objects'] as Array<any>).map(SuiCommandArgumentFromJSON)),
        'destinationCoinObject': SuiCommandArgumentFromJSON(json['destination_coin_object']),
    };
}

export function SuiMergeCoinsCommandToJSON(json: any): SuiMergeCoinsCommand {
    return SuiMergeCoinsCommandToJSONTyped(json, false);
}

function SuiMergeCoinsCommandToJSONTyped(value?: SuiMergeCoinsCommand | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'source_coin_objects': ((value['sourceCoinObjects'] as Array<any>).map(SuiCommandArgumentToJSON)),
        'destination_coin_object': SuiCommandArgumentToJSON(value['destinationCoinObject']),
    };
}
