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
import type { EnrichedUtxoChain } from './EnrichedUtxoChain';
import {
    EnrichedUtxoChainFromJSON,
    EnrichedUtxoChainFromJSONTyped,
    EnrichedUtxoChainToJSON,
} from './EnrichedUtxoChain';

/**
 * 
 * @export
 * @interface UtxoAddressBookContactAddress
 */
export interface UtxoAddressBookContactAddress {
    /**
     * 
     * @type {string}
     * @memberof UtxoAddressBookContactAddress
     */
    chainType: UtxoAddressBookContactAddressChainTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof UtxoAddressBookContactAddress
     */
    address: string;
    /**
     * 
     * @type {EnrichedUtxoChain}
     * @memberof UtxoAddressBookContactAddress
     */
    chain: EnrichedUtxoChain;
}


/**
 * @export
 */
export const UtxoAddressBookContactAddressChainTypeEnum = {
    utxo: 'utxo'
} as const;
export type UtxoAddressBookContactAddressChainTypeEnum = typeof UtxoAddressBookContactAddressChainTypeEnum[keyof typeof UtxoAddressBookContactAddressChainTypeEnum];


/**
 * Check if a given object implements the UtxoAddressBookContactAddress interface.
 */
export function instanceOfUtxoAddressBookContactAddress(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "chainType" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "chain" in value;

    return isInstance;
}

export function UtxoAddressBookContactAddressFromJSON(json: any): UtxoAddressBookContactAddress {
    return UtxoAddressBookContactAddressFromJSONTyped(json, false);
}

export function UtxoAddressBookContactAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): UtxoAddressBookContactAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chainType': json['chain_type'],
        'address': json['address'],
        'chain': EnrichedUtxoChainFromJSON(json['chain']),
    };
}

export function UtxoAddressBookContactAddressToJSON(value?: UtxoAddressBookContactAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chain_type': value.chainType,
        'address': value.address,
        'chain': EnrichedUtxoChainToJSON(value.chain),
    };
}

