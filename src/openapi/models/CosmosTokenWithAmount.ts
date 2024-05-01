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
import type { CosmosToken } from './CosmosToken';
import {
    CosmosTokenFromJSON,
    CosmosTokenFromJSONTyped,
    CosmosTokenToJSON,
} from './CosmosToken';

/**
 * 
 * @export
 * @interface CosmosTokenWithAmount
 */
export interface CosmosTokenWithAmount {
    /**
     * 
     * @type {string}
     * @memberof CosmosTokenWithAmount
     */
    amount: string;
    /**
     * 
     * @type {string}
     * @memberof CosmosTokenWithAmount
     */
    type: CosmosTokenWithAmountTypeEnum;
    /**
     * 
     * @type {CosmosToken}
     * @memberof CosmosTokenWithAmount
     */
    coin: CosmosToken;
}


/**
 * @export
 */
export const CosmosTokenWithAmountTypeEnum = {
    token: 'token'
} as const;
export type CosmosTokenWithAmountTypeEnum = typeof CosmosTokenWithAmountTypeEnum[keyof typeof CosmosTokenWithAmountTypeEnum];


/**
 * Check if a given object implements the CosmosTokenWithAmount interface.
 */
export function instanceOfCosmosTokenWithAmount(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "coin" in value;

    return isInstance;
}

export function CosmosTokenWithAmountFromJSON(json: any): CosmosTokenWithAmount {
    return CosmosTokenWithAmountFromJSONTyped(json, false);
}

export function CosmosTokenWithAmountFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosTokenWithAmount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'type': json['type'],
        'coin': CosmosTokenFromJSON(json['coin']),
    };
}

export function CosmosTokenWithAmountToJSON(value?: CosmosTokenWithAmount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'type': value.type,
        'coin': CosmosTokenToJSON(value.coin),
    };
}

