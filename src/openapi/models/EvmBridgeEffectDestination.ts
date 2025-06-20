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

import type { EvmBridgeEffectKnownDestination } from './EvmBridgeEffectKnownDestination';
import {
    EvmBridgeEffectKnownDestinationFromJSONTyped,
} from './EvmBridgeEffectKnownDestination';
import type { EvmBridgeEffectUnknownDestination } from './EvmBridgeEffectUnknownDestination';
import {
    EvmBridgeEffectUnknownDestinationFromJSONTyped,
} from './EvmBridgeEffectUnknownDestination';

/**
 * 
 * @export
 * @type EvmBridgeEffectDestination
 */
export type EvmBridgeEffectDestination = { type: 'known_target_chain' } & EvmBridgeEffectKnownDestination | { type: 'unknown_target_chain' } & EvmBridgeEffectUnknownDestination;

export function EvmBridgeEffectDestinationFromJSON(json: any): EvmBridgeEffectDestination {
    return EvmBridgeEffectDestinationFromJSONTyped(json, false);
}

function EvmBridgeEffectDestinationFromJSONTyped(json: any, _ignoreDiscriminator: boolean): EvmBridgeEffectDestination {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'known_target_chain':
            return Object.assign({}, EvmBridgeEffectKnownDestinationFromJSONTyped(json, true), { type: 'known_target_chain' } as const);
        case 'unknown_target_chain':
            return Object.assign({}, EvmBridgeEffectUnknownDestinationFromJSONTyped(json, true), { type: 'unknown_target_chain' } as const);
        default:
            throw new Error(`No variant of EvmBridgeEffectDestination exists with 'type=${json['type']}'`);
    }
}

