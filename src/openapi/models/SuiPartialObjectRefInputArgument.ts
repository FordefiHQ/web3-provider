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
 * @interface SuiPartialObjectRefInputArgument
 */
export interface SuiPartialObjectRefInputArgument {
    /**
     * 
     * @type {string}
     * @memberof SuiPartialObjectRefInputArgument
     */
    type: SuiPartialObjectRefInputArgumentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SuiPartialObjectRefInputArgument
     */
    objectId: string;
}


/**
 * @export
 */
export const SuiPartialObjectRefInputArgumentTypeEnum = {
    partial: 'partial'
} as const;
export type SuiPartialObjectRefInputArgumentTypeEnum = typeof SuiPartialObjectRefInputArgumentTypeEnum[keyof typeof SuiPartialObjectRefInputArgumentTypeEnum];


/**
 * Check if a given object implements the SuiPartialObjectRefInputArgument interface.
 */
export function instanceOfSuiPartialObjectRefInputArgument(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "objectId" in value;

    return isInstance;
}

export function SuiPartialObjectRefInputArgumentFromJSON(json: any): SuiPartialObjectRefInputArgument {
    return SuiPartialObjectRefInputArgumentFromJSONTyped(json, false);
}

export function SuiPartialObjectRefInputArgumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiPartialObjectRefInputArgument {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'objectId': json['object_id'],
    };
}

export function SuiPartialObjectRefInputArgumentToJSON(value?: SuiPartialObjectRefInputArgument | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'object_id': value.objectId,
    };
}
