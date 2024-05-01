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
 * @interface CosmosAccountRepr
 */
export interface CosmosAccountRepr {
    /**
     * 
     * @type {string}
     * @memberof CosmosAccountRepr
     */
    chainType: CosmosAccountReprChainTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CosmosAccountRepr
     */
    bech32Repr: string;
}


/**
 * @export
 */
export const CosmosAccountReprChainTypeEnum = {
    cosmos: 'cosmos'
} as const;
export type CosmosAccountReprChainTypeEnum = typeof CosmosAccountReprChainTypeEnum[keyof typeof CosmosAccountReprChainTypeEnum];


/**
 * Check if a given object implements the CosmosAccountRepr interface.
 */
export function instanceOfCosmosAccountRepr(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "chainType" in value;
    isInstance = isInstance && "bech32Repr" in value;

    return isInstance;
}

export function CosmosAccountReprFromJSON(json: any): CosmosAccountRepr {
    return CosmosAccountReprFromJSONTyped(json, false);
}

export function CosmosAccountReprFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosAccountRepr {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chainType': json['chain_type'],
        'bech32Repr': json['bech32_repr'],
    };
}

export function CosmosAccountReprToJSON(value?: CosmosAccountRepr | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chain_type': value.chainType,
        'bech32_repr': value.bech32Repr,
    };
}

