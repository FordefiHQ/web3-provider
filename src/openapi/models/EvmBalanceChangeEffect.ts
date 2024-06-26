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

import {
    Erc1155BalanceChange,
    instanceOfErc1155BalanceChange,
    Erc1155BalanceChangeFromJSON,
    Erc1155BalanceChangeFromJSONTyped,
    Erc1155BalanceChangeToJSON,
} from './Erc1155BalanceChange';
import {
    Erc20BalanceChange,
    instanceOfErc20BalanceChange,
    Erc20BalanceChangeFromJSON,
    Erc20BalanceChangeFromJSONTyped,
    Erc20BalanceChangeToJSON,
} from './Erc20BalanceChange';
import {
    Erc721OwnershipChange,
    instanceOfErc721OwnershipChange,
    Erc721OwnershipChangeFromJSON,
    Erc721OwnershipChangeFromJSONTyped,
    Erc721OwnershipChangeToJSON,
} from './Erc721OwnershipChange';
import {
    EvmNativeCurrencyBalanceChange,
    instanceOfEvmNativeCurrencyBalanceChange,
    EvmNativeCurrencyBalanceChangeFromJSON,
    EvmNativeCurrencyBalanceChangeFromJSONTyped,
    EvmNativeCurrencyBalanceChangeToJSON,
} from './EvmNativeCurrencyBalanceChange';

/**
 * @type EvmBalanceChangeEffect
 * 
 * @export
 */
export type EvmBalanceChangeEffect = { type: 'erc1155' } & Erc1155BalanceChange | { type: 'erc20' } & Erc20BalanceChange | { type: 'erc721' } & Erc721OwnershipChange | { type: 'native' } & EvmNativeCurrencyBalanceChange;

export function EvmBalanceChangeEffectFromJSON(json: any): EvmBalanceChangeEffect {
    return EvmBalanceChangeEffectFromJSONTyped(json, false);
}

export function EvmBalanceChangeEffectFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvmBalanceChangeEffect {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'erc1155':
            return {...Erc1155BalanceChangeFromJSONTyped(json, true), type: 'erc1155'};
        case 'erc20':
            return {...Erc20BalanceChangeFromJSONTyped(json, true), type: 'erc20'};
        case 'erc721':
            return {...Erc721OwnershipChangeFromJSONTyped(json, true), type: 'erc721'};
        case 'native':
            return {...EvmNativeCurrencyBalanceChangeFromJSONTyped(json, true), type: 'native'};
        default:
            throw new Error(`No variant of EvmBalanceChangeEffect exists with 'type=${json['type']}'`);
    }
}

export function EvmBalanceChangeEffectToJSON(value?: EvmBalanceChangeEffect | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'erc1155':
            return Erc1155BalanceChangeToJSON(value);
        case 'erc20':
            return Erc20BalanceChangeToJSON(value);
        case 'erc721':
            return Erc721OwnershipChangeToJSON(value);
        case 'native':
            return EvmNativeCurrencyBalanceChangeToJSON(value);
        default:
            throw new Error(`No variant of EvmBalanceChangeEffect exists with 'type=${value['type']}'`);
    }

}

