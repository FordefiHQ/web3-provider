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

import type { JitoCustomFeeRequest } from './JitoCustomFeeRequest';
import {
    JitoCustomFeeRequestToJSON,
} from './JitoCustomFeeRequest';
import type { JitoPriorityFeeRequest } from './JitoPriorityFeeRequest';
import {
    JitoPriorityFeeRequestToJSON,
} from './JitoPriorityFeeRequest';

/**
 * 
 * @export
 * @type SolanaJitoFeeTypeRequestDetails
 */
export type SolanaJitoFeeTypeRequestDetails = { type: 'custom' } & JitoCustomFeeRequest | { type: 'priority' } & JitoPriorityFeeRequest;

export function SolanaJitoFeeTypeRequestDetailsToJSON(json: any): any {
    return SolanaJitoFeeTypeRequestDetailsToJSONTyped(json, false);
}

function SolanaJitoFeeTypeRequestDetailsToJSONTyped(value?: SolanaJitoFeeTypeRequestDetails | null, _ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'custom':
            return Object.assign({}, JitoCustomFeeRequestToJSON(value), { type: 'custom' } as const);
        case 'priority':
            return Object.assign({}, JitoPriorityFeeRequestToJSON(value), { type: 'priority' } as const);
        default:
            throw new Error(`No variant of SolanaJitoFeeTypeRequestDetails exists with 'type=${value['type']}'`);
    }

}

