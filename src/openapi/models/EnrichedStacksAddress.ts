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
import type { VaultRef } from './VaultRef';
import {
    VaultRefFromJSON,
    VaultRefFromJSONTyped,
    VaultRefToJSON,
    VaultRefToJSONTyped,
} from './VaultRef';
import type { ContactRef } from './ContactRef';
import {
    ContactRefFromJSON,
    ContactRefFromJSONTyped,
    ContactRefToJSON,
    ContactRefToJSONTyped,
} from './ContactRef';

/**
 * 
 * @export
 * @interface EnrichedStacksAddress
 */
export interface EnrichedStacksAddress {
    /**
     * 
     * @type {VaultRef}
     * @memberof EnrichedStacksAddress
     */
    vault?: VaultRef;
    /**
     * 
     * @type {string}
     * @memberof EnrichedStacksAddress
     */
    explorerUrl?: string;
    /**
     * 
     * @type {ContactRef}
     * @memberof EnrichedStacksAddress
     */
    contact?: ContactRef;
    /**
     * 
     * @type {string}
     * @memberof EnrichedStacksAddress
     */
    type: EnrichedStacksAddressTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof EnrichedStacksAddress
     */
    address: string;
}


/**
 * @export
 */
export const EnrichedStacksAddressTypeEnum = {
    stacks: 'stacks'
} as const;
export type EnrichedStacksAddressTypeEnum = typeof EnrichedStacksAddressTypeEnum[keyof typeof EnrichedStacksAddressTypeEnum];


/**
 * Check if a given object implements the EnrichedStacksAddress interface.
 */
export function instanceOfEnrichedStacksAddress(value: object): value is EnrichedStacksAddress {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('address' in value) || value['address'] === undefined) return false;
    return true;
}

export function EnrichedStacksAddressFromJSON(json: any): EnrichedStacksAddress {
    return EnrichedStacksAddressFromJSONTyped(json, false);
}

export function EnrichedStacksAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrichedStacksAddress {
    if (json == null) {
        return json;
    }
    return {
        
        'vault': json['vault'] == null ? undefined : VaultRefFromJSON(json['vault']),
        'explorerUrl': json['explorer_url'] == null ? undefined : json['explorer_url'],
        'contact': json['contact'] == null ? undefined : ContactRefFromJSON(json['contact']),
        'type': json['type'],
        'address': json['address'],
    };
}

export function EnrichedStacksAddressToJSON(json: any): EnrichedStacksAddress {
    return EnrichedStacksAddressToJSONTyped(json, false);
}

export function EnrichedStacksAddressToJSONTyped(value?: EnrichedStacksAddress | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'vault': VaultRefToJSON(value['vault']),
        'explorer_url': value['explorerUrl'],
        'contact': ContactRefToJSON(value['contact']),
        'type': value['type'],
        'address': value['address'],
    };
}

