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

import type { VaultRef } from './VaultRef';
import {
    VaultRefFromJSON,
} from './VaultRef';
import type { ContactRef } from './ContactRef';
import {
    ContactRefFromJSON,
} from './ContactRef';

/**
 * 
 * @export
 * @interface EnrichedTonAddress
 */
export interface EnrichedTonAddress {
    /**
     * 
     * @type {VaultRef}
     * @memberof EnrichedTonAddress
     */
    vault?: VaultRef;
    /**
     * 
     * @type {string}
     * @memberof EnrichedTonAddress
     */
    explorerUrl?: string;
    /**
     * 
     * @type {ContactRef}
     * @memberof EnrichedTonAddress
     */
    contact?: ContactRef;
    /**
     * 
     * @type {string}
     * @memberof EnrichedTonAddress
     */
    type: EnrichedTonAddressTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof EnrichedTonAddress
     */
    rawAccount: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedTonAddress
     */
    base64UrlBounceableAccount: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedTonAddress
     */
    base64UrlNonBounceableAccount: string;
    /**
     * 
     * @type {string}
     * @memberof EnrichedTonAddress
     */
    originalAccount: string;
}


/**
 * 
 */
const EnrichedTonAddressTypeEnum = {
    ton: 'ton'
} as const;
type EnrichedTonAddressTypeEnum = typeof EnrichedTonAddressTypeEnum[keyof typeof EnrichedTonAddressTypeEnum];

export function EnrichedTonAddressFromJSON(json: any): EnrichedTonAddress {
    return EnrichedTonAddressFromJSONTyped(json, false);
}

export function EnrichedTonAddressFromJSONTyped(json: any, _ignoreDiscriminator: boolean): EnrichedTonAddress {
    if (json == null) {
        return json;
    }
    return {
        
        'vault': json['vault'] == null ? undefined : VaultRefFromJSON(json['vault']),
        'explorerUrl': json['explorer_url'] == null ? undefined : json['explorer_url'],
        'contact': json['contact'] == null ? undefined : ContactRefFromJSON(json['contact']),
        'type': json['type'],
        'rawAccount': json['raw_account'],
        'base64UrlBounceableAccount': json['base64_url_bounceable_account'],
        'base64UrlNonBounceableAccount': json['base64_url_non_bounceable_account'],
        'originalAccount': json['original_account'],
    };
}
