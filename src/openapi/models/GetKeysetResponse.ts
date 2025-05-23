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
 * @type GetKeysetResponse
 * 
 * @export
 */
export type GetKeysetResponse = { scope: 'organization' } & OrganizationKeyset | { scope: 'user' } & UserKeyset;

export function GetKeysetResponseFromJSON(json: any): GetKeysetResponse {
    return GetKeysetResponseFromJSONTyped(json, false);
}

export function GetKeysetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetKeysetResponse {
    if (json == null) {
        return json;
    }
    switch (json['scope']) {
        case 'organization':
            return Object.assign({}, OrganizationKeysetFromJSONTyped(json, true), { scope: 'organization' } as const);
        case 'user':
            return Object.assign({}, UserKeysetFromJSONTyped(json, true), { scope: 'user' } as const);
        default:
            throw new Error(`No variant of GetKeysetResponse exists with 'scope=${json['scope']}'`);
    }
}

export function GetKeysetResponseToJSON(json: any): any {
    return GetKeysetResponseToJSONTyped(json, false);
}

export function GetKeysetResponseToJSONTyped(value?: GetKeysetResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['scope']) {
        case 'organization':
            return Object.assign({}, OrganizationKeysetToJSON(value), { scope: 'organization' } as const);
        case 'user':
            return Object.assign({}, UserKeysetToJSON(value), { scope: 'user' } as const);
        default:
            throw new Error(`No variant of GetKeysetResponse exists with 'scope=${value['scope']}'`);
    }

}

