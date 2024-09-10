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
    TonJettonAssetIdentifierRequest,
    instanceOfTonJettonAssetIdentifierRequest,
    TonJettonAssetIdentifierRequestFromJSON,
    TonJettonAssetIdentifierRequestFromJSONTyped,
    TonJettonAssetIdentifierRequestToJSON,
} from './TonJettonAssetIdentifierRequest';
import {
    TonNativeAssetIdentifierRequest,
    instanceOfTonNativeAssetIdentifierRequest,
    TonNativeAssetIdentifierRequestFromJSON,
    TonNativeAssetIdentifierRequestFromJSONTyped,
    TonNativeAssetIdentifierRequestToJSON,
} from './TonNativeAssetIdentifierRequest';

/**
 * @type TonAssetIdentifierDetails
 * 
 * @export
 */
export type TonAssetIdentifierDetails = { type: 'jetton' } & TonJettonAssetIdentifierRequest | { type: 'native' } & TonNativeAssetIdentifierRequest;

export function TonAssetIdentifierDetailsFromJSON(json: any): TonAssetIdentifierDetails {
    return TonAssetIdentifierDetailsFromJSONTyped(json, false);
}

export function TonAssetIdentifierDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonAssetIdentifierDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'jetton':
            return {...TonJettonAssetIdentifierRequestFromJSONTyped(json, true), type: 'jetton'};
        case 'native':
            return {...TonNativeAssetIdentifierRequestFromJSONTyped(json, true), type: 'native'};
        default:
            throw new Error(`No variant of TonAssetIdentifierDetails exists with 'type=${json['type']}'`);
    }
}

export function TonAssetIdentifierDetailsToJSON(value?: TonAssetIdentifierDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'jetton':
            return TonJettonAssetIdentifierRequestToJSON(value);
        case 'native':
            return TonNativeAssetIdentifierRequestToJSON(value);
        default:
            throw new Error(`No variant of TonAssetIdentifierDetails exists with 'type=${value['type']}'`);
    }

}

