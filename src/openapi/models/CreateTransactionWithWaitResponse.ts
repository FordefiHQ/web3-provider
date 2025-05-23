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
import type { CreateTransactionWithWaitResponseState } from './CreateTransactionWithWaitResponseState';
import {
    CreateTransactionWithWaitResponseStateFromJSON,
    CreateTransactionWithWaitResponseStateFromJSONTyped,
    CreateTransactionWithWaitResponseStateToJSON,
    CreateTransactionWithWaitResponseStateToJSONTyped,
} from './CreateTransactionWithWaitResponseState';

/**
 * 
 * @export
 * @interface CreateTransactionWithWaitResponse
 */
export interface CreateTransactionWithWaitResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateTransactionWithWaitResponse
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateTransactionWithWaitResponse
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof CreateTransactionWithWaitResponse
     */
    modifiedAt: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateTransactionWithWaitResponse
     */
    signatures: Array<string>;
    /**
     * 
     * @type {CreateTransactionWithWaitResponseState}
     * @memberof CreateTransactionWithWaitResponse
     */
    state: CreateTransactionWithWaitResponseState;
    /**
     * 
     * @type {boolean}
     * @memberof CreateTransactionWithWaitResponse
     */
    hasTimedOut: boolean;
}

/**
 * Check if a given object implements the CreateTransactionWithWaitResponse interface.
 */
export function instanceOfCreateTransactionWithWaitResponse(value: object): value is CreateTransactionWithWaitResponse {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('modifiedAt' in value) || value['modifiedAt'] === undefined) return false;
    if (!('signatures' in value) || value['signatures'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    if (!('hasTimedOut' in value) || value['hasTimedOut'] === undefined) return false;
    return true;
}

export function CreateTransactionWithWaitResponseFromJSON(json: any): CreateTransactionWithWaitResponse {
    return CreateTransactionWithWaitResponseFromJSONTyped(json, false);
}

export function CreateTransactionWithWaitResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTransactionWithWaitResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['created_at'])),
        'modifiedAt': (new Date(json['modified_at'])),
        'signatures': json['signatures'],
        'state': CreateTransactionWithWaitResponseStateFromJSON(json['state']),
        'hasTimedOut': json['has_timed_out'],
    };
}

export function CreateTransactionWithWaitResponseToJSON(json: any): CreateTransactionWithWaitResponse {
    return CreateTransactionWithWaitResponseToJSONTyped(json, false);
}

export function CreateTransactionWithWaitResponseToJSONTyped(value?: CreateTransactionWithWaitResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'created_at': ((value['createdAt']).toISOString()),
        'modified_at': ((value['modifiedAt']).toISOString()),
        'signatures': value['signatures'],
        'state': CreateTransactionWithWaitResponseStateToJSON(value['state']),
        'has_timed_out': value['hasTimedOut'],
    };
}

