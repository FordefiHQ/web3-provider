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


/**
 * 
 * @export
 */
export const CreateUserGroupErrorType = {
    invalidGroupName: 'invalid_group_name',
    cannotCreateUserGroupWithNonExistingUsers: 'cannot_create_user_group_with_non_existing_users',
    cannotCreateUserGroupForUsersState: 'cannot_create_user_group_for_users_state',
    cannotCreateUserGroupForUsersType: 'cannot_create_user_group_for_users_type'
} as const;
export type CreateUserGroupErrorType = typeof CreateUserGroupErrorType[keyof typeof CreateUserGroupErrorType];


export function CreateUserGroupErrorTypeFromJSON(json: any): CreateUserGroupErrorType {
    return CreateUserGroupErrorTypeFromJSONTyped(json, false);
}

export function CreateUserGroupErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateUserGroupErrorType {
    return json as CreateUserGroupErrorType;
}

export function CreateUserGroupErrorTypeToJSON(value?: CreateUserGroupErrorType | null): any {
    return value as any;
}

