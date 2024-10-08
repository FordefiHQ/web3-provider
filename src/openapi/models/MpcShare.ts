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
import type { EncryptionData } from './EncryptionData';
import {
    EncryptionDataFromJSON,
    EncryptionDataFromJSONTyped,
    EncryptionDataToJSON,
} from './EncryptionData';

/**
 * 
 * @export
 * @interface MpcShare
 */
export interface MpcShare {
    /**
     * 
     * @type {Array<EncryptionData>}
     * @memberof MpcShare
     */
    encryptedUserShares: Array<EncryptionData>;
}

/**
 * Check if a given object implements the MpcShare interface.
 */
export function instanceOfMpcShare(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "encryptedUserShares" in value;

    return isInstance;
}

export function MpcShareFromJSON(json: any): MpcShare {
    return MpcShareFromJSONTyped(json, false);
}

export function MpcShareFromJSONTyped(json: any, ignoreDiscriminator: boolean): MpcShare {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'encryptedUserShares': ((json['encrypted_user_shares'] as Array<any>).map(EncryptionDataFromJSON)),
    };
}

export function MpcShareToJSON(value?: MpcShare | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'encrypted_user_shares': ((value.encryptedUserShares as Array<any>).map(EncryptionDataToJSON)),
    };
}

