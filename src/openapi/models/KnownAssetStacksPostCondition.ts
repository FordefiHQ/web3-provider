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

import type { PricedAsset } from './PricedAsset';
import {
    PricedAssetFromJSON,
} from './PricedAsset';
import type { StacksPostConditionComparator } from './StacksPostConditionComparator';
import {
    StacksPostConditionComparatorFromJSON,
} from './StacksPostConditionComparator';
import type { EnrichedStacksAddress } from './EnrichedStacksAddress';
import {
    EnrichedStacksAddressFromJSON,
} from './EnrichedStacksAddress';

/**
 * 
 * @export
 * @interface KnownAssetStacksPostCondition
 */
export interface KnownAssetStacksPostCondition {
    /**
     * 
     * @type {EnrichedStacksAddress}
     * @memberof KnownAssetStacksPostCondition
     */
    address: EnrichedStacksAddress;
    /**
     * 
     * @type {StacksPostConditionComparator}
     * @memberof KnownAssetStacksPostCondition
     */
    conditionCode: StacksPostConditionComparator;
    /**
     * 
     * @type {string}
     * @memberof KnownAssetStacksPostCondition
     */
    amount: string;
    /**
     * 
     * @type {string}
     * @memberof KnownAssetStacksPostCondition
     */
    type: KnownAssetStacksPostConditionTypeEnum;
    /**
     * 
     * @type {PricedAsset}
     * @memberof KnownAssetStacksPostCondition
     */
    pricedAsset: PricedAsset;
}


/**
 * 
 */
const KnownAssetStacksPostConditionTypeEnum = {
    knownAsset: 'known_asset'
} as const;
type KnownAssetStacksPostConditionTypeEnum = typeof KnownAssetStacksPostConditionTypeEnum[keyof typeof KnownAssetStacksPostConditionTypeEnum];

export function KnownAssetStacksPostConditionFromJSONTyped(json: any, _ignoreDiscriminator: boolean): KnownAssetStacksPostCondition {
    if (json == null) {
        return json;
    }
    return {
        
        'address': EnrichedStacksAddressFromJSON(json['address']),
        'conditionCode': StacksPostConditionComparatorFromJSON(json['condition_code']),
        'amount': json['amount'],
        'type': json['type'],
        'pricedAsset': PricedAssetFromJSON(json['priced_asset']),
    };
}
