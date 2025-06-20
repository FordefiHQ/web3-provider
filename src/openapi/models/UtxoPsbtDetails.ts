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

import type { EnrichedUtxoAddress } from './EnrichedUtxoAddress';
import {
    EnrichedUtxoAddressFromJSON,
} from './EnrichedUtxoAddress';

/**
 * 
 * @export
 * @interface UtxoPsbtDetails
 */
export interface UtxoPsbtDetails {
    /**
     * 
     * @type {string}
     * @memberof UtxoPsbtDetails
     */
    type: UtxoPsbtDetailsTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof UtxoPsbtDetails
     */
    psbtRawData: string;
    /**
     * 
     * @type {string}
     * @memberof UtxoPsbtDetails
     */
    signedPsbtRawData?: string;
    /**
     * 
     * @type {EnrichedUtxoAddress}
     * @memberof UtxoPsbtDetails
     */
    sender: EnrichedUtxoAddress;
    /**
     * 
     * @type {string}
     * @memberof UtxoPsbtDetails
     */
    jsonRepresentation?: string;
}


/**
 * 
 */
const UtxoPsbtDetailsTypeEnum = {
    partiallySignedBitcoinTransaction: 'partially_signed_bitcoin_transaction'
} as const;
type UtxoPsbtDetailsTypeEnum = typeof UtxoPsbtDetailsTypeEnum[keyof typeof UtxoPsbtDetailsTypeEnum];

export function UtxoPsbtDetailsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): UtxoPsbtDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'psbtRawData': json['psbt_raw_data'],
        'signedPsbtRawData': json['signed_psbt_raw_data'] == null ? undefined : json['signed_psbt_raw_data'],
        'sender': EnrichedUtxoAddressFromJSON(json['sender']),
        'jsonRepresentation': json['json_representation'] == null ? undefined : json['json_representation'],
    };
}
