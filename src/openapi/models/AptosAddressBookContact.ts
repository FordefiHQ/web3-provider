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
import type { AddressBookContactChanges } from './AddressBookContactChanges';
import {
    AddressBookContactChangesFromJSON,
    AddressBookContactChangesFromJSONTyped,
    AddressBookContactChangesToJSON,
} from './AddressBookContactChanges';
import type { AddressBookContactState } from './AddressBookContactState';
import {
    AddressBookContactStateFromJSON,
    AddressBookContactStateFromJSONTyped,
    AddressBookContactStateToJSON,
} from './AddressBookContactState';
import type { EnrichedAptosChain } from './EnrichedAptosChain';
import {
    EnrichedAptosChainFromJSON,
    EnrichedAptosChainFromJSONTyped,
    EnrichedAptosChainToJSON,
} from './EnrichedAptosChain';
import type { GroupRef } from './GroupRef';
import {
    GroupRefFromJSON,
    GroupRefFromJSONTyped,
    GroupRefToJSON,
} from './GroupRef';
import type { UserRef } from './UserRef';
import {
    UserRefFromJSON,
    UserRefFromJSONTyped,
    UserRefToJSON,
} from './UserRef';

/**
 * 
 * @export
 * @interface AptosAddressBookContact
 */
export interface AptosAddressBookContact {
    /**
     * 
     * @type {string}
     * @memberof AptosAddressBookContact
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof AptosAddressBookContact
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof AptosAddressBookContact
     */
    modifiedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof AptosAddressBookContact
     */
    name: string;
    /**
     * 
     * @type {UserRef}
     * @memberof AptosAddressBookContact
     */
    modifiedBy: UserRef;
    /**
     * 
     * @type {AddressBookContactState}
     * @memberof AptosAddressBookContact
     */
    state: AddressBookContactState;
    /**
     * 
     * @type {Array<GroupRef>}
     * @memberof AptosAddressBookContact
     */
    groups: Array<GroupRef>;
    /**
     * 
     * @type {AddressBookContactChanges}
     * @memberof AptosAddressBookContact
     */
    pendingChanges?: AddressBookContactChanges;
    /**
     * 
     * @type {string}
     * @memberof AptosAddressBookContact
     */
    chainType: AptosAddressBookContactChainTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AptosAddressBookContact
     */
    address: string;
    /**
     * 
     * @type {Array<EnrichedAptosChain>}
     * @memberof AptosAddressBookContact
     */
    chains: Array<EnrichedAptosChain>;
}


/**
 * @export
 */
export const AptosAddressBookContactChainTypeEnum = {
    aptos: 'aptos'
} as const;
export type AptosAddressBookContactChainTypeEnum = typeof AptosAddressBookContactChainTypeEnum[keyof typeof AptosAddressBookContactChainTypeEnum];


/**
 * Check if a given object implements the AptosAddressBookContact interface.
 */
export function instanceOfAptosAddressBookContact(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "modifiedAt" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "modifiedBy" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "groups" in value;
    isInstance = isInstance && "chainType" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "chains" in value;

    return isInstance;
}

export function AptosAddressBookContactFromJSON(json: any): AptosAddressBookContact {
    return AptosAddressBookContactFromJSONTyped(json, false);
}

export function AptosAddressBookContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): AptosAddressBookContact {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['created_at'])),
        'modifiedAt': (new Date(json['modified_at'])),
        'name': json['name'],
        'modifiedBy': UserRefFromJSON(json['modified_by']),
        'state': AddressBookContactStateFromJSON(json['state']),
        'groups': ((json['groups'] as Array<any>).map(GroupRefFromJSON)),
        'pendingChanges': !exists(json, 'pending_changes') ? undefined : AddressBookContactChangesFromJSON(json['pending_changes']),
        'chainType': json['chain_type'],
        'address': json['address'],
        'chains': ((json['chains'] as Array<any>).map(EnrichedAptosChainFromJSON)),
    };
}

export function AptosAddressBookContactToJSON(value?: AptosAddressBookContact | null): any {
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
        'name': value.name,
        'modified_by': UserRefToJSON(value.modifiedBy),
        'state': AddressBookContactStateToJSON(value.state),
        'groups': ((value.groups as Array<any>).map(GroupRefToJSON)),
        'pending_changes': AddressBookContactChangesToJSON(value.pendingChanges),
        'chain_type': value.chainType,
        'address': value.address,
        'chains': ((value.chains as Array<any>).map(EnrichedAptosChainToJSON)),
    };
}

