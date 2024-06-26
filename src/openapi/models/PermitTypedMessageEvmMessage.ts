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
 * @interface PermitTypedMessageEvmMessage
 */
export interface PermitTypedMessageEvmMessage {
    /**
     * 
     * @type {EvmMessageDomainData}
     * @memberof PermitTypedMessageEvmMessage
     */
    domain: EvmMessageDomainData;
    /**
     * 
     * @type {string}
     * @memberof PermitTypedMessageEvmMessage
     */
    type: PermitTypedMessageEvmMessageTypeEnum;
    /**
     * 
     * @type {EnrichedEvmAddress}
     * @memberof PermitTypedMessageEvmMessage
     */
    owner: EnrichedEvmAddress;
    /**
     * 
     * @type {EnrichedEvmAddress}
     * @memberof PermitTypedMessageEvmMessage
     */
    spender: EnrichedEvmAddress;
    /**
     * 
     * @type {string}
     * @memberof PermitTypedMessageEvmMessage
     */
    value: string;
    /**
     * 
     * @type {Date}
     * @memberof PermitTypedMessageEvmMessage
     */
    deadline: Date;
    /**
     * 
     * @type {number}
     * @memberof PermitTypedMessageEvmMessage
     */
    nonce: number;
}


/**
 * @export
 */
export const PermitTypedMessageEvmMessageTypeEnum = {
    permit: 'permit'
} as const;
export type PermitTypedMessageEvmMessageTypeEnum = typeof PermitTypedMessageEvmMessageTypeEnum[keyof typeof PermitTypedMessageEvmMessageTypeEnum];


/**
 * Check if a given object implements the PermitTypedMessageEvmMessage interface.
 */
export function instanceOfPermitTypedMessageEvmMessage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "domain" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "owner" in value;
    isInstance = isInstance && "spender" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "nonce" in value;

    return isInstance;
}

export function PermitTypedMessageEvmMessageFromJSON(json: any): PermitTypedMessageEvmMessage {
    return PermitTypedMessageEvmMessageFromJSONTyped(json, false);
}

export function PermitTypedMessageEvmMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): PermitTypedMessageEvmMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'domain': EvmMessageDomainDataFromJSON(json['domain']),
        'type': json['type'],
        'owner': EnrichedEvmAddressFromJSON(json['owner']),
        'spender': EnrichedEvmAddressFromJSON(json['spender']),
        'value': json['value'],
        'deadline': (new Date(json['deadline'])),
        'nonce': json['nonce'],
    };
}

export function PermitTypedMessageEvmMessageToJSON(value?: PermitTypedMessageEvmMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'domain': EvmMessageDomainDataToJSON(value.domain),
        'type': value.type,
        'owner': EnrichedEvmAddressToJSON(value.owner),
        'spender': EnrichedEvmAddressToJSON(value.spender),
        'value': value.value,
        'deadline': (value.deadline.toISOString()),
        'nonce': value.nonce,
    };
}

