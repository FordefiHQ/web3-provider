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
import type { UtxoMessageState } from './UtxoMessageState';
import {
    UtxoMessageStateFromJSON,
    UtxoMessageStateFromJSONTyped,
    UtxoMessageStateToJSON,
} from './UtxoMessageState';

/**
 * 
 * @export
 * @interface UtxoMessageStateChange
 */
export interface UtxoMessageStateChange {
    /**
     * 
     * @type {Date}
     * @memberof UtxoMessageStateChange
     */
    changedAt: Date;
    /**
     * 
     * @type {StateChangeReason}
     * @memberof UtxoMessageStateChange
     */
    reason?: StateChangeReason;
    /**
     * 
     * @type {Array<PricedAsset>}
     * @memberof UtxoMessageStateChange
     * @deprecated
     */
    assetPrices: Array<PricedAsset>;
    /**
     * 
     * @type {UtxoMessageState}
     * @memberof UtxoMessageStateChange
     */
    previousState?: UtxoMessageState;
    /**
     * 
     * @type {UtxoMessageState}
     * @memberof UtxoMessageStateChange
     */
    newState: UtxoMessageState;
}

/**
 * Check if a given object implements the UtxoMessageStateChange interface.
 */
export function instanceOfUtxoMessageStateChange(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "changedAt" in value;
    isInstance = isInstance && "assetPrices" in value;
    isInstance = isInstance && "newState" in value;

    return isInstance;
}

export function UtxoMessageStateChangeFromJSON(json: any): UtxoMessageStateChange {
    return UtxoMessageStateChangeFromJSONTyped(json, false);
}

export function UtxoMessageStateChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UtxoMessageStateChange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changedAt': (new Date(json['changed_at'])),
        'reason': !exists(json, 'reason') ? undefined : StateChangeReasonFromJSON(json['reason']),
        'assetPrices': ((json['asset_prices'] as Array<any>).map(PricedAssetFromJSON)),
        'previousState': !exists(json, 'previous_state') ? undefined : UtxoMessageStateFromJSON(json['previous_state']),
        'newState': UtxoMessageStateFromJSON(json['new_state']),
    };
}

export function UtxoMessageStateChangeToJSON(value?: UtxoMessageStateChange | null): any {
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
        'previous_state': UtxoMessageStateToJSON(value.previousState),
        'new_state': UtxoMessageStateToJSON(value.newState),
    };
}
