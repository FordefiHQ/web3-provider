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
export const VaultState = {
    active: 'active',
    archived: 'archived'
} as const;
export type VaultState = typeof VaultState[keyof typeof VaultState];


export function VaultStateFromJSON(json: any): VaultState {
    return VaultStateFromJSONTyped(json, false);
}

export function VaultStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): VaultState {
    return json as VaultState;
}

export function VaultStateToJSON(value?: VaultState | null): any {
    return value as any;
}

