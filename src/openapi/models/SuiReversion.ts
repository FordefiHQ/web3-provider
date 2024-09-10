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
import type { SuiReversionState } from './SuiReversionState';
import {
    SuiReversionStateFromJSON,
    SuiReversionStateFromJSONTyped,
    SuiReversionStateToJSON,
} from './SuiReversionState';

/**
 * 
 * @export
 * @interface SuiReversion
 */
export interface SuiReversion {
    /**
     * 
     * @type {SuiReversionState}
     * @memberof SuiReversion
     */
    state: SuiReversionState;
    /**
     * 
     * @type {string}
     * @memberof SuiReversion
     */
    reason?: string;
}

/**
 * Check if a given object implements the SuiReversion interface.
 */
export function instanceOfSuiReversion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "state" in value;

    return isInstance;
}

export function SuiReversionFromJSON(json: any): SuiReversion {
    return SuiReversionFromJSONTyped(json, false);
}

export function SuiReversionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiReversion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'state': SuiReversionStateFromJSON(json['state']),
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
    };
}

export function SuiReversionToJSON(value?: SuiReversion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'state': SuiReversionStateToJSON(value.state),
        'reason': value.reason,
    };
}
