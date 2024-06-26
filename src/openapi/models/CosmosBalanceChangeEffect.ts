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
    CosmosNativeBalanceChange,
    instanceOfCosmosNativeBalanceChange,
    CosmosNativeBalanceChangeFromJSON,
    CosmosNativeBalanceChangeFromJSONTyped,
    CosmosNativeBalanceChangeToJSON,
} from './CosmosNativeBalanceChange';
import {
    CosmosTokenBalanceChange,
    instanceOfCosmosTokenBalanceChange,
    CosmosTokenBalanceChangeFromJSON,
    CosmosTokenBalanceChangeFromJSONTyped,
    CosmosTokenBalanceChangeToJSON,
} from './CosmosTokenBalanceChange';

/**
 * @type CosmosBalanceChangeEffect
 * 
 * @export
 */
export type CosmosBalanceChangeEffect = { type: 'native' } & CosmosNativeBalanceChange | { type: 'token' } & CosmosTokenBalanceChange;

export function CosmosBalanceChangeEffectFromJSON(json: any): CosmosBalanceChangeEffect {
    return CosmosBalanceChangeEffectFromJSONTyped(json, false);
}

export function CosmosBalanceChangeEffectFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosBalanceChangeEffect {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'native':
            return {...CosmosNativeBalanceChangeFromJSONTyped(json, true), type: 'native'};
        case 'token':
            return {...CosmosTokenBalanceChangeFromJSONTyped(json, true), type: 'token'};
        default:
            throw new Error(`No variant of CosmosBalanceChangeEffect exists with 'type=${json['type']}'`);
    }
}

export function CosmosBalanceChangeEffectToJSON(value?: CosmosBalanceChangeEffect | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'native':
            return CosmosNativeBalanceChangeToJSON(value);
        case 'token':
            return CosmosTokenBalanceChangeToJSON(value);
        default:
            throw new Error(`No variant of CosmosBalanceChangeEffect exists with 'type=${value['type']}'`);
    }

}

