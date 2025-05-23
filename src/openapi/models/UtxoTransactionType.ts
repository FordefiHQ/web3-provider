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
export const UtxoTransactionType = {
    nativeTransfer: 'native_transfer',
    partiallySignedBitcoinTransaction: 'partially_signed_bitcoin_transaction'
} as const;
export type UtxoTransactionType = typeof UtxoTransactionType[keyof typeof UtxoTransactionType];


export function instanceOfUtxoTransactionType(value: any): boolean {
    for (const key in UtxoTransactionType) {
        if (Object.prototype.hasOwnProperty.call(UtxoTransactionType, key)) {
            if (UtxoTransactionType[key as keyof typeof UtxoTransactionType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function UtxoTransactionTypeFromJSON(json: any): UtxoTransactionType {
    return UtxoTransactionTypeFromJSONTyped(json, false);
}

export function UtxoTransactionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UtxoTransactionType {
    return json as UtxoTransactionType;
}

export function UtxoTransactionTypeToJSON(value?: UtxoTransactionType | null): any {
    return value as any;
}

export function UtxoTransactionTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): UtxoTransactionType {
    return value as UtxoTransactionType;
}

