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

import type { StacksAssetIdentifierDetails } from './StacksAssetIdentifierDetails';
import {
    StacksAssetIdentifierDetailsToJSON,
} from './StacksAssetIdentifierDetails';

/**
 * 
 * @export
 * @interface StacksAssetIdentifierRequest
 */
export interface StacksAssetIdentifierRequest {
    /**
     * 
     * @type {string}
     * @memberof StacksAssetIdentifierRequest
     */
    type: StacksAssetIdentifierRequestTypeEnum;
    /**
     * 
     * @type {StacksAssetIdentifierDetails}
     * @memberof StacksAssetIdentifierRequest
     */
    details: StacksAssetIdentifierDetails;
}


/**
 * 
 */
const StacksAssetIdentifierRequestTypeEnum = {
    stacks: 'stacks'
} as const;
type StacksAssetIdentifierRequestTypeEnum = typeof StacksAssetIdentifierRequestTypeEnum[keyof typeof StacksAssetIdentifierRequestTypeEnum];

export function StacksAssetIdentifierRequestToJSON(json: any): StacksAssetIdentifierRequest {
    return StacksAssetIdentifierRequestToJSONTyped(json, false);
}

function StacksAssetIdentifierRequestToJSONTyped(value?: StacksAssetIdentifierRequest | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'details': StacksAssetIdentifierDetailsToJSON(value['details']),
    };
}
