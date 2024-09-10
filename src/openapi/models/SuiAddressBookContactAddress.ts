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
import type { EnrichedSuiChain } from './EnrichedSuiChain';
import {
    EnrichedSuiChainFromJSON,
    EnrichedSuiChainFromJSONTyped,
    EnrichedSuiChainToJSON,
} from './EnrichedSuiChain';

/**
 * 
 * @export
 * @interface SuiAddressBookContactAddress
 */
export interface SuiAddressBookContactAddress {
    /**
     * 
     * @type {string}
     * @memberof SuiAddressBookContactAddress
     */
    chainType: SuiAddressBookContactAddressChainTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SuiAddressBookContactAddress
     */
    address: string;
    /**
     * 
     * @type {Array<EnrichedSuiChain>}
     * @memberof SuiAddressBookContactAddress
     */
    chains: Array<EnrichedSuiChain>;
}


/**
 * @export
 */
export const SuiAddressBookContactAddressChainTypeEnum = {
    sui: 'sui'
} as const;
export type SuiAddressBookContactAddressChainTypeEnum = typeof SuiAddressBookContactAddressChainTypeEnum[keyof typeof SuiAddressBookContactAddressChainTypeEnum];


/**
 * Check if a given object implements the SuiAddressBookContactAddress interface.
 */
export function instanceOfSuiAddressBookContactAddress(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "chainType" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "chains" in value;

    return isInstance;
}

export function SuiAddressBookContactAddressFromJSON(json: any): SuiAddressBookContactAddress {
    return SuiAddressBookContactAddressFromJSONTyped(json, false);
}

export function SuiAddressBookContactAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiAddressBookContactAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chainType': json['chain_type'],
        'address': json['address'],
        'chains': ((json['chains'] as Array<any>).map(EnrichedSuiChainFromJSON)),
    };
}

export function SuiAddressBookContactAddressToJSON(value?: SuiAddressBookContactAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chain_type': value.chainType,
        'address': value.address,
        'chains': ((value.chains as Array<any>).map(EnrichedSuiChainToJSON)),
    };
}

