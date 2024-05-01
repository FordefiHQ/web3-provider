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
export const ReleaseTransactionErrorType = {
    partialSignedRawRequest: 'partial_signed_raw_request',
    invalidTransactionState: 'invalid_transaction_state',
    invalidTransactionType: 'invalid_transaction_type',
    missingSignedRawRequest: 'missing_signed_raw_request',
    redundantSignedRawRequest: 'redundant_signed_raw_request',
    nonManagedTransaction: 'non_managed_transaction',
    invalidSignedRawRequest: 'invalid_signed_raw_request',
    invalidSignerType: 'invalid_signer_type',
    revertedTransaction: 'reverted_transaction',
    transactionUsesSecureNode: 'transaction_uses_secure_node'
} as const;
export type ReleaseTransactionErrorType = typeof ReleaseTransactionErrorType[keyof typeof ReleaseTransactionErrorType];


export function ReleaseTransactionErrorTypeFromJSON(json: any): ReleaseTransactionErrorType {
    return ReleaseTransactionErrorTypeFromJSONTyped(json, false);
}

export function ReleaseTransactionErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReleaseTransactionErrorType {
    return json as ReleaseTransactionErrorType;
}

export function ReleaseTransactionErrorTypeToJSON(value?: ReleaseTransactionErrorType | null): any {
    return value as any;
}

