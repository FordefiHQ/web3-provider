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
export const AmlScanStatus = {
    error: 'error',
    timeout: 'timeout',
    skipped: 'skipped',
    completed: 'completed',
    unsupportedChain: 'unsupported_chain',
    pending: 'pending'
} as const;
export type AmlScanStatus = typeof AmlScanStatus[keyof typeof AmlScanStatus];

export function AmlScanStatusFromJSON(json: any): AmlScanStatus {
    return AmlScanStatusFromJSONTyped(json, false);
}

function AmlScanStatusFromJSONTyped(json: any, _ignoreDiscriminator: boolean): AmlScanStatus {
    return json as AmlScanStatus;
}

