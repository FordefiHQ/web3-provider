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

import type { VaultsConditionAnyRequest } from './VaultsConditionAnyRequest';
import {
    instanceOfVaultsConditionAnyRequest,
    VaultsConditionAnyRequestFromJSON,
    VaultsConditionAnyRequestFromJSONTyped,
    VaultsConditionAnyRequestToJSON,
} from './VaultsConditionAnyRequest';
import type { VaultsConditionCustomRequest } from './VaultsConditionCustomRequest';
import {
    instanceOfVaultsConditionCustomRequest,
    VaultsConditionCustomRequestFromJSON,
    VaultsConditionCustomRequestFromJSONTyped,
    VaultsConditionCustomRequestToJSON,
} from './VaultsConditionCustomRequest';

/**
 * @type VaultsConditionRequestCondition
 * 
 * @export
 */
export type VaultsConditionRequestCondition = { type: 'any' } & VaultsConditionAnyRequest | { type: 'custom' } & VaultsConditionCustomRequest;

export function VaultsConditionRequestConditionFromJSON(json: any): VaultsConditionRequestCondition {
    return VaultsConditionRequestConditionFromJSONTyped(json, false);
}

export function VaultsConditionRequestConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): VaultsConditionRequestCondition {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'any':
            return Object.assign({}, VaultsConditionAnyRequestFromJSONTyped(json, true), { type: 'any' } as const);
        case 'custom':
            return Object.assign({}, VaultsConditionCustomRequestFromJSONTyped(json, true), { type: 'custom' } as const);
        default:
            throw new Error(`No variant of VaultsConditionRequestCondition exists with 'type=${json['type']}'`);
    }
}

export function VaultsConditionRequestConditionToJSON(json: any): any {
    return VaultsConditionRequestConditionToJSONTyped(json, false);
}

export function VaultsConditionRequestConditionToJSONTyped(value?: VaultsConditionRequestCondition | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'any':
            return Object.assign({}, VaultsConditionAnyRequestToJSON(value), { type: 'any' } as const);
        case 'custom':
            return Object.assign({}, VaultsConditionCustomRequestToJSON(value), { type: 'custom' } as const);
        default:
            throw new Error(`No variant of VaultsConditionRequestCondition exists with 'type=${value['type']}'`);
    }

}

