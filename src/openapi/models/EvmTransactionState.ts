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
export const EvmTransactionState = {
    waitingForApproval: 'waiting_for_approval',
    waitingForSigningTrigger: 'waiting_for_signing_trigger',
    approved: 'approved',
    signed: 'signed',
    pushedToBlockchain: 'pushed_to_blockchain',
    queued: 'queued',
    mined: 'mined',
    completed: 'completed',
    aborting: 'aborting',
    dropped: 'dropped',
    aborted: 'aborted',
    errorSigning: 'error_signing',
    errorPushingToBlockchain: 'error_pushing_to_blockchain',
    minedReverted: 'mined_reverted',
    completedReverted: 'completed_reverted',
    stuck: 'stuck',
    accelerating: 'accelerating',
    canceling: 'canceling',
    accelerated: 'accelerated',
    cancelled: 'cancelled'
} as const;
export type EvmTransactionState = typeof EvmTransactionState[keyof typeof EvmTransactionState];


export function EvmTransactionStateFromJSON(json: any): EvmTransactionState {
    return EvmTransactionStateFromJSONTyped(json, false);
}

export function EvmTransactionStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvmTransactionState {
    return json as EvmTransactionState;
}

export function EvmTransactionStateToJSON(value?: EvmTransactionState | null): any {
    return value as any;
}

