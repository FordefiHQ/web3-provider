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

import { mapValues } from '../runtime';
import type { TonAddressRequest } from './TonAddressRequest';
import {
    TonAddressRequestFromJSON,
    TonAddressRequestFromJSONTyped,
    TonAddressRequestToJSON,
    TonAddressRequestToJSONTyped,
} from './TonAddressRequest';

/**
 * 
 * @export
 * @interface TonJettonAssetIdentifierRequest
 */
export interface TonJettonAssetIdentifierRequest {
    /**
     * 
     * @type {string}
     * @memberof TonJettonAssetIdentifierRequest
     */
    type: TonJettonAssetIdentifierRequestTypeEnum;
    /**
     * 
     * @type {TonAddressRequest}
     * @memberof TonJettonAssetIdentifierRequest
     */
    jetton: TonAddressRequest;
}


/**
 * @export
 */
export const TonJettonAssetIdentifierRequestTypeEnum = {
    jetton: 'jetton'
} as const;
export type TonJettonAssetIdentifierRequestTypeEnum = typeof TonJettonAssetIdentifierRequestTypeEnum[keyof typeof TonJettonAssetIdentifierRequestTypeEnum];


/**
 * Check if a given object implements the TonJettonAssetIdentifierRequest interface.
 */
export function instanceOfTonJettonAssetIdentifierRequest(value: object): value is TonJettonAssetIdentifierRequest {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('jetton' in value) || value['jetton'] === undefined) return false;
    return true;
}

export function TonJettonAssetIdentifierRequestFromJSON(json: any): TonJettonAssetIdentifierRequest {
    return TonJettonAssetIdentifierRequestFromJSONTyped(json, false);
}

export function TonJettonAssetIdentifierRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonJettonAssetIdentifierRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'jetton': TonAddressRequestFromJSON(json['jetton']),
    };
}

export function TonJettonAssetIdentifierRequestToJSON(json: any): TonJettonAssetIdentifierRequest {
    return TonJettonAssetIdentifierRequestToJSONTyped(json, false);
}

export function TonJettonAssetIdentifierRequestToJSONTyped(value?: TonJettonAssetIdentifierRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'jetton': TonAddressRequestToJSON(value['jetton']),
    };
}

