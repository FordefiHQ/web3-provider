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

import type { VaultRef } from './VaultRef';
import {
    VaultRefFromJSON,
} from './VaultRef';
import type { UtxoAddress } from './UtxoAddress';
import {
    UtxoAddressFromJSON,
} from './UtxoAddress';
import type { VaultAddressRef } from './VaultAddressRef';
import {
    VaultAddressRefFromJSON,
} from './VaultAddressRef';
import type { ContactRef } from './ContactRef';
import {
    ContactRefFromJSON,
} from './ContactRef';

/**
 * 
 * @export
 * @interface EnrichedUtxoAddress
 */
export interface EnrichedUtxoAddress {
    /**
     * 
     * @type {VaultRef}
     * @memberof EnrichedUtxoAddress
     */
    vault?: VaultRef;
    /**
     * 
     * @type {string}
     * @memberof EnrichedUtxoAddress
     */
    explorerUrl?: string;
    /**
     * 
     * @type {ContactRef}
     * @memberof EnrichedUtxoAddress
     */
    contact?: ContactRef;
    /**
     * 
     * @type {string}
     * @memberof EnrichedUtxoAddress
     */
    type: EnrichedUtxoAddressTypeEnum;
    /**
     * 
     * @type {UtxoAddress}
     * @memberof EnrichedUtxoAddress
     */
    address: UtxoAddress;
    /**
     * 
     * @type {VaultAddressRef}
     * @memberof EnrichedUtxoAddress
     */
    vaultAddress?: VaultAddressRef;
}


/**
 * 
 */
const EnrichedUtxoAddressTypeEnum = {
    utxo: 'utxo'
} as const;
type EnrichedUtxoAddressTypeEnum = typeof EnrichedUtxoAddressTypeEnum[keyof typeof EnrichedUtxoAddressTypeEnum];

export function EnrichedUtxoAddressFromJSON(json: any): EnrichedUtxoAddress {
    return EnrichedUtxoAddressFromJSONTyped(json, false);
}

export function EnrichedUtxoAddressFromJSONTyped(json: any, _ignoreDiscriminator: boolean): EnrichedUtxoAddress {
    if (json == null) {
        return json;
    }
    return {
        
        'vault': json['vault'] == null ? undefined : VaultRefFromJSON(json['vault']),
        'explorerUrl': json['explorer_url'] == null ? undefined : json['explorer_url'],
        'contact': json['contact'] == null ? undefined : ContactRefFromJSON(json['contact']),
        'type': json['type'],
        'address': UtxoAddressFromJSON(json['address']),
        'vaultAddress': json['vault_address'] == null ? undefined : VaultAddressRefFromJSON(json['vault_address']),
    };
}
