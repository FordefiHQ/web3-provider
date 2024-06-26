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
import type { EnrichedEvmAddress } from './EnrichedEvmAddress';
import {
    EnrichedEvmAddressFromJSON,
    EnrichedEvmAddressFromJSONTyped,
    EnrichedEvmAddressToJSON,
} from './EnrichedEvmAddress';
import type { Price } from './Price';
import {
    PriceFromJSON,
    PriceFromJSONTyped,
    PriceToJSON,
} from './Price';

/**
 * 
 * @export
 * @interface EvmBridgeEffectSourceNative
 */
export interface EvmBridgeEffectSourceNative {
    /**
     * 
     * @type {string}
     * @memberof EvmBridgeEffectSourceNative
     */
    type: EvmBridgeEffectSourceNativeTypeEnum;
    /**
     * 
     * @type {EnrichedEvmAddress}
     * @memberof EvmBridgeEffectSourceNative
     */
    sourceAddress: EnrichedEvmAddress;
    /**
     * 
     * @type {Price}
     * @memberof EvmBridgeEffectSourceNative
     */
    price?: Price;
}


/**
 * @export
 */
export const EvmBridgeEffectSourceNativeTypeEnum = {
    native: 'native'
} as const;
export type EvmBridgeEffectSourceNativeTypeEnum = typeof EvmBridgeEffectSourceNativeTypeEnum[keyof typeof EvmBridgeEffectSourceNativeTypeEnum];


/**
 * Check if a given object implements the EvmBridgeEffectSourceNative interface.
 */
export function instanceOfEvmBridgeEffectSourceNative(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "sourceAddress" in value;

    return isInstance;
}

export function EvmBridgeEffectSourceNativeFromJSON(json: any): EvmBridgeEffectSourceNative {
    return EvmBridgeEffectSourceNativeFromJSONTyped(json, false);
}

export function EvmBridgeEffectSourceNativeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvmBridgeEffectSourceNative {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'sourceAddress': EnrichedEvmAddressFromJSON(json['source_address']),
        'price': !exists(json, 'price') ? undefined : PriceFromJSON(json['price']),
    };
}

export function EvmBridgeEffectSourceNativeToJSON(value?: EvmBridgeEffectSourceNative | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'source_address': EnrichedEvmAddressToJSON(value.sourceAddress),
        'price': PriceToJSON(value.price),
    };
}

