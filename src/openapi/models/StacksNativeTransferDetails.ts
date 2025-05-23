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
import type { EnrichedStacksAddress } from './EnrichedStacksAddress';
import {
    EnrichedStacksAddressFromJSON,
    EnrichedStacksAddressFromJSONTyped,
    EnrichedStacksAddressToJSON,
    EnrichedStacksAddressToJSONTyped,
} from './EnrichedStacksAddress';

/**
 * 
 * @export
 * @interface StacksNativeTransferDetails
 */
export interface StacksNativeTransferDetails {
    /**
     * 
     * @type {string}
     * @memberof StacksNativeTransferDetails
     */
    type: StacksNativeTransferDetailsTypeEnum;
    /**
     * 
     * @type {EnrichedStacksAddress}
     * @memberof StacksNativeTransferDetails
     */
    sender: EnrichedStacksAddress;
    /**
     * 
     * @type {EnrichedStacksAddress}
     * @memberof StacksNativeTransferDetails
     */
    recipient: EnrichedStacksAddress;
    /**
     * 
     * @type {boolean}
     * @memberof StacksNativeTransferDetails
     */
    isInternal?: boolean;
}


/**
 * @export
 */
export const StacksNativeTransferDetailsTypeEnum = {
    nativeTransfer: 'native_transfer'
} as const;
export type StacksNativeTransferDetailsTypeEnum = typeof StacksNativeTransferDetailsTypeEnum[keyof typeof StacksNativeTransferDetailsTypeEnum];


/**
 * Check if a given object implements the StacksNativeTransferDetails interface.
 */
export function instanceOfStacksNativeTransferDetails(value: object): value is StacksNativeTransferDetails {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('sender' in value) || value['sender'] === undefined) return false;
    if (!('recipient' in value) || value['recipient'] === undefined) return false;
    return true;
}

export function StacksNativeTransferDetailsFromJSON(json: any): StacksNativeTransferDetails {
    return StacksNativeTransferDetailsFromJSONTyped(json, false);
}

export function StacksNativeTransferDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): StacksNativeTransferDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'sender': EnrichedStacksAddressFromJSON(json['sender']),
        'recipient': EnrichedStacksAddressFromJSON(json['recipient']),
        'isInternal': json['is_internal'] == null ? undefined : json['is_internal'],
    };
}

export function StacksNativeTransferDetailsToJSON(json: any): StacksNativeTransferDetails {
    return StacksNativeTransferDetailsToJSONTyped(json, false);
}

export function StacksNativeTransferDetailsToJSONTyped(value?: StacksNativeTransferDetails | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'sender': EnrichedStacksAddressToJSON(value['sender']),
        'recipient': EnrichedStacksAddressToJSON(value['recipient']),
        'is_internal': value['isInternal'],
    };
}

