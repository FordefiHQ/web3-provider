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
import type { SolanaTransactionState } from './SolanaTransactionState';
import {
    SolanaTransactionStateFromJSON,
    SolanaTransactionStateFromJSONTyped,
    SolanaTransactionStateToJSON,
} from './SolanaTransactionState';

/**
 * 
 * @export
 * @interface SolanaTransactionStateChange
 */
export interface SolanaTransactionStateChange {
    /**
     * 
     * @type {Date}
     * @memberof SolanaTransactionStateChange
     */
    changedAt: Date;
    /**
     * 
     * @type {Array<PricedAsset>}
     * @memberof SolanaTransactionStateChange
     */
    assetPrices: Array<PricedAsset>;
    /**
     * 
     * @type {SolanaTransactionState}
     * @memberof SolanaTransactionStateChange
     */
    previousState?: SolanaTransactionState;
    /**
     * 
     * @type {SolanaTransactionState}
     * @memberof SolanaTransactionStateChange
     */
    newState: SolanaTransactionState;
}

/**
 * Check if a given object implements the SolanaTransactionStateChange interface.
 */
export function instanceOfSolanaTransactionStateChange(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "changedAt" in value;
    isInstance = isInstance && "assetPrices" in value;
    isInstance = isInstance && "newState" in value;

    return isInstance;
}

export function SolanaTransactionStateChangeFromJSON(json: any): SolanaTransactionStateChange {
    return SolanaTransactionStateChangeFromJSONTyped(json, false);
}

export function SolanaTransactionStateChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolanaTransactionStateChange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changedAt': (new Date(json['changed_at'])),
        'assetPrices': ((json['asset_prices'] as Array<any>).map(PricedAssetFromJSON)),
        'previousState': !exists(json, 'previous_state') ? undefined : SolanaTransactionStateFromJSON(json['previous_state']),
        'newState': SolanaTransactionStateFromJSON(json['new_state']),
    };
}

export function SolanaTransactionStateChangeToJSON(value?: SolanaTransactionStateChange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changed_at': (value.changedAt.toISOString()),
        'asset_prices': ((value.assetPrices as Array<any>).map(PricedAssetToJSON)),
        'previous_state': SolanaTransactionStateToJSON(value.previousState),
        'new_state': SolanaTransactionStateToJSON(value.newState),
    };
}

