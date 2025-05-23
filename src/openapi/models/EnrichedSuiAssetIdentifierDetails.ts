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

import type { EnrichedSuiCoinAssetIdentifier } from './EnrichedSuiCoinAssetIdentifier';
import {
    instanceOfEnrichedSuiCoinAssetIdentifier,
    EnrichedSuiCoinAssetIdentifierFromJSON,
    EnrichedSuiCoinAssetIdentifierFromJSONTyped,
    EnrichedSuiCoinAssetIdentifierToJSON,
} from './EnrichedSuiCoinAssetIdentifier';
import type { EnrichedSuiNativeAssetIdentifier } from './EnrichedSuiNativeAssetIdentifier';
import {
    instanceOfEnrichedSuiNativeAssetIdentifier,
    EnrichedSuiNativeAssetIdentifierFromJSON,
    EnrichedSuiNativeAssetIdentifierFromJSONTyped,
    EnrichedSuiNativeAssetIdentifierToJSON,
} from './EnrichedSuiNativeAssetIdentifier';

/**
 * @type EnrichedSuiAssetIdentifierDetails
 * 
 * @export
 */
export type EnrichedSuiAssetIdentifierDetails = { type: 'coin' } & EnrichedSuiCoinAssetIdentifier | { type: 'native' } & EnrichedSuiNativeAssetIdentifier;

export function EnrichedSuiAssetIdentifierDetailsFromJSON(json: any): EnrichedSuiAssetIdentifierDetails {
    return EnrichedSuiAssetIdentifierDetailsFromJSONTyped(json, false);
}

export function EnrichedSuiAssetIdentifierDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrichedSuiAssetIdentifierDetails {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'coin':
            return Object.assign({}, EnrichedSuiCoinAssetIdentifierFromJSONTyped(json, true), { type: 'coin' } as const);
        case 'native':
            return Object.assign({}, EnrichedSuiNativeAssetIdentifierFromJSONTyped(json, true), { type: 'native' } as const);
        default:
            throw new Error(`No variant of EnrichedSuiAssetIdentifierDetails exists with 'type=${json['type']}'`);
    }
}

export function EnrichedSuiAssetIdentifierDetailsToJSON(json: any): any {
    return EnrichedSuiAssetIdentifierDetailsToJSONTyped(json, false);
}

export function EnrichedSuiAssetIdentifierDetailsToJSONTyped(value?: EnrichedSuiAssetIdentifierDetails | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'coin':
            return Object.assign({}, EnrichedSuiCoinAssetIdentifierToJSON(value), { type: 'coin' } as const);
        case 'native':
            return Object.assign({}, EnrichedSuiNativeAssetIdentifierToJSON(value), { type: 'native' } as const);
        default:
            throw new Error(`No variant of EnrichedSuiAssetIdentifierDetails exists with 'type=${value['type']}'`);
    }

}

