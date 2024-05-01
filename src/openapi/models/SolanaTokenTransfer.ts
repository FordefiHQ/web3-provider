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
 * @interface SolanaTokenTransfer
 */
export interface SolanaTokenTransfer {
    /**
     * 
     * @type {string}
     * @memberof SolanaTokenTransfer
     */
    type: SolanaTokenTransferTypeEnum;
    /**
     * 
     * @type {EnrichedSolanaAddress}
     * @memberof SolanaTokenTransfer
     */
    from: EnrichedSolanaAddress;
    /**
     * 
     * @type {EnrichedSolanaAddress}
     * @memberof SolanaTokenTransfer
     */
    to: EnrichedSolanaAddress;
    /**
     * 
     * @type {string}
     * @memberof SolanaTokenTransfer
     */
    amount: string;
    /**
     * 
     * @type {Price}
     * @memberof SolanaTokenTransfer
     */
    price?: Price;
    /**
     * 
     * @type {SplTokenContract}
     * @memberof SolanaTokenTransfer
     */
    tokenContract: SplTokenContract;
}


/**
 * @export
 */
export const SolanaTokenTransferTypeEnum = {
    splToken: 'spl_token'
} as const;
export type SolanaTokenTransferTypeEnum = typeof SolanaTokenTransferTypeEnum[keyof typeof SolanaTokenTransferTypeEnum];


/**
 * Check if a given object implements the SolanaTokenTransfer interface.
 */
export function instanceOfSolanaTokenTransfer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "from" in value;
    isInstance = isInstance && "to" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "tokenContract" in value;

    return isInstance;
}

export function SolanaTokenTransferFromJSON(json: any): SolanaTokenTransfer {
    return SolanaTokenTransferFromJSONTyped(json, false);
}

export function SolanaTokenTransferFromJSONTyped(json: any, ignoreDiscriminator: boolean): SolanaTokenTransfer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'from': EnrichedSolanaAddressFromJSON(json['from']),
        'to': EnrichedSolanaAddressFromJSON(json['to']),
        'amount': json['amount'],
        'price': !exists(json, 'price') ? undefined : PriceFromJSON(json['price']),
        'tokenContract': SplTokenContractFromJSON(json['token_contract']),
    };
}

export function SolanaTokenTransferToJSON(value?: SolanaTokenTransfer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'from': EnrichedSolanaAddressToJSON(value.from),
        'to': EnrichedSolanaAddressToJSON(value.to),
        'amount': value.amount,
        'price': PriceToJSON(value.price),
        'token_contract': SplTokenContractToJSON(value.tokenContract),
    };
}

