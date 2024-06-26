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
import type { DeleteContactPrerequisite } from './DeleteContactPrerequisite';
import {
    DeleteContactPrerequisiteFromJSON,
    DeleteContactPrerequisiteFromJSONTyped,
    DeleteContactPrerequisiteToJSON,
} from './DeleteContactPrerequisite';

/**
 * 
 * @export
 * @interface DeleteContactPrerequisitesResponse
 */
export interface DeleteContactPrerequisitesResponse {
    /**
     * 
     * @type {Array<DeleteContactPrerequisite>}
     * @memberof DeleteContactPrerequisitesResponse
     */
    prerequisites: Array<DeleteContactPrerequisite>;
}

/**
 * Check if a given object implements the DeleteContactPrerequisitesResponse interface.
 */
export function instanceOfDeleteContactPrerequisitesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "prerequisites" in value;

    return isInstance;
}

export function DeleteContactPrerequisitesResponseFromJSON(json: any): DeleteContactPrerequisitesResponse {
    return DeleteContactPrerequisitesResponseFromJSONTyped(json, false);
}

export function DeleteContactPrerequisitesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteContactPrerequisitesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'prerequisites': ((json['prerequisites'] as Array<any>).map(DeleteContactPrerequisiteFromJSON)),
    };
}

export function DeleteContactPrerequisitesResponseToJSON(value?: DeleteContactPrerequisitesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'prerequisites': ((value.prerequisites as Array<any>).map(DeleteContactPrerequisiteToJSON)),
    };
}

