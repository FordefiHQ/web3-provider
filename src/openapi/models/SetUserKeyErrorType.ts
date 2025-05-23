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
export const SetUserKeyErrorType = {
    cannotSetKeyOfUserType: 'cannot_set_key_of_user_type'
} as const;
export type SetUserKeyErrorType = typeof SetUserKeyErrorType[keyof typeof SetUserKeyErrorType];


export function instanceOfSetUserKeyErrorType(value: any): boolean {
    for (const key in SetUserKeyErrorType) {
        if (Object.prototype.hasOwnProperty.call(SetUserKeyErrorType, key)) {
            if (SetUserKeyErrorType[key as keyof typeof SetUserKeyErrorType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SetUserKeyErrorTypeFromJSON(json: any): SetUserKeyErrorType {
    return SetUserKeyErrorTypeFromJSONTyped(json, false);
}

export function SetUserKeyErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetUserKeyErrorType {
    return json as SetUserKeyErrorType;
}

export function SetUserKeyErrorTypeToJSON(value?: SetUserKeyErrorType | null): any {
    return value as any;
}

export function SetUserKeyErrorTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): SetUserKeyErrorType {
    return value as SetUserKeyErrorType;
}

