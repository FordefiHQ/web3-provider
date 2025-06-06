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

import { mapValues } from '../runtime';
import type { PartialErrorResponse } from './PartialErrorResponse';
import {
    PartialErrorResponseFromJSON,
    PartialErrorResponseFromJSONTyped,
    PartialErrorResponseToJSON,
    PartialErrorResponseToJSONTyped,
} from './PartialErrorResponse';

/**
 * 
 * @export
 * @interface ListEIP712PrimaryTypes
 */
export interface ListEIP712PrimaryTypes {
    /**
     * 
     * @type {PartialErrorResponse}
     * @memberof ListEIP712PrimaryTypes
     */
    partialError?: PartialErrorResponse;
    /**
     * 
     * @type {number}
     * @memberof ListEIP712PrimaryTypes
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof ListEIP712PrimaryTypes
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof ListEIP712PrimaryTypes
     */
    size: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListEIP712PrimaryTypes
     */
    primaryTypes: Array<string>;
}

/**
 * Check if a given object implements the ListEIP712PrimaryTypes interface.
 */
export function instanceOfListEIP712PrimaryTypes(value: object): value is ListEIP712PrimaryTypes {
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('page' in value) || value['page'] === undefined) return false;
    if (!('size' in value) || value['size'] === undefined) return false;
    if (!('primaryTypes' in value) || value['primaryTypes'] === undefined) return false;
    return true;
}

export function ListEIP712PrimaryTypesFromJSON(json: any): ListEIP712PrimaryTypes {
    return ListEIP712PrimaryTypesFromJSONTyped(json, false);
}

export function ListEIP712PrimaryTypesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListEIP712PrimaryTypes {
    if (json == null) {
        return json;
    }
    return {
        
        'partialError': json['partial_error'] == null ? undefined : PartialErrorResponseFromJSON(json['partial_error']),
        'total': json['total'],
        'page': json['page'],
        'size': json['size'],
        'primaryTypes': json['primary_types'],
    };
}

export function ListEIP712PrimaryTypesToJSON(json: any): ListEIP712PrimaryTypes {
    return ListEIP712PrimaryTypesToJSONTyped(json, false);
}

export function ListEIP712PrimaryTypesToJSONTyped(value?: ListEIP712PrimaryTypes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'partial_error': PartialErrorResponseToJSON(value['partialError']),
        'total': value['total'],
        'page': value['page'],
        'size': value['size'],
        'primary_types': value['primaryTypes'],
    };
}

