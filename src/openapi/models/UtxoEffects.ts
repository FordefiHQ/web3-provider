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
import type { Price } from './Price';
import {
    PriceFromJSON,
    PriceFromJSONTyped,
    PriceToJSON,
} from './Price';
import type { PricedAsset } from './PricedAsset';
import {
    PricedAssetFromJSON,
    PricedAssetFromJSONTyped,
    PricedAssetToJSON,
} from './PricedAsset';
import type { UtxoBalanceChangeEffect } from './UtxoBalanceChangeEffect';
import {
    UtxoBalanceChangeEffectFromJSON,
    UtxoBalanceChangeEffectFromJSONTyped,
    UtxoBalanceChangeEffectToJSON,
} from './UtxoBalanceChangeEffect';
import type { UtxoInput } from './UtxoInput';
import {
    UtxoInputFromJSON,
    UtxoInputFromJSONTyped,
    UtxoInputToJSON,
} from './UtxoInput';
import type { UtxoOutput } from './UtxoOutput';
import {
    UtxoOutputFromJSON,
    UtxoOutputFromJSONTyped,
    UtxoOutputToJSON,
} from './UtxoOutput';

/**
 * 
 * @export
 * @interface UtxoEffects
 */
export interface UtxoEffects {
    /**
     * 
     * @type {Array<UtxoInput>}
     * @memberof UtxoEffects
     */
    inputs: Array<UtxoInput>;
    /**
     * 
     * @type {Array<UtxoOutput>}
     * @memberof UtxoEffects
     */
    outputs: Array<UtxoOutput>;
    /**
     * 
     * @type {Array<UtxoBalanceChangeEffect>}
     * @memberof UtxoEffects
     */
    balanceChanges: Array<UtxoBalanceChangeEffect>;
    /**
     * 
     * @type {string}
     * @memberof UtxoEffects
     */
    totalValue: string;
    /**
     * 
     * @type {Price}
     * @memberof UtxoEffects
     */
    price?: Price;
    /**
     * 
     * @type {PricedAsset}
     * @memberof UtxoEffects
     */
    pricedAsset: PricedAsset;
}

/**
 * Check if a given object implements the UtxoEffects interface.
 */
export function instanceOfUtxoEffects(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "inputs" in value;
    isInstance = isInstance && "outputs" in value;
    isInstance = isInstance && "balanceChanges" in value;
    isInstance = isInstance && "totalValue" in value;
    isInstance = isInstance && "pricedAsset" in value;

    return isInstance;
}

export function UtxoEffectsFromJSON(json: any): UtxoEffects {
    return UtxoEffectsFromJSONTyped(json, false);
}

export function UtxoEffectsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UtxoEffects {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inputs': ((json['inputs'] as Array<any>).map(UtxoInputFromJSON)),
        'outputs': ((json['outputs'] as Array<any>).map(UtxoOutputFromJSON)),
        'balanceChanges': ((json['balance_changes'] as Array<any>).map(UtxoBalanceChangeEffectFromJSON)),
        'totalValue': json['total_value'],
        'price': !exists(json, 'price') ? undefined : PriceFromJSON(json['price']),
        'pricedAsset': PricedAssetFromJSON(json['priced_asset']),
    };
}

export function UtxoEffectsToJSON(value?: UtxoEffects | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inputs': ((value.inputs as Array<any>).map(UtxoInputToJSON)),
        'outputs': ((value.outputs as Array<any>).map(UtxoOutputToJSON)),
        'balance_changes': ((value.balanceChanges as Array<any>).map(UtxoBalanceChangeEffectToJSON)),
        'total_value': value.totalValue,
        'price': PriceToJSON(value.price),
        'priced_asset': PricedAssetToJSON(value.pricedAsset),
    };
}

