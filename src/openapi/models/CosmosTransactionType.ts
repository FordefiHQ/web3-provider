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
export const CosmosTransactionType = {
    messages: 'messages',
    nativeTransfer: 'native_transfer',
    tokenTransfer: 'token_transfer'
} as const;
export type CosmosTransactionType = typeof CosmosTransactionType[keyof typeof CosmosTransactionType];


export function instanceOfCosmosTransactionType(value: any): boolean {
    for (const key in CosmosTransactionType) {
        if (Object.prototype.hasOwnProperty.call(CosmosTransactionType, key)) {
            if (CosmosTransactionType[key as keyof typeof CosmosTransactionType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CosmosTransactionTypeFromJSON(json: any): CosmosTransactionType {
    return CosmosTransactionTypeFromJSONTyped(json, false);
}

export function CosmosTransactionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosTransactionType {
    return json as CosmosTransactionType;
}

export function CosmosTransactionTypeToJSON(value?: CosmosTransactionType | null): any {
    return value as any;
}

export function CosmosTransactionTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): CosmosTransactionType {
    return value as CosmosTransactionType;
}

