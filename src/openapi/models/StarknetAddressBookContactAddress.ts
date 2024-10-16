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
import type { EnrichedStarknetChain } from './EnrichedStarknetChain';
import {
    EnrichedStarknetChainFromJSON,
    EnrichedStarknetChainFromJSONTyped,
    EnrichedStarknetChainToJSON,
} from './EnrichedStarknetChain';

/**
 * 
 * @export
 * @interface StarknetAddressBookContactAddress
 */
export interface StarknetAddressBookContactAddress {
    /**
     * 
     * @type {string}
     * @memberof StarknetAddressBookContactAddress
     */
    chainType: StarknetAddressBookContactAddressChainTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof StarknetAddressBookContactAddress
     */
    address: string;
    /**
     * 
     * @type {Array<EnrichedStarknetChain>}
     * @memberof StarknetAddressBookContactAddress
     */
    chains: Array<EnrichedStarknetChain>;
}


/**
 * @export
 */
export const StarknetAddressBookContactAddressChainTypeEnum = {
    starknet: 'starknet'
} as const;
export type StarknetAddressBookContactAddressChainTypeEnum = typeof StarknetAddressBookContactAddressChainTypeEnum[keyof typeof StarknetAddressBookContactAddressChainTypeEnum];


/**
 * Check if a given object implements the StarknetAddressBookContactAddress interface.
 */
export function instanceOfStarknetAddressBookContactAddress(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "chainType" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "chains" in value;

    return isInstance;
}

export function StarknetAddressBookContactAddressFromJSON(json: any): StarknetAddressBookContactAddress {
    return StarknetAddressBookContactAddressFromJSONTyped(json, false);
}

export function StarknetAddressBookContactAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): StarknetAddressBookContactAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chainType': json['chain_type'],
        'address': json['address'],
        'chains': ((json['chains'] as Array<any>).map(EnrichedStarknetChainFromJSON)),
    };
}

export function StarknetAddressBookContactAddressToJSON(value?: StarknetAddressBookContactAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chain_type': value.chainType,
        'address': value.address,
        'chains': ((value.chains as Array<any>).map(EnrichedStarknetChainToJSON)),
    };
}

