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
export const UserType = {
    person: 'person',
    apiSigner: 'api_signer',
    apiUser: 'api_user'
} as const;
export type UserType = typeof UserType[keyof typeof UserType];


export function UserTypeFromJSON(json: any): UserType {
    return UserTypeFromJSONTyped(json, false);
}

export function UserTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserType {
    return json as UserType;
}

export function UserTypeToJSON(value?: UserType | null): any {
    return value as any;
}

