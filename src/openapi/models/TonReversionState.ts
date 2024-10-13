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
export const TonReversionState = {
    notReverted: 'not_reverted',
    unknownRevert: 'unknown_revert',
    contractAsserted: 'contract_asserted',
    insufficientFundsGasAndValue: 'insufficient_funds_gas_and_value'
} as const;
export type TonReversionState = typeof TonReversionState[keyof typeof TonReversionState];


export function TonReversionStateFromJSON(json: any): TonReversionState {
    return TonReversionStateFromJSONTyped(json, false);
}

export function TonReversionStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonReversionState {
    return json as TonReversionState;
}

export function TonReversionStateToJSON(value?: TonReversionState | null): any {
    return value as any;
}

