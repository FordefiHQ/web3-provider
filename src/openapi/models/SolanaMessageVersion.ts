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
export const SolanaMessageVersion = {
    legacy: 'legacy',
    v0: 'v0'
} as const;
export type SolanaMessageVersion = typeof SolanaMessageVersion[keyof typeof SolanaMessageVersion];

export function SolanaMessageVersionFromJSON(json: any): SolanaMessageVersion {
    return SolanaMessageVersionFromJSONTyped(json, false);
}

function SolanaMessageVersionFromJSONTyped(json: any, _ignoreDiscriminator: boolean): SolanaMessageVersion {
    return json as SolanaMessageVersion;
}

export function SolanaMessageVersionToJSON(value?: SolanaMessageVersion | null): any {
    return value as any;
}

