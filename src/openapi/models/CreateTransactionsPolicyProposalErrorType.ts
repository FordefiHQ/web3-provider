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
export const CreateTransactionsPolicyProposalErrorType = {
    invalidPolicyRule: 'invalid_policy_rule'
} as const;
export type CreateTransactionsPolicyProposalErrorType = typeof CreateTransactionsPolicyProposalErrorType[keyof typeof CreateTransactionsPolicyProposalErrorType];


export function instanceOfCreateTransactionsPolicyProposalErrorType(value: any): boolean {
    for (const key in CreateTransactionsPolicyProposalErrorType) {
        if (Object.prototype.hasOwnProperty.call(CreateTransactionsPolicyProposalErrorType, key)) {
            if (CreateTransactionsPolicyProposalErrorType[key as keyof typeof CreateTransactionsPolicyProposalErrorType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CreateTransactionsPolicyProposalErrorTypeFromJSON(json: any): CreateTransactionsPolicyProposalErrorType {
    return CreateTransactionsPolicyProposalErrorTypeFromJSONTyped(json, false);
}

export function CreateTransactionsPolicyProposalErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTransactionsPolicyProposalErrorType {
    return json as CreateTransactionsPolicyProposalErrorType;
}

export function CreateTransactionsPolicyProposalErrorTypeToJSON(value?: CreateTransactionsPolicyProposalErrorType | null): any {
    return value as any;
}

export function CreateTransactionsPolicyProposalErrorTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): CreateTransactionsPolicyProposalErrorType {
    return value as CreateTransactionsPolicyProposalErrorType;
}

