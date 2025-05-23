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
 * @interface BlackBoxSignatureSchnorrSecp256k1Details
 */
export interface BlackBoxSignatureSchnorrSecp256k1Details {
    /**
     * 
     * @type {string}
     * @memberof BlackBoxSignatureSchnorrSecp256k1Details
     */
    type: BlackBoxSignatureSchnorrSecp256k1DetailsTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BlackBoxSignatureSchnorrSecp256k1Details
     */
    signature?: string;
    /**
     * 
     * @type {string}
     * @memberof BlackBoxSignatureSchnorrSecp256k1Details
     */
    hashBinary: string;
}


/**
 * @export
 */
export const BlackBoxSignatureSchnorrSecp256k1DetailsTypeEnum = {
    schnorrSecp256k1: 'schnorr_secp256k1'
} as const;
export type BlackBoxSignatureSchnorrSecp256k1DetailsTypeEnum = typeof BlackBoxSignatureSchnorrSecp256k1DetailsTypeEnum[keyof typeof BlackBoxSignatureSchnorrSecp256k1DetailsTypeEnum];


/**
 * Check if a given object implements the BlackBoxSignatureSchnorrSecp256k1Details interface.
 */
export function instanceOfBlackBoxSignatureSchnorrSecp256k1Details(value: object): value is BlackBoxSignatureSchnorrSecp256k1Details {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('hashBinary' in value) || value['hashBinary'] === undefined) return false;
    return true;
}

export function BlackBoxSignatureSchnorrSecp256k1DetailsFromJSON(json: any): BlackBoxSignatureSchnorrSecp256k1Details {
    return BlackBoxSignatureSchnorrSecp256k1DetailsFromJSONTyped(json, false);
}

export function BlackBoxSignatureSchnorrSecp256k1DetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlackBoxSignatureSchnorrSecp256k1Details {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'signature': json['signature'] == null ? undefined : json['signature'],
        'hashBinary': json['hash_binary'],
    };
}

export function BlackBoxSignatureSchnorrSecp256k1DetailsToJSON(json: any): BlackBoxSignatureSchnorrSecp256k1Details {
    return BlackBoxSignatureSchnorrSecp256k1DetailsToJSONTyped(json, false);
}

export function BlackBoxSignatureSchnorrSecp256k1DetailsToJSONTyped(value?: BlackBoxSignatureSchnorrSecp256k1Details | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'signature': value['signature'],
        'hash_binary': value['hashBinary'],
    };
}

