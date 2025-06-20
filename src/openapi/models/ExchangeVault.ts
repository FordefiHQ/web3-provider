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
import type { AptosVaultPendingVaultGroupAction } from './AptosVaultPendingVaultGroupAction';
import {
    AptosVaultPendingVaultGroupActionFromJSON,
} from './AptosVaultPendingVaultGroupAction';
import type { VaultState } from './VaultState';
import {
    VaultStateFromJSON,
} from './VaultState';
import type { AptosVaultMetadataValue } from './AptosVaultMetadataValue';
import {
    AptosVaultMetadataValueFromJSON,
} from './AptosVaultMetadataValue';
import type { VaultGroupRef } from './VaultGroupRef';
import {
    VaultGroupRefFromJSON,
} from './VaultGroupRef';
import type { ExchangeAccount } from './ExchangeAccount';
import {
    ExchangeAccountFromJSON,
} from './ExchangeAccount';
import type { UserRef } from './UserRef';
import {
    UserRefFromJSON,
} from './UserRef';
import type { ExchangeType } from './ExchangeType';
import {
    ExchangeTypeFromJSON,
} from './ExchangeType';

/**
 * 
 * @export
 * @interface ExchangeVault
 */
export interface ExchangeVault {
    /**
     * 
     * @type {string}
     * @memberof ExchangeVault
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof ExchangeVault
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof ExchangeVault
     */
    modifiedAt: Date;
    /**
     * 
     * @type {{ [key: string]: AptosVaultMetadataValue | undefined; }}
     * @memberof ExchangeVault
     */
    metadata?: { [key: string]: AptosVaultMetadataValue | undefined; };
    /**
     * 
     * @type {string}
     * @memberof ExchangeVault
     */
    name: string;
    /**
     * 
     * @type {UserRef}
     * @memberof ExchangeVault
     */
    createdBy: UserRef;
    /**
     * 
     * @type {VaultGroupRef}
     * @memberof ExchangeVault
     */
    vaultGroup: VaultGroupRef;
    /**
     * 
     * @type {AptosVaultPendingVaultGroupAction}
     * @memberof ExchangeVault
     */
    pendingVaultGroupAction?: AptosVaultPendingVaultGroupAction;
    /**
     * 
     * @type {VaultState}
     * @memberof ExchangeVault
     */
    state: VaultState;
    /**
     * 
     * @type {boolean}
     * @memberof ExchangeVault
     */
    areAllChainsDisabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof ExchangeVault
     */
    type: ExchangeVaultTypeEnum;
    /**
     * 
     * @type {ExchangeType}
     * @memberof ExchangeVault
     */
    exchangeType: ExchangeType;
    /**
     * 
     * @type {string}
     * @memberof ExchangeVault
     */
    apiKey: string;
    /**
     * 
     * @type {ExchangeAccount}
     * @memberof ExchangeVault
     */
    activeAccount?: ExchangeAccount;
    /**
     * 
     * @type {string}
     * @memberof ExchangeVault
     */
    logoUrl: string;
    /**
     * 
     * @type {boolean}
     * @memberof ExchangeVault
     */
    isBalanceDataOutdated: boolean;
}


/**
 * 
 */
const ExchangeVaultTypeEnum = {
    exchange: 'exchange'
} as const;
type ExchangeVaultTypeEnum = typeof ExchangeVaultTypeEnum[keyof typeof ExchangeVaultTypeEnum];

export function ExchangeVaultFromJSONTyped(json: any, _ignoreDiscriminator: boolean): ExchangeVault {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['created_at'])),
        'modifiedAt': (new Date(json['modified_at'])),
        'metadata': json['metadata'] == null ? undefined : (mapValues(json['metadata'], AptosVaultMetadataValueFromJSON)),
        'name': json['name'],
        'createdBy': UserRefFromJSON(json['created_by']),
        'vaultGroup': VaultGroupRefFromJSON(json['vault_group']),
        'pendingVaultGroupAction': json['pending_vault_group_action'] == null ? undefined : AptosVaultPendingVaultGroupActionFromJSON(json['pending_vault_group_action']),
        'state': VaultStateFromJSON(json['state']),
        'areAllChainsDisabled': json['are_all_chains_disabled'],
        'type': json['type'],
        'exchangeType': ExchangeTypeFromJSON(json['exchange_type']),
        'apiKey': json['api_key'],
        'activeAccount': json['active_account'] == null ? undefined : ExchangeAccountFromJSON(json['active_account']),
        'logoUrl': json['logo_url'],
        'isBalanceDataOutdated': json['is_balance_data_outdated'],
    };
}
