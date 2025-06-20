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

import type { EnrichedTronChain } from './EnrichedTronChain';
import {
    EnrichedTronChainFromJSON,
} from './EnrichedTronChain';
import type { TronAssetIdentifierDetails } from './TronAssetIdentifierDetails';
import {
    TronAssetIdentifierDetailsFromJSON,
} from './TronAssetIdentifierDetails';

/**
 * 
 * @export
 * @interface TronAssetIdentifier
 */
export interface TronAssetIdentifier {
    /**
     * 
     * @type {string}
     * @memberof TronAssetIdentifier
     */
    type: TronAssetIdentifierTypeEnum;
    /**
     * 
     * @type {TronAssetIdentifierDetails}
     * @memberof TronAssetIdentifier
     */
    details: TronAssetIdentifierDetails;
    /**
     * 
     * @type {EnrichedTronChain}
     * @memberof TronAssetIdentifier
     */
    chain: EnrichedTronChain;
}


/**
 * 
 */
const TronAssetIdentifierTypeEnum = {
    tron: 'tron'
} as const;
type TronAssetIdentifierTypeEnum = typeof TronAssetIdentifierTypeEnum[keyof typeof TronAssetIdentifierTypeEnum];

export function TronAssetIdentifierFromJSONTyped(json: any, _ignoreDiscriminator: boolean): TronAssetIdentifier {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'details': TronAssetIdentifierDetailsFromJSON(json['details']),
        'chain': EnrichedTronChainFromJSON(json['chain']),
    };
}
