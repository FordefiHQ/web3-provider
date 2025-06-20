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

import type { EvmBridgeEffectSourceErc20 } from './EvmBridgeEffectSourceErc20';
import {
    EvmBridgeEffectSourceErc20FromJSONTyped,
} from './EvmBridgeEffectSourceErc20';
import type { EvmBridgeEffectSourceNative } from './EvmBridgeEffectSourceNative';
import {
    EvmBridgeEffectSourceNativeFromJSONTyped,
} from './EvmBridgeEffectSourceNative';

/**
 * 
 * @export
 * @type EvmBridgeEffectSource
 */
export type EvmBridgeEffectSource = { type: 'erc20' } & EvmBridgeEffectSourceErc20 | { type: 'native' } & EvmBridgeEffectSourceNative;

export function EvmBridgeEffectSourceFromJSON(json: any): EvmBridgeEffectSource {
    return EvmBridgeEffectSourceFromJSONTyped(json, false);
}

function EvmBridgeEffectSourceFromJSONTyped(json: any, _ignoreDiscriminator: boolean): EvmBridgeEffectSource {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'erc20':
            return Object.assign({}, EvmBridgeEffectSourceErc20FromJSONTyped(json, true), { type: 'erc20' } as const);
        case 'native':
            return Object.assign({}, EvmBridgeEffectSourceNativeFromJSONTyped(json, true), { type: 'native' } as const);
        default:
            throw new Error(`No variant of EvmBridgeEffectSource exists with 'type=${json['type']}'`);
    }
}

