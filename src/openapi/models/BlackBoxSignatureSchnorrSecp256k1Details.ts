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
 * 
 */
const BlackBoxSignatureSchnorrSecp256k1DetailsTypeEnum = {
    schnorrSecp256k1: 'schnorr_secp256k1'
} as const;
type BlackBoxSignatureSchnorrSecp256k1DetailsTypeEnum = typeof BlackBoxSignatureSchnorrSecp256k1DetailsTypeEnum[keyof typeof BlackBoxSignatureSchnorrSecp256k1DetailsTypeEnum];

export function BlackBoxSignatureSchnorrSecp256k1DetailsFromJSONTyped(json: any, _ignoreDiscriminator: boolean): BlackBoxSignatureSchnorrSecp256k1Details {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'signature': json['signature'] == null ? undefined : json['signature'],
        'hashBinary': json['hash_binary'],
    };
}
