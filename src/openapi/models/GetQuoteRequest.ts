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
import type { AssetIdentifierRequest } from './AssetIdentifierRequest';
import {
    AssetIdentifierRequestFromJSON,
    AssetIdentifierRequestFromJSONTyped,
    AssetIdentifierRequestToJSON,
    AssetIdentifierRequestToJSONTyped,
} from './AssetIdentifierRequest';
import type { SignerType } from './SignerType';
import {
    SignerTypeFromJSON,
    SignerTypeFromJSONTyped,
    SignerTypeToJSON,
    SignerTypeToJSONTyped,
} from './SignerType';

/**
 * 
 * @export
 * @interface GetQuoteRequest
 */
export interface GetQuoteRequest {
    /**
     * 
     * @type {string}
     * @memberof GetQuoteRequest
     */
    type: GetQuoteRequestTypeEnum;
    /**
     * 
     * @type {AssetIdentifierRequest}
     * @memberof GetQuoteRequest
     */
    inputAssetIdentifier: AssetIdentifierRequest;
    /**
     * 
     * @type {AssetIdentifierRequest}
     * @memberof GetQuoteRequest
     */
    outputAssetIdentifier: AssetIdentifierRequest;
    /**
     * 
     * @type {string}
     * @memberof GetQuoteRequest
     */
    amount: string;
    /**
     * 
     * @type {string}
     * @memberof GetQuoteRequest
     */
    slippageBps?: string;
    /**
     * 
     * @type {SignerType}
     * @memberof GetQuoteRequest
     */
    signerType?: SignerType;
}


/**
 * @export
 */
export const GetQuoteRequestTypeEnum = {
    solanaTransaction: 'solana_transaction'
} as const;
export type GetQuoteRequestTypeEnum = typeof GetQuoteRequestTypeEnum[keyof typeof GetQuoteRequestTypeEnum];


/**
 * Check if a given object implements the GetQuoteRequest interface.
 */
export function instanceOfGetQuoteRequest(value: object): value is GetQuoteRequest {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('inputAssetIdentifier' in value) || value['inputAssetIdentifier'] === undefined) return false;
    if (!('outputAssetIdentifier' in value) || value['outputAssetIdentifier'] === undefined) return false;
    if (!('amount' in value) || value['amount'] === undefined) return false;
    return true;
}

export function GetQuoteRequestFromJSON(json: any): GetQuoteRequest {
    return GetQuoteRequestFromJSONTyped(json, false);
}

export function GetQuoteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetQuoteRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'inputAssetIdentifier': AssetIdentifierRequestFromJSON(json['input_asset_identifier']),
        'outputAssetIdentifier': AssetIdentifierRequestFromJSON(json['output_asset_identifier']),
        'amount': json['amount'],
        'slippageBps': json['slippage_bps'] == null ? undefined : json['slippage_bps'],
        'signerType': json['signer_type'] == null ? undefined : SignerTypeFromJSON(json['signer_type']),
    };
}

export function GetQuoteRequestToJSON(json: any): GetQuoteRequest {
    return GetQuoteRequestToJSONTyped(json, false);
}

export function GetQuoteRequestToJSONTyped(value?: GetQuoteRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'input_asset_identifier': AssetIdentifierRequestToJSON(value['inputAssetIdentifier']),
        'output_asset_identifier': AssetIdentifierRequestToJSON(value['outputAssetIdentifier']),
        'amount': value['amount'],
        'slippage_bps': value['slippageBps'],
        'signer_type': SignerTypeToJSON(value['signerType']),
    };
}

