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

import type { UserState } from './UserState';
import {
    UserStateFromJSON,
} from './UserState';
import type { UserRole } from './UserRole';
import {
    UserRoleFromJSON,
} from './UserRole';

/**
 * 
 * @export
 * @interface PersonRef
 */
export interface PersonRef {
    /**
     * 
     * @type {string}
     * @memberof PersonRef
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PersonRef
     */
    userType: PersonRefUserTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PersonRef
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PersonRef
     */
    email: string;
    /**
     * 
     * @type {UserState}
     * @memberof PersonRef
     */
    state: UserState;
    /**
     * 
     * @type {UserRole}
     * @memberof PersonRef
     */
    role: UserRole;
}


/**
 * 
 */
const PersonRefUserTypeEnum = {
    person: 'person'
} as const;
type PersonRefUserTypeEnum = typeof PersonRefUserTypeEnum[keyof typeof PersonRefUserTypeEnum];

export function PersonRefFromJSONTyped(json: any, _ignoreDiscriminator: boolean): PersonRef {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userType': json['user_type'],
        'name': json['name'] == null ? undefined : json['name'],
        'email': json['email'],
        'state': UserStateFromJSON(json['state']),
        'role': UserRoleFromJSON(json['role']),
    };
}
