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
 * @interface Eip712MessageConditions
 */
export interface Eip712MessageConditions {
    /**
     * 
     * @type {Array<string>}
     * @memberof Eip712MessageConditions
     */
    domains: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Eip712MessageConditions
     */
    primaryTypes: Array<string>;
}

/**
 * Check if a given object implements the Eip712MessageConditions interface.
 */
export function instanceOfEip712MessageConditions(value: object): value is Eip712MessageConditions {
    if (!('domains' in value) || value['domains'] === undefined) return false;
    if (!('primaryTypes' in value) || value['primaryTypes'] === undefined) return false;
    return true;
}

export function Eip712MessageConditionsFromJSON(json: any): Eip712MessageConditions {
    return Eip712MessageConditionsFromJSONTyped(json, false);
}

export function Eip712MessageConditionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Eip712MessageConditions {
    if (json == null) {
        return json;
    }
    return {
        
        'domains': json['domains'],
        'primaryTypes': json['primary_types'],
    };
}

export function Eip712MessageConditionsToJSON(json: any): Eip712MessageConditions {
    return Eip712MessageConditionsToJSONTyped(json, false);
}

export function Eip712MessageConditionsToJSONTyped(value?: Eip712MessageConditions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'domains': value['domains'],
        'primary_types': value['primaryTypes'],
    };
}

