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
export const DklsRolloutStatus = {
    enabled: 'enabled',
    disabled: 'disabled'
} as const;
export type DklsRolloutStatus = typeof DklsRolloutStatus[keyof typeof DklsRolloutStatus];


export function DklsRolloutStatusFromJSON(json: any): DklsRolloutStatus {
    return DklsRolloutStatusFromJSONTyped(json, false);
}

export function DklsRolloutStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): DklsRolloutStatus {
    return json as DklsRolloutStatus;
}

export function DklsRolloutStatusToJSON(value?: DklsRolloutStatus | null): any {
    return value as any;
}

