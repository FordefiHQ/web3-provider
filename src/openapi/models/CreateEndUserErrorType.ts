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
export const CreateEndUserErrorType = {
    unsupportedOrganization: 'unsupported_organization',
    backupNotReady: 'backup_not_ready'
} as const;
export type CreateEndUserErrorType = typeof CreateEndUserErrorType[keyof typeof CreateEndUserErrorType];


export function CreateEndUserErrorTypeFromJSON(json: any): CreateEndUserErrorType {
    return CreateEndUserErrorTypeFromJSONTyped(json, false);
}

export function CreateEndUserErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEndUserErrorType {
    return json as CreateEndUserErrorType;
}

export function CreateEndUserErrorTypeToJSON(value?: CreateEndUserErrorType | null): any {
    return value as any;
}

