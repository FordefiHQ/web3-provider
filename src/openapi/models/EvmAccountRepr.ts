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
 * @interface EvmAccountRepr
 */
export interface EvmAccountRepr {
    /**
     * 
     * @type {string}
     * @memberof EvmAccountRepr
     */
    chainType: EvmAccountReprChainTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof EvmAccountRepr
     */
    hexRepr: string;
}


/**
 * @export
 */
export const EvmAccountReprChainTypeEnum = {
    evm: 'evm'
} as const;
export type EvmAccountReprChainTypeEnum = typeof EvmAccountReprChainTypeEnum[keyof typeof EvmAccountReprChainTypeEnum];


/**
 * Check if a given object implements the EvmAccountRepr interface.
 */
export function instanceOfEvmAccountRepr(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "chainType" in value;
    isInstance = isInstance && "hexRepr" in value;

    return isInstance;
}

export function EvmAccountReprFromJSON(json: any): EvmAccountRepr {
    return EvmAccountReprFromJSONTyped(json, false);
}

export function EvmAccountReprFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvmAccountRepr {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chainType': json['chain_type'],
        'hexRepr': json['hex_repr'],
    };
}

export function EvmAccountReprToJSON(value?: EvmAccountRepr | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chain_type': value.chainType,
        'hex_repr': value.hexRepr,
    };
}

