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
import type { PsbtInputSignerIdentity } from './PsbtInputSignerIdentity';
import {
    PsbtInputSignerIdentityFromJSON,
    PsbtInputSignerIdentityFromJSONTyped,
    PsbtInputSignerIdentityToJSON,
} from './PsbtInputSignerIdentity';

/**
 * 
 * @export
 * @interface PsbtInput
 */
export interface PsbtInput {
    /**
     * 
     * @type {number}
     * @memberof PsbtInput
     */
    index: number;
    /**
     * 
     * @type {PsbtInputSignerIdentity}
     * @memberof PsbtInput
     */
    signerIdentity: PsbtInputSignerIdentity;
    /**
     * 
     * @type {Array<number>}
     * @memberof PsbtInput
     */
    sighashTypes?: Array<number>;
    /**
     * 
     * @type {boolean}
     * @memberof PsbtInput
     */
    disableTweakSigner?: boolean;
}

/**
 * Check if a given object implements the PsbtInput interface.
 */
export function instanceOfPsbtInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "index" in value;
    isInstance = isInstance && "signerIdentity" in value;

    return isInstance;
}

export function PsbtInputFromJSON(json: any): PsbtInput {
    return PsbtInputFromJSONTyped(json, false);
}

export function PsbtInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): PsbtInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'index': json['index'],
        'signerIdentity': PsbtInputSignerIdentityFromJSON(json['signer_identity']),
        'sighashTypes': !exists(json, 'sighash_types') ? undefined : json['sighash_types'],
        'disableTweakSigner': !exists(json, 'disable_tweak_signer') ? undefined : json['disable_tweak_signer'],
    };
}

export function PsbtInputToJSON(value?: PsbtInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'index': value.index,
        'signer_identity': PsbtInputSignerIdentityToJSON(value.signerIdentity),
        'sighash_types': value.sighashTypes,
        'disable_tweak_signer': value.disableTweakSigner,
    };
}

