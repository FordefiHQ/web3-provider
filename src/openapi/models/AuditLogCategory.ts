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
export const AuditLogCategory = {
    policy: 'policy',
    quorumThreshold: 'quorum_threshold',
    userManagement: 'user_management',
    vaults: 'vaults',
    addressBook: 'address_book',
    addressGroup: 'address_group',
    backup: 'backup',
    webhook: 'webhook',
    vaultGroup: 'vault_group',
    userGroup: 'user_group'
} as const;
export type AuditLogCategory = typeof AuditLogCategory[keyof typeof AuditLogCategory];


export function AuditLogCategoryFromJSON(json: any): AuditLogCategory {
    return AuditLogCategoryFromJSONTyped(json, false);
}

export function AuditLogCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuditLogCategory {
    return json as AuditLogCategory;
}

export function AuditLogCategoryToJSON(value?: AuditLogCategory | null): any {
    return value as any;
}

