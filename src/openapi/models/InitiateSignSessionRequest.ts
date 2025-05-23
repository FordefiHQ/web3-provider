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
import type { MpcMessage } from './MpcMessage';
import {
    MpcMessageFromJSON,
    MpcMessageFromJSONTyped,
    MpcMessageToJSON,
    MpcMessageToJSONTyped,
} from './MpcMessage';

/**
 * 
 * @export
 * @interface InitiateSignSessionRequest
 */
export interface InitiateSignSessionRequest {
    /**
     * 
     * @type {string}
     * @memberof InitiateSignSessionRequest
     */
    signature?: string;
    /**
     * 
     * @type {string}
     * @memberof InitiateSignSessionRequest
     */
    mpcSetupId?: string;
    /**
     * 
     * @type {MpcMessage}
     * @memberof InitiateSignSessionRequest
     */
    firstMpcProtocolMessage?: MpcMessage;
}

/**
 * Check if a given object implements the InitiateSignSessionRequest interface.
 */
export function instanceOfInitiateSignSessionRequest(value: object): value is InitiateSignSessionRequest {
    return true;
}

export function InitiateSignSessionRequestFromJSON(json: any): InitiateSignSessionRequest {
    return InitiateSignSessionRequestFromJSONTyped(json, false);
}

export function InitiateSignSessionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InitiateSignSessionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'signature': json['signature'] == null ? undefined : json['signature'],
        'mpcSetupId': json['mpc_setup_id'] == null ? undefined : json['mpc_setup_id'],
        'firstMpcProtocolMessage': json['first_mpc_protocol_message'] == null ? undefined : MpcMessageFromJSON(json['first_mpc_protocol_message']),
    };
}

export function InitiateSignSessionRequestToJSON(json: any): InitiateSignSessionRequest {
    return InitiateSignSessionRequestToJSONTyped(json, false);
}

export function InitiateSignSessionRequestToJSONTyped(value?: InitiateSignSessionRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'signature': value['signature'],
        'mpc_setup_id': value['mpcSetupId'],
        'first_mpc_protocol_message': MpcMessageToJSON(value['firstMpcProtocolMessage']),
    };
}

