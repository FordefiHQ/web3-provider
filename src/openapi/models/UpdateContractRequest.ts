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
import type { EvmAddressRequest } from './EvmAddressRequest';
import {
    EvmAddressRequestFromJSON,
    EvmAddressRequestFromJSONTyped,
    EvmAddressRequestToJSON,
    EvmAddressRequestToJSONTyped,
} from './EvmAddressRequest';

/**
 * 
 * @export
 * @interface UpdateContractRequest
 */
export interface UpdateContractRequest {
    /**
     * 
     * @type {EvmAddressRequest}
     * @memberof UpdateContractRequest
     */
    contract: EvmAddressRequest;
    /**
     * 
     * @type {string}
     * @memberof UpdateContractRequest
     */
    dappName?: string;
}

/**
 * Check if a given object implements the UpdateContractRequest interface.
 */
export function instanceOfUpdateContractRequest(value: object): value is UpdateContractRequest {
    if (!('contract' in value) || value['contract'] === undefined) return false;
    return true;
}

export function UpdateContractRequestFromJSON(json: any): UpdateContractRequest {
    return UpdateContractRequestFromJSONTyped(json, false);
}

export function UpdateContractRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateContractRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'contract': EvmAddressRequestFromJSON(json['contract']),
        'dappName': json['dapp_name'] == null ? undefined : json['dapp_name'],
    };
}

export function UpdateContractRequestToJSON(json: any): UpdateContractRequest {
    return UpdateContractRequestToJSONTyped(json, false);
}

export function UpdateContractRequestToJSONTyped(value?: UpdateContractRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'contract': EvmAddressRequestToJSON(value['contract']),
        'dapp_name': value['dappName'],
    };
}

