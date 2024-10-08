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

import {
    AddEvmChainRequest,
    instanceOfAddEvmChainRequest,
    AddEvmChainRequestFromJSON,
    AddEvmChainRequestFromJSONTyped,
    AddEvmChainRequestToJSON,
} from './AddEvmChainRequest';

/**
 * @type AddChainRequest
 * 
 * @export
 */
export type AddChainRequest = { chainType: 'evm' } & AddEvmChainRequest;

export function AddChainRequestFromJSON(json: any): AddChainRequest {
    return AddChainRequestFromJSONTyped(json, false);
}

export function AddChainRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddChainRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['chain_type']) {
        case 'evm':
            return {...AddEvmChainRequestFromJSONTyped(json, true), chainType: 'evm'};
        default:
            throw new Error(`No variant of AddChainRequest exists with 'chainType=${json['chainType']}'`);
    }
}

export function AddChainRequestToJSON(value?: AddChainRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['chainType']) {
        case 'evm':
            return AddEvmChainRequestToJSON(value);
        default:
            throw new Error(`No variant of AddChainRequest exists with 'chainType=${value['chainType']}'`);
    }

}

