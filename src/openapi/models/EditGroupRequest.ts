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
 * @interface EditGroupRequest
 */
export interface EditGroupRequest {
    /**
     * 
     * @type {string}
     * @memberof EditGroupRequest
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof EditGroupRequest
     */
    contactIds: Array<string>;
}

/**
 * Check if a given object implements the EditGroupRequest interface.
 */
export function instanceOfEditGroupRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "contactIds" in value;

    return isInstance;
}

export function EditGroupRequestFromJSON(json: any): EditGroupRequest {
    return EditGroupRequestFromJSONTyped(json, false);
}

export function EditGroupRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EditGroupRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'contactIds': json['contact_ids'],
    };
}

export function EditGroupRequestToJSON(value?: EditGroupRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'contact_ids': value.contactIds,
    };
}

