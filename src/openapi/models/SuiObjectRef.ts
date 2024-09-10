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
 * @interface SuiObjectRef
 */
export interface SuiObjectRef {
    /**
     * 
     * @type {string}
     * @memberof SuiObjectRef
     */
    digest: string;
    /**
     * 
     * @type {string}
     * @memberof SuiObjectRef
     */
    objectId: string;
    /**
     * 
     * @type {string}
     * @memberof SuiObjectRef
     */
    version: string;
}

/**
 * Check if a given object implements the SuiObjectRef interface.
 */
export function instanceOfSuiObjectRef(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "digest" in value;
    isInstance = isInstance && "objectId" in value;
    isInstance = isInstance && "version" in value;

    return isInstance;
}

export function SuiObjectRefFromJSON(json: any): SuiObjectRef {
    return SuiObjectRefFromJSONTyped(json, false);
}

export function SuiObjectRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiObjectRef {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'digest': json['digest'],
        'objectId': json['object_id'],
        'version': json['version'],
    };
}

export function SuiObjectRefToJSON(value?: SuiObjectRef | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'digest': value.digest,
        'object_id': value.objectId,
        'version': value.version,
    };
}
