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
 * @interface SolanaRawTransactionDetails
 */
export interface SolanaRawTransactionDetails {
    /**
     * 
     * @type {string}
     * @memberof SolanaRawTransactionDetails
     */
    type: SolanaRawTransactionDetailsTypeEnum;
}


/**
 * @export
 */
export const SolanaRawTransactionDetailsTypeEnum = {
    rawTransaction: 'raw_transaction'
} as const;
export type SolanaRawTransactionDetailsTypeEnum = typeof SolanaRawTransactionDetailsTypeEnum[keyof typeof SolanaRawTransactionDetailsTypeEnum];


/**
 * Check if a given object implements the SolanaRawTransactionDetails interface.
 */
export function instanceOfSolanaRawTransactionDetails(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function SolanaRawTransactionDetailsFromJSON(json: any): SolanaRawTransactionDetails {
    return SolanaRawTransactionDetailsFromJSONTyped(json, false);
}

export function SolanaRawTransactionDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolanaRawTransactionDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function SolanaRawTransactionDetailsToJSON(value?: SolanaRawTransactionDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
    };
}

