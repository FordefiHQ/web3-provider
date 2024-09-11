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
export const SuiReversionState = {
    notReverted: 'not_reverted',
    unknownRevert: 'unknown_revert',
    contractAsserted: 'contract_asserted',
    insufficientFundsGasAndValue: 'insufficient_funds_gas_and_value',
    invalidInput: 'invalid_input',
    transactionFailedToReachFinality: 'transaction_failed_to_reach_finality',
    outOfGas: 'out_of_gas',
    transactionLockedObjectsFailure: 'transaction_locked_objects_failure'
} as const;
export type SuiReversionState = typeof SuiReversionState[keyof typeof SuiReversionState];


export function SuiReversionStateFromJSON(json: any): SuiReversionState {
    return SuiReversionStateFromJSONTyped(json, false);
}

export function SuiReversionStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiReversionState {
    return json as SuiReversionState;
}

export function SuiReversionStateToJSON(value?: SuiReversionState | null): any {
    return value as any;
}

