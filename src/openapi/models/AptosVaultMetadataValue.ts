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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AptosVaultMetadataValue
 */
export interface AptosVaultMetadataValue {
}

/**
 * Check if a given object implements the AptosVaultMetadataValue interface.
 */
export function instanceOfAptosVaultMetadataValue(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AptosVaultMetadataValueFromJSON(json: any): AptosVaultMetadataValue {
    return AptosVaultMetadataValueFromJSONTyped(json, false);
}

export function AptosVaultMetadataValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): AptosVaultMetadataValue {
    return json;
}

export function AptosVaultMetadataValueToJSON(value?: AptosVaultMetadataValue | null): any {
    return value;
}

