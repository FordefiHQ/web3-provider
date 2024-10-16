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
export const TonMessageState = {
    waitingForApproval: 'waiting_for_approval',
    waitingForSigningTrigger: 'waiting_for_signing_trigger',
    approved: 'approved',
    signed: 'signed',
    completed: 'completed',
    errorSigning: 'error_signing',
    aborted: 'aborted'
} as const;
export type TonMessageState = typeof TonMessageState[keyof typeof TonMessageState];


export function TonMessageStateFromJSON(json: any): TonMessageState {
    return TonMessageStateFromJSONTyped(json, false);
}

export function TonMessageStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonMessageState {
    return json as TonMessageState;
}

export function TonMessageStateToJSON(value?: TonMessageState | null): any {
    return value as any;
}

