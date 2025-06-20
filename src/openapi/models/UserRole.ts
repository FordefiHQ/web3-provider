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


/**
 * @export
 */
export const UserRole = {
    admin: 'admin',
    trader: 'trader',
    viewer: 'viewer'
} as const;
export type UserRole = typeof UserRole[keyof typeof UserRole];

export function UserRoleFromJSON(json: any): UserRole {
    return UserRoleFromJSONTyped(json, false);
}

function UserRoleFromJSONTyped(json: any, _ignoreDiscriminator: boolean): UserRole {
    return json as UserRole;
}

