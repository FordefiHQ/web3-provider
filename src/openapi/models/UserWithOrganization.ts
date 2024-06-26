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
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface UserWithOrganization
 */
export interface UserWithOrganization {
    /**
     * 
     * @type {User}
     * @memberof UserWithOrganization
     */
    user: User;
    /**
     * 
     * @type {string}
     * @memberof UserWithOrganization
     */
    organizationId: string;
    /**
     * 
     * @type {string}
     * @memberof UserWithOrganization
     */
    organizationName: string;
}

/**
 * Check if a given object implements the UserWithOrganization interface.
 */
export function instanceOfUserWithOrganization(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "user" in value;
    isInstance = isInstance && "organizationId" in value;
    isInstance = isInstance && "organizationName" in value;

    return isInstance;
}

export function UserWithOrganizationFromJSON(json: any): UserWithOrganization {
    return UserWithOrganizationFromJSONTyped(json, false);
}

export function UserWithOrganizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserWithOrganization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': UserFromJSON(json['user']),
        'organizationId': json['organization_id'],
        'organizationName': json['organization_name'],
    };
}

export function UserWithOrganizationToJSON(value?: UserWithOrganization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': UserToJSON(value.user),
        'organization_id': value.organizationId,
        'organization_name': value.organizationName,
    };
}

