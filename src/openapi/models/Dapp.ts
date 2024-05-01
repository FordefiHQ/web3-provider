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
export function instanceOfDapp(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function DappFromJSON(json: any): Dapp {
    return DappFromJSONTyped(json, false);
}

export function DappFromJSONTyped(json: any, ignoreDiscriminator: boolean): Dapp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'logoUrl': !exists(json, 'logo_url') ? undefined : json['logo_url'],
    };
}

export function DappToJSON(value?: Dapp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'url': value.url,
        'logo_url': value.logoUrl,
    };
}

