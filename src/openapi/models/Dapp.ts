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
 * @interface Dapp
 */
export interface Dapp {
    /**
     * 
     * @type {string}
     * @memberof Dapp
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Dapp
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Dapp
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof Dapp
     */
    logoUrl?: string;
}

/**
 * Check if a given object implements the Dapp interface.
 */
export function instanceOfDapp(value: object): value is Dapp {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function DappFromJSON(json: any): Dapp {
    return DappFromJSONTyped(json, false);
}

export function DappFromJSONTyped(json: any, ignoreDiscriminator: boolean): Dapp {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'url': json['url'] == null ? undefined : json['url'],
        'logoUrl': json['logo_url'] == null ? undefined : json['logo_url'],
    };
}

export function DappToJSON(json: any): Dapp {
    return DappToJSONTyped(json, false);
}

export function DappToJSONTyped(value?: Dapp | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'url': value['url'],
        'logo_url': value['logoUrl'],
    };
}

