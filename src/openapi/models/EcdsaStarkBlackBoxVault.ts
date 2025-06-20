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
 * @interface EcdsaStarkBlackBoxVault
 */
export interface EcdsaStarkBlackBoxVault {
    /**
     * 
     * @type {string}
     * @memberof EcdsaStarkBlackBoxVault
     */
    type: EcdsaStarkBlackBoxVaultTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof EcdsaStarkBlackBoxVault
     * @deprecated
     */
    publicKey: string;
    /**
     * 
     * @type {string}
     * @memberof EcdsaStarkBlackBoxVault
     */
    starkKey: string;
}


/**
 * 
 */
const EcdsaStarkBlackBoxVaultTypeEnum = {
    ecdsaStark: 'ecdsa_stark'
} as const;
type EcdsaStarkBlackBoxVaultTypeEnum = typeof EcdsaStarkBlackBoxVaultTypeEnum[keyof typeof EcdsaStarkBlackBoxVaultTypeEnum];

export function EcdsaStarkBlackBoxVaultFromJSONTyped(json: any, _ignoreDiscriminator: boolean): EcdsaStarkBlackBoxVault {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'publicKey': json['public_key'],
        'starkKey': json['stark_key'],
    };
}
