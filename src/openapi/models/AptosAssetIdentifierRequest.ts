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

import type { AptosAssetIdentifierDetails } from './AptosAssetIdentifierDetails';
import {
    AptosAssetIdentifierDetailsToJSON,
} from './AptosAssetIdentifierDetails';

/**
 * 
 * @export
 * @interface AptosAssetIdentifierRequest
 */
export interface AptosAssetIdentifierRequest {
    /**
     * 
     * @type {string}
     * @memberof AptosAssetIdentifierRequest
     */
    type: AptosAssetIdentifierRequestTypeEnum;
    /**
     * 
     * @type {AptosAssetIdentifierDetails}
     * @memberof AptosAssetIdentifierRequest
     */
    details: AptosAssetIdentifierDetails;
}


/**
 * 
 */
const AptosAssetIdentifierRequestTypeEnum = {
    aptos: 'aptos'
} as const;
type AptosAssetIdentifierRequestTypeEnum = typeof AptosAssetIdentifierRequestTypeEnum[keyof typeof AptosAssetIdentifierRequestTypeEnum];

export function AptosAssetIdentifierRequestToJSON(json: any): AptosAssetIdentifierRequest {
    return AptosAssetIdentifierRequestToJSONTyped(json, false);
}

function AptosAssetIdentifierRequestToJSONTyped(value?: AptosAssetIdentifierRequest | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'details': AptosAssetIdentifierDetailsToJSON(value['details']),
    };
}
