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
import type { PricedAsset } from './PricedAsset';
import {
    PricedAssetFromJSON,
    PricedAssetFromJSONTyped,
    PricedAssetToJSON,
} from './PricedAsset';
import type { StateChangeReason } from './StateChangeReason';
import {
    StateChangeReasonFromJSON,
    StateChangeReasonFromJSONTyped,
    StateChangeReasonToJSON,
} from './StateChangeReason';
import type { TonTransactionState } from './TonTransactionState';
import {
    TonTransactionStateFromJSON,
    TonTransactionStateFromJSONTyped,
    TonTransactionStateToJSON,
} from './TonTransactionState';

/**
 * 
 * @export
 * @interface TonTransactionStateChange
 */
export interface TonTransactionStateChange {
    /**
     * 
     * @type {Date}
     * @memberof TonTransactionStateChange
     */
    changedAt: Date;
    /**
     * 
     * @type {StateChangeReason}
     * @memberof TonTransactionStateChange
     */
    reason?: StateChangeReason;
    /**
     * 
     * @type {Array<PricedAsset>}
     * @memberof TonTransactionStateChange
     * @deprecated
     */
    assetPrices: Array<PricedAsset>;
    /**
     * 
     * @type {TonTransactionState}
     * @memberof TonTransactionStateChange
     */
    previousState?: TonTransactionState;
    /**
     * 
     * @type {TonTransactionState}
     * @memberof TonTransactionStateChange
     */
    newState: TonTransactionState;
}

/**
 * Check if a given object implements the TonTransactionStateChange interface.
 */
export function instanceOfTonTransactionStateChange(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "changedAt" in value;
    isInstance = isInstance && "assetPrices" in value;
    isInstance = isInstance && "newState" in value;

    return isInstance;
}

export function TonTransactionStateChangeFromJSON(json: any): TonTransactionStateChange {
    return TonTransactionStateChangeFromJSONTyped(json, false);
}

export function TonTransactionStateChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonTransactionStateChange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changedAt': (new Date(json['changed_at'])),
        'reason': !exists(json, 'reason') ? undefined : StateChangeReasonFromJSON(json['reason']),
        'assetPrices': ((json['asset_prices'] as Array<any>).map(PricedAssetFromJSON)),
        'previousState': !exists(json, 'previous_state') ? undefined : TonTransactionStateFromJSON(json['previous_state']),
        'newState': TonTransactionStateFromJSON(json['new_state']),
    };
}

export function TonTransactionStateChangeToJSON(value?: TonTransactionStateChange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changed_at': (value.changedAt.toISOString()),
        'reason': StateChangeReasonToJSON(value.reason),
        'asset_prices': ((value.assetPrices as Array<any>).map(PricedAssetToJSON)),
        'previous_state': TonTransactionStateToJSON(value.previousState),
        'new_state': TonTransactionStateToJSON(value.newState),
    };
}

