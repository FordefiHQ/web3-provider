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
export const PeriodicAmountScopeType = {
    single: 'single',
    cumulative: 'cumulative'
} as const;
export type PeriodicAmountScopeType = typeof PeriodicAmountScopeType[keyof typeof PeriodicAmountScopeType];


export function PeriodicAmountScopeTypeFromJSON(json: any): PeriodicAmountScopeType {
    return PeriodicAmountScopeTypeFromJSONTyped(json, false);
}

export function PeriodicAmountScopeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PeriodicAmountScopeType {
    return json as PeriodicAmountScopeType;
}

export function PeriodicAmountScopeTypeToJSON(value?: PeriodicAmountScopeType | null): any {
    return value as any;
}

