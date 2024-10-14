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
import type { Dapp } from './Dapp';
import {
    DappFromJSON,
    DappFromJSONTyped,
    DappToJSON,
} from './Dapp';
import type { Erc20Contract } from './Erc20Contract';
import {
    Erc20ContractFromJSON,
    Erc20ContractFromJSONTyped,
    Erc20ContractToJSON,
} from './Erc20Contract';
import type { Erc721 } from './Erc721';
import {
    Erc721FromJSON,
    Erc721FromJSONTyped,
    Erc721ToJSON,
} from './Erc721';
import type { Erc721Contract } from './Erc721Contract';
import {
    Erc721ContractFromJSON,
    Erc721ContractFromJSONTyped,
    Erc721ContractToJSON,
} from './Erc721Contract';

/**
 * 
 * @export
 * @interface EvmBalanceChangeEffectTokenContract
 */
export interface EvmBalanceChangeEffectTokenContract {
    /**
     * 
     * @type {string}
     * @memberof EvmBalanceChangeEffectTokenContract
     */
    name?: string;
    /**
     * 
     * @type {Dapp}
     * @memberof EvmBalanceChangeEffectTokenContract
     */
    dapp?: Dapp;
    /**
     * 
     * @type {boolean}
     * @memberof EvmBalanceChangeEffectTokenContract
     */
    isVerified: boolean;
    /**
     * 
     * @type {Erc721}
     * @memberof EvmBalanceChangeEffectTokenContract
     */
    token: Erc721;
}

/**
 * Check if a given object implements the EvmBalanceChangeEffectTokenContract interface.
 */
export function instanceOfEvmBalanceChangeEffectTokenContract(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "isVerified" in value;
    isInstance = isInstance && "token" in value;

    return isInstance;
}

export function EvmBalanceChangeEffectTokenContractFromJSON(json: any): EvmBalanceChangeEffectTokenContract {
    return EvmBalanceChangeEffectTokenContractFromJSONTyped(json, false);
}

export function EvmBalanceChangeEffectTokenContractFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvmBalanceChangeEffectTokenContract {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'dapp': !exists(json, 'dapp') ? undefined : DappFromJSON(json['dapp']),
        'isVerified': json['is_verified'],
        'token': Erc721FromJSON(json['token']),
    };
}

export function EvmBalanceChangeEffectTokenContractToJSON(value?: EvmBalanceChangeEffectTokenContract | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'dapp': DappToJSON(value.dapp),
        'is_verified': value.isVerified,
        'token': Erc721ToJSON(value.token),
    };
}

