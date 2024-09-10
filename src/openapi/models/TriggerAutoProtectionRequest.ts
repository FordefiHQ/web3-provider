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
import type { MultiChainAccount } from './MultiChainAccount';
import {
    MultiChainAccountFromJSON,
    MultiChainAccountFromJSONTyped,
    MultiChainAccountToJSON,
} from './MultiChainAccount';

/**
 * 
 * @export
 * @interface TriggerAutoProtectionRequest
 */
export interface TriggerAutoProtectionRequest {
    /**
     * 
     * @type {MultiChainAccount}
     * @memberof TriggerAutoProtectionRequest
     */
    account: MultiChainAccount;
    /**
     * 
     * @type {string}
     * @memberof TriggerAutoProtectionRequest
     */
    note?: string;
}

/**
 * Check if a given object implements the TriggerAutoProtectionRequest interface.
 */
export function instanceOfTriggerAutoProtectionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "account" in value;

    return isInstance;
}

export function TriggerAutoProtectionRequestFromJSON(json: any): TriggerAutoProtectionRequest {
    return TriggerAutoProtectionRequestFromJSONTyped(json, false);
}

export function TriggerAutoProtectionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TriggerAutoProtectionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account': MultiChainAccountFromJSON(json['account']),
        'note': !exists(json, 'note') ? undefined : json['note'],
    };
}

export function TriggerAutoProtectionRequestToJSON(value?: TriggerAutoProtectionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account': MultiChainAccountToJSON(value.account),
        'note': value.note,
    };
}
