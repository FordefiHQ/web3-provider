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
 * @interface CreateEndUserRequest
 */
export interface CreateEndUserRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateEndUserRequest
     */
    externalId: string;
}

/**
 * Check if a given object implements the CreateEndUserRequest interface.
 */
export function instanceOfCreateEndUserRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "externalId" in value;

    return isInstance;
}

export function CreateEndUserRequestFromJSON(json: any): CreateEndUserRequest {
    return CreateEndUserRequestFromJSONTyped(json, false);
}

export function CreateEndUserRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEndUserRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'externalId': json['external_id'],
    };
}

export function CreateEndUserRequestToJSON(value?: CreateEndUserRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'external_id': value.externalId,
    };
}

