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

import type { TransferDirection } from './TransferDirection';
import {
    TransferDirectionFromJSON,
} from './TransferDirection';
import type { EnrichedSolanaAddress } from './EnrichedSolanaAddress';
import {
    EnrichedSolanaAddressFromJSON,
} from './EnrichedSolanaAddress';

/**
 * 
 * @export
 * @interface SolanaTokenTransferDetails
 */
export interface SolanaTokenTransferDetails {
    /**
     * 
     * @type {string}
     * @memberof SolanaTokenTransferDetails
     */
    type: SolanaTokenTransferDetailsTypeEnum;
    /**
     * 
     * @type {TransferDirection}
     * @memberof SolanaTokenTransferDetails
     */
    direction: TransferDirection;
    /**
     * 
     * @type {EnrichedSolanaAddress}
     * @memberof SolanaTokenTransferDetails
     */
    sender: EnrichedSolanaAddress;
    /**
     * 
     * @type {EnrichedSolanaAddress}
     * @memberof SolanaTokenTransferDetails
     */
    recipient: EnrichedSolanaAddress;
    /**
     * 
     * @type {boolean}
     * @memberof SolanaTokenTransferDetails
     */
    isInternal?: boolean;
}


/**
 * 
 */
const SolanaTokenTransferDetailsTypeEnum = {
    tokenTransfer: 'token_transfer'
} as const;
type SolanaTokenTransferDetailsTypeEnum = typeof SolanaTokenTransferDetailsTypeEnum[keyof typeof SolanaTokenTransferDetailsTypeEnum];

export function SolanaTokenTransferDetailsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): SolanaTokenTransferDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'direction': TransferDirectionFromJSON(json['direction']),
        'sender': EnrichedSolanaAddressFromJSON(json['sender']),
        'recipient': EnrichedSolanaAddressFromJSON(json['recipient']),
        'isInternal': json['is_internal'] == null ? undefined : json['is_internal'],
    };
}
