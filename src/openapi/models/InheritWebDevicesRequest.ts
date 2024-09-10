/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { RequestSignature } from './RequestSignature';
import {
    RequestSignatureFromJSON,
    RequestSignatureFromJSONTyped,
    RequestSignatureToJSON,
} from './RequestSignature';

/**
 * 
 * @export
 * @interface InheritWebDevicesRequest
 */
export interface InheritWebDevicesRequest {
    /**
     * 
     * @type {RequestSignature}
     * @memberof InheritWebDevicesRequest
     */
    requestSignatureByParentOrganization: RequestSignature;
    /**
     * 
     * @type {RequestSignature}
     * @memberof InheritWebDevicesRequest
     */
    requestSignatureByChildOrganization: RequestSignature;
}

/**
 * Check if a given object implements the InheritWebDevicesRequest interface.
 */
export function instanceOfInheritWebDevicesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "requestSignatureByParentOrganization" in value;
    isInstance = isInstance && "requestSignatureByChildOrganization" in value;

    return isInstance;
}

export function InheritWebDevicesRequestFromJSON(json: any): InheritWebDevicesRequest {
    return InheritWebDevicesRequestFromJSONTyped(json, false);
}

export function InheritWebDevicesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InheritWebDevicesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'requestSignatureByParentOrganization': RequestSignatureFromJSON(json['request_signature_by_parent_organization']),
        'requestSignatureByChildOrganization': RequestSignatureFromJSON(json['request_signature_by_child_organization']),
    };
}

export function InheritWebDevicesRequestToJSON(value?: InheritWebDevicesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'request_signature_by_parent_organization': RequestSignatureToJSON(value.requestSignatureByParentOrganization),
        'request_signature_by_child_organization': RequestSignatureToJSON(value.requestSignatureByChildOrganization),
    };
}

