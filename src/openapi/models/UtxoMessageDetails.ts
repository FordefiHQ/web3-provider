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

import type { UtxoMessageType } from './UtxoMessageType';
import {
    UtxoMessageTypeToJSON,
} from './UtxoMessageType';
import type { UtxoAddress } from './UtxoAddress';
import {
    UtxoAddressToJSON,
} from './UtxoAddress';

/**
 * 
 * @export
 * @interface UtxoMessageDetails
 */
export interface UtxoMessageDetails {
    /**
     * 
     * @type {UtxoMessageType}
     * @memberof UtxoMessageDetails
     */
    type: UtxoMessageType;
    /**
     * 
     * @type {UtxoAddress}
     * @memberof UtxoMessageDetails
     */
    sender: UtxoAddress;
    /**
     * 
     * @type {string}
     * @memberof UtxoMessageDetails
     */
    rawData: string;
}

export function UtxoMessageDetailsToJSON(json: any): UtxoMessageDetails {
    return UtxoMessageDetailsToJSONTyped(json, false);
}

function UtxoMessageDetailsToJSONTyped(value?: UtxoMessageDetails | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': UtxoMessageTypeToJSON(value['type']),
        'sender': UtxoAddressToJSON(value['sender']),
        'raw_data': value['rawData'],
    };
}

