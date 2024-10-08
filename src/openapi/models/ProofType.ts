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
 * @interface ProofType
 */
export interface ProofType {
    /**
     * 
     * @type {string}
     * @memberof ProofType
     */
    type: ProofTypeTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ProofType
     */
    proof: string;
}


/**
 * @export
 */
export const ProofTypeTypeEnum = {
    proof: 'proof'
} as const;
export type ProofTypeTypeEnum = typeof ProofTypeTypeEnum[keyof typeof ProofTypeTypeEnum];


/**
 * Check if a given object implements the ProofType interface.
 */
export function instanceOfProofType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "proof" in value;

    return isInstance;
}

export function ProofTypeFromJSON(json: any): ProofType {
    return ProofTypeFromJSONTyped(json, false);
}

export function ProofTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProofType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'proof': json['proof'],
    };
}

export function ProofTypeToJSON(value?: ProofType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'proof': value.proof,
    };
}

