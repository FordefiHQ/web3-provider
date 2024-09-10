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
export const SolanaTransactionState = {
    waitingForApproval: 'waiting_for_approval',
    waitingForSigningTrigger: 'waiting_for_signing_trigger',
    approved: 'approved',
    signed: 'signed',
    pushedToBlockchain: 'pushed_to_blockchain',
    mined: 'mined',
    completed: 'completed',
    aborted: 'aborted',
    errorPushingToBlockchain: 'error_pushing_to_blockchain',
    minedReverted: 'mined_reverted',
    completedReverted: 'completed_reverted',
    errorSigning: 'error_signing',
    dropped: 'dropped'
} as const;
export type SolanaTransactionState = typeof SolanaTransactionState[keyof typeof SolanaTransactionState];


export function SolanaTransactionStateFromJSON(json: any): SolanaTransactionState {
    return SolanaTransactionStateFromJSONTyped(json, false);
}

export function SolanaTransactionStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolanaTransactionState {
    return json as SolanaTransactionState;
}

export function SolanaTransactionStateToJSON(value?: SolanaTransactionState | null): any {
    return value as any;
}

