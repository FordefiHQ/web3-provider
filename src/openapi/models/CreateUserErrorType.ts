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
export const CreateUserErrorType = {
    notFound: 'groups_not_found',
    maxCapacityReached: 'groups_max_capacity_reached'
} as const;
export type CreateUserErrorType = typeof CreateUserErrorType[keyof typeof CreateUserErrorType];


export function instanceOfCreateUserErrorType(value: any): boolean {
    for (const key in CreateUserErrorType) {
        if (Object.prototype.hasOwnProperty.call(CreateUserErrorType, key)) {
            if (CreateUserErrorType[key as keyof typeof CreateUserErrorType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CreateUserErrorTypeFromJSON(json: any): CreateUserErrorType {
    return CreateUserErrorTypeFromJSONTyped(json, false);
}

export function CreateUserErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateUserErrorType {
    return json as CreateUserErrorType;
}

export function CreateUserErrorTypeToJSON(value?: CreateUserErrorType | null): any {
    return value as any;
}

export function CreateUserErrorTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): CreateUserErrorType {
    return value as CreateUserErrorType;
}

