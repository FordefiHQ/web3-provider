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

import type { EvmMessageDomainData } from './EvmMessageDomainData';
import {
    EvmMessageDomainDataFromJSON,
} from './EvmMessageDomainData';
import type { PricedAsset } from './PricedAsset';
import {
    PricedAssetFromJSON,
} from './PricedAsset';
import type { Price } from './Price';
import {
    PriceFromJSON,
} from './Price';
import type { EnrichedEvmAddress } from './EnrichedEvmAddress';
import {
    EnrichedEvmAddressFromJSON,
} from './EnrichedEvmAddress';

/**
 * 
 * @export
 * @interface PermitTypedMessageEvmMessage
 */
export interface PermitTypedMessageEvmMessage {
    /**
     * 
     * @type {EvmMessageDomainData}
     * @memberof PermitTypedMessageEvmMessage
     */
    domain: EvmMessageDomainData;
    /**
     * 
     * @type {string}
     * @memberof PermitTypedMessageEvmMessage
     */
    primaryType: string;
    /**
     * 
     * @type {string}
     * @memberof PermitTypedMessageEvmMessage
     */
    type: PermitTypedMessageEvmMessageTypeEnum;
    /**
     * 
     * @type {EnrichedEvmAddress}
     * @memberof PermitTypedMessageEvmMessage
     */
    owner: EnrichedEvmAddress;
    /**
     * 
     * @type {EnrichedEvmAddress}
     * @memberof PermitTypedMessageEvmMessage
     */
    spender: EnrichedEvmAddress;
    /**
     * 
     * @type {string}
     * @memberof PermitTypedMessageEvmMessage
     */
    value: string;
    /**
     * 
     * @type {Date}
     * @memberof PermitTypedMessageEvmMessage
     */
    deadline: Date;
    /**
     * 
     * @type {number}
     * @memberof PermitTypedMessageEvmMessage
     */
    nonce: number;
    /**
     * 
     * @type {Price}
     * @memberof PermitTypedMessageEvmMessage
     */
    price?: Price;
    /**
     * 
     * @type {PricedAsset}
     * @memberof PermitTypedMessageEvmMessage
     */
    pricedAsset: PricedAsset;
}


/**
 * 
 */
const PermitTypedMessageEvmMessageTypeEnum = {
    permit: 'permit'
} as const;
type PermitTypedMessageEvmMessageTypeEnum = typeof PermitTypedMessageEvmMessageTypeEnum[keyof typeof PermitTypedMessageEvmMessageTypeEnum];

export function PermitTypedMessageEvmMessageFromJSONTyped(json: any, _ignoreDiscriminator: boolean): PermitTypedMessageEvmMessage {
    if (json == null) {
        return json;
    }
    return {
        
        'domain': EvmMessageDomainDataFromJSON(json['domain']),
        'primaryType': json['primary_type'],
        'type': json['type'],
        'owner': EnrichedEvmAddressFromJSON(json['owner']),
        'spender': EnrichedEvmAddressFromJSON(json['spender']),
        'value': json['value'],
        'deadline': (new Date(json['deadline'])),
        'nonce': json['nonce'],
        'price': json['price'] == null ? undefined : PriceFromJSON(json['price']),
        'pricedAsset': PricedAssetFromJSON(json['priced_asset']),
    };
}
