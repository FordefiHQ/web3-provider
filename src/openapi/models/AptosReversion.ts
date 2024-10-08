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
import type { AptosReversionState } from './AptosReversionState';
import {
    AptosReversionStateFromJSON,
    AptosReversionStateFromJSONTyped,
    AptosReversionStateToJSON,
} from './AptosReversionState';

/**
 * 
 * @export
 * @interface AptosReversion
 */
export interface AptosReversion {
    /**
     * 
     * @type {AptosReversionState}
     * @memberof AptosReversion
     */
    state: AptosReversionState;
    /**
     * 
     * @type {string}
     * @memberof AptosReversion
     */
    reason?: string;
}

/**
 * Check if a given object implements the AptosReversion interface.
 */
export function instanceOfAptosReversion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "state" in value;

    return isInstance;
}

export function AptosReversionFromJSON(json: any): AptosReversion {
    return AptosReversionFromJSONTyped(json, false);
}

export function AptosReversionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AptosReversion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'state': AptosReversionStateFromJSON(json['state']),
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
    };
}

export function AptosReversionToJSON(value?: AptosReversion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'state': AptosReversionStateToJSON(value.state),
        'reason': value.reason,
    };
}

