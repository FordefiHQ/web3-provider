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
export const Resource = {
    user: 'user',
    userChangeProposals: 'user_change_proposals',
    userGroup: 'user_group',
    userGroupChangeProposal: 'user_group_change_proposal',
    vault: 'vault',
    vaultAddress: 'vault_address',
    vaultGroup: 'vault_group',
    transaction: 'transaction',
    batchTransaction: 'batch_transaction',
    path: 'path',
    keyset: 'keyset',
    authToken: 'auth_token',
    accessToken: 'access_token',
    asset: 'asset',
    assetInfo: 'asset_info',
    vaultDerivationPath: 'vault_derivation_path'
} as const;
export type Resource = typeof Resource[keyof typeof Resource];


export function ResourceFromJSON(json: any): Resource {
    return ResourceFromJSONTyped(json, false);
}

export function ResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Resource {
    return json as Resource;
}

export function ResourceToJSON(value?: Resource | null): any {
    return value as any;
}

