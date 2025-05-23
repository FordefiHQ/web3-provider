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
export const StateChangeReason = {
    failedToVerifySignature: 'failed_to_verify_signature',
    originalTransactionWasCompleted: 'original_transaction_was_completed'
} as const;
export type StateChangeReason = typeof StateChangeReason[keyof typeof StateChangeReason];


export function instanceOfStateChangeReason(value: any): boolean {
    for (const key in StateChangeReason) {
        if (Object.prototype.hasOwnProperty.call(StateChangeReason, key)) {
            if (StateChangeReason[key as keyof typeof StateChangeReason] === value) {
                return true;
            }
        }
    }
    return false;
}

export function StateChangeReasonFromJSON(json: any): StateChangeReason {
    return StateChangeReasonFromJSONTyped(json, false);
}

export function StateChangeReasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): StateChangeReason {
    return json as StateChangeReason;
}

export function StateChangeReasonToJSON(value?: StateChangeReason | null): any {
    return value as any;
}

export function StateChangeReasonToJSONTyped(value: any, ignoreDiscriminator: boolean): StateChangeReason {
    return value as StateChangeReason;
}

