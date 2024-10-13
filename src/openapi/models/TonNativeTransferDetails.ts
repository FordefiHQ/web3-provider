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

import { exists, mapValues } from '../runtime';
import type { EnrichedTonAddress } from './EnrichedTonAddress';
import {
    EnrichedTonAddressFromJSON,
    EnrichedTonAddressFromJSONTyped,
    EnrichedTonAddressToJSON,
} from './EnrichedTonAddress';

/**
 * 
 * @export
 * @interface TonNativeTransferDetails
 */
export interface TonNativeTransferDetails {
    /**
     * 
     * @type {string}
     * @memberof TonNativeTransferDetails
     */
    type: TonNativeTransferDetailsTypeEnum;
    /**
     * 
     * @type {EnrichedTonAddress}
     * @memberof TonNativeTransferDetails
     */
    sender: EnrichedTonAddress;
    /**
     * 
     * @type {EnrichedTonAddress}
     * @memberof TonNativeTransferDetails
     */
    recipient: EnrichedTonAddress;
    /**
     * 
     * @type {boolean}
     * @memberof TonNativeTransferDetails
     */
    isInternal?: boolean;
}


/**
 * @export
 */
export const TonNativeTransferDetailsTypeEnum = {
    nativeTransfer: 'native_transfer'
} as const;
export type TonNativeTransferDetailsTypeEnum = typeof TonNativeTransferDetailsTypeEnum[keyof typeof TonNativeTransferDetailsTypeEnum];


/**
 * Check if a given object implements the TonNativeTransferDetails interface.
 */
export function instanceOfTonNativeTransferDetails(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "sender" in value;
    isInstance = isInstance && "recipient" in value;

    return isInstance;
}

export function TonNativeTransferDetailsFromJSON(json: any): TonNativeTransferDetails {
    return TonNativeTransferDetailsFromJSONTyped(json, false);
}

export function TonNativeTransferDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonNativeTransferDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'sender': EnrichedTonAddressFromJSON(json['sender']),
        'recipient': EnrichedTonAddressFromJSON(json['recipient']),
        'isInternal': !exists(json, 'is_internal') ? undefined : json['is_internal'],
    };
}

export function TonNativeTransferDetailsToJSON(value?: TonNativeTransferDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'sender': EnrichedTonAddressToJSON(value.sender),
        'recipient': EnrichedTonAddressToJSON(value.recipient),
        'is_internal': value.isInternal,
    };
}

