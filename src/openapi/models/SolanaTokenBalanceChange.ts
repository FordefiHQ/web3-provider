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
import type { EnrichedSolanaAddress } from './EnrichedSolanaAddress';
import {
    EnrichedSolanaAddressFromJSON,
    EnrichedSolanaAddressFromJSONTyped,
    EnrichedSolanaAddressToJSON,
} from './EnrichedSolanaAddress';
import type { Price } from './Price';
import {
    PriceFromJSON,
    PriceFromJSONTyped,
    PriceToJSON,
} from './Price';
import type { SplTokenContract } from './SplTokenContract';
import {
    SplTokenContractFromJSON,
    SplTokenContractFromJSONTyped,
    SplTokenContractToJSON,
} from './SplTokenContract';

/**
 * 
 * @export
 * @interface SolanaTokenBalanceChange
 */
export interface SolanaTokenBalanceChange {
    /**
     * 
     * @type {string}
     * @memberof SolanaTokenBalanceChange
     */
    type: SolanaTokenBalanceChangeTypeEnum;
    /**
     * 
     * @type {EnrichedSolanaAddress}
     * @memberof SolanaTokenBalanceChange
     */
    owner: EnrichedSolanaAddress;
    /**
     * 
     * @type {string}
     * @memberof SolanaTokenBalanceChange
     */
    diff: string;
    /**
     * 
     * @type {Price}
     * @memberof SolanaTokenBalanceChange
     */
    price?: Price;
    /**
     * 
     * @type {SplTokenContract}
     * @memberof SolanaTokenBalanceChange
     */
    tokenContract: SplTokenContract;
}


/**
 * @export
 */
export const SolanaTokenBalanceChangeTypeEnum = {
    splToken: 'spl_token'
} as const;
export type SolanaTokenBalanceChangeTypeEnum = typeof SolanaTokenBalanceChangeTypeEnum[keyof typeof SolanaTokenBalanceChangeTypeEnum];


/**
 * Check if a given object implements the SolanaTokenBalanceChange interface.
 */
export function instanceOfSolanaTokenBalanceChange(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "owner" in value;
    isInstance = isInstance && "diff" in value;
    isInstance = isInstance && "tokenContract" in value;

    return isInstance;
}

export function SolanaTokenBalanceChangeFromJSON(json: any): SolanaTokenBalanceChange {
    return SolanaTokenBalanceChangeFromJSONTyped(json, false);
}

export function SolanaTokenBalanceChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolanaTokenBalanceChange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'owner': EnrichedSolanaAddressFromJSON(json['owner']),
        'diff': json['diff'],
        'price': !exists(json, 'price') ? undefined : PriceFromJSON(json['price']),
        'tokenContract': SplTokenContractFromJSON(json['token_contract']),
    };
}

export function SolanaTokenBalanceChangeToJSON(value?: SolanaTokenBalanceChange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'owner': EnrichedSolanaAddressToJSON(value.owner),
        'diff': value.diff,
        'price': PriceToJSON(value.price),
        'token_contract': SplTokenContractToJSON(value.tokenContract),
    };
}

