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
import type { AddressBookContactChanges } from './AddressBookContactChanges';
import {
    AddressBookContactChangesFromJSON,
    AddressBookContactChangesFromJSONTyped,
    AddressBookContactChangesToJSON,
    AddressBookContactChangesToJSONTyped,
} from './AddressBookContactChanges';
import type { EnrichedTonChain } from './EnrichedTonChain';
import {
    EnrichedTonChainFromJSON,
    EnrichedTonChainFromJSONTyped,
    EnrichedTonChainToJSON,
    EnrichedTonChainToJSONTyped,
} from './EnrichedTonChain';
import type { UserRef } from './UserRef';
import {
    UserRefFromJSON,
    UserRefFromJSONTyped,
    UserRefToJSON,
    UserRefToJSONTyped,
} from './UserRef';
import type { AssetInfo } from './AssetInfo';
import {
    AssetInfoFromJSON,
    AssetInfoFromJSONTyped,
    AssetInfoToJSON,
    AssetInfoToJSONTyped,
} from './AssetInfo';
import type { GroupRef } from './GroupRef';
import {
    GroupRefFromJSON,
    GroupRefFromJSONTyped,
    GroupRefToJSON,
    GroupRefToJSONTyped,
} from './GroupRef';
import type { AddressBookContactState } from './AddressBookContactState';
import {
    AddressBookContactStateFromJSON,
    AddressBookContactStateFromJSONTyped,
    AddressBookContactStateToJSON,
    AddressBookContactStateToJSONTyped,
} from './AddressBookContactState';

/**
 * 
 * @export
 * @interface TonAddressBookContact
 */
export interface TonAddressBookContact {
    /**
     * 
     * @type {string}
     * @memberof TonAddressBookContact
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof TonAddressBookContact
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof TonAddressBookContact
     */
    modifiedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof TonAddressBookContact
     */
    name: string;
    /**
     * 
     * @type {UserRef}
     * @memberof TonAddressBookContact
     */
    modifiedBy: UserRef;
    /**
     * 
     * @type {AddressBookContactState}
     * @memberof TonAddressBookContact
     */
    state: AddressBookContactState;
    /**
     * 
     * @type {Array<GroupRef>}
     * @memberof TonAddressBookContact
     */
    groups: Array<GroupRef>;
    /**
     * 
     * @type {AddressBookContactChanges}
     * @memberof TonAddressBookContact
     */
    pendingChanges?: AddressBookContactChanges;
    /**
     * 
     * @type {Array<AssetInfo>}
     * @memberof TonAddressBookContact
     */
    assetInfos: Array<AssetInfo>;
    /**
     * 
     * @type {string}
     * @memberof TonAddressBookContact
     */
    chainType: TonAddressBookContactChainTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TonAddressBookContact
     */
    address: string;
    /**
     * 
     * @type {Array<EnrichedTonChain>}
     * @memberof TonAddressBookContact
     */
    chains: Array<EnrichedTonChain>;
    /**
     * 
     * @type {string}
     * @memberof TonAddressBookContact
     */
    comment?: string;
}


/**
 * @export
 */
export const TonAddressBookContactChainTypeEnum = {
    ton: 'ton'
} as const;
export type TonAddressBookContactChainTypeEnum = typeof TonAddressBookContactChainTypeEnum[keyof typeof TonAddressBookContactChainTypeEnum];


/**
 * Check if a given object implements the TonAddressBookContact interface.
 */
export function instanceOfTonAddressBookContact(value: object): value is TonAddressBookContact {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('modifiedAt' in value) || value['modifiedAt'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('modifiedBy' in value) || value['modifiedBy'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    if (!('groups' in value) || value['groups'] === undefined) return false;
    if (!('assetInfos' in value) || value['assetInfos'] === undefined) return false;
    if (!('chainType' in value) || value['chainType'] === undefined) return false;
    if (!('address' in value) || value['address'] === undefined) return false;
    if (!('chains' in value) || value['chains'] === undefined) return false;
    return true;
}

export function TonAddressBookContactFromJSON(json: any): TonAddressBookContact {
    return TonAddressBookContactFromJSONTyped(json, false);
}

export function TonAddressBookContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonAddressBookContact {
    if (json == null) {
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
        'pendingChanges': json['pending_changes'] == null ? undefined : AddressBookContactChangesFromJSON(json['pending_changes']),
        'assetInfos': ((json['asset_infos'] as Array<any>).map(AssetInfoFromJSON)),
        'chainType': json['chain_type'],
        'address': json['address'],
        'chains': ((json['chains'] as Array<any>).map(EnrichedTonChainFromJSON)),
        'comment': json['comment'] == null ? undefined : json['comment'],
    };
}

export function TonAddressBookContactToJSON(json: any): TonAddressBookContact {
    return TonAddressBookContactToJSONTyped(json, false);
}

export function TonAddressBookContactToJSONTyped(value?: TonAddressBookContact | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'created_at': ((value['createdAt']).toISOString()),
        'modified_at': ((value['modifiedAt']).toISOString()),
        'name': value['name'],
        'modified_by': UserRefToJSON(value['modifiedBy']),
        'state': AddressBookContactStateToJSON(value['state']),
        'groups': ((value['groups'] as Array<any>).map(GroupRefToJSON)),
        'pending_changes': AddressBookContactChangesToJSON(value['pendingChanges']),
        'asset_infos': ((value['assetInfos'] as Array<any>).map(AssetInfoToJSON)),
        'chain_type': value['chainType'],
        'address': value['address'],
        'chains': ((value['chains'] as Array<any>).map(EnrichedTonChainToJSON)),
        'comment': value['comment'],
    };
}

