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
import type { SuiChainUniqueId } from './SuiChainUniqueId';
import {
    SuiChainUniqueIdFromJSON,
    SuiChainUniqueIdFromJSONTyped,
    SuiChainUniqueIdToJSON,
} from './SuiChainUniqueId';

/**
 * 
 * @export
 * @interface SuiPersonalMessageRequest
 */
export interface SuiPersonalMessageRequest {
    /**
     * 
     * @type {string}
     * @memberof SuiPersonalMessageRequest
     */
    type: SuiPersonalMessageRequestTypeEnum;
    /**
     * 
     * @type {SuiChainUniqueId}
     * @memberof SuiPersonalMessageRequest
     */
    chain: SuiChainUniqueId;
    /**
     * 
     * @type {string}
     * @memberof SuiPersonalMessageRequest
     */
    rawData: string;
}


/**
 * @export
 */
export const SuiPersonalMessageRequestTypeEnum = {
    personalMessageType: 'personal_message_type'
} as const;
export type SuiPersonalMessageRequestTypeEnum = typeof SuiPersonalMessageRequestTypeEnum[keyof typeof SuiPersonalMessageRequestTypeEnum];


/**
 * Check if a given object implements the SuiPersonalMessageRequest interface.
 */
export function instanceOfSuiPersonalMessageRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "chain" in value;
    isInstance = isInstance && "rawData" in value;

    return isInstance;
}

export function SuiPersonalMessageRequestFromJSON(json: any): SuiPersonalMessageRequest {
    return SuiPersonalMessageRequestFromJSONTyped(json, false);
}

export function SuiPersonalMessageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiPersonalMessageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'chain': SuiChainUniqueIdFromJSON(json['chain']),
        'rawData': json['raw_data'],
    };
}

export function SuiPersonalMessageRequestToJSON(value?: SuiPersonalMessageRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'chain': SuiChainUniqueIdToJSON(value.chain),
        'raw_data': value.rawData,
    };
}

