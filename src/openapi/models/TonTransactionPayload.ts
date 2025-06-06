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
import type { TonTransactionMessage } from './TonTransactionMessage';
import {
    TonTransactionMessageFromJSON,
    TonTransactionMessageFromJSONTyped,
    TonTransactionMessageToJSON,
    TonTransactionMessageToJSONTyped,
} from './TonTransactionMessage';
import type { TonNetwork } from './TonNetwork';
import {
    TonNetworkFromJSON,
    TonNetworkFromJSONTyped,
    TonNetworkToJSON,
    TonNetworkToJSONTyped,
} from './TonNetwork';

/**
 * 
 * @export
 * @interface TonTransactionPayload
 */
export interface TonTransactionPayload {
    /**
     * 
     * @type {number}
     * @memberof TonTransactionPayload
     */
    validUntil?: number;
    /**
     * 
     * @type {TonNetwork}
     * @memberof TonTransactionPayload
     */
    network?: TonNetwork;
    /**
     * 
     * @type {Array<TonTransactionMessage>}
     * @memberof TonTransactionPayload
     */
    messages: Array<TonTransactionMessage>;
}



/**
 * Check if a given object implements the TonTransactionPayload interface.
 */
export function instanceOfTonTransactionPayload(value: object): value is TonTransactionPayload {
    if (!('messages' in value) || value['messages'] === undefined) return false;
    return true;
}

export function TonTransactionPayloadFromJSON(json: any): TonTransactionPayload {
    return TonTransactionPayloadFromJSONTyped(json, false);
}

export function TonTransactionPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonTransactionPayload {
    if (json == null) {
        return json;
    }
    return {
        
        'validUntil': json['valid_until'] == null ? undefined : json['valid_until'],
        'network': json['network'] == null ? undefined : TonNetworkFromJSON(json['network']),
        'messages': ((json['messages'] as Array<any>).map(TonTransactionMessageFromJSON)),
    };
}

export function TonTransactionPayloadToJSON(json: any): TonTransactionPayload {
    return TonTransactionPayloadToJSONTyped(json, false);
}

export function TonTransactionPayloadToJSONTyped(value?: TonTransactionPayload | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'valid_until': value['validUntil'],
        'network': TonNetworkToJSON(value['network']),
        'messages': ((value['messages'] as Array<any>).map(TonTransactionMessageToJSON)),
    };
}

