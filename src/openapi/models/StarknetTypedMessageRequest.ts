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
import type { StarknetChainUniqueId } from './StarknetChainUniqueId';
import {
    StarknetChainUniqueIdFromJSON,
    StarknetChainUniqueIdFromJSONTyped,
    StarknetChainUniqueIdToJSON,
} from './StarknetChainUniqueId';

/**
 * 
 * @export
 * @interface StarknetTypedMessageRequest
 */
export interface StarknetTypedMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof StarknetTypedMessageRequest
     */
    type: StarknetTypedMessageRequestTypeEnum;
    /**
     * 
     * @type {StarknetChainUniqueId}
     * @memberof StarknetTypedMessageRequest
     */
    chain: StarknetChainUniqueId;
    /**
     * 
     * @type {string}
     * @memberof StarknetTypedMessageRequest
     */
    rawData: string;
}


/**
 * @export
 */
export const StarknetTypedMessageRequestTypeEnum = {
    typedMessageType: 'typed_message_type'
} as const;
export type StarknetTypedMessageRequestTypeEnum = typeof StarknetTypedMessageRequestTypeEnum[keyof typeof StarknetTypedMessageRequestTypeEnum];


/**
 * Check if a given object implements the StarknetTypedMessageRequest interface.
 */
export function instanceOfStarknetTypedMessageRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "rawData" in value;

    return isInstance;
}

export function StarknetTypedMessageRequestFromJSON(json: any): StarknetTypedMessageRequest {
    return StarknetTypedMessageRequestFromJSONTyped(json, false);
}

export function StarknetTypedMessageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StarknetTypedMessageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'chain': StarknetChainUniqueIdFromJSON(json['chain']),
        'rawData': json['raw_data'],
    };
}

export function StarknetTypedMessageRequestToJSON(value?: StarknetTypedMessageRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'chain': StarknetChainUniqueIdToJSON(value.chain),
        'raw_data': value.rawData,
    };
}

