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
import type { BlackBoxSignatureState } from './BlackBoxSignatureState';
import {
    BlackBoxSignatureStateFromJSON,
    BlackBoxSignatureStateFromJSONTyped,
    BlackBoxSignatureStateToJSON,
} from './BlackBoxSignatureState';

/**
 * 
 * @export
 * @interface BlackBoxSignatureStateChange
 */
export interface BlackBoxSignatureStateChange {
    /**
     * 
     * @type {Date}
     * @memberof BlackBoxSignatureStateChange
     */
    changedAt: Date;
    /**
     * 
     * @type {BlackBoxSignatureState}
     * @memberof BlackBoxSignatureStateChange
     */
    previousState?: BlackBoxSignatureState;
    /**
     * 
     * @type {BlackBoxSignatureState}
     * @memberof BlackBoxSignatureStateChange
     */
    newState: BlackBoxSignatureState;
}

/**
 * Check if a given object implements the BlackBoxSignatureStateChange interface.
 */
export function instanceOfBlackBoxSignatureStateChange(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "changedAt" in value;
    isInstance = isInstance && "newState" in value;

    return isInstance;
}

export function BlackBoxSignatureStateChangeFromJSON(json: any): BlackBoxSignatureStateChange {
    return BlackBoxSignatureStateChangeFromJSONTyped(json, false);
}

export function BlackBoxSignatureStateChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlackBoxSignatureStateChange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changedAt': (new Date(json['changed_at'])),
        'previousState': !exists(json, 'previous_state') ? undefined : BlackBoxSignatureStateFromJSON(json['previous_state']),
        'newState': BlackBoxSignatureStateFromJSON(json['new_state']),
    };
}

export function BlackBoxSignatureStateChangeToJSON(value?: BlackBoxSignatureStateChange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changed_at': (value.changedAt.toISOString()),
        'previous_state': BlackBoxSignatureStateToJSON(value.previousState),
        'new_state': BlackBoxSignatureStateToJSON(value.newState),
    };
}

