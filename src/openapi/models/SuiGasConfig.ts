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
import type { SuiObjectRef } from './SuiObjectRef';
import {
    SuiObjectRefFromJSON,
    SuiObjectRefFromJSONTyped,
    SuiObjectRefToJSON,
} from './SuiObjectRef';

/**
 * 
 * @export
 * @interface SuiGasConfig
 */
export interface SuiGasConfig {
    /**
     * 
     * @type {string}
     * @memberof SuiGasConfig
     */
    budget?: string;
    /**
     * 
     * @type {string}
     * @memberof SuiGasConfig
     */
    price?: string;
    /**
     * 
     * @type {Array<SuiObjectRef>}
     * @memberof SuiGasConfig
     */
    payment: Array<SuiObjectRef>;
}

/**
 * Check if a given object implements the SuiGasConfig interface.
 */
export function instanceOfSuiGasConfig(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "payment" in value;

    return isInstance;
}

export function SuiGasConfigFromJSON(json: any): SuiGasConfig {
    return SuiGasConfigFromJSONTyped(json, false);
}

export function SuiGasConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiGasConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'budget': !exists(json, 'budget') ? undefined : json['budget'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'payment': ((json['payment'] as Array<any>).map(SuiObjectRefFromJSON)),
    };
}

export function SuiGasConfigToJSON(value?: SuiGasConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'budget': value.budget,
        'price': value.price,
        'payment': ((value.payment as Array<any>).map(SuiObjectRefToJSON)),
    };
}
