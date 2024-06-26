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
import type { EvmMessageDomainData } from './EvmMessageDomainData';
import {
    EvmMessageDomainDataFromJSON,
    EvmMessageDomainDataFromJSONTyped,
    EvmMessageDomainDataToJSON,
} from './EvmMessageDomainData';

/**
 * 
 * @export
 * @interface UnknownTypedMessageEvmMessage
 */
export interface UnknownTypedMessageEvmMessage {
    /**
     * 
     * @type {EvmMessageDomainData}
     * @memberof UnknownTypedMessageEvmMessage
     */
    domain: EvmMessageDomainData;
    /**
     * 
     * @type {string}
     * @memberof UnknownTypedMessageEvmMessage
     */
    type: UnknownTypedMessageEvmMessageTypeEnum;
}


/**
 * @export
 */
export const UnknownTypedMessageEvmMessageTypeEnum = {
    unknown: 'unknown'
} as const;
export type UnknownTypedMessageEvmMessageTypeEnum = typeof UnknownTypedMessageEvmMessageTypeEnum[keyof typeof UnknownTypedMessageEvmMessageTypeEnum];


/**
 * Check if a given object implements the UnknownTypedMessageEvmMessage interface.
 */
export function instanceOfUnknownTypedMessageEvmMessage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "domain" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function UnknownTypedMessageEvmMessageFromJSON(json: any): UnknownTypedMessageEvmMessage {
    return UnknownTypedMessageEvmMessageFromJSONTyped(json, false);
}

export function UnknownTypedMessageEvmMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnknownTypedMessageEvmMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'domain': EvmMessageDomainDataFromJSON(json['domain']),
        'type': json['type'],
    };
}

export function UnknownTypedMessageEvmMessageToJSON(value?: UnknownTypedMessageEvmMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'domain': EvmMessageDomainDataToJSON(value.domain),
        'type': value.type,
    };
}

