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
import type { SuiMessageState } from './SuiMessageState';
import {
    SuiMessageStateFromJSON,
    SuiMessageStateFromJSONTyped,
    SuiMessageStateToJSON,
} from './SuiMessageState';

/**
 * 
 * @export
 * @interface SuiMessageStateChange
 */
export interface SuiMessageStateChange {
    /**
     * 
     * @type {Date}
     * @memberof SuiMessageStateChange
     */
    changedAt: Date;
    /**
     * 
     * @type {StateChangeReason}
     * @memberof SuiMessageStateChange
     */
    reason?: StateChangeReason;
    /**
     * 
     * @type {Array<PricedAsset>}
     * @memberof SuiMessageStateChange
     * @deprecated
     */
    assetPrices: Array<PricedAsset>;
    /**
     * 
     * @type {SuiMessageState}
     * @memberof SuiMessageStateChange
     */
    previousState?: SuiMessageState;
    /**
     * 
     * @type {SuiMessageState}
     * @memberof SuiMessageStateChange
     */
    newState: SuiMessageState;
}

/**
 * Check if a given object implements the SuiMessageStateChange interface.
 */
export function instanceOfSuiMessageStateChange(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "changedAt" in value;
    isInstance = isInstance && "assetPrices" in value;
    isInstance = isInstance && "newState" in value;

    return isInstance;
}

export function SuiMessageStateChangeFromJSON(json: any): SuiMessageStateChange {
    return SuiMessageStateChangeFromJSONTyped(json, false);
}

export function SuiMessageStateChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiMessageStateChange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changedAt': (new Date(json['changed_at'])),
        'reason': !exists(json, 'reason') ? undefined : StateChangeReasonFromJSON(json['reason']),
        'assetPrices': ((json['asset_prices'] as Array<any>).map(PricedAssetFromJSON)),
        'previousState': !exists(json, 'previous_state') ? undefined : SuiMessageStateFromJSON(json['previous_state']),
        'newState': SuiMessageStateFromJSON(json['new_state']),
    };
}

export function SuiMessageStateChangeToJSON(value?: SuiMessageStateChange | null): any {
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
        'previous_state': SuiMessageStateToJSON(value.previousState),
        'new_state': SuiMessageStateToJSON(value.newState),
    };
}
