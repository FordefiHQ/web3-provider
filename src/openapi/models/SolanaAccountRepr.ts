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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SolanaAccountRepr
 */
export interface SolanaAccountRepr {
    /**
     * 
     * @type {string}
     * @memberof SolanaAccountRepr
     */
    chainType: SolanaAccountReprChainTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SolanaAccountRepr
     */
    base58Repr: string;
}


/**
 * @export
 */
export const SolanaAccountReprChainTypeEnum = {
    solana: 'solana'
} as const;
export type SolanaAccountReprChainTypeEnum = typeof SolanaAccountReprChainTypeEnum[keyof typeof SolanaAccountReprChainTypeEnum];


/**
 * Check if a given object implements the SolanaAccountRepr interface.
 */
export function instanceOfSolanaAccountRepr(value: object): value is SolanaAccountRepr {
    if (!('chainType' in value) || value['chainType'] === undefined) return false;
    if (!('base58Repr' in value) || value['base58Repr'] === undefined) return false;
    return true;
}

export function SolanaAccountReprFromJSON(json: any): SolanaAccountRepr {
    return SolanaAccountReprFromJSONTyped(json, false);
}

export function SolanaAccountReprFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolanaAccountRepr {
    if (json == null) {
        return json;
    }
    return {
        
        'chainType': json['chain_type'],
        'base58Repr': json['base58_repr'],
    };
}

export function SolanaAccountReprToJSON(json: any): SolanaAccountRepr {
    return SolanaAccountReprToJSONTyped(json, false);
}

export function SolanaAccountReprToJSONTyped(value?: SolanaAccountRepr | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chain_type': value['chainType'],
        'base58_repr': value['base58Repr'],
    };
}

