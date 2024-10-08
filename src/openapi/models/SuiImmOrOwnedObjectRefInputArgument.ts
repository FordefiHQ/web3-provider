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
 * @interface SuiImmOrOwnedObjectRefInputArgument
 */
export interface SuiImmOrOwnedObjectRefInputArgument {
    /**
     * 
     * @type {string}
     * @memberof SuiImmOrOwnedObjectRefInputArgument
     */
    digest: string;
    /**
     * 
     * @type {string}
     * @memberof SuiImmOrOwnedObjectRefInputArgument
     */
    objectId: string;
    /**
     * 
     * @type {string}
     * @memberof SuiImmOrOwnedObjectRefInputArgument
     */
    version: string;
    /**
     * 
     * @type {string}
     * @memberof SuiImmOrOwnedObjectRefInputArgument
     */
    type: SuiImmOrOwnedObjectRefInputArgumentTypeEnum;
}


/**
 * @export
 */
export const SuiImmOrOwnedObjectRefInputArgumentTypeEnum = {
    immOrOwned: 'imm_or_owned'
} as const;
export type SuiImmOrOwnedObjectRefInputArgumentTypeEnum = typeof SuiImmOrOwnedObjectRefInputArgumentTypeEnum[keyof typeof SuiImmOrOwnedObjectRefInputArgumentTypeEnum];


/**
 * Check if a given object implements the SuiImmOrOwnedObjectRefInputArgument interface.
 */
export function instanceOfSuiImmOrOwnedObjectRefInputArgument(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "digest" in value;
    isInstance = isInstance && "objectId" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function SuiImmOrOwnedObjectRefInputArgumentFromJSON(json: any): SuiImmOrOwnedObjectRefInputArgument {
    return SuiImmOrOwnedObjectRefInputArgumentFromJSONTyped(json, false);
}

export function SuiImmOrOwnedObjectRefInputArgumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuiImmOrOwnedObjectRefInputArgument {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'digest': json['digest'],
        'objectId': json['object_id'],
        'version': json['version'],
        'type': json['type'],
    };
}

export function SuiImmOrOwnedObjectRefInputArgumentToJSON(value?: SuiImmOrOwnedObjectRefInputArgument | null): any {
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
        'type': value.type,
    };
}

