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
import type { Proof } from './Proof';
import {
    ProofFromJSON,
    ProofFromJSONTyped,
    ProofToJSON,
    ProofToJSONTyped,
} from './Proof';

/**
 * 
 * @export
 * @interface KeygenValidityProofs
 */
export interface KeygenValidityProofs {
    /**
     * 
     * @type {Proof}
     * @memberof KeygenValidityProofs
     */
    paillierBlumProof: Proof;
}

/**
 * Check if a given object implements the KeygenValidityProofs interface.
 */
export function instanceOfKeygenValidityProofs(value: object): value is KeygenValidityProofs {
    if (!('paillierBlumProof' in value) || value['paillierBlumProof'] === undefined) return false;
    return true;
}

export function KeygenValidityProofsFromJSON(json: any): KeygenValidityProofs {
    return KeygenValidityProofsFromJSONTyped(json, false);
}

export function KeygenValidityProofsFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeygenValidityProofs {
    if (json == null) {
        return json;
    }
    return {
        
        'paillierBlumProof': ProofFromJSON(json['paillier_blum_proof']),
    };
}

export function KeygenValidityProofsToJSON(json: any): KeygenValidityProofs {
    return KeygenValidityProofsToJSONTyped(json, false);
}

export function KeygenValidityProofsToJSONTyped(value?: KeygenValidityProofs | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'paillier_blum_proof': ProofToJSON(value['paillierBlumProof']),
    };
}

