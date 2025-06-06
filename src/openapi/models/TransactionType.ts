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
export const TransactionType = {
    aptosMessage: 'aptos_message',
    aptosTransaction: 'aptos_transaction',
    blackBoxSignature: 'black_box_signature',
    cosmosMessage: 'cosmos_message',
    cosmosTransaction: 'cosmos_transaction',
    evmMessage: 'evm_message',
    evmTransaction: 'evm_transaction',
    exchangeTransaction: 'exchange_transaction',
    solanaMessage: 'solana_message',
    solanaTransaction: 'solana_transaction',
    stacksTransaction: 'stacks_transaction',
    starknetMessage: 'starknet_message',
    starknetTransaction: 'starknet_transaction',
    suiMessage: 'sui_message',
    suiTransaction: 'sui_transaction',
    tonMessage: 'ton_message',
    tonTransaction: 'ton_transaction',
    tronTransaction: 'tron_transaction',
    utxoMessage: 'utxo_message',
    utxoTransaction: 'utxo_transaction'
} as const;
export type TransactionType = typeof TransactionType[keyof typeof TransactionType];


export function instanceOfTransactionType(value: any): boolean {
    for (const key in TransactionType) {
        if (Object.prototype.hasOwnProperty.call(TransactionType, key)) {
            if (TransactionType[key as keyof typeof TransactionType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TransactionTypeFromJSON(json: any): TransactionType {
    return TransactionTypeFromJSONTyped(json, false);
}

export function TransactionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionType {
    return json as TransactionType;
}

export function TransactionTypeToJSON(value?: TransactionType | null): any {
    return value as any;
}

export function TransactionTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): TransactionType {
    return value as TransactionType;
}

