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
export const SolanaMessageType = {
    personalMessageType: 'personal_message_type'
} as const;
export type SolanaMessageType = typeof SolanaMessageType[keyof typeof SolanaMessageType];


export function SolanaMessageTypeFromJSON(json: any): SolanaMessageType {
    return SolanaMessageTypeFromJSONTyped(json, false);
}

export function SolanaMessageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolanaMessageType {
    return json as SolanaMessageType;
}

export function SolanaMessageTypeToJSON(value?: SolanaMessageType | null): any {
    return value as any;
}

