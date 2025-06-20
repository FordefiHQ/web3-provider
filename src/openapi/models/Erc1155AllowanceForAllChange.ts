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

import type { Erc1155Contract } from './Erc1155Contract';
import {
    Erc1155ContractFromJSON,
} from './Erc1155Contract';
import type { PricedAsset } from './PricedAsset';
import {
    PricedAssetFromJSON,
} from './PricedAsset';
import type { EnrichedEvmAddress } from './EnrichedEvmAddress';
import {
    EnrichedEvmAddressFromJSON,
} from './EnrichedEvmAddress';

/**
 * 
 * @export
 * @interface Erc1155AllowanceForAllChange
 */
export interface Erc1155AllowanceForAllChange {
    /**
     * 
     * @type {PricedAsset}
     * @memberof Erc1155AllowanceForAllChange
     */
    pricedAsset: PricedAsset;
    /**
     * 
     * @type {string}
     * @memberof Erc1155AllowanceForAllChange
     */
    type: Erc1155AllowanceForAllChangeTypeEnum;
    /**
     * 
     * @type {EnrichedEvmAddress}
     * @memberof Erc1155AllowanceForAllChange
     */
    owner: EnrichedEvmAddress;
    /**
     * 
     * @type {EnrichedEvmAddress}
     * @memberof Erc1155AllowanceForAllChange
     */
    operator: EnrichedEvmAddress;
    /**
     * 
     * @type {boolean}
     * @memberof Erc1155AllowanceForAllChange
     */
    approved: boolean;
    /**
     * 
     * @type {Erc1155Contract}
     * @memberof Erc1155AllowanceForAllChange
     */
    tokenContract: Erc1155Contract;
}


/**
 * 
 */
const Erc1155AllowanceForAllChangeTypeEnum = {
    erc1155ForAll: 'erc1155_for_all'
} as const;
type Erc1155AllowanceForAllChangeTypeEnum = typeof Erc1155AllowanceForAllChangeTypeEnum[keyof typeof Erc1155AllowanceForAllChangeTypeEnum];

export function Erc1155AllowanceForAllChangeFromJSONTyped(json: any, _ignoreDiscriminator: boolean): Erc1155AllowanceForAllChange {
    if (json == null) {
        return json;
    }
    return {
        
        'pricedAsset': PricedAssetFromJSON(json['priced_asset']),
        'type': json['type'],
        'owner': EnrichedEvmAddressFromJSON(json['owner']),
        'operator': EnrichedEvmAddressFromJSON(json['operator']),
        'approved': json['approved'],
        'tokenContract': Erc1155ContractFromJSON(json['token_contract']),
    };
}
