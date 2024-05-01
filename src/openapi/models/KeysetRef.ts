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
import type { KeysetScope } from './KeysetScope';
import {
    KeysetScopeFromJSON,
    KeysetScopeFromJSONTyped,
    KeysetScopeToJSON,
} from './KeysetScope';

/**
 * 
 * @export
 * @interface KeysetRef
 */
export interface KeysetRef {
    /**
     * 
     * @type {string}
     * @memberof KeysetRef
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof KeysetRef
     */
    name: string;
    /**
     * 
     * @type {KeysetScope}
     * @memberof KeysetRef
     */
    scope: KeysetScope;
}

/**
 * Check if a given object implements the KeysetRef interface.
 */
export function instanceOfKeysetRef(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "scope" in value;

    return isInstance;
}

export function KeysetRefFromJSON(json: any): KeysetRef {
    return KeysetRefFromJSONTyped(json, false);
}

export function KeysetRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeysetRef {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'scope': KeysetScopeFromJSON(json['scope']),
    };
}

export function KeysetRefToJSON(value?: KeysetRef | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'scope': KeysetScopeToJSON(value.scope),
    };
}

