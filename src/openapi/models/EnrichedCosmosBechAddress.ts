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
import type { ContactRef } from './ContactRef';
import {
    ContactRefFromJSON,
    ContactRefFromJSONTyped,
    ContactRefToJSON,
} from './ContactRef';
import type { CosmosBechAddress } from './CosmosBechAddress';
import {
    CosmosBechAddressFromJSON,
    CosmosBechAddressFromJSONTyped,
    CosmosBechAddressToJSON,
} from './CosmosBechAddress';
import type { VaultRef } from './VaultRef';
import {
    VaultRefFromJSON,
    VaultRefFromJSONTyped,
    VaultRefToJSON,
} from './VaultRef';

/**
 * 
 * @export
 * @interface EnrichedCosmosBechAddress
 */
export interface EnrichedCosmosBechAddress {
    /**
     * 
     * @type {VaultRef}
     * @memberof EnrichedCosmosBechAddress
     */
    vault?: VaultRef;
    /**
     * 
     * @type {string}
     * @memberof EnrichedCosmosBechAddress
     */
    explorerUrl?: string;
    /**
     * 
     * @type {ContactRef}
     * @memberof EnrichedCosmosBechAddress
     */
    contact?: ContactRef;
    /**
     * 
     * @type {string}
     * @memberof EnrichedCosmosBechAddress
     */
    type: EnrichedCosmosBechAddressTypeEnum;
    /**
     * 
     * @type {CosmosBechAddress}
     * @memberof EnrichedCosmosBechAddress
     */
    address: CosmosBechAddress;
}


/**
 * @export
 */
export const EnrichedCosmosBechAddressTypeEnum = {
    cosmos: 'cosmos'
} as const;
export type EnrichedCosmosBechAddressTypeEnum = typeof EnrichedCosmosBechAddressTypeEnum[keyof typeof EnrichedCosmosBechAddressTypeEnum];


/**
 * Check if a given object implements the EnrichedCosmosBechAddress interface.
 */
export function instanceOfEnrichedCosmosBechAddress(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "address" in value;

    return isInstance;
}

export function EnrichedCosmosBechAddressFromJSON(json: any): EnrichedCosmosBechAddress {
    return EnrichedCosmosBechAddressFromJSONTyped(json, false);
}

export function EnrichedCosmosBechAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnrichedCosmosBechAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'vault': !exists(json, 'vault') ? undefined : VaultRefFromJSON(json['vault']),
        'explorerUrl': !exists(json, 'explorer_url') ? undefined : json['explorer_url'],
        'contact': !exists(json, 'contact') ? undefined : ContactRefFromJSON(json['contact']),
        'type': json['type'],
        'address': CosmosBechAddressFromJSON(json['address']),
    };
}

export function EnrichedCosmosBechAddressToJSON(value?: EnrichedCosmosBechAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'vault': VaultRefToJSON(value.vault),
        'explorer_url': value.explorerUrl,
        'contact': ContactRefToJSON(value.contact),
        'type': value.type,
        'address': CosmosBechAddressToJSON(value.address),
    };
}

