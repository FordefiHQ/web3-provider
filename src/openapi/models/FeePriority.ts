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
export const FeePriority = {
    custom: 'custom',
    low: 'low',
    medium: 'medium',
    high: 'high'
} as const;
export type FeePriority = typeof FeePriority[keyof typeof FeePriority];


export function FeePriorityFromJSON(json: any): FeePriority {
    return FeePriorityFromJSONTyped(json, false);
}

export function FeePriorityFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeePriority {
    return json as FeePriority;
}

export function FeePriorityToJSON(value?: FeePriority | null): any {
    return value as any;
}

