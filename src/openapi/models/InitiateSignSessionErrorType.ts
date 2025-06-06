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
export const InitiateSignSessionErrorType = {
    missingMpcSetup: 'missing_mpc_setup',
    mpcSetupVersionMismatch: 'mpc_setup_version_mismatch'
} as const;
export type InitiateSignSessionErrorType = typeof InitiateSignSessionErrorType[keyof typeof InitiateSignSessionErrorType];


export function instanceOfInitiateSignSessionErrorType(value: any): boolean {
    for (const key in InitiateSignSessionErrorType) {
        if (Object.prototype.hasOwnProperty.call(InitiateSignSessionErrorType, key)) {
            if (InitiateSignSessionErrorType[key as keyof typeof InitiateSignSessionErrorType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function InitiateSignSessionErrorTypeFromJSON(json: any): InitiateSignSessionErrorType {
    return InitiateSignSessionErrorTypeFromJSONTyped(json, false);
}

export function InitiateSignSessionErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InitiateSignSessionErrorType {
    return json as InitiateSignSessionErrorType;
}

export function InitiateSignSessionErrorTypeToJSON(value?: InitiateSignSessionErrorType | null): any {
    return value as any;
}

export function InitiateSignSessionErrorTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): InitiateSignSessionErrorType {
    return value as InitiateSignSessionErrorType;
}

