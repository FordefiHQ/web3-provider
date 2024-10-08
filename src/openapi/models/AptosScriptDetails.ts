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
 * @interface AptosScriptDetails
 */
export interface AptosScriptDetails {
    /**
     * 
     * @type {string}
     * @memberof AptosScriptDetails
     */
    type: AptosScriptDetailsTypeEnum;
}


/**
 * @export
 */
export const AptosScriptDetailsTypeEnum = {
    script: 'script'
} as const;
export type AptosScriptDetailsTypeEnum = typeof AptosScriptDetailsTypeEnum[keyof typeof AptosScriptDetailsTypeEnum];


/**
 * Check if a given object implements the AptosScriptDetails interface.
 */
export function instanceOfAptosScriptDetails(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function AptosScriptDetailsFromJSON(json: any): AptosScriptDetails {
    return AptosScriptDetailsFromJSONTyped(json, false);
}

export function AptosScriptDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AptosScriptDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function AptosScriptDetailsToJSON(value?: AptosScriptDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
    };
}

