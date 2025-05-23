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
export const SignTransactionErrorType = {
    invalidTransactionState: 'invalid_transaction_state',
    nonManagedTransaction: 'non_managed_transaction',
    nodeRejectedTransaction: 'node_rejected_transaction',
    nodeRejectedTransactionInsufficientFunds: 'node_rejected_transaction_insufficient_funds',
    nodeRejectedTransactionInsufficientFundsForFee: 'node_rejected_transaction_insufficient_funds_for_fee',
    nodeRejectedTransactionGasTooLow: 'node_rejected_transaction_gas_too_low',
    nodeRejectedTransactionInvalidNonce: 'node_rejected_transaction_invalid_nonce',
    nodeRejectedTransactionUnknownBlockhash: 'node_rejected_transaction_unknown_blockhash'
} as const;
export type SignTransactionErrorType = typeof SignTransactionErrorType[keyof typeof SignTransactionErrorType];


export function instanceOfSignTransactionErrorType(value: any): boolean {
    for (const key in SignTransactionErrorType) {
        if (Object.prototype.hasOwnProperty.call(SignTransactionErrorType, key)) {
            if (SignTransactionErrorType[key as keyof typeof SignTransactionErrorType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SignTransactionErrorTypeFromJSON(json: any): SignTransactionErrorType {
    return SignTransactionErrorTypeFromJSONTyped(json, false);
}

export function SignTransactionErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignTransactionErrorType {
    return json as SignTransactionErrorType;
}

export function SignTransactionErrorTypeToJSON(value?: SignTransactionErrorType | null): any {
    return value as any;
}

export function SignTransactionErrorTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): SignTransactionErrorType {
    return value as SignTransactionErrorType;
}

