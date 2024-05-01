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
export const EncryptedDeviceSharesUploadErrorType = {
    desiredKeyTypesAreMissingForKeyset: 'desired_key_types_are_missing_for_keyset',
    backupKeysMismatchDesiredKeyTypes: 'backup_keys_mismatch_desired_key_types',
    keysAreNotGenerated: 'keys_are_not_generated'
} as const;
export type EncryptedDeviceSharesUploadErrorType = typeof EncryptedDeviceSharesUploadErrorType[keyof typeof EncryptedDeviceSharesUploadErrorType];


export function EncryptedDeviceSharesUploadErrorTypeFromJSON(json: any): EncryptedDeviceSharesUploadErrorType {
    return EncryptedDeviceSharesUploadErrorTypeFromJSONTyped(json, false);
}

export function EncryptedDeviceSharesUploadErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EncryptedDeviceSharesUploadErrorType {
    return json as EncryptedDeviceSharesUploadErrorType;
}

export function EncryptedDeviceSharesUploadErrorTypeToJSON(value?: EncryptedDeviceSharesUploadErrorType | null): any {
    return value as any;
}

