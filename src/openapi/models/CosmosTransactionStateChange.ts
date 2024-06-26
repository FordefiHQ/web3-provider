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
import type { CosmosTransactionState } from './CosmosTransactionState';
import {
    CosmosTransactionStateFromJSON,
    CosmosTransactionStateFromJSONTyped,
    CosmosTransactionStateToJSON,
} from './CosmosTransactionState';

/**
 * 
 * @export
 * @interface CosmosTransactionStateChange
 */
export interface CosmosTransactionStateChange {
    /**
     * 
     * @type {Date}
     * @memberof CosmosTransactionStateChange
     */
    changedAt: Date;
    /**
     * 
     * @type {CosmosTransactionState}
     * @memberof CosmosTransactionStateChange
     */
    previousState?: CosmosTransactionState;
    /**
     * 
     * @type {CosmosTransactionState}
     * @memberof CosmosTransactionStateChange
     */
    newState: CosmosTransactionState;
}

/**
 * Check if a given object implements the CosmosTransactionStateChange interface.
 */
export function instanceOfCosmosTransactionStateChange(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "changedAt" in value;
    isInstance = isInstance && "newState" in value;

    return isInstance;
}

export function CosmosTransactionStateChangeFromJSON(json: any): CosmosTransactionStateChange {
    return CosmosTransactionStateChangeFromJSONTyped(json, false);
}

export function CosmosTransactionStateChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosTransactionStateChange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changedAt': (new Date(json['changed_at'])),
        'previousState': !exists(json, 'previous_state') ? undefined : CosmosTransactionStateFromJSON(json['previous_state']),
        'newState': CosmosTransactionStateFromJSON(json['new_state']),
    };
}

export function CosmosTransactionStateChangeToJSON(value?: CosmosTransactionStateChange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changed_at': (value.changedAt.toISOString()),
        'previous_state': CosmosTransactionStateToJSON(value.previousState),
        'new_state': CosmosTransactionStateToJSON(value.newState),
    };
}

