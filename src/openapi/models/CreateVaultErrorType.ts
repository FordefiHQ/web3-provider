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
export const CreateVaultErrorType = {
    cosmosNotSupported: 'cosmos_not_supported',
    maxVaultsReached: 'max_vaults_reached',
    mpcKeyIsMissing: 'mpc_key_is_missing',
    keysetIsMissing: 'keyset_is_missing',
    userKeysetIsRequiredForOrganization: 'user_keyset_is_required_for_organization',
    keysetNotReady: 'keyset_not_ready'
} as const;
export type CreateVaultErrorType = typeof CreateVaultErrorType[keyof typeof CreateVaultErrorType];


export function CreateVaultErrorTypeFromJSON(json: any): CreateVaultErrorType {
    return CreateVaultErrorTypeFromJSONTyped(json, false);
}

export function CreateVaultErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateVaultErrorType {
    return json as CreateVaultErrorType;
}

export function CreateVaultErrorTypeToJSON(value?: CreateVaultErrorType | null): any {
    return value as any;
}

