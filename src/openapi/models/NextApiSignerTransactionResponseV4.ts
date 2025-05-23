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
import type { NextApiSignerTransactionResponseV4Body } from './NextApiSignerTransactionResponseV4Body';
import {
    NextApiSignerTransactionResponseV4BodyFromJSON,
    NextApiSignerTransactionResponseV4BodyFromJSONTyped,
    NextApiSignerTransactionResponseV4BodyToJSON,
    NextApiSignerTransactionResponseV4BodyToJSONTyped,
} from './NextApiSignerTransactionResponseV4Body';

/**
 * 
 * @export
 * @interface NextApiSignerTransactionResponseV4
 */
export interface NextApiSignerTransactionResponseV4 {
    /**
     * 
     * @type {NextApiSignerTransactionResponseV4Body}
     * @memberof NextApiSignerTransactionResponseV4
     */
    body?: NextApiSignerTransactionResponseV4Body;
}

/**
 * Check if a given object implements the NextApiSignerTransactionResponseV4 interface.
 */
export function instanceOfNextApiSignerTransactionResponseV4(value: object): value is NextApiSignerTransactionResponseV4 {
    return true;
}

export function NextApiSignerTransactionResponseV4FromJSON(json: any): NextApiSignerTransactionResponseV4 {
    return NextApiSignerTransactionResponseV4FromJSONTyped(json, false);
}

export function NextApiSignerTransactionResponseV4FromJSONTyped(json: any, ignoreDiscriminator: boolean): NextApiSignerTransactionResponseV4 {
    if (json == null) {
        return json;
    }
    return {
        
        'body': json['body'] == null ? undefined : NextApiSignerTransactionResponseV4BodyFromJSON(json['body']),
    };
}

export function NextApiSignerTransactionResponseV4ToJSON(json: any): NextApiSignerTransactionResponseV4 {
    return NextApiSignerTransactionResponseV4ToJSONTyped(json, false);
}

export function NextApiSignerTransactionResponseV4ToJSONTyped(value?: NextApiSignerTransactionResponseV4 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'body': NextApiSignerTransactionResponseV4BodyToJSON(value['body']),
    };
}

