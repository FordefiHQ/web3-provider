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
/**
 * 
 * @export
 * @interface AminoMessage
 */
export interface AminoMessage {
    /**
     * 
     * @type {string}
     * @memberof AminoMessage
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof AminoMessage
     */
    value: string;
}

/**
 * Check if a given object implements the AminoMessage interface.
 */
export function instanceOfAminoMessage(value: object): value is AminoMessage {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function AminoMessageFromJSON(json: any): AminoMessage {
    return AminoMessageFromJSONTyped(json, false);
}

export function AminoMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AminoMessage {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'value': json['value'],
    };
}

export function AminoMessageToJSON(json: any): AminoMessage {
    return AminoMessageToJSONTyped(json, false);
}

export function AminoMessageToJSONTyped(value?: AminoMessage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'value': value['value'],
    };
}

