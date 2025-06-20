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

import type { EndUserRef } from './EndUserRef';
import {
    EndUserRefFromJSON,
} from './EndUserRef';
import type { VaultState } from './VaultState';
import {
    VaultStateFromJSON,
} from './VaultState';
import type { VaultType } from './VaultType';
import {
    VaultTypeFromJSON,
} from './VaultType';

/**
 * 
 * @export
 * @interface VaultRef
 */
export interface VaultRef {
    /**
     * 
     * @type {string}
     * @memberof VaultRef
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof VaultRef
     */
    vaultGroupId: string;
    /**
     * 
     * @type {string}
     * @memberof VaultRef
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof VaultRef
     */
    address?: string;
    /**
     * 
     * @type {VaultState}
     * @memberof VaultRef
     */
    state: VaultState;
    /**
     * 
     * @type {VaultType}
     * @memberof VaultRef
     */
    type: VaultType;
    /**
     * 
     * @type {string}
     * @memberof VaultRef
     */
    logoUrl?: string;
    /**
     * 
     * @type {EndUserRef}
     * @memberof VaultRef
     */
    endUser?: EndUserRef;
}

export function VaultRefFromJSON(json: any): VaultRef {
    return VaultRefFromJSONTyped(json, false);
}

function VaultRefFromJSONTyped(json: any, _ignoreDiscriminator: boolean): VaultRef {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'vaultGroupId': json['vault_group_id'],
        'name': json['name'],
        'address': json['address'] == null ? undefined : json['address'],
        'state': VaultStateFromJSON(json['state']),
        'type': VaultTypeFromJSON(json['type']),
        'logoUrl': json['logo_url'] == null ? undefined : json['logo_url'],
        'endUser': json['end_user'] == null ? undefined : EndUserRefFromJSON(json['end_user']),
    };
}

