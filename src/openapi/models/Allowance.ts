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
import type { EnrichedAddress } from './EnrichedAddress';
import {
    EnrichedAddressFromJSON,
    EnrichedAddressFromJSONTyped,
    EnrichedAddressToJSON,
} from './EnrichedAddress';
import type { EnrichedChain } from './EnrichedChain';
import {
    EnrichedChainFromJSON,
    EnrichedChainFromJSONTyped,
    EnrichedChainToJSON,
} from './EnrichedChain';
import type { OwnedAsset } from './OwnedAsset';
import {
    OwnedAssetFromJSON,
    OwnedAssetFromJSONTyped,
    OwnedAssetToJSON,
} from './OwnedAsset';
import type { UserRef } from './UserRef';
import {
    UserRefFromJSON,
    UserRefFromJSONTyped,
    UserRefToJSON,
} from './UserRef';
import type { VaultRef } from './VaultRef';
import {
    VaultRefFromJSON,
    VaultRefFromJSONTyped,
    VaultRefToJSON,
} from './VaultRef';

/**
 * 
 * @export
 * @interface Allowance
 */
export interface Allowance {
    /**
     * 
     * @type {string}
     * @memberof Allowance
     */
    id: string;
    /**
     * 
     * @type {OwnedAsset}
     * @memberof Allowance
     */
    ownedAsset: OwnedAsset;
    /**
     * 
     * @type {VaultRef}
     * @memberof Allowance
     */
    vault: VaultRef;
    /**
     * 
     * @type {Date}
     * @memberof Allowance
     */
    allowedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof Allowance
     */
    allowanceValue: string;
    /**
     * 
     * @type {EnrichedAddress}
     * @memberof Allowance
     */
    spender: EnrichedAddress;
    /**
     * 
     * @type {EnrichedChain}
     * @memberof Allowance
     */
    chain: EnrichedChain;
    /**
     * 
     * @type {UserRef}
     * @memberof Allowance
     */
    createdBy?: UserRef;
    /**
     * 
     * @type {string}
     * @memberof Allowance
     */
    transactionId?: string;
}

/**
 * Check if a given object implements the Allowance interface.
 */
export function instanceOfAllowance(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "ownedAsset" in value;
    isInstance = isInstance && "vault" in value;
    isInstance = isInstance && "allowedAt" in value;
    isInstance = isInstance && "allowanceValue" in value;
    isInstance = isInstance && "spender" in value;
    isInstance = isInstance && "chain" in value;

    return isInstance;
}

export function AllowanceFromJSON(json: any): Allowance {
    return AllowanceFromJSONTyped(json, false);
}

export function AllowanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Allowance {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'ownedAsset': OwnedAssetFromJSON(json['owned_asset']),
        'vault': VaultRefFromJSON(json['vault']),
        'allowedAt': (new Date(json['allowed_at'])),
        'allowanceValue': json['allowance_value'],
        'spender': EnrichedAddressFromJSON(json['spender']),
        'chain': EnrichedChainFromJSON(json['chain']),
        'createdBy': !exists(json, 'created_by') ? undefined : UserRefFromJSON(json['created_by']),
        'transactionId': !exists(json, 'transaction_id') ? undefined : json['transaction_id'],
    };
}

export function AllowanceToJSON(value?: Allowance | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'owned_asset': OwnedAssetToJSON(value.ownedAsset),
        'vault': VaultRefToJSON(value.vault),
        'allowed_at': (value.allowedAt.toISOString()),
        'allowance_value': value.allowanceValue,
        'spender': EnrichedAddressToJSON(value.spender),
        'chain': EnrichedChainToJSON(value.chain),
        'created_by': UserRefToJSON(value.createdBy),
        'transaction_id': value.transactionId,
    };
}
