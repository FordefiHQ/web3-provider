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
export const CosmosMessageState = {
    waitingForApproval: 'waiting_for_approval',
    waitingForSigningTrigger: 'waiting_for_signing_trigger',
    approved: 'approved',
    signed: 'signed',
    completed: 'completed',
    errorSigning: 'error_signing',
    aborted: 'aborted'
} as const;
export type CosmosMessageState = typeof CosmosMessageState[keyof typeof CosmosMessageState];


export function CosmosMessageStateFromJSON(json: any): CosmosMessageState {
    return CosmosMessageStateFromJSONTyped(json, false);
}

export function CosmosMessageStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosMessageState {
    return json as CosmosMessageState;
}

export function CosmosMessageStateToJSON(value?: CosmosMessageState | null): any {
    return value as any;
}

