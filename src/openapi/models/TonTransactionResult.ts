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
import type { TonAddressFee } from './TonAddressFee';
import {
    TonAddressFeeFromJSON,
    TonAddressFeeFromJSONTyped,
    TonAddressFeeToJSON,
} from './TonAddressFee';
import type { TonEffects } from './TonEffects';
import {
    TonEffectsFromJSON,
    TonEffectsFromJSONTyped,
    TonEffectsToJSON,
} from './TonEffects';
import type { TonReversion } from './TonReversion';
import {
    TonReversionFromJSON,
    TonReversionFromJSONTyped,
    TonReversionToJSON,
} from './TonReversion';

/**
 * 
 * @export
 * @interface TonTransactionResult
 */
export interface TonTransactionResult {
    /**
     * 
     * @type {TonReversion}
     * @memberof TonTransactionResult
     */
    reversion: TonReversion;
    /**
     * 
     * @type {Array<TonAddressFee>}
     * @memberof TonTransactionResult
     */
    addressFees: Array<TonAddressFee>;
    /**
     * 
     * @type {TonEffects}
     * @memberof TonTransactionResult
     */
    effects: TonEffects;
}

/**
 * Check if a given object implements the TonTransactionResult interface.
 */
export function instanceOfTonTransactionResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "reversion" in value;
    isInstance = isInstance && "addressFees" in value;
    isInstance = isInstance && "effects" in value;

    return isInstance;
}

export function TonTransactionResultFromJSON(json: any): TonTransactionResult {
    return TonTransactionResultFromJSONTyped(json, false);
}

export function TonTransactionResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonTransactionResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reversion': TonReversionFromJSON(json['reversion']),
        'addressFees': ((json['address_fees'] as Array<any>).map(TonAddressFeeFromJSON)),
        'effects': TonEffectsFromJSON(json['effects']),
    };
}

export function TonTransactionResultToJSON(value?: TonTransactionResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reversion': TonReversionToJSON(value.reversion),
        'address_fees': ((value.addressFees as Array<any>).map(TonAddressFeeToJSON)),
        'effects': TonEffectsToJSON(value.effects),
    };
}

