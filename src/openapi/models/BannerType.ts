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
export const BannerType = {
    welcomeMessage: 'welcome_message'
} as const;
export type BannerType = typeof BannerType[keyof typeof BannerType];


export function BannerTypeFromJSON(json: any): BannerType {
    return BannerTypeFromJSONTyped(json, false);
}

export function BannerTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BannerType {
    return json as BannerType;
}

export function BannerTypeToJSON(value?: BannerType | null): any {
    return value as any;
}

