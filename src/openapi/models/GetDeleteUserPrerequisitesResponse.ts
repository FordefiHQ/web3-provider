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
import type { DeleteUserPrerequisite } from './DeleteUserPrerequisite';
import {
    DeleteUserPrerequisiteFromJSON,
    DeleteUserPrerequisiteFromJSONTyped,
    DeleteUserPrerequisiteToJSON,
} from './DeleteUserPrerequisite';

/**
 * 
 * @export
 * @interface GetDeleteUserPrerequisitesResponse
 */
export interface GetDeleteUserPrerequisitesResponse {
    /**
     * 
     * @type {Array<DeleteUserPrerequisite>}
     * @memberof GetDeleteUserPrerequisitesResponse
     */
    prerequisites: Array<DeleteUserPrerequisite>;
}

/**
 * Check if a given object implements the GetDeleteUserPrerequisitesResponse interface.
 */
export function instanceOfGetDeleteUserPrerequisitesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "prerequisites" in value;

    return isInstance;
}

export function GetDeleteUserPrerequisitesResponseFromJSON(json: any): GetDeleteUserPrerequisitesResponse {
    return GetDeleteUserPrerequisitesResponseFromJSONTyped(json, false);
}

export function GetDeleteUserPrerequisitesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetDeleteUserPrerequisitesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'prerequisites': ((json['prerequisites'] as Array<any>).map(DeleteUserPrerequisiteFromJSON)),
    };
}

export function GetDeleteUserPrerequisitesResponseToJSON(value?: GetDeleteUserPrerequisitesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'prerequisites': ((value.prerequisites as Array<any>).map(DeleteUserPrerequisiteToJSON)),
    };
}

