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
export const TonMessageType = {
    proofMessageType: 'proof_message_type'
} as const;
export type TonMessageType = typeof TonMessageType[keyof typeof TonMessageType];


export function TonMessageTypeFromJSON(json: any): TonMessageType {
    return TonMessageTypeFromJSONTyped(json, false);
}

export function TonMessageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonMessageType {
    return json as TonMessageType;
}

export function TonMessageTypeToJSON(value?: TonMessageType | null): any {
    return value as any;
}

