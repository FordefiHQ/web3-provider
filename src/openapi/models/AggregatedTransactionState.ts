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
export const AggregatedTransactionState = {
    pending: 'pending',
    finalized: 'finalized',
    error: 'error'
} as const;
export type AggregatedTransactionState = typeof AggregatedTransactionState[keyof typeof AggregatedTransactionState];


export function instanceOfAggregatedTransactionState(value: any): boolean {
    for (const key in AggregatedTransactionState) {
        if (Object.prototype.hasOwnProperty.call(AggregatedTransactionState, key)) {
            if (AggregatedTransactionState[key as keyof typeof AggregatedTransactionState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function AggregatedTransactionStateFromJSON(json: any): AggregatedTransactionState {
    return AggregatedTransactionStateFromJSONTyped(json, false);
}

export function AggregatedTransactionStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AggregatedTransactionState {
    return json as AggregatedTransactionState;
}

export function AggregatedTransactionStateToJSON(value?: AggregatedTransactionState | null): any {
    return value as any;
}

export function AggregatedTransactionStateToJSONTyped(value: any, ignoreDiscriminator: boolean): AggregatedTransactionState {
    return value as AggregatedTransactionState;
}

