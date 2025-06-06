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
export const VaultSortableFields = {
    createdAtAsc: 'created_at_asc',
    createdAtDesc: 'created_at_desc',
    nameAsc: 'name_asc',
    nameDesc: 'name_desc',
    vaultTypeAsc: 'vault_type_asc',
    vaultTypeDesc: 'vault_type_desc'
} as const;
export type VaultSortableFields = typeof VaultSortableFields[keyof typeof VaultSortableFields];


export function instanceOfVaultSortableFields(value: any): boolean {
    for (const key in VaultSortableFields) {
        if (Object.prototype.hasOwnProperty.call(VaultSortableFields, key)) {
            if (VaultSortableFields[key as keyof typeof VaultSortableFields] === value) {
                return true;
            }
        }
    }
    return false;
}

export function VaultSortableFieldsFromJSON(json: any): VaultSortableFields {
    return VaultSortableFieldsFromJSONTyped(json, false);
}

export function VaultSortableFieldsFromJSONTyped(json: any, ignoreDiscriminator: boolean): VaultSortableFields {
    return json as VaultSortableFields;
}

export function VaultSortableFieldsToJSON(value?: VaultSortableFields | null): any {
    return value as any;
}

export function VaultSortableFieldsToJSONTyped(value: any, ignoreDiscriminator: boolean): VaultSortableFields {
    return value as VaultSortableFields;
}

