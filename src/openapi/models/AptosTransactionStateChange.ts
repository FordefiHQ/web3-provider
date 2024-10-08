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
import type { AptosTransactionState } from './AptosTransactionState';
import {
    AptosTransactionStateFromJSON,
    AptosTransactionStateFromJSONTyped,
    AptosTransactionStateToJSON,
} from './AptosTransactionState';
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

/**
 * 
 * @export
 * @interface AptosTransactionStateChange
 */
export interface AptosTransactionStateChange {
    /**
     * 
     * @type {Date}
     * @memberof AptosTransactionStateChange
     */
    changedAt: Date;
    /**
     * 
     * @type {StateChangeReason}
     * @memberof AptosTransactionStateChange
     */
    reason?: StateChangeReason;
    /**
     * 
     * @type {Array<PricedAsset>}
     * @memberof AptosTransactionStateChange
     * @deprecated
     */
    assetPrices: Array<PricedAsset>;
    /**
     * 
     * @type {AptosTransactionState}
     * @memberof AptosTransactionStateChange
     */
    previousState?: AptosTransactionState;
    /**
     * 
     * @type {AptosTransactionState}
     * @memberof AptosTransactionStateChange
     */
    newState: AptosTransactionState;
}

/**
 * Check if a given object implements the AptosTransactionStateChange interface.
 */
export function instanceOfAptosTransactionStateChange(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "changedAt" in value;
    isInstance = isInstance && "assetPrices" in value;
    isInstance = isInstance && "newState" in value;

    return isInstance;
}

export function AptosTransactionStateChangeFromJSON(json: any): AptosTransactionStateChange {
    return AptosTransactionStateChangeFromJSONTyped(json, false);
}

export function AptosTransactionStateChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AptosTransactionStateChange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changedAt': (new Date(json['changed_at'])),
        'reason': !exists(json, 'reason') ? undefined : StateChangeReasonFromJSON(json['reason']),
        'assetPrices': ((json['asset_prices'] as Array<any>).map(PricedAssetFromJSON)),
        'previousState': !exists(json, 'previous_state') ? undefined : AptosTransactionStateFromJSON(json['previous_state']),
        'newState': AptosTransactionStateFromJSON(json['new_state']),
    };
}

export function AptosTransactionStateChangeToJSON(value?: AptosTransactionStateChange | null): any {
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
        'previous_state': AptosTransactionStateToJSON(value.previousState),
        'new_state': AptosTransactionStateToJSON(value.newState),
    };
}

