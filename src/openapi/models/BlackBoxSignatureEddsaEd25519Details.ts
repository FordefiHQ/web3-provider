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
 * @interface BlackBoxSignatureEddsaEd25519Details
 */
export interface BlackBoxSignatureEddsaEd25519Details {
    /**
     * 
     * @type {string}
     * @memberof BlackBoxSignatureEddsaEd25519Details
     */
    type: BlackBoxSignatureEddsaEd25519DetailsTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BlackBoxSignatureEddsaEd25519Details
     */
    signature?: string;
    /**
     * 
     * @type {string}
     * @memberof BlackBoxSignatureEddsaEd25519Details
     */
    hashBinary: string;
}


/**
 * @export
 */
export const BlackBoxSignatureEddsaEd25519DetailsTypeEnum = {
    eddsaEd25519: 'eddsa_ed25519'
} as const;
export type BlackBoxSignatureEddsaEd25519DetailsTypeEnum = typeof BlackBoxSignatureEddsaEd25519DetailsTypeEnum[keyof typeof BlackBoxSignatureEddsaEd25519DetailsTypeEnum];


/**
 * Check if a given object implements the BlackBoxSignatureEddsaEd25519Details interface.
 */
export function instanceOfBlackBoxSignatureEddsaEd25519Details(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "hashBinary" in value;

    return isInstance;
}

export function BlackBoxSignatureEddsaEd25519DetailsFromJSON(json: any): BlackBoxSignatureEddsaEd25519Details {
    return BlackBoxSignatureEddsaEd25519DetailsFromJSONTyped(json, false);
}

export function BlackBoxSignatureEddsaEd25519DetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlackBoxSignatureEddsaEd25519Details {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'signature': !exists(json, 'signature') ? undefined : json['signature'],
        'hashBinary': json['hash_binary'],
    };
}

export function BlackBoxSignatureEddsaEd25519DetailsToJSON(value?: BlackBoxSignatureEddsaEd25519Details | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'signature': value.signature,
        'hash_binary': value.hashBinary,
    };
}

