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

import {
    PendingVaultGroupActionAdd,
    instanceOfPendingVaultGroupActionAdd,
    PendingVaultGroupActionAddFromJSON,
    PendingVaultGroupActionAddFromJSONTyped,
    PendingVaultGroupActionAddToJSON,
} from './PendingVaultGroupActionAdd';
import {
    PendingVaultGroupActionRemove,
    instanceOfPendingVaultGroupActionRemove,
    PendingVaultGroupActionRemoveFromJSON,
    PendingVaultGroupActionRemoveFromJSONTyped,
    PendingVaultGroupActionRemoveToJSON,
} from './PendingVaultGroupActionRemove';

/**
 * @type AptosVaultPendingVaultGroupAction
 * 
 * @export
 */
export type AptosVaultPendingVaultGroupAction = { type: 'add' } & PendingVaultGroupActionAdd | { type: 'remove' } & PendingVaultGroupActionRemove;

export function AptosVaultPendingVaultGroupActionFromJSON(json: any): AptosVaultPendingVaultGroupAction {
    return AptosVaultPendingVaultGroupActionFromJSONTyped(json, false);
}

export function AptosVaultPendingVaultGroupActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AptosVaultPendingVaultGroupAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'add':
            return {...PendingVaultGroupActionAddFromJSONTyped(json, true), type: 'add'};
        case 'remove':
            return {...PendingVaultGroupActionRemoveFromJSONTyped(json, true), type: 'remove'};
        default:
            throw new Error(`No variant of AptosVaultPendingVaultGroupAction exists with 'type=${json['type']}'`);
    }
}

export function AptosVaultPendingVaultGroupActionToJSON(value?: AptosVaultPendingVaultGroupAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'add':
            return PendingVaultGroupActionAddToJSON(value);
        case 'remove':
            return PendingVaultGroupActionRemoveToJSON(value);
        default:
            throw new Error(`No variant of AptosVaultPendingVaultGroupAction exists with 'type=${value['type']}'`);
    }

}
