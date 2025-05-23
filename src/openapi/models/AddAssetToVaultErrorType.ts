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
export const AddAssetToVaultErrorType = {
    assetNotFoundInVault: 'asset_not_found_in_vault'
} as const;
export type AddAssetToVaultErrorType = typeof AddAssetToVaultErrorType[keyof typeof AddAssetToVaultErrorType];


export function instanceOfAddAssetToVaultErrorType(value: any): boolean {
    for (const key in AddAssetToVaultErrorType) {
        if (Object.prototype.hasOwnProperty.call(AddAssetToVaultErrorType, key)) {
            if (AddAssetToVaultErrorType[key as keyof typeof AddAssetToVaultErrorType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function AddAssetToVaultErrorTypeFromJSON(json: any): AddAssetToVaultErrorType {
    return AddAssetToVaultErrorTypeFromJSONTyped(json, false);
}

export function AddAssetToVaultErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddAssetToVaultErrorType {
    return json as AddAssetToVaultErrorType;
}

export function AddAssetToVaultErrorTypeToJSON(value?: AddAssetToVaultErrorType | null): any {
    return value as any;
}

export function AddAssetToVaultErrorTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): AddAssetToVaultErrorType {
    return value as AddAssetToVaultErrorType;
}

