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
 * @interface NextApiSignerTransactionRequestV3
 */
export interface NextApiSignerTransactionRequestV3 {
    /**
     * 
     * @type {string}
     * @memberof NextApiSignerTransactionRequestV3
     */
    protocolVersion: string;
    /**
     * 
     * @type {string}
     * @memberof NextApiSignerTransactionRequestV3
     */
    sessionSeed?: string;
}

/**
 * Check if a given object implements the NextApiSignerTransactionRequestV3 interface.
 */
export function instanceOfNextApiSignerTransactionRequestV3(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "protocolVersion" in value;

    return isInstance;
}

export function NextApiSignerTransactionRequestV3FromJSON(json: any): NextApiSignerTransactionRequestV3 {
    return NextApiSignerTransactionRequestV3FromJSONTyped(json, false);
}

export function NextApiSignerTransactionRequestV3FromJSONTyped(json: any, ignoreDiscriminator: boolean): NextApiSignerTransactionRequestV3 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'protocolVersion': json['protocol_version'],
        'sessionSeed': !exists(json, 'session_seed') ? undefined : json['session_seed'],
    };
}

export function NextApiSignerTransactionRequestV3ToJSON(value?: NextApiSignerTransactionRequestV3 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'protocol_version': value.protocolVersion,
        'session_seed': value.sessionSeed,
    };
}

