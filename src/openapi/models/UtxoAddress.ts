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

import type { UtxoAddressType } from './UtxoAddressType';
import {
    UtxoAddressTypeFromJSON,
    UtxoAddressTypeToJSON,
} from './UtxoAddressType';
import type { UtxoChain } from './UtxoChain';
import {
    UtxoChainFromJSON,
    UtxoChainToJSON,
} from './UtxoChain';

/**
 * 
 * @export
 * @interface UtxoAddress
 */
export interface UtxoAddress {
    /**
     * 
     * @type {string}
     * @memberof UtxoAddress
     */
    address: string;
    /**
     * 
     * @type {UtxoAddressType}
     * @memberof UtxoAddress
     */
    addressType: UtxoAddressType;
    /**
     * 
     * @type {UtxoChain}
     * @memberof UtxoAddress
     */
    chain: UtxoChain;
}

export function UtxoAddressFromJSON(json: any): UtxoAddress {
    return UtxoAddressFromJSONTyped(json, false);
}

function UtxoAddressFromJSONTyped(json: any, _ignoreDiscriminator: boolean): UtxoAddress {
    if (json == null) {
        return json;
    }
    return {
        
        'address': json['address'],
        'addressType': UtxoAddressTypeFromJSON(json['address_type']),
        'chain': UtxoChainFromJSON(json['chain']),
    };
}

export function UtxoAddressToJSON(json: any): UtxoAddress {
    return UtxoAddressToJSONTyped(json, false);
}

function UtxoAddressToJSONTyped(value?: UtxoAddress | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'address': value['address'],
        'address_type': UtxoAddressTypeToJSON(value['addressType']),
        'chain': UtxoChainToJSON(value['chain']),
    };
}

