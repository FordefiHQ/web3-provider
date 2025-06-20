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

import type { EnrichedStarknetChain } from './EnrichedStarknetChain';
import {
    EnrichedStarknetChainFromJSON,
} from './EnrichedStarknetChain';
import type { StarknetAssetIdentifierDetails } from './StarknetAssetIdentifierDetails';
import {
    StarknetAssetIdentifierDetailsFromJSON,
} from './StarknetAssetIdentifierDetails';

/**
 * 
 * @export
 * @interface StarknetAssetIdentifier
 */
export interface StarknetAssetIdentifier {
    /**
     * 
     * @type {string}
     * @memberof StarknetAssetIdentifier
     */
    type: StarknetAssetIdentifierTypeEnum;
    /**
     * 
     * @type {StarknetAssetIdentifierDetails}
     * @memberof StarknetAssetIdentifier
     */
    details: StarknetAssetIdentifierDetails;
    /**
     * 
     * @type {EnrichedStarknetChain}
     * @memberof StarknetAssetIdentifier
     */
    chain: EnrichedStarknetChain;
}


/**
 * 
 */
const StarknetAssetIdentifierTypeEnum = {
    starknet: 'starknet'
} as const;
type StarknetAssetIdentifierTypeEnum = typeof StarknetAssetIdentifierTypeEnum[keyof typeof StarknetAssetIdentifierTypeEnum];

export function StarknetAssetIdentifierFromJSONTyped(json: any, _ignoreDiscriminator: boolean): StarknetAssetIdentifier {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'details': StarknetAssetIdentifierDetailsFromJSON(json['details']),
        'chain': EnrichedStarknetChainFromJSON(json['chain']),
    };
}
