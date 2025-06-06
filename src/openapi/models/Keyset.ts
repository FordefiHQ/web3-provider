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

import type { OrganizationKeyset } from './OrganizationKeyset';
import {
    instanceOfOrganizationKeyset,
    OrganizationKeysetFromJSON,
    OrganizationKeysetFromJSONTyped,
    OrganizationKeysetToJSON,
} from './OrganizationKeyset';
import type { UserKeyset } from './UserKeyset';
import {
    instanceOfUserKeyset,
    UserKeysetFromJSON,
    UserKeysetFromJSONTyped,
    UserKeysetToJSON,
} from './UserKeyset';

/**
 * @type Keyset
 * 
 * @export
 */
export type Keyset = { scope: 'organization' } & OrganizationKeyset | { scope: 'user' } & UserKeyset;

export function KeysetFromJSON(json: any): Keyset {
    return KeysetFromJSONTyped(json, false);
}

export function KeysetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Keyset {
    if (json == null) {
        return json;
    }
    switch (json['scope']) {
        case 'organization':
            return Object.assign({}, OrganizationKeysetFromJSONTyped(json, true), { scope: 'organization' } as const);
        case 'user':
            return Object.assign({}, UserKeysetFromJSONTyped(json, true), { scope: 'user' } as const);
        default:
            throw new Error(`No variant of Keyset exists with 'scope=${json['scope']}'`);
    }
}

export function KeysetToJSON(json: any): any {
    return KeysetToJSONTyped(json, false);
}

export function KeysetToJSONTyped(value?: Keyset | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['scope']) {
        case 'organization':
            return Object.assign({}, OrganizationKeysetToJSON(value), { scope: 'organization' } as const);
        case 'user':
            return Object.assign({}, UserKeysetToJSON(value), { scope: 'user' } as const);
        default:
            throw new Error(`No variant of Keyset exists with 'scope=${value['scope']}'`);
    }

}

