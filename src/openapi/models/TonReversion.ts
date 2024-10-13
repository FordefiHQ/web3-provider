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
import type { TonReversionState } from './TonReversionState';
import {
    TonReversionStateFromJSON,
    TonReversionStateFromJSONTyped,
    TonReversionStateToJSON,
} from './TonReversionState';

/**
 * 
 * @export
 * @interface TonReversion
 */
export interface TonReversion {
    /**
     * 
     * @type {TonReversionState}
     * @memberof TonReversion
     */
    state: TonReversionState;
    /**
     * 
     * @type {string}
     * @memberof TonReversion
     */
    reason?: string;
}

/**
 * Check if a given object implements the TonReversion interface.
 */
export function instanceOfTonReversion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "state" in value;

    return isInstance;
}

export function TonReversionFromJSON(json: any): TonReversion {
    return TonReversionFromJSONTyped(json, false);
}

export function TonReversionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonReversion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'state': TonReversionStateFromJSON(json['state']),
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
    };
}

export function TonReversionToJSON(value?: TonReversion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'state': TonReversionStateToJSON(value.state),
        'reason': value.reason,
    };
}

