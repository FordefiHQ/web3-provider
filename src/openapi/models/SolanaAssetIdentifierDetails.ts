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
    SolanaNativeAssetIdentifierRequest,
    instanceOfSolanaNativeAssetIdentifierRequest,
    SolanaNativeAssetIdentifierRequestFromJSON,
    SolanaNativeAssetIdentifierRequestFromJSONTyped,
    SolanaNativeAssetIdentifierRequestToJSON,
} from './SolanaNativeAssetIdentifierRequest';
import {
    SolanaSplTokenAssetIdentifierRequest,
    instanceOfSolanaSplTokenAssetIdentifierRequest,
    SolanaSplTokenAssetIdentifierRequestFromJSON,
    SolanaSplTokenAssetIdentifierRequestFromJSONTyped,
    SolanaSplTokenAssetIdentifierRequestToJSON,
} from './SolanaSplTokenAssetIdentifierRequest';

/**
 * @type SolanaAssetIdentifierDetails
 * 
 * @export
 */
export type SolanaAssetIdentifierDetails = { type: 'native' } & SolanaNativeAssetIdentifierRequest | { type: 'spl_token' } & SolanaSplTokenAssetIdentifierRequest;

export function SolanaAssetIdentifierDetailsFromJSON(json: any): SolanaAssetIdentifierDetails {
    return SolanaAssetIdentifierDetailsFromJSONTyped(json, false);
}

export function SolanaAssetIdentifierDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolanaAssetIdentifierDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'native':
            return {...SolanaNativeAssetIdentifierRequestFromJSONTyped(json, true), type: 'native'};
        case 'spl_token':
            return {...SolanaSplTokenAssetIdentifierRequestFromJSONTyped(json, true), type: 'spl_token'};
        default:
            throw new Error(`No variant of SolanaAssetIdentifierDetails exists with 'type=${json['type']}'`);
    }
}

export function SolanaAssetIdentifierDetailsToJSON(value?: SolanaAssetIdentifierDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'native':
            return SolanaNativeAssetIdentifierRequestToJSON(value);
        case 'spl_token':
            return SolanaSplTokenAssetIdentifierRequestToJSON(value);
        default:
            throw new Error(`No variant of SolanaAssetIdentifierDetails exists with 'type=${value['type']}'`);
    }

}

