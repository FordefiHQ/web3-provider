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
export const ConnectWalletErrorType = {
    maliciousWalletUrl: 'malicious_wallet_url'
} as const;
export type ConnectWalletErrorType = typeof ConnectWalletErrorType[keyof typeof ConnectWalletErrorType];


export function ConnectWalletErrorTypeFromJSON(json: any): ConnectWalletErrorType {
    return ConnectWalletErrorTypeFromJSONTyped(json, false);
}

export function ConnectWalletErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectWalletErrorType {
    return json as ConnectWalletErrorType;
}

export function ConnectWalletErrorTypeToJSON(value?: ConnectWalletErrorType | null): any {
    return value as any;
}

