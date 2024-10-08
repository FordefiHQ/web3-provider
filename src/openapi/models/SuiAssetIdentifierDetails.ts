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

import {
    SuiCoinAssetIdentifierRequest,
    instanceOfSuiCoinAssetIdentifierRequest,
    SuiCoinAssetIdentifierRequestFromJSON,
    SuiCoinAssetIdentifierRequestFromJSONTyped,
    SuiCoinAssetIdentifierRequestToJSON,
} from './SuiCoinAssetIdentifierRequest';
import {
    SuiNativeAssetIdentifierRequest,
    instanceOfSuiNativeAssetIdentifierRequest,
    SuiNativeAssetIdentifierRequestFromJSON,
    SuiNativeAssetIdentifierRequestFromJSONTyped,
    SuiNativeAssetIdentifierRequestToJSON,
} from './SuiNativeAssetIdentifierRequest';

/**
 * @type SuiAssetIdentifierDetails
 * 
 * @export
 */
export type SuiAssetIdentifierDetails = { type: 'coin' } & SuiCoinAssetIdentifierRequest | { type: 'native' } & SuiNativeAssetIdentifierRequest;

export function SuiAssetIdentifierDetailsFromJSON(json: any): SuiAssetIdentifierDetails {
    return SuiAssetIdentifierDetailsFromJSONTyped(json, false);
}

export function SuiAssetIdentifierDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiAssetIdentifierDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'coin':
            return {...SuiCoinAssetIdentifierRequestFromJSONTyped(json, true), type: 'coin'};
        case 'native':
            return {...SuiNativeAssetIdentifierRequestFromJSONTyped(json, true), type: 'native'};
        default:
            throw new Error(`No variant of SuiAssetIdentifierDetails exists with 'type=${json['type']}'`);
    }
}

export function SuiAssetIdentifierDetailsToJSON(value?: SuiAssetIdentifierDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'coin':
            return SuiCoinAssetIdentifierRequestToJSON(value);
        case 'native':
            return SuiNativeAssetIdentifierRequestToJSON(value);
        default:
            throw new Error(`No variant of SuiAssetIdentifierDetails exists with 'type=${value['type']}'`);
    }

}

