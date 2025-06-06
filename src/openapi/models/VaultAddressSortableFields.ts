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
export const VaultAddressSortableFields = {
    createdAtAsc: 'created_at_asc',
    createdAtDesc: 'created_at_desc',
    nameAsc: 'name_asc',
    nameDesc: 'name_desc'
} as const;
export type VaultAddressSortableFields = typeof VaultAddressSortableFields[keyof typeof VaultAddressSortableFields];


export function instanceOfVaultAddressSortableFields(value: any): boolean {
    for (const key in VaultAddressSortableFields) {
        if (Object.prototype.hasOwnProperty.call(VaultAddressSortableFields, key)) {
            if (VaultAddressSortableFields[key as keyof typeof VaultAddressSortableFields] === value) {
                return true;
            }
        }
    }
    return false;
}

export function VaultAddressSortableFieldsFromJSON(json: any): VaultAddressSortableFields {
    return VaultAddressSortableFieldsFromJSONTyped(json, false);
}

export function VaultAddressSortableFieldsFromJSONTyped(json: any, ignoreDiscriminator: boolean): VaultAddressSortableFields {
    return json as VaultAddressSortableFields;
}

export function VaultAddressSortableFieldsToJSON(value?: VaultAddressSortableFields | null): any {
    return value as any;
}

export function VaultAddressSortableFieldsToJSONTyped(value: any, ignoreDiscriminator: boolean): VaultAddressSortableFields {
    return value as VaultAddressSortableFields;
}

