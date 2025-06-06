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
 * @interface TronAccountRepr
 */
export interface TronAccountRepr {
    /**
     * 
     * @type {string}
     * @memberof TronAccountRepr
     */
    chainType: TronAccountReprChainTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TronAccountRepr
     */
    hexRepr: string;
}


/**
 * @export
 */
export const TronAccountReprChainTypeEnum = {
    tron: 'tron'
} as const;
export type TronAccountReprChainTypeEnum = typeof TronAccountReprChainTypeEnum[keyof typeof TronAccountReprChainTypeEnum];


/**
 * Check if a given object implements the TronAccountRepr interface.
 */
export function instanceOfTronAccountRepr(value: object): value is TronAccountRepr {
    if (!('chainType' in value) || value['chainType'] === undefined) return false;
    if (!('hexRepr' in value) || value['hexRepr'] === undefined) return false;
    return true;
}

export function TronAccountReprFromJSON(json: any): TronAccountRepr {
    return TronAccountReprFromJSONTyped(json, false);
}

export function TronAccountReprFromJSONTyped(json: any, ignoreDiscriminator: boolean): TronAccountRepr {
    if (json == null) {
        return json;
    }
    return {
        
        'chainType': json['chain_type'],
        'hexRepr': json['hex_repr'],
    };
}

export function TronAccountReprToJSON(json: any): TronAccountRepr {
    return TronAccountReprToJSONTyped(json, false);
}

export function TronAccountReprToJSONTyped(value?: TronAccountRepr | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chain_type': value['chainType'],
        'hex_repr': value['hexRepr'],
    };
}

