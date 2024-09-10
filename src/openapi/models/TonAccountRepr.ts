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
 * @interface TonAccountRepr
 */
export interface TonAccountRepr {
    /**
     * 
     * @type {string}
     * @memberof TonAccountRepr
     */
    chainType: TonAccountReprChainTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TonAccountRepr
     */
    base64UrlRepr: string;
}


/**
 * @export
 */
export const TonAccountReprChainTypeEnum = {
    ton: 'ton'
} as const;
export type TonAccountReprChainTypeEnum = typeof TonAccountReprChainTypeEnum[keyof typeof TonAccountReprChainTypeEnum];


/**
 * Check if a given object implements the TonAccountRepr interface.
 */
export function instanceOfTonAccountRepr(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "chainType" in value;
    isInstance = isInstance && "base64UrlRepr" in value;

    return isInstance;
}

export function TonAccountReprFromJSON(json: any): TonAccountRepr {
    return TonAccountReprFromJSONTyped(json, false);
}

export function TonAccountReprFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonAccountRepr {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chainType': json['chain_type'],
        'base64UrlRepr': json['base64_url_repr'],
    };
}

export function TonAccountReprToJSON(value?: TonAccountRepr | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chain_type': value.chainType,
        'base64_url_repr': value.base64UrlRepr,
    };
}

