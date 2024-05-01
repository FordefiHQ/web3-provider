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
import type { EnrichedEvmAddress } from './EnrichedEvmAddress';
import {
    EnrichedEvmAddressFromJSON,
    EnrichedEvmAddressFromJSONTyped,
    EnrichedEvmAddressToJSON,
} from './EnrichedEvmAddress';
import type { EvmMessageDomainData } from './EvmMessageDomainData';
import {
    EvmMessageDomainDataFromJSON,
    EvmMessageDomainDataFromJSONTyped,
    EvmMessageDomainDataToJSON,
} from './EvmMessageDomainData';

/**
 * 
 * @export
 * @interface Permit2TypedMessageEvmMessage
 */
export interface Permit2TypedMessageEvmMessage {
    /**
     * 
     * @type {EvmMessageDomainData}
     * @memberof Permit2TypedMessageEvmMessage
     */
    domain: EvmMessageDomainData;
    /**
     * 
     * @type {string}
     * @memberof Permit2TypedMessageEvmMessage
     */
    type: Permit2TypedMessageEvmMessageTypeEnum;
    /**
     * 
     * @type {EnrichedEvmAddress}
     * @memberof Permit2TypedMessageEvmMessage
     */
    spender: EnrichedEvmAddress;
    /**
     * 
     * @type {Date}
     * @memberof Permit2TypedMessageEvmMessage
     */
    deadline: Date;
    /**
     * 
     * @type {EnrichedEvmAddress}
     * @memberof Permit2TypedMessageEvmMessage
     */
    token: EnrichedEvmAddress;
    /**
     * 
     * @type {string}
     * @memberof Permit2TypedMessageEvmMessage
     */
    value: string;
    /**
     * 
     * @type {Date}
     * @memberof Permit2TypedMessageEvmMessage
     */
    expiration: Date;
    /**
     * 
     * @type {number}
     * @memberof Permit2TypedMessageEvmMessage
     */
    nonce: number;
}


/**
 * @export
 */
export const Permit2TypedMessageEvmMessageTypeEnum = {
    permit2: 'permit2'
} as const;
export type Permit2TypedMessageEvmMessageTypeEnum = typeof Permit2TypedMessageEvmMessageTypeEnum[keyof typeof Permit2TypedMessageEvmMessageTypeEnum];


/**
 * Check if a given object implements the Permit2TypedMessageEvmMessage interface.
 */
export function instanceOfPermit2TypedMessageEvmMessage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "domain" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "spender" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "token" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "expiration" in value;
    isInstance = isInstance && "nonce" in value;

    return isInstance;
}

export function Permit2TypedMessageEvmMessageFromJSON(json: any): Permit2TypedMessageEvmMessage {
    return Permit2TypedMessageEvmMessageFromJSONTyped(json, false);
}

export function Permit2TypedMessageEvmMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Permit2TypedMessageEvmMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'domain': EvmMessageDomainDataFromJSON(json['domain']),
        'type': json['type'],
        'spender': EnrichedEvmAddressFromJSON(json['spender']),
        'deadline': (new Date(json['deadline'])),
        'token': EnrichedEvmAddressFromJSON(json['token']),
        'value': json['value'],
        'expiration': (new Date(json['expiration'])),
        'nonce': json['nonce'],
    };
}

export function Permit2TypedMessageEvmMessageToJSON(value?: Permit2TypedMessageEvmMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'domain': EvmMessageDomainDataToJSON(value.domain),
        'type': value.type,
        'spender': EnrichedEvmAddressToJSON(value.spender),
        'deadline': (value.deadline.toISOString()),
        'token': EnrichedEvmAddressToJSON(value.token),
        'value': value.value,
        'expiration': (value.expiration.toISOString()),
        'nonce': value.nonce,
    };
}

