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
export const SuiMessageType = {
    personalMessageType: 'personal_message_type'
} as const;
export type SuiMessageType = typeof SuiMessageType[keyof typeof SuiMessageType];


export function instanceOfSuiMessageType(value: any): boolean {
    for (const key in SuiMessageType) {
        if (Object.prototype.hasOwnProperty.call(SuiMessageType, key)) {
            if (SuiMessageType[key as keyof typeof SuiMessageType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SuiMessageTypeFromJSON(json: any): SuiMessageType {
    return SuiMessageTypeFromJSONTyped(json, false);
}

export function SuiMessageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiMessageType {
    return json as SuiMessageType;
}

export function SuiMessageTypeToJSON(value?: SuiMessageType | null): any {
    return value as any;
}

export function SuiMessageTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): SuiMessageType {
    return value as SuiMessageType;
}

