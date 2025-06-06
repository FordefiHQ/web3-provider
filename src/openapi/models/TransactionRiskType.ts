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
export const TransactionRiskType = {
    transferToErc20Contract: 'transfer_to_erc20_contract',
    organizationNotInteractedWithAddress: 'organization_not_interacted_with_address',
    vaultNotInteractedWithAddress: 'vault_not_interacted_with_address',
    allowanceToEoa: 'allowance_to_eoa',
    unlimitedAllowance: 'unlimited_allowance',
    contractNotVerified: 'contract_not_verified',
    bridgeDestDifferFromSender: 'bridge_dest_differ_from_sender',
    nftApproveForAll: 'nft_approve_for_all',
    missingSimulation: 'missing_simulation',
    unsupportedSimulation: 'unsupported_simulation',
    postConditionsAllowMode: 'post_conditions_allow_mode'
} as const;
export type TransactionRiskType = typeof TransactionRiskType[keyof typeof TransactionRiskType];


export function instanceOfTransactionRiskType(value: any): boolean {
    for (const key in TransactionRiskType) {
        if (Object.prototype.hasOwnProperty.call(TransactionRiskType, key)) {
            if (TransactionRiskType[key as keyof typeof TransactionRiskType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TransactionRiskTypeFromJSON(json: any): TransactionRiskType {
    return TransactionRiskTypeFromJSONTyped(json, false);
}

export function TransactionRiskTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionRiskType {
    return json as TransactionRiskType;
}

export function TransactionRiskTypeToJSON(value?: TransactionRiskType | null): any {
    return value as any;
}

export function TransactionRiskTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): TransactionRiskType {
    return value as TransactionRiskType;
}

