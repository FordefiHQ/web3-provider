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
 * @interface KeyShares
 */
export interface KeyShares {
    /**
     * 
     * @type {string}
     * @memberof KeyShares
     */
    device?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof KeyShares
     */
    platform?: Array<string>;
}

/**
 * Check if a given object implements the KeyShares interface.
 */
export function instanceOfKeyShares(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KeySharesFromJSON(json: any): KeyShares {
    return KeySharesFromJSONTyped(json, false);
}

export function KeySharesFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeyShares {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'device': !exists(json, 'device') ? undefined : json['device'],
        'platform': !exists(json, 'platform') ? undefined : json['platform'],
    };
}

export function KeySharesToJSON(value?: KeyShares | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'device': value.device,
        'platform': value.platform,
    };
}

