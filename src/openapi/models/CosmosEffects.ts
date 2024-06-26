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
import type { CosmosBalanceChangeEffect } from './CosmosBalanceChangeEffect';
import {
    CosmosBalanceChangeEffectFromJSON,
    CosmosBalanceChangeEffectFromJSONTyped,
    CosmosBalanceChangeEffectToJSON,
} from './CosmosBalanceChangeEffect';
import type { CosmosTransferEffect } from './CosmosTransferEffect';
import {
    CosmosTransferEffectFromJSON,
    CosmosTransferEffectFromJSONTyped,
    CosmosTransferEffectToJSON,
} from './CosmosTransferEffect';

/**
 * 
 * @export
 * @interface CosmosEffects
 */
export interface CosmosEffects {
    /**
     * 
     * @type {Array<CosmosBalanceChangeEffect>}
     * @memberof CosmosEffects
     */
    balanceChanges: Array<CosmosBalanceChangeEffect>;
    /**
     * 
     * @type {Array<CosmosTransferEffect>}
     * @memberof CosmosEffects
     */
    transfers: Array<CosmosTransferEffect>;
}

/**
 * Check if a given object implements the CosmosEffects interface.
 */
export function instanceOfCosmosEffects(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "balanceChanges" in value;
    isInstance = isInstance && "transfers" in value;

    return isInstance;
}

export function CosmosEffectsFromJSON(json: any): CosmosEffects {
    return CosmosEffectsFromJSONTyped(json, false);
}

export function CosmosEffectsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosEffects {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'balanceChanges': ((json['balance_changes'] as Array<any>).map(CosmosBalanceChangeEffectFromJSON)),
        'transfers': ((json['transfers'] as Array<any>).map(CosmosTransferEffectFromJSON)),
    };
}

export function CosmosEffectsToJSON(value?: CosmosEffects | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'balance_changes': ((value.balanceChanges as Array<any>).map(CosmosBalanceChangeEffectToJSON)),
        'transfers': ((value.transfers as Array<any>).map(CosmosTransferEffectToJSON)),
    };
}

