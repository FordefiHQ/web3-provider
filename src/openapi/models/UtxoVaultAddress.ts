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
import type { Balances } from './Balances';
import {
    BalancesFromJSON,
    BalancesFromJSONTyped,
    BalancesToJSON,
} from './Balances';
import type { UtxoAddress } from './UtxoAddress';
import {
    UtxoAddressFromJSON,
    UtxoAddressFromJSONTyped,
    UtxoAddressToJSON,
} from './UtxoAddress';
import type { VaultRef } from './VaultRef';
import {
    VaultRefFromJSON,
    VaultRefFromJSONTyped,
    VaultRefToJSON,
} from './VaultRef';

/**
 * 
 * @export
 * @interface UtxoVaultAddress
 */
export interface UtxoVaultAddress {
    /**
     * 
     * @type {string}
     * @memberof UtxoVaultAddress
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof UtxoVaultAddress
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof UtxoVaultAddress
     */
    modifiedAt: Date;
    /**
     * 
     * @type {VaultRef}
     * @memberof UtxoVaultAddress
     */
    vault: VaultRef;
    /**
     * 
     * @type {string}
     * @memberof UtxoVaultAddress
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof UtxoVaultAddress
     * @deprecated
     */
    balance?: string;
    /**
     * 
     * @type {Balances}
     * @memberof UtxoVaultAddress
     */
    balances: Balances;
    /**
     * 
     * @type {string}
     * @memberof UtxoVaultAddress
     */
    publicKeyCompressed: string;
    /**
     * 
     * @type {string}
     * @memberof UtxoVaultAddress
     */
    type: UtxoVaultAddressTypeEnum;
    /**
     * 
     * @type {UtxoAddress}
     * @memberof UtxoVaultAddress
     */
    address: UtxoAddress;
}


/**
 * @export
 */
export const UtxoVaultAddressTypeEnum = {
    utxo: 'utxo'
} as const;
export type UtxoVaultAddressTypeEnum = typeof UtxoVaultAddressTypeEnum[keyof typeof UtxoVaultAddressTypeEnum];


/**
 * Check if a given object implements the UtxoVaultAddress interface.
 */
export function instanceOfUtxoVaultAddress(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "modifiedAt" in value;
    isInstance = isInstance && "vault" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "balances" in value;
    isInstance = isInstance && "publicKeyCompressed" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "address" in value;

    return isInstance;
}

export function UtxoVaultAddressFromJSON(json: any): UtxoVaultAddress {
    return UtxoVaultAddressFromJSONTyped(json, false);
}

export function UtxoVaultAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): UtxoVaultAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['created_at'])),
        'modifiedAt': (new Date(json['modified_at'])),
        'vault': VaultRefFromJSON(json['vault']),
        'name': json['name'],
        'balance': !exists(json, 'balance') ? undefined : json['balance'],
        'balances': BalancesFromJSON(json['balances']),
        'publicKeyCompressed': json['public_key_compressed'],
        'type': json['type'],
        'address': UtxoAddressFromJSON(json['address']),
    };
}

export function UtxoVaultAddressToJSON(value?: UtxoVaultAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'created_at': (value.createdAt.toISOString()),
        'modified_at': (value.modifiedAt.toISOString()),
        'vault': VaultRefToJSON(value.vault),
        'name': value.name,
        'balance': value.balance,
        'balances': BalancesToJSON(value.balances),
        'public_key_compressed': value.publicKeyCompressed,
        'type': value.type,
        'address': UtxoAddressToJSON(value.address),
    };
}

