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
export const TransactionTypeCondition = {
    transfer: 'transfer',
    allowance: 'allowance',
    contractCall: 'contract_call',
    messageSignature: 'message_signature',
    blackBoxSignature: 'black_box_signature'
} as const;
export type TransactionTypeCondition = typeof TransactionTypeCondition[keyof typeof TransactionTypeCondition];


export function TransactionTypeConditionFromJSON(json: any): TransactionTypeCondition {
    return TransactionTypeConditionFromJSONTyped(json, false);
}

export function TransactionTypeConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionTypeCondition {
    return json as TransactionTypeCondition;
}

export function TransactionTypeConditionToJSON(value?: TransactionTypeCondition | null): any {
    return value as any;
}

