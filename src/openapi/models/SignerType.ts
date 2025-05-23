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


/**
 * 
 * @export
 */
export const SignerType = {
    initiator: 'initiator',
    apiSigner: 'api_signer',
    endUser: 'end_user',
    multipleSigners: 'multiple_signers'
} as const;
export type SignerType = typeof SignerType[keyof typeof SignerType];


export function instanceOfSignerType(value: any): boolean {
    for (const key in SignerType) {
        if (Object.prototype.hasOwnProperty.call(SignerType, key)) {
            if (SignerType[key as keyof typeof SignerType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function SignerTypeFromJSON(json: any): SignerType {
    return SignerTypeFromJSONTyped(json, false);
}

export function SignerTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignerType {
    return json as SignerType;
}

export function SignerTypeToJSON(value?: SignerType | null): any {
    return value as any;
}

export function SignerTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): SignerType {
    return value as SignerType;
}

