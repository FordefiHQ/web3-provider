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

import type { CosmosNativeAssetIdentifierRequest } from './CosmosNativeAssetIdentifierRequest';
import {
    instanceOfCosmosNativeAssetIdentifierRequest,
    CosmosNativeAssetIdentifierRequestFromJSON,
    CosmosNativeAssetIdentifierRequestFromJSONTyped,
    CosmosNativeAssetIdentifierRequestToJSON,
} from './CosmosNativeAssetIdentifierRequest';
import type { CosmosTokenAssetIdentifierRequest } from './CosmosTokenAssetIdentifierRequest';
import {
    instanceOfCosmosTokenAssetIdentifierRequest,
    CosmosTokenAssetIdentifierRequestFromJSON,
    CosmosTokenAssetIdentifierRequestFromJSONTyped,
    CosmosTokenAssetIdentifierRequestToJSON,
} from './CosmosTokenAssetIdentifierRequest';

/**
 * @type CosmosAssetIdentifierDetails
 * 
 * @export
 */
export type CosmosAssetIdentifierDetails = { type: 'native' } & CosmosNativeAssetIdentifierRequest | { type: 'token' } & CosmosTokenAssetIdentifierRequest;

export function CosmosAssetIdentifierDetailsFromJSON(json: any): CosmosAssetIdentifierDetails {
    return CosmosAssetIdentifierDetailsFromJSONTyped(json, false);
}

export function CosmosAssetIdentifierDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosAssetIdentifierDetails {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'native':
            return Object.assign({}, CosmosNativeAssetIdentifierRequestFromJSONTyped(json, true), { type: 'native' } as const);
        case 'token':
            return Object.assign({}, CosmosTokenAssetIdentifierRequestFromJSONTyped(json, true), { type: 'token' } as const);
        default:
            throw new Error(`No variant of CosmosAssetIdentifierDetails exists with 'type=${json['type']}'`);
    }
}

export function CosmosAssetIdentifierDetailsToJSON(json: any): any {
    return CosmosAssetIdentifierDetailsToJSONTyped(json, false);
}

export function CosmosAssetIdentifierDetailsToJSONTyped(value?: CosmosAssetIdentifierDetails | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'native':
            return Object.assign({}, CosmosNativeAssetIdentifierRequestToJSON(value), { type: 'native' } as const);
        case 'token':
            return Object.assign({}, CosmosTokenAssetIdentifierRequestToJSON(value), { type: 'token' } as const);
        default:
            throw new Error(`No variant of CosmosAssetIdentifierDetails exists with 'type=${value['type']}'`);
    }

}

