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
 * @interface BlackBoxSignatureEcdsaStarkDetails
 */
export interface BlackBoxSignatureEcdsaStarkDetails {
    /**
     * 
     * @type {string}
     * @memberof BlackBoxSignatureEcdsaStarkDetails
     */
    type: BlackBoxSignatureEcdsaStarkDetailsTypeEnum;
    /**
     * 
     * @type {EcdsaSignature}
     * @memberof BlackBoxSignatureEcdsaStarkDetails
     */
    signature?: EcdsaSignature;
    /**
     * 
     * @type {string}
     * @memberof BlackBoxSignatureEcdsaStarkDetails
     */
    hashBinary: string;
    /**
     * 
     * @type {string}
     * @memberof BlackBoxSignatureEcdsaStarkDetails
     * @deprecated
     */
    hashInteger: string;
}


/**
 * 
 */
const BlackBoxSignatureEcdsaStarkDetailsTypeEnum = {
    ecdsaStark: 'ecdsa_stark'
} as const;
type BlackBoxSignatureEcdsaStarkDetailsTypeEnum = typeof BlackBoxSignatureEcdsaStarkDetailsTypeEnum[keyof typeof BlackBoxSignatureEcdsaStarkDetailsTypeEnum];

export function BlackBoxSignatureEcdsaStarkDetailsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): BlackBoxSignatureEcdsaStarkDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'signature': json['signature'] == null ? undefined : EcdsaSignatureFromJSON(json['signature']),
        'hashBinary': json['hash_binary'],
        'hashInteger': json['hash_integer'],
    };
}
