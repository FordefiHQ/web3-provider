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
export const WebhookResourceType = {
    transactions: 'transactions'
} as const;
export type WebhookResourceType = typeof WebhookResourceType[keyof typeof WebhookResourceType];


export function WebhookResourceTypeFromJSON(json: any): WebhookResourceType {
    return WebhookResourceTypeFromJSONTyped(json, false);
}

export function WebhookResourceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookResourceType {
    return json as WebhookResourceType;
}

export function WebhookResourceTypeToJSON(value?: WebhookResourceType | null): any {
    return value as any;
}

