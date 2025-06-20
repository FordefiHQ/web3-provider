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

import type { SuiCommandGasCoinArgument } from './SuiCommandGasCoinArgument';
import {
    SuiCommandGasCoinArgumentFromJSONTyped,
    SuiCommandGasCoinArgumentToJSON,
} from './SuiCommandGasCoinArgument';
import type { SuiCommandInputArgument } from './SuiCommandInputArgument';
import {
    SuiCommandInputArgumentFromJSONTyped,
    SuiCommandInputArgumentToJSON,
} from './SuiCommandInputArgument';
import type { SuiCommandNestedResultArgument } from './SuiCommandNestedResultArgument';
import {
    SuiCommandNestedResultArgumentFromJSONTyped,
    SuiCommandNestedResultArgumentToJSON,
} from './SuiCommandNestedResultArgument';
import type { SuiCommandResultArgument } from './SuiCommandResultArgument';
import {
    SuiCommandResultArgumentFromJSONTyped,
    SuiCommandResultArgumentToJSON,
} from './SuiCommandResultArgument';

/**
 * 
 * @export
 * @type SuiCommandArgument
 */
export type SuiCommandArgument = { type: 'gas_coin' } & SuiCommandGasCoinArgument | { type: 'input' } & SuiCommandInputArgument | { type: 'nested_result' } & SuiCommandNestedResultArgument | { type: 'result' } & SuiCommandResultArgument;

export function SuiCommandArgumentFromJSON(json: any): SuiCommandArgument {
    return SuiCommandArgumentFromJSONTyped(json, false);
}

function SuiCommandArgumentFromJSONTyped(json: any, _ignoreDiscriminator: boolean): SuiCommandArgument {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'gas_coin':
            return Object.assign({}, SuiCommandGasCoinArgumentFromJSONTyped(json, true), { type: 'gas_coin' } as const);
        case 'input':
            return Object.assign({}, SuiCommandInputArgumentFromJSONTyped(json, true), { type: 'input' } as const);
        case 'nested_result':
            return Object.assign({}, SuiCommandNestedResultArgumentFromJSONTyped(json, true), { type: 'nested_result' } as const);
        case 'result':
            return Object.assign({}, SuiCommandResultArgumentFromJSONTyped(json, true), { type: 'result' } as const);
        default:
            throw new Error(`No variant of SuiCommandArgument exists with 'type=${json['type']}'`);
    }
}

export function SuiCommandArgumentToJSON(json: any): any {
    return SuiCommandArgumentToJSONTyped(json, false);
}

function SuiCommandArgumentToJSONTyped(value?: SuiCommandArgument | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'gas_coin':
            return Object.assign({}, SuiCommandGasCoinArgumentToJSON(value), { type: 'gas_coin' } as const);
        case 'input':
            return Object.assign({}, SuiCommandInputArgumentToJSON(value), { type: 'input' } as const);
        case 'nested_result':
            return Object.assign({}, SuiCommandNestedResultArgumentToJSON(value), { type: 'nested_result' } as const);
        case 'result':
            return Object.assign({}, SuiCommandResultArgumentToJSON(value), { type: 'result' } as const);
        default:
            throw new Error(`No variant of SuiCommandArgument exists with 'type=${value['type']}'`);
    }

}

