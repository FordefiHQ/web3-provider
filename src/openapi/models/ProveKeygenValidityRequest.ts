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
import type { KeygenValidityProofs } from './KeygenValidityProofs';
import {
    KeygenValidityProofsFromJSON,
    KeygenValidityProofsFromJSONTyped,
    KeygenValidityProofsToJSON,
} from './KeygenValidityProofs';

/**
 * 
 * @export
 * @interface ProveKeygenValidityRequest
 */
export interface ProveKeygenValidityRequest {
    /**
     * 
     * @type {KeygenValidityProofs}
     * @memberof ProveKeygenValidityRequest
     */
    ecdsaProofs?: KeygenValidityProofs;
    /**
     * 
     * @type {KeygenValidityProofs}
     * @memberof ProveKeygenValidityRequest
     */
    ecdsaStarkProofs?: KeygenValidityProofs;
}

/**
 * Check if a given object implements the ProveKeygenValidityRequest interface.
 */
export function instanceOfProveKeygenValidityRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProveKeygenValidityRequestFromJSON(json: any): ProveKeygenValidityRequest {
    return ProveKeygenValidityRequestFromJSONTyped(json, false);
}

export function ProveKeygenValidityRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProveKeygenValidityRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ecdsaProofs': !exists(json, 'ecdsa_proofs') ? undefined : KeygenValidityProofsFromJSON(json['ecdsa_proofs']),
        'ecdsaStarkProofs': !exists(json, 'ecdsa_stark_proofs') ? undefined : KeygenValidityProofsFromJSON(json['ecdsa_stark_proofs']),
    };
}

export function ProveKeygenValidityRequestToJSON(value?: ProveKeygenValidityRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ecdsa_proofs': KeygenValidityProofsToJSON(value.ecdsaProofs),
        'ecdsa_stark_proofs': KeygenValidityProofsToJSON(value.ecdsaStarkProofs),
    };
}

