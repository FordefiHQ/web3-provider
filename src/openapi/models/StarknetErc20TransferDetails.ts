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
import type { EnrichedStarknetAddress } from './EnrichedStarknetAddress';
import {
    EnrichedStarknetAddressFromJSON,
    EnrichedStarknetAddressFromJSONTyped,
    EnrichedStarknetAddressToJSON,
} from './EnrichedStarknetAddress';

/**
 * 
 * @export
 * @interface StarknetErc20TransferDetails
 */
export interface StarknetErc20TransferDetails {
    /**
     * 
     * @type {string}
     * @memberof StarknetErc20TransferDetails
     */
    type: StarknetErc20TransferDetailsTypeEnum;
    /**
     * 
     * @type {EnrichedStarknetAddress}
     * @memberof StarknetErc20TransferDetails
     */
    sender: EnrichedStarknetAddress;
    /**
     * 
     * @type {EnrichedStarknetAddress}
     * @memberof StarknetErc20TransferDetails
     */
    recipient: EnrichedStarknetAddress;
    /**
     * 
     * @type {boolean}
     * @memberof StarknetErc20TransferDetails
     */
    isInternal?: boolean;
}


/**
 * @export
 */
export const StarknetErc20TransferDetailsTypeEnum = {
    erc20Transfer: 'erc20_transfer'
} as const;
export type StarknetErc20TransferDetailsTypeEnum = typeof StarknetErc20TransferDetailsTypeEnum[keyof typeof StarknetErc20TransferDetailsTypeEnum];


/**
 * Check if a given object implements the StarknetErc20TransferDetails interface.
 */
export function instanceOfStarknetErc20TransferDetails(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "sender" in value;
    isInstance = isInstance && "recipient" in value;

    return isInstance;
}

export function StarknetErc20TransferDetailsFromJSON(json: any): StarknetErc20TransferDetails {
    return StarknetErc20TransferDetailsFromJSONTyped(json, false);
}

export function StarknetErc20TransferDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): StarknetErc20TransferDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'sender': EnrichedStarknetAddressFromJSON(json['sender']),
        'recipient': EnrichedStarknetAddressFromJSON(json['recipient']),
        'isInternal': !exists(json, 'is_internal') ? undefined : json['is_internal'],
    };
}

export function StarknetErc20TransferDetailsToJSON(value?: StarknetErc20TransferDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'sender': EnrichedStarknetAddressToJSON(value.sender),
        'recipient': EnrichedStarknetAddressToJSON(value.recipient),
        'is_internal': value.isInternal,
    };
}

