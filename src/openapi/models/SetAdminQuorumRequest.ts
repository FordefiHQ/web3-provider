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
/**
 * 
 * @export
 * @interface SetAdminQuorumRequest
 */
export interface SetAdminQuorumRequest {
    /**
     * 
     * @type {number}
     * @memberof SetAdminQuorumRequest
     */
    quorumSize: number;
}

/**
 * Check if a given object implements the SetAdminQuorumRequest interface.
 */
export function instanceOfSetAdminQuorumRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "quorumSize" in value;

    return isInstance;
}

export function SetAdminQuorumRequestFromJSON(json: any): SetAdminQuorumRequest {
    return SetAdminQuorumRequestFromJSONTyped(json, false);
}

export function SetAdminQuorumRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetAdminQuorumRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'quorumSize': json['quorum_size'],
    };
}

export function SetAdminQuorumRequestToJSON(value?: SetAdminQuorumRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'quorum_size': value.quorumSize,
    };
}

