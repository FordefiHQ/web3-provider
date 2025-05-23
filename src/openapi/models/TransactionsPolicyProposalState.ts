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
export const TransactionsPolicyProposalState = {
    pendingVerification: 'pending_verification',
    created: 'created',
    completed: 'completed',
    aborted: 'aborted'
} as const;
export type TransactionsPolicyProposalState = typeof TransactionsPolicyProposalState[keyof typeof TransactionsPolicyProposalState];


export function instanceOfTransactionsPolicyProposalState(value: any): boolean {
    for (const key in TransactionsPolicyProposalState) {
        if (Object.prototype.hasOwnProperty.call(TransactionsPolicyProposalState, key)) {
            if (TransactionsPolicyProposalState[key as keyof typeof TransactionsPolicyProposalState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TransactionsPolicyProposalStateFromJSON(json: any): TransactionsPolicyProposalState {
    return TransactionsPolicyProposalStateFromJSONTyped(json, false);
}

export function TransactionsPolicyProposalStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionsPolicyProposalState {
    return json as TransactionsPolicyProposalState;
}

export function TransactionsPolicyProposalStateToJSON(value?: TransactionsPolicyProposalState | null): any {
    return value as any;
}

export function TransactionsPolicyProposalStateToJSONTyped(value: any, ignoreDiscriminator: boolean): TransactionsPolicyProposalState {
    return value as TransactionsPolicyProposalState;
}

