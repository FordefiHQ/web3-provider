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
import type { KeyType } from './KeyType';
import {
    KeyTypeFromJSON,
    KeyTypeFromJSONTyped,
    KeyTypeToJSON,
} from './KeyType';
import type { MpcMessage } from './MpcMessage';
import {
    MpcMessageFromJSON,
    MpcMessageFromJSONTyped,
    MpcMessageToJSON,
} from './MpcMessage';

/**
 * 
 * @export
 * @interface RegisterMpcSetupSessionRequest
 */
export interface RegisterMpcSetupSessionRequest {
    /**
     * 
     * @type {KeyType}
     * @memberof RegisterMpcSetupSessionRequest
     */
    keyType: KeyType;
    /**
     * 
     * @type {string}
     * @memberof RegisterMpcSetupSessionRequest
     */
    keysetId?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterMpcSetupSessionRequest
     */
    protocolVersion: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterMpcSetupSessionRequest
     */
    signature?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterMpcSetupSessionRequest
     */
    sessionSeed: string;
    /**
     * 
     * @type {MpcMessage}
     * @memberof RegisterMpcSetupSessionRequest
     */
    firstMpcProtocolMessage: MpcMessage;
}

/**
 * Check if a given object implements the RegisterMpcSetupSessionRequest interface.
 */
export function instanceOfRegisterMpcSetupSessionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "keyType" in value;
    isInstance = isInstance && "protocolVersion" in value;
    isInstance = isInstance && "sessionSeed" in value;
    isInstance = isInstance && "firstMpcProtocolMessage" in value;

    return isInstance;
}

export function RegisterMpcSetupSessionRequestFromJSON(json: any): RegisterMpcSetupSessionRequest {
    return RegisterMpcSetupSessionRequestFromJSONTyped(json, false);
}

export function RegisterMpcSetupSessionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterMpcSetupSessionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'keyType': KeyTypeFromJSON(json['key_type']),
        'keysetId': !exists(json, 'keyset_id') ? undefined : json['keyset_id'],
        'protocolVersion': json['protocol_version'],
        'signature': !exists(json, 'signature') ? undefined : json['signature'],
        'sessionSeed': json['session_seed'],
        'firstMpcProtocolMessage': MpcMessageFromJSON(json['first_mpc_protocol_message']),
    };
}

export function RegisterMpcSetupSessionRequestToJSON(value?: RegisterMpcSetupSessionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key_type': KeyTypeToJSON(value.keyType),
        'keyset_id': value.keysetId,
        'protocol_version': value.protocolVersion,
        'signature': value.signature,
        'session_seed': value.sessionSeed,
        'first_mpc_protocol_message': MpcMessageToJSON(value.firstMpcProtocolMessage),
    };
}

