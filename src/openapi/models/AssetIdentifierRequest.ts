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
    AptosAssetIdentifierRequest,
    instanceOfAptosAssetIdentifierRequest,
    AptosAssetIdentifierRequestFromJSON,
    AptosAssetIdentifierRequestFromJSONTyped,
    AptosAssetIdentifierRequestToJSON,
} from './AptosAssetIdentifierRequest';
import {
    CosmosAssetIdentifierRequest,
    instanceOfCosmosAssetIdentifierRequest,
    CosmosAssetIdentifierRequestFromJSON,
    CosmosAssetIdentifierRequestFromJSONTyped,
    CosmosAssetIdentifierRequestToJSON,
} from './CosmosAssetIdentifierRequest';
import {
    EvmAssetIdentifierRequest,
    instanceOfEvmAssetIdentifierRequest,
    EvmAssetIdentifierRequestFromJSON,
    EvmAssetIdentifierRequestFromJSONTyped,
    EvmAssetIdentifierRequestToJSON,
} from './EvmAssetIdentifierRequest';
import {
    SolanaAssetIdentifierRequest,
    instanceOfSolanaAssetIdentifierRequest,
    SolanaAssetIdentifierRequestFromJSON,
    SolanaAssetIdentifierRequestFromJSONTyped,
    SolanaAssetIdentifierRequestToJSON,
} from './SolanaAssetIdentifierRequest';
import {
    SuiAssetIdentifierRequest,
    instanceOfSuiAssetIdentifierRequest,
    SuiAssetIdentifierRequestFromJSON,
    SuiAssetIdentifierRequestFromJSONTyped,
    SuiAssetIdentifierRequestToJSON,
} from './SuiAssetIdentifierRequest';
import {
    UtxoAssetIdentifierRequest,
    instanceOfUtxoAssetIdentifierRequest,
    UtxoAssetIdentifierRequestFromJSON,
    UtxoAssetIdentifierRequestFromJSONTyped,
    UtxoAssetIdentifierRequestToJSON,
} from './UtxoAssetIdentifierRequest';

/**
 * @type AssetIdentifierRequest
 * 
 * @export
 */
export type AssetIdentifierRequest = { type: 'aptos' } & AptosAssetIdentifierRequest | { type: 'cosmos' } & CosmosAssetIdentifierRequest | { type: 'evm' } & EvmAssetIdentifierRequest | { type: 'solana' } & SolanaAssetIdentifierRequest | { type: 'sui' } & SuiAssetIdentifierRequest | { type: 'utxo' } & UtxoAssetIdentifierRequest;

export function AssetIdentifierRequestFromJSON(json: any): AssetIdentifierRequest {
    return AssetIdentifierRequestFromJSONTyped(json, false);
}

export function AssetIdentifierRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetIdentifierRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'aptos':
            return {...AptosAssetIdentifierRequestFromJSONTyped(json, true), type: 'aptos'};
        case 'cosmos':
            return {...CosmosAssetIdentifierRequestFromJSONTyped(json, true), type: 'cosmos'};
        case 'evm':
            return {...EvmAssetIdentifierRequestFromJSONTyped(json, true), type: 'evm'};
        case 'solana':
            return {...SolanaAssetIdentifierRequestFromJSONTyped(json, true), type: 'solana'};
        case 'sui':
            return {...SuiAssetIdentifierRequestFromJSONTyped(json, true), type: 'sui'};
        case 'utxo':
            return {...UtxoAssetIdentifierRequestFromJSONTyped(json, true), type: 'utxo'};
        default:
            throw new Error(`No variant of AssetIdentifierRequest exists with 'type=${json['type']}'`);
    }
}

export function AssetIdentifierRequestToJSON(value?: AssetIdentifierRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'aptos':
            return AptosAssetIdentifierRequestToJSON(value);
        case 'cosmos':
            return CosmosAssetIdentifierRequestToJSON(value);
        case 'evm':
            return EvmAssetIdentifierRequestToJSON(value);
        case 'solana':
            return SolanaAssetIdentifierRequestToJSON(value);
        case 'sui':
            return SuiAssetIdentifierRequestToJSON(value);
        case 'utxo':
            return UtxoAssetIdentifierRequestToJSON(value);
        default:
            throw new Error(`No variant of AssetIdentifierRequest exists with 'type=${value['type']}'`);
    }

}

