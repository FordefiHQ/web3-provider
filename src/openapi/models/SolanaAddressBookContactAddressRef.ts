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
import type { SolanaChain } from './SolanaChain';
import {
    SolanaChainFromJSON,
    SolanaChainFromJSONTyped,
    SolanaChainToJSON,
    SolanaChainToJSONTyped,
} from './SolanaChain';

/**
 * 
 * @export
 * @interface SolanaAddressBookContactAddressRef
 */
export interface SolanaAddressBookContactAddressRef {
    /**
     * 
     * @type {string}
     * @memberof SolanaAddressBookContactAddressRef
     */
    chainType: SolanaAddressBookContactAddressRefChainTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SolanaAddressBookContactAddressRef
     */
    address: string;
    /**
     * 
     * @type {Array<SolanaChain>}
     * @memberof SolanaAddressBookContactAddressRef
     */
    chains: Array<SolanaChain>;
}


/**
 * @export
 */
export const SolanaAddressBookContactAddressRefChainTypeEnum = {
    solana: 'solana'
} as const;
export type SolanaAddressBookContactAddressRefChainTypeEnum = typeof SolanaAddressBookContactAddressRefChainTypeEnum[keyof typeof SolanaAddressBookContactAddressRefChainTypeEnum];


/**
 * Check if a given object implements the SolanaAddressBookContactAddressRef interface.
 */
export function instanceOfSolanaAddressBookContactAddressRef(value: object): value is SolanaAddressBookContactAddressRef {
    if (!('chainType' in value) || value['chainType'] === undefined) return false;
    if (!('address' in value) || value['address'] === undefined) return false;
    if (!('chains' in value) || value['chains'] === undefined) return false;
    return true;
}

export function SolanaAddressBookContactAddressRefFromJSON(json: any): SolanaAddressBookContactAddressRef {
    return SolanaAddressBookContactAddressRefFromJSONTyped(json, false);
}

export function SolanaAddressBookContactAddressRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolanaAddressBookContactAddressRef {
    if (json == null) {
        return json;
    }
    return {
        
        'chainType': json['chain_type'],
        'address': json['address'],
        'chains': ((json['chains'] as Array<any>).map(SolanaChainFromJSON)),
    };
}

export function SolanaAddressBookContactAddressRefToJSON(json: any): SolanaAddressBookContactAddressRef {
    return SolanaAddressBookContactAddressRefToJSONTyped(json, false);
}

export function SolanaAddressBookContactAddressRefToJSONTyped(value?: SolanaAddressBookContactAddressRef | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chain_type': value['chainType'],
        'address': value['address'],
        'chains': ((value['chains'] as Array<any>).map(SolanaChainToJSON)),
    };
}

