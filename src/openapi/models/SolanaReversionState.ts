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
 * @export
 */
export const SolanaReversionState = {
    notReverted: 'not_reverted',
    unknownRevert: 'unknown_revert',
    contractAsserted: 'contract_asserted',
    insufficientFundsGasAndValue: 'insufficient_funds_gas_and_value',
    insufficientFundsForRent: 'insufficient_funds_for_rent'
} as const;
export type SolanaReversionState = typeof SolanaReversionState[keyof typeof SolanaReversionState];

export function SolanaReversionStateFromJSON(json: any): SolanaReversionState {
    return SolanaReversionStateFromJSONTyped(json, false);
}

function SolanaReversionStateFromJSONTyped(json: any, _ignoreDiscriminator: boolean): SolanaReversionState {
    return json as SolanaReversionState;
}

