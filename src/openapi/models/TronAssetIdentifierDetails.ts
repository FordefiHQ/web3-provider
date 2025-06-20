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

import type { TronNativeAssetIdentifierRequest } from './TronNativeAssetIdentifierRequest';
import {
    TronNativeAssetIdentifierRequestFromJSONTyped,
    TronNativeAssetIdentifierRequestToJSON,
} from './TronNativeAssetIdentifierRequest';
import type { TronTrc20AssetIdentifierRequest } from './TronTrc20AssetIdentifierRequest';
import {
    TronTrc20AssetIdentifierRequestFromJSONTyped,
    TronTrc20AssetIdentifierRequestToJSON,
} from './TronTrc20AssetIdentifierRequest';

/**
 * 
 * @export
 * @type TronAssetIdentifierDetails
 */
export type TronAssetIdentifierDetails = { type: 'native' } & TronNativeAssetIdentifierRequest | { type: 'trc20' } & TronTrc20AssetIdentifierRequest;

export function TronAssetIdentifierDetailsFromJSON(json: any): TronAssetIdentifierDetails {
    return TronAssetIdentifierDetailsFromJSONTyped(json, false);
}

function TronAssetIdentifierDetailsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): TronAssetIdentifierDetails {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'native':
            return Object.assign({}, TronNativeAssetIdentifierRequestFromJSONTyped(json, true), { type: 'native' } as const);
        case 'trc20':
            return Object.assign({}, TronTrc20AssetIdentifierRequestFromJSONTyped(json, true), { type: 'trc20' } as const);
        default:
            throw new Error(`No variant of TronAssetIdentifierDetails exists with 'type=${json['type']}'`);
    }
}

export function TronAssetIdentifierDetailsToJSON(json: any): any {
    return TronAssetIdentifierDetailsToJSONTyped(json, false);
}

function TronAssetIdentifierDetailsToJSONTyped(value?: TronAssetIdentifierDetails | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'native':
            return Object.assign({}, TronNativeAssetIdentifierRequestToJSON(value), { type: 'native' } as const);
        case 'trc20':
            return Object.assign({}, TronTrc20AssetIdentifierRequestToJSON(value), { type: 'trc20' } as const);
        default:
            throw new Error(`No variant of TronAssetIdentifierDetails exists with 'type=${value['type']}'`);
    }

}

