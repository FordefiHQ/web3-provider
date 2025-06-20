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

import type { EcdsaSignature } from './EcdsaSignature';
import {
    EcdsaSignatureFromJSON,
} from './EcdsaSignature';

/**
 * 
 * @export
 * @interface BlackBoxSignatureEcdsaSecp256k1Details
 */
export interface BlackBoxSignatureEcdsaSecp256k1Details {
    /**
     * 
     * @type {string}
     * @memberof BlackBoxSignatureEcdsaSecp256k1Details
     */
    type: BlackBoxSignatureEcdsaSecp256k1DetailsTypeEnum;
    /**
     * 
     * @type {EcdsaSignature}
     * @memberof BlackBoxSignatureEcdsaSecp256k1Details
     */
    signature?: EcdsaSignature;
    /**
     * 
     * @type {string}
     * @memberof BlackBoxSignatureEcdsaSecp256k1Details
     */
    hashBinary: string;
}


/**
 * 
 */
const BlackBoxSignatureEcdsaSecp256k1DetailsTypeEnum = {
    ecdsaSecp256k1: 'ecdsa_secp256k1'
} as const;
type BlackBoxSignatureEcdsaSecp256k1DetailsTypeEnum = typeof BlackBoxSignatureEcdsaSecp256k1DetailsTypeEnum[keyof typeof BlackBoxSignatureEcdsaSecp256k1DetailsTypeEnum];

export function BlackBoxSignatureEcdsaSecp256k1DetailsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): BlackBoxSignatureEcdsaSecp256k1Details {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'signature': json['signature'] == null ? undefined : EcdsaSignatureFromJSON(json['signature']),
        'hashBinary': json['hash_binary'],
    };
}
