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

import type { StacksChainUniqueId } from './StacksChainUniqueId';
import {
    StacksChainUniqueIdFromJSON,
} from './StacksChainUniqueId';

/**
 * 
 * @export
 * @interface StacksChain
 */
export interface StacksChain {
    /**
     * 
     * @type {string}
     * @memberof StacksChain
     */
    chainType: StacksChainChainTypeEnum;
    /**
     * 
     * @type {StacksChainUniqueId}
     * @memberof StacksChain
     */
    uniqueId: StacksChainUniqueId;
}


/**
 * 
 */
const StacksChainChainTypeEnum = {
    stacks: 'stacks'
} as const;
type StacksChainChainTypeEnum = typeof StacksChainChainTypeEnum[keyof typeof StacksChainChainTypeEnum];

export function StacksChainFromJSON(json: any): StacksChain {
    return StacksChainFromJSONTyped(json, false);
}

function StacksChainFromJSONTyped(json: any, _ignoreDiscriminator: boolean): StacksChain {
    if (json == null) {
        return json;
    }
    return {
        
        'chainType': json['chain_type'],
        'uniqueId': StacksChainUniqueIdFromJSON(json['unique_id']),
    };
}
