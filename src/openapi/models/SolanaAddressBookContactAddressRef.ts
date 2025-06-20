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

import type { SolanaChain } from './SolanaChain';
import {
    SolanaChainFromJSON,
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
 * 
 */
const SolanaAddressBookContactAddressRefChainTypeEnum = {
    solana: 'solana'
} as const;
type SolanaAddressBookContactAddressRefChainTypeEnum = typeof SolanaAddressBookContactAddressRefChainTypeEnum[keyof typeof SolanaAddressBookContactAddressRefChainTypeEnum];

export function SolanaAddressBookContactAddressRefFromJSONTyped(json: any, _ignoreDiscriminator: boolean): SolanaAddressBookContactAddressRef {
    if (json == null) {
        return json;
    }
    return {
        
        'chainType': json['chain_type'],
        'address': json['address'],
        'chains': ((json['chains'] as Array<any>).map(SolanaChainFromJSON)),
    };
}
