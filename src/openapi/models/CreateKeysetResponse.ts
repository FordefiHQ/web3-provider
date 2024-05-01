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
    OrganizationKeyset,
    instanceOfOrganizationKeyset,
    OrganizationKeysetFromJSON,
    OrganizationKeysetFromJSONTyped,
    OrganizationKeysetToJSON,
} from './OrganizationKeyset';
import {
    UserKeyset,
    instanceOfUserKeyset,
    UserKeysetFromJSON,
    UserKeysetFromJSONTyped,
    UserKeysetToJSON,
} from './UserKeyset';

/**
 * @type CreateKeysetResponse
 * 
 * @export
 */
export type CreateKeysetResponse = { scope: 'organization' } & OrganizationKeyset | { scope: 'user' } & UserKeyset;

export function CreateKeysetResponseFromJSON(json: any): CreateKeysetResponse {
    return CreateKeysetResponseFromJSONTyped(json, false);
}

export function CreateKeysetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateKeysetResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['scope']) {
        case 'organization':
            return {...OrganizationKeysetFromJSONTyped(json, true), scope: 'organization'};
        case 'user':
            return {...UserKeysetFromJSONTyped(json, true), scope: 'user'};
        default:
            throw new Error(`No variant of CreateKeysetResponse exists with 'scope=${json['scope']}'`);
    }
}

export function CreateKeysetResponseToJSON(value?: CreateKeysetResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['scope']) {
        case 'organization':
            return OrganizationKeysetToJSON(value);
        case 'user':
            return UserKeysetToJSON(value);
        default:
            throw new Error(`No variant of CreateKeysetResponse exists with 'scope=${value['scope']}'`);
    }

}

