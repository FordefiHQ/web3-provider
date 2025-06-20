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

import type { EnrichedTronAddress } from './EnrichedTronAddress';
import {
    EnrichedTronAddressFromJSON,
} from './EnrichedTronAddress';

/**
 * 
 * @export
 * @interface TronNativeTransferDetails
 */
export interface TronNativeTransferDetails {
    /**
     * 
     * @type {string}
     * @memberof TronNativeTransferDetails
     */
    type: TronNativeTransferDetailsTypeEnum;
    /**
     * 
     * @type {EnrichedTronAddress}
     * @memberof TronNativeTransferDetails
     */
    sender: EnrichedTronAddress;
    /**
     * 
     * @type {EnrichedTronAddress}
     * @memberof TronNativeTransferDetails
     */
    recipient: EnrichedTronAddress;
    /**
     * 
     * @type {boolean}
     * @memberof TronNativeTransferDetails
     */
    isInternal?: boolean;
}


/**
 * 
 */
const TronNativeTransferDetailsTypeEnum = {
    nativeTransfer: 'native_transfer'
} as const;
type TronNativeTransferDetailsTypeEnum = typeof TronNativeTransferDetailsTypeEnum[keyof typeof TronNativeTransferDetailsTypeEnum];

export function TronNativeTransferDetailsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): TronNativeTransferDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'sender': EnrichedTronAddressFromJSON(json['sender']),
        'recipient': EnrichedTronAddressFromJSON(json['recipient']),
        'isInternal': json['is_internal'] == null ? undefined : json['is_internal'],
    };
}
