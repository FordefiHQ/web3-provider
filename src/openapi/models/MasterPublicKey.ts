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
 * @interface MasterPublicKey
 */
export interface MasterPublicKey {
    /**
     * 
     * @type {string}
     * @memberof MasterPublicKey
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof MasterPublicKey
     */
    xpub: string;
}

/**
 * Check if a given object implements the MasterPublicKey interface.
 */
export function instanceOfMasterPublicKey(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "xpub" in value;

    return isInstance;
}

export function MasterPublicKeyFromJSON(json: any): MasterPublicKey {
    return MasterPublicKeyFromJSONTyped(json, false);
}

export function MasterPublicKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): MasterPublicKey {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'xpub': json['xpub'],
    };
}

export function MasterPublicKeyToJSON(value?: MasterPublicKey | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'xpub': value.xpub,
    };
}

